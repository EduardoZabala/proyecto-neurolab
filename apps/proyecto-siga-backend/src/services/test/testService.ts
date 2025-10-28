import { injectable, inject } from "tsyringe";
import { 
  ITestService, 
  CreateTestInput, 
  UpdateTestInput, 
  //TestWithDetails, 
  //TestFilters,
  Test
} from "../../contracts/test/ItestService";
import prisma from "@packages/libs/prisma";
import { BadRequest, NotFound } from "../../utils/httpError";
import type { ITestRepo } from "../../contracts/test/ItestRepo";
//import type { IUserRepo } from "../../contracts/user/IuserRepo";

@injectable()
export class TestService implements ITestService {
  constructor(
    @inject("TestRepo") private readonly testRepo: ITestRepo,
    //@inject("UserRepo") private readonly userRepo: IUserRepo  
  ) {}

  async getTests(): Promise<Test[]> {
    return this.testRepo.findMany() as Promise<Test[]>;
  }

  async getTestById(id: string): Promise<Test | null> {
    return this.testRepo.findById(id) as Promise<Test | null>;
  }

  async getTestByCode(code: string): Promise<Test | null> {
    return this.testRepo.findByCode(code) as Promise<Test | null>;
  }

 
  async createTest(input: CreateTestInput): Promise<Test> {
    return prisma.$transaction(async (tx) => {
      const codeExists = await this.checkTestCodeExists(input.testCode);
      // const userExists = await this.userRepo.findById() !!Validar exitencia del suerNumber!!
      if (codeExists) {
        throw BadRequest("The test code is already in use.");
      }
      
      const test = await this.testRepo.create(
        {
          title: input.title,
          description: input.description,
          testCode: input.testCode,
          isPublished: false,
          ...(input.createdByNumber && {createdBy: {
            connect: { userNumber: input.createdByNumber }
          }})
        }
      )
      return test as Test;
    });
  }

  async updateTest(testId: string, input: UpdateTestInput): Promise<Test> {
    const existingTest = await this.checkTestIdExists(testId);
    if (!existingTest) {
      throw NotFound("Test not found");
    }

    const updateTest = await this.testRepo.update(testId, {
      title: input.title,
      testCode: input.testCode,
      description: input.description,
      isPublished: input.isPublished,
    });
    return updateTest as Test;
  }

  async deleteTest(testId: string): Promise<void> {
    const existingTest = await this.checkTestIdExists(testId);
    if (!existingTest) {
      throw NotFound("Test not found");
    }

    //!!Verificar si el test tiene asignaciones
    // if (assignmentCount > 0) {
    //   throw BadRequest("No se puede eliminar un test con asignaciones activas");
    // }

    await this.testRepo.delete(testId);
  }

  async publishTest(testId: string): Promise<Test> {
    const existingTest = await this.checkTestIdExists(testId);
    
    if (!existingTest) {
      throw NotFound("Test not found");
    }

    // Verificar que el test tenga al menos una sección con preguntas
    // const sectionCount = await prisma.testSection.count({
    //   where: { testId },
    // });

    // if (sectionCount === 0) {
    //   throw BadRequest("El test debe tener al menos una sección para publicarse");
    // }

    // const questionCount = await prisma.question.count({
    //   where: { testId },
    // });

    // if (questionCount === 0) {
    //   throw BadRequest("El test debe tener al menos una pregunta para publicarse");
    // }

    const publishedTest= await this.testRepo.update(testId, { isPublished: true });
    return publishedTest as Test;
  }

  async unpublishTest(testId: string): Promise<Test> {
    const existingTest = await this.checkTestIdExists(testId);
    if (!existingTest) {
      throw NotFound("Test not found");
    }

    const unpublishedTest= await this.testRepo.update(testId, { isPublished: false });
    return unpublishedTest as Test;
  }

   private async checkTestCodeExists(code: string): Promise<boolean> {
    const existingTestCode = await this.testRepo.findByCode(code);
    if (existingTestCode) return true;
    return false;
  }

  private async checkTestIdExists(id: string): Promise<boolean> {
    const existingTestId = await this.testRepo.findById(id);
    if (existingTestId) return true;
    return false;
  }
}