import { auth, asAdminOrPsychologist } from "../middleware/auth";
import container from "../container/index";
import { CommonDtos } from "../shared/validators";
import { Router } from "express";
import { wrap } from "../middleware/async";
import { ok } from "../utils/jsonResponse";
import { ITestService } from "../contracts/test/itestService";
import { z } from "zod";
import { NotFound } from "../utils/httpError";
import { created } from "../utils/jsonResponse";

// Private Routes

export const TestsController = Router();
const testService = container.resolve<ITestService>("TestService");

TestsController.use(auth, asAdminOrPsychologist);

// DTOs
const CreateTestDto = z.object({
  testCode: z.string().min(1).trim(),
  title: z.string().min(1).trim(),
  description: z.string().optional(),
  createdByNumber: z.string().min(1).trim(),
});

const UpdateTestDto = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  isPublished: z.boolean().optional(),
  testCode: z.string().min(1).trim().optional(),
});

// CRUD de Tests


TestsController.get(
  "/",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {

    const tests = await testService.getTests();
    return ok(res, tests, "Listado de tests");
  })
);

// GET /api/tests/:id - Obtener test por ID
TestsController.get(
  "/:id",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const { id } = CommonDtos.IdParam.parse(req.params);
    const test = await testService.getTestById(id);
    
    if (!test) {
      throw NotFound("Test not found");
    }
    
    return ok(res, test, "Test detail");
  })
);

// POST /api/tests - Crear nuevo test
TestsController.post(
  "/",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const input = CreateTestDto.parse(req.body);
    
    const test = await testService.createTest({
      testCode: input.testCode,
      title: input.title,
      description: input.description,
      isPublished: false,
      createdByNumber: input.createdByNumber,
    });
    
    return created(res, test, "Test creado con éxito");
  })
);

// PATCH /api/tests/:id - Actualizar test
TestsController.patch(
  "/:id",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const { id } = CommonDtos.IdParam.parse(req.params);
    const input = UpdateTestDto.parse(req.body);
    
    const test = await testService.updateTest(id, input);
    return ok(res, test, "Test updated successfully");
  })
);

// DELETE /api/tests/:id - Eliminar test
TestsController.delete(
  "/:id",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const { id } = CommonDtos.IdParam.parse(req.params);
    await testService.deleteTest(id);
    return ok(res, null, "Test deleted successfully");
  })
);

// POST /api/tests/:id/publish - Publicar test
TestsController.post(
  "/:id/publish",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const { id } = CommonDtos.IdParam.parse(req.params);
    const test = await testService.publishTest(id);
    return ok(res, test, "Test published successfully");
  })
);

// POST /api/tests/:id/unpublish - Despublicar test
TestsController.post(
  "/:id/unpublish",
  auth,
  asAdminOrPsychologist,
  wrap(async (req: any, res) => {
    const { id } = CommonDtos.IdParam.parse(req.params);
    const test = await testService.unpublishTest(id);
    return ok(res, test, "Test unpublished successfully");
  })
);

// ============================================================================
// Rutas Públicas - No requieren autenticación
// ============================================================================
// export const PublicTestsController = Router();

// // GET /api/public/tests - Listar tests publicados
// PublicTestsController.get(
//   "/",
//   wrap(async (req, res) => {
//     const tests = await testService.getTests({ isPublished: true });
//     return ok(res, tests, "Tests publicados");
//   })
// );

// // GET /api/public/tests/code/:code - Obtener test por código
// PublicTestsController.get(
//   "/code/:code",
//   wrap(async (req, res) => {
//     const { code } = z.object({ code: z.string() }).parse(req.params);
//     const test = await testService.getTestByCode(code);
    
//     if (!test || !test.isPublished) {
//       throw NotFound("Test no encontrado o no disponible");
//     }
    
//     return ok(res, test, "Detalle del test");
//   })
//);

export default TestsController;