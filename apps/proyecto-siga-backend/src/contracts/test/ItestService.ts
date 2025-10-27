export interface Test{
    testId: string;
    testCode: string;
    title: string;
    description?: string;
    isPublished: boolean;
    createdAt: Date;
    createdByNumber?: string;

}


// export interface TestWithDetails extends test {
//   sections: (testSection & {
//     questions: (question & {
//       options: {
//         questionOptionId: string;
//         optionText: string;
//         order: number;
//         score?: number | null;
//       }[];
//     })[];
//   })[];
//   createdBy?: {
//     userId: string;
//     userNumber: string;
//     email: string;
//     name: string;
//   } | null;
// }

export interface CreateTestInput {
  testCode: string;
  title: string;
  description?: string;
  isPublished: boolean;
  createdByNumber: string;
}

export interface UpdateTestInput {
  testCode?: string;
  title?: string;
  description?: string;
  isPublished?: boolean;
}

export interface TestFilters {
  isPublished?: boolean;
  createdByNumber?: string;
}

export interface ITestService {
  getTests(): Promise<Test[]>;
  getTestById(id: string): Promise<Test | null>;
  getTestByCode(id: string): Promise<Test | null>;
 //getTests(filters?: TestFilters): Promise<Test[]>;
 //getTestById(testId: string): Promise<TestWithDetails | null>;
 //getTestByCode(testCode: string): Promise<TestWithDetails | null>;
  createTest(input: CreateTestInput): Promise<Test>;
  updateTest(id: string, input: UpdateTestInput): Promise<Test>;
  deleteTest(id: string): Promise<void>;
  publishTest(id: string): Promise<Test>;
  unpublishTest(id: string): Promise<Test>;
}