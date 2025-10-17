
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model test
 * 
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>
/**
 * Model testSection
 * 
 */
export type testSection = $Result.DefaultSelection<Prisma.$testSectionPayload>
/**
 * Model question
 * 
 */
export type question = $Result.DefaultSelection<Prisma.$questionPayload>
/**
 * Model questionOption
 * 
 */
export type questionOption = $Result.DefaultSelection<Prisma.$questionOptionPayload>
/**
 * Model assignment
 * 
 */
export type assignment = $Result.DefaultSelection<Prisma.$assignmentPayload>
/**
 * Model answer
 * 
 */
export type answer = $Result.DefaultSelection<Prisma.$answerPayload>
/**
 * Model assignmentScore
 * 
 */
export type assignmentScore = $Result.DefaultSelection<Prisma.$assignmentScorePayload>
/**
 * Model refreshToken
 * 
 */
export type refreshToken = $Result.DefaultSelection<Prisma.$refreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userRole: {
  admin: 'admin',
  psychologist: 'psychologist',
  user: 'user'
};

export type userRole = (typeof userRole)[keyof typeof userRole]


export const assignmentStatus: {
  assigned: 'assigned',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type assignmentStatus = (typeof assignmentStatus)[keyof typeof assignmentStatus]

}

export type userRole = $Enums.userRole

export const userRole: typeof $Enums.userRole

export type assignmentStatus = $Enums.assignmentStatus

export const assignmentStatus: typeof $Enums.assignmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testSection`: Exposes CRUD operations for the **testSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestSections
    * const testSections = await prisma.testSection.findMany()
    * ```
    */
  get testSection(): Prisma.testSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.questionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionOption`: Exposes CRUD operations for the **questionOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionOptions
    * const questionOptions = await prisma.questionOption.findMany()
    * ```
    */
  get questionOption(): Prisma.questionOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.assignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.answerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentScore`: Exposes CRUD operations for the **assignmentScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentScores
    * const assignmentScores = await prisma.assignmentScore.findMany()
    * ```
    */
  get assignmentScore(): Prisma.assignmentScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **refreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.refreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    test: 'test',
    testSection: 'testSection',
    question: 'question',
    questionOption: 'questionOption',
    assignment: 'assignment',
    answer: 'answer',
    assignmentScore: 'assignmentScore',
    refreshToken: 'refreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "test" | "testSection" | "question" | "questionOption" | "assignment" | "answer" | "assignmentScore" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      test: {
        payload: Prisma.$testPayload<ExtArgs>
        fields: Prisma.testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          create: {
            args: Prisma.testCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          createMany: {
            args: Prisma.testCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          upsert: {
            args: Prisma.testUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.testCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      testSection: {
        payload: Prisma.$testSectionPayload<ExtArgs>
        fields: Prisma.testSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          findFirst: {
            args: Prisma.testSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          findMany: {
            args: Prisma.testSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>[]
          }
          create: {
            args: Prisma.testSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          createMany: {
            args: Prisma.testSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>[]
          }
          delete: {
            args: Prisma.testSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          update: {
            args: Prisma.testSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          deleteMany: {
            args: Prisma.testSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>[]
          }
          upsert: {
            args: Prisma.testSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testSectionPayload>
          }
          aggregate: {
            args: Prisma.TestSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestSection>
          }
          groupBy: {
            args: Prisma.testSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.testSectionCountArgs<ExtArgs>
            result: $Utils.Optional<TestSectionCountAggregateOutputType> | number
          }
        }
      }
      question: {
        payload: Prisma.$questionPayload<ExtArgs>
        fields: Prisma.questionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findFirst: {
            args: Prisma.questionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findMany: {
            args: Prisma.questionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>[]
          }
          create: {
            args: Prisma.questionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          createMany: {
            args: Prisma.questionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>[]
          }
          delete: {
            args: Prisma.questionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          update: {
            args: Prisma.questionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          deleteMany: {
            args: Prisma.questionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>[]
          }
          upsert: {
            args: Prisma.questionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.questionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      questionOption: {
        payload: Prisma.$questionOptionPayload<ExtArgs>
        fields: Prisma.questionOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          findFirst: {
            args: Prisma.questionOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          findMany: {
            args: Prisma.questionOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>[]
          }
          create: {
            args: Prisma.questionOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          createMany: {
            args: Prisma.questionOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>[]
          }
          delete: {
            args: Prisma.questionOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          update: {
            args: Prisma.questionOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          deleteMany: {
            args: Prisma.questionOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>[]
          }
          upsert: {
            args: Prisma.questionOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionOptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionOption>
          }
          groupBy: {
            args: Prisma.questionOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionCountAggregateOutputType> | number
          }
        }
      }
      assignment: {
        payload: Prisma.$assignmentPayload<ExtArgs>
        fields: Prisma.assignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          findFirst: {
            args: Prisma.assignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          findMany: {
            args: Prisma.assignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[]
          }
          create: {
            args: Prisma.assignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          createMany: {
            args: Prisma.assignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.assignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[]
          }
          delete: {
            args: Prisma.assignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          update: {
            args: Prisma.assignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          deleteMany: {
            args: Prisma.assignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.assignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[]
          }
          upsert: {
            args: Prisma.assignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.assignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.assignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      answer: {
        payload: Prisma.$answerPayload<ExtArgs>
        fields: Prisma.answerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          findFirst: {
            args: Prisma.answerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          findMany: {
            args: Prisma.answerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>[]
          }
          create: {
            args: Prisma.answerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          createMany: {
            args: Prisma.answerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>[]
          }
          delete: {
            args: Prisma.answerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          update: {
            args: Prisma.answerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          deleteMany: {
            args: Prisma.answerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>[]
          }
          upsert: {
            args: Prisma.answerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.answerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.answerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      assignmentScore: {
        payload: Prisma.$assignmentScorePayload<ExtArgs>
        fields: Prisma.assignmentScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assignmentScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assignmentScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          findFirst: {
            args: Prisma.assignmentScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assignmentScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          findMany: {
            args: Prisma.assignmentScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>[]
          }
          create: {
            args: Prisma.assignmentScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          createMany: {
            args: Prisma.assignmentScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.assignmentScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>[]
          }
          delete: {
            args: Prisma.assignmentScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          update: {
            args: Prisma.assignmentScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          deleteMany: {
            args: Prisma.assignmentScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assignmentScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.assignmentScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>[]
          }
          upsert: {
            args: Prisma.assignmentScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentScorePayload>
          }
          aggregate: {
            args: Prisma.AssignmentScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentScore>
          }
          groupBy: {
            args: Prisma.assignmentScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.assignmentScoreCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentScoreCountAggregateOutputType> | number
          }
        }
      }
      refreshToken: {
        payload: Prisma.$refreshTokenPayload<ExtArgs>
        fields: Prisma.refreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          findFirst: {
            args: Prisma.refreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          findMany: {
            args: Prisma.refreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          create: {
            args: Prisma.refreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          createMany: {
            args: Prisma.refreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.refreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          delete: {
            args: Prisma.refreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          update: {
            args: Prisma.refreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.refreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.refreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.refreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.refreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    test?: testOmit
    testSection?: testSectionOmit
    question?: questionOmit
    questionOption?: questionOptionOmit
    assignment?: assignmentOmit
    answer?: answerOmit
    assignmentScore?: assignmentScoreOmit
    refreshToken?: refreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    createdTests: number
    assignmentsTo: number
    assignmentsBy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    createdTests?: boolean | UserCountOutputTypeCountCreatedTestsArgs
    assignmentsTo?: boolean | UserCountOutputTypeCountAssignmentsToArgs
    assignmentsBy?: boolean | UserCountOutputTypeCountAssignmentsByArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    sections: number
    questions: number
    assignments: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | TestCountOutputTypeCountSectionsArgs
    questions?: boolean | TestCountOutputTypeCountQuestionsArgs
    assignments?: boolean | TestCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testSectionWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
  }


  /**
   * Count Type TestSectionCountOutputType
   */

  export type TestSectionCountOutputType = {
    questions: number
  }

  export type TestSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TestSectionCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TestSectionCountOutputType without action
   */
  export type TestSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSectionCountOutputType
     */
    select?: TestSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestSectionCountOutputType without action
   */
  export type TestSectionCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    questionOption: number
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionOption?: boolean | QuestionCountOutputTypeCountQuestionOptionArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionOptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
  }


  /**
   * Count Type QuestionOptionCountOutputType
   */

  export type QuestionOptionCountOutputType = {
    answers: number
  }

  export type QuestionOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionOptionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOptionCountOutputType
     */
    select?: QuestionOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    answers: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AssignmentCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    userNumber: string | null
    email: string | null
    password: string | null
    name: string | null
    gender: string | null
    tokenVersion: number | null
    role: $Enums.userRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    userNumber: string | null
    email: string | null
    password: string | null
    name: string | null
    gender: string | null
    tokenVersion: number | null
    role: $Enums.userRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    userNumber: number
    email: number
    password: number
    name: number
    gender: number
    tokenVersion: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    tokenVersion?: true
  }

  export type UserSumAggregateInputType = {
    tokenVersion?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    userNumber?: true
    email?: true
    password?: true
    name?: true
    gender?: true
    tokenVersion?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    userNumber?: true
    email?: true
    password?: true
    name?: true
    gender?: true
    tokenVersion?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    userNumber?: true
    email?: true
    password?: true
    name?: true
    gender?: true
    tokenVersion?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion: number
    role: $Enums.userRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userNumber?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    gender?: boolean
    tokenVersion?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | user$refreshTokensArgs<ExtArgs>
    createdTests?: boolean | user$createdTestsArgs<ExtArgs>
    assignmentsTo?: boolean | user$assignmentsToArgs<ExtArgs>
    assignmentsBy?: boolean | user$assignmentsByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userNumber?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    gender?: boolean
    tokenVersion?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userNumber?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    gender?: boolean
    tokenVersion?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    userId?: boolean
    userNumber?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    gender?: boolean
    tokenVersion?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userNumber" | "email" | "password" | "name" | "gender" | "tokenVersion" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | user$refreshTokensArgs<ExtArgs>
    createdTests?: boolean | user$createdTestsArgs<ExtArgs>
    assignmentsTo?: boolean | user$assignmentsToArgs<ExtArgs>
    assignmentsBy?: boolean | user$assignmentsByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      refreshTokens: Prisma.$refreshTokenPayload<ExtArgs>[]
      createdTests: Prisma.$testPayload<ExtArgs>[]
      assignmentsTo: Prisma.$assignmentPayload<ExtArgs>[]
      assignmentsBy: Prisma.$assignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      userNumber: string
      email: string
      password: string
      name: string
      gender: string
      tokenVersion: number
      role: $Enums.userRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends user$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, user$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTests<T extends user$createdTestsArgs<ExtArgs> = {}>(args?: Subset<T, user$createdTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignmentsTo<T extends user$assignmentsToArgs<ExtArgs> = {}>(args?: Subset<T, user$assignmentsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignmentsBy<T extends user$assignmentsByArgs<ExtArgs> = {}>(args?: Subset<T, user$assignmentsByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly userId: FieldRef<"user", 'String'>
    readonly userNumber: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly tokenVersion: FieldRef<"user", 'Int'>
    readonly role: FieldRef<"user", 'userRole'>
    readonly isActive: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.refreshTokens
   */
  export type user$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    where?: refreshTokenWhereInput
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    cursor?: refreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * user.createdTests
   */
  export type user$createdTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    where?: testWhereInput
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    cursor?: testWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * user.assignmentsTo
   */
  export type user$assignmentsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    cursor?: assignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * user.assignmentsBy
   */
  export type user$assignmentsByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    cursor?: assignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    testId: string | null
    testCode: string | null
    title: string | null
    description: string | null
    isPublished: boolean | null
    createdByNumber: string | null
    createdAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    testId: string | null
    testCode: string | null
    title: string | null
    description: string | null
    isPublished: boolean | null
    createdByNumber: string | null
    createdAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    testId: number
    testCode: number
    title: number
    description: number
    isPublished: number
    createdByNumber: number
    createdAt: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    testId?: true
    testCode?: true
    title?: true
    description?: true
    isPublished?: true
    createdByNumber?: true
    createdAt?: true
  }

  export type TestMaxAggregateInputType = {
    testId?: true
    testCode?: true
    title?: true
    description?: true
    isPublished?: true
    createdByNumber?: true
    createdAt?: true
  }

  export type TestCountAggregateInputType = {
    testId?: true
    testCode?: true
    title?: true
    description?: true
    isPublished?: true
    createdByNumber?: true
    createdAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    testId: string
    testCode: string | null
    title: string
    description: string | null
    isPublished: boolean
    createdByNumber: string | null
    createdAt: Date
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testId?: boolean
    testCode?: boolean
    title?: boolean
    description?: boolean
    isPublished?: boolean
    createdByNumber?: boolean
    createdAt?: boolean
    createdBy?: boolean | test$createdByArgs<ExtArgs>
    sections?: boolean | test$sectionsArgs<ExtArgs>
    questions?: boolean | test$questionsArgs<ExtArgs>
    assignments?: boolean | test$assignmentsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type testSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testId?: boolean
    testCode?: boolean
    title?: boolean
    description?: boolean
    isPublished?: boolean
    createdByNumber?: boolean
    createdAt?: boolean
    createdBy?: boolean | test$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type testSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testId?: boolean
    testCode?: boolean
    title?: boolean
    description?: boolean
    isPublished?: boolean
    createdByNumber?: boolean
    createdAt?: boolean
    createdBy?: boolean | test$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type testSelectScalar = {
    testId?: boolean
    testCode?: boolean
    title?: boolean
    description?: boolean
    isPublished?: boolean
    createdByNumber?: boolean
    createdAt?: boolean
  }

  export type testOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"testId" | "testCode" | "title" | "description" | "isPublished" | "createdByNumber" | "createdAt", ExtArgs["result"]["test"]>
  export type testInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | test$createdByArgs<ExtArgs>
    sections?: boolean | test$sectionsArgs<ExtArgs>
    questions?: boolean | test$questionsArgs<ExtArgs>
    assignments?: boolean | test$assignmentsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type testIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | test$createdByArgs<ExtArgs>
  }
  export type testIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | test$createdByArgs<ExtArgs>
  }

  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test"
    objects: {
      createdBy: Prisma.$userPayload<ExtArgs> | null
      sections: Prisma.$testSectionPayload<ExtArgs>[]
      questions: Prisma.$questionPayload<ExtArgs>[]
      assignments: Prisma.$assignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      testId: string
      testCode: string | null
      title: string
      description: string | null
      isPublished: boolean
      createdByNumber: string | null
      createdAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<Prisma.$testPayload, S>

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test'], meta: { name: 'test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testFindUniqueArgs>(args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs>(args: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testFindFirstArgs>(args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testFindFirstOrThrowArgs>(args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `testId`
     * const testWithTestIdOnly = await prisma.test.findMany({ select: { testId: true } })
     * 
     */
    findMany<T extends testFindManyArgs>(args?: SelectSubset<T, testFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends testCreateArgs>(args: SelectSubset<T, testCreateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {testCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testCreateManyArgs>(args?: SelectSubset<T, testCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {testCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `testId`
     * const testWithTestIdOnly = await prisma.test.createManyAndReturn({
     *   select: { testId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testCreateManyAndReturnArgs>(args?: SelectSubset<T, testCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends testDeleteArgs>(args: SelectSubset<T, testDeleteArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testUpdateArgs>(args: SelectSubset<T, testUpdateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testDeleteManyArgs>(args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testUpdateManyArgs>(args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {testUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `testId`
     * const testWithTestIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { testId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends testUpdateManyAndReturnArgs>(args: SelectSubset<T, testUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends testUpsertArgs>(args: SelectSubset<T, testUpsertArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test model
   */
  readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends test$createdByArgs<ExtArgs> = {}>(args?: Subset<T, test$createdByArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sections<T extends test$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, test$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends test$questionsArgs<ExtArgs> = {}>(args?: Subset<T, test$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends test$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, test$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the test model
   */
  interface testFieldRefs {
    readonly testId: FieldRef<"test", 'String'>
    readonly testCode: FieldRef<"test", 'String'>
    readonly title: FieldRef<"test", 'String'>
    readonly description: FieldRef<"test", 'String'>
    readonly isPublished: FieldRef<"test", 'Boolean'>
    readonly createdByNumber: FieldRef<"test", 'String'>
    readonly createdAt: FieldRef<"test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test create
   */
  export type testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The data needed to create a test.
     */
    data: XOR<testCreateInput, testUncheckedCreateInput>
  }

  /**
   * test createMany
   */
  export type testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test createManyAndReturn
   */
  export type testCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput
  }

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
    /**
     * Limit how many tests to update.
     */
    limit?: number
  }

  /**
   * test updateManyAndReturn
   */
  export type testUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
    /**
     * Limit how many tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * test upsert
   */
  export type testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * The filter to search for the test to update in case it exists.
     */
    where: testWhereUniqueInput
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     */
    create: XOR<testCreateInput, testUncheckedCreateInput>
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testUpdateInput, testUncheckedUpdateInput>
  }

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput
  }

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput
    /**
     * Limit how many tests to delete.
     */
    limit?: number
  }

  /**
   * test.createdBy
   */
  export type test$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * test.sections
   */
  export type test$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    where?: testSectionWhereInput
    orderBy?: testSectionOrderByWithRelationInput | testSectionOrderByWithRelationInput[]
    cursor?: testSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestSectionScalarFieldEnum | TestSectionScalarFieldEnum[]
  }

  /**
   * test.questions
   */
  export type test$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    where?: questionWhereInput
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    cursor?: questionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * test.assignments
   */
  export type test$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    cursor?: assignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testInclude<ExtArgs> | null
  }


  /**
   * Model testSection
   */

  export type AggregateTestSection = {
    _count: TestSectionCountAggregateOutputType | null
    _min: TestSectionMinAggregateOutputType | null
    _max: TestSectionMaxAggregateOutputType | null
  }

  export type TestSectionMinAggregateOutputType = {
    testSectionId: string | null
    testSectionCode: string | null
    testCode: string | null
    name: string | null
  }

  export type TestSectionMaxAggregateOutputType = {
    testSectionId: string | null
    testSectionCode: string | null
    testCode: string | null
    name: string | null
  }

  export type TestSectionCountAggregateOutputType = {
    testSectionId: number
    testSectionCode: number
    testCode: number
    name: number
    _all: number
  }


  export type TestSectionMinAggregateInputType = {
    testSectionId?: true
    testSectionCode?: true
    testCode?: true
    name?: true
  }

  export type TestSectionMaxAggregateInputType = {
    testSectionId?: true
    testSectionCode?: true
    testCode?: true
    name?: true
  }

  export type TestSectionCountAggregateInputType = {
    testSectionId?: true
    testSectionCode?: true
    testCode?: true
    name?: true
    _all?: true
  }

  export type TestSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testSection to aggregate.
     */
    where?: testSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testSections to fetch.
     */
    orderBy?: testSectionOrderByWithRelationInput | testSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testSections
    **/
    _count?: true | TestSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestSectionMaxAggregateInputType
  }

  export type GetTestSectionAggregateType<T extends TestSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestSection[P]>
      : GetScalarType<T[P], AggregateTestSection[P]>
  }




  export type testSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testSectionWhereInput
    orderBy?: testSectionOrderByWithAggregationInput | testSectionOrderByWithAggregationInput[]
    by: TestSectionScalarFieldEnum[] | TestSectionScalarFieldEnum
    having?: testSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestSectionCountAggregateInputType | true
    _min?: TestSectionMinAggregateInputType
    _max?: TestSectionMaxAggregateInputType
  }

  export type TestSectionGroupByOutputType = {
    testSectionId: string
    testSectionCode: string | null
    testCode: string
    name: string | null
    _count: TestSectionCountAggregateOutputType | null
    _min: TestSectionMinAggregateOutputType | null
    _max: TestSectionMaxAggregateOutputType | null
  }

  type GetTestSectionGroupByPayload<T extends testSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestSectionGroupByOutputType[P]>
            : GetScalarType<T[P], TestSectionGroupByOutputType[P]>
        }
      >
    >


  export type testSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testSectionId?: boolean
    testSectionCode?: boolean
    testCode?: boolean
    name?: boolean
    test?: boolean | testDefaultArgs<ExtArgs>
    questions?: boolean | testSection$questionsArgs<ExtArgs>
    _count?: boolean | TestSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSection"]>

  export type testSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testSectionId?: boolean
    testSectionCode?: boolean
    testCode?: boolean
    name?: boolean
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSection"]>

  export type testSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    testSectionId?: boolean
    testSectionCode?: boolean
    testCode?: boolean
    name?: boolean
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSection"]>

  export type testSectionSelectScalar = {
    testSectionId?: boolean
    testSectionCode?: boolean
    testCode?: boolean
    name?: boolean
  }

  export type testSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"testSectionId" | "testSectionCode" | "testCode" | "name", ExtArgs["result"]["testSection"]>
  export type testSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | testDefaultArgs<ExtArgs>
    questions?: boolean | testSection$questionsArgs<ExtArgs>
    _count?: boolean | TestSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type testSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | testDefaultArgs<ExtArgs>
  }
  export type testSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | testDefaultArgs<ExtArgs>
  }

  export type $testSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testSection"
    objects: {
      test: Prisma.$testPayload<ExtArgs>
      questions: Prisma.$questionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      testSectionId: string
      testSectionCode: string | null
      testCode: string
      name: string | null
    }, ExtArgs["result"]["testSection"]>
    composites: {}
  }

  type testSectionGetPayload<S extends boolean | null | undefined | testSectionDefaultArgs> = $Result.GetResult<Prisma.$testSectionPayload, S>

  type testSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestSectionCountAggregateInputType | true
    }

  export interface testSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testSection'], meta: { name: 'testSection' } }
    /**
     * Find zero or one TestSection that matches the filter.
     * @param {testSectionFindUniqueArgs} args - Arguments to find a TestSection
     * @example
     * // Get one TestSection
     * const testSection = await prisma.testSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testSectionFindUniqueArgs>(args: SelectSubset<T, testSectionFindUniqueArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testSectionFindUniqueOrThrowArgs} args - Arguments to find a TestSection
     * @example
     * // Get one TestSection
     * const testSection = await prisma.testSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, testSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionFindFirstArgs} args - Arguments to find a TestSection
     * @example
     * // Get one TestSection
     * const testSection = await prisma.testSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testSectionFindFirstArgs>(args?: SelectSubset<T, testSectionFindFirstArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionFindFirstOrThrowArgs} args - Arguments to find a TestSection
     * @example
     * // Get one TestSection
     * const testSection = await prisma.testSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, testSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestSections
     * const testSections = await prisma.testSection.findMany()
     * 
     * // Get first 10 TestSections
     * const testSections = await prisma.testSection.findMany({ take: 10 })
     * 
     * // Only select the `testSectionId`
     * const testSectionWithTestSectionIdOnly = await prisma.testSection.findMany({ select: { testSectionId: true } })
     * 
     */
    findMany<T extends testSectionFindManyArgs>(args?: SelectSubset<T, testSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestSection.
     * @param {testSectionCreateArgs} args - Arguments to create a TestSection.
     * @example
     * // Create one TestSection
     * const TestSection = await prisma.testSection.create({
     *   data: {
     *     // ... data to create a TestSection
     *   }
     * })
     * 
     */
    create<T extends testSectionCreateArgs>(args: SelectSubset<T, testSectionCreateArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestSections.
     * @param {testSectionCreateManyArgs} args - Arguments to create many TestSections.
     * @example
     * // Create many TestSections
     * const testSection = await prisma.testSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testSectionCreateManyArgs>(args?: SelectSubset<T, testSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestSections and returns the data saved in the database.
     * @param {testSectionCreateManyAndReturnArgs} args - Arguments to create many TestSections.
     * @example
     * // Create many TestSections
     * const testSection = await prisma.testSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestSections and only return the `testSectionId`
     * const testSectionWithTestSectionIdOnly = await prisma.testSection.createManyAndReturn({
     *   select: { testSectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, testSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestSection.
     * @param {testSectionDeleteArgs} args - Arguments to delete one TestSection.
     * @example
     * // Delete one TestSection
     * const TestSection = await prisma.testSection.delete({
     *   where: {
     *     // ... filter to delete one TestSection
     *   }
     * })
     * 
     */
    delete<T extends testSectionDeleteArgs>(args: SelectSubset<T, testSectionDeleteArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestSection.
     * @param {testSectionUpdateArgs} args - Arguments to update one TestSection.
     * @example
     * // Update one TestSection
     * const testSection = await prisma.testSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testSectionUpdateArgs>(args: SelectSubset<T, testSectionUpdateArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestSections.
     * @param {testSectionDeleteManyArgs} args - Arguments to filter TestSections to delete.
     * @example
     * // Delete a few TestSections
     * const { count } = await prisma.testSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testSectionDeleteManyArgs>(args?: SelectSubset<T, testSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestSections
     * const testSection = await prisma.testSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testSectionUpdateManyArgs>(args: SelectSubset<T, testSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestSections and returns the data updated in the database.
     * @param {testSectionUpdateManyAndReturnArgs} args - Arguments to update many TestSections.
     * @example
     * // Update many TestSections
     * const testSection = await prisma.testSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestSections and only return the `testSectionId`
     * const testSectionWithTestSectionIdOnly = await prisma.testSection.updateManyAndReturn({
     *   select: { testSectionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends testSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, testSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestSection.
     * @param {testSectionUpsertArgs} args - Arguments to update or create a TestSection.
     * @example
     * // Update or create a TestSection
     * const testSection = await prisma.testSection.upsert({
     *   create: {
     *     // ... data to create a TestSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestSection we want to update
     *   }
     * })
     */
    upsert<T extends testSectionUpsertArgs>(args: SelectSubset<T, testSectionUpsertArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionCountArgs} args - Arguments to filter TestSections to count.
     * @example
     * // Count the number of TestSections
     * const count = await prisma.testSection.count({
     *   where: {
     *     // ... the filter for the TestSections we want to count
     *   }
     * })
    **/
    count<T extends testSectionCountArgs>(
      args?: Subset<T, testSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestSectionAggregateArgs>(args: Subset<T, TestSectionAggregateArgs>): Prisma.PrismaPromise<GetTestSectionAggregateType<T>>

    /**
     * Group by TestSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testSectionGroupByArgs['orderBy'] }
        : { orderBy?: testSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testSection model
   */
  readonly fields: testSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends testDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testDefaultArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends testSection$questionsArgs<ExtArgs> = {}>(args?: Subset<T, testSection$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the testSection model
   */
  interface testSectionFieldRefs {
    readonly testSectionId: FieldRef<"testSection", 'String'>
    readonly testSectionCode: FieldRef<"testSection", 'String'>
    readonly testCode: FieldRef<"testSection", 'String'>
    readonly name: FieldRef<"testSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * testSection findUnique
   */
  export type testSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter, which testSection to fetch.
     */
    where: testSectionWhereUniqueInput
  }

  /**
   * testSection findUniqueOrThrow
   */
  export type testSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter, which testSection to fetch.
     */
    where: testSectionWhereUniqueInput
  }

  /**
   * testSection findFirst
   */
  export type testSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter, which testSection to fetch.
     */
    where?: testSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testSections to fetch.
     */
    orderBy?: testSectionOrderByWithRelationInput | testSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testSections.
     */
    cursor?: testSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testSections.
     */
    distinct?: TestSectionScalarFieldEnum | TestSectionScalarFieldEnum[]
  }

  /**
   * testSection findFirstOrThrow
   */
  export type testSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter, which testSection to fetch.
     */
    where?: testSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testSections to fetch.
     */
    orderBy?: testSectionOrderByWithRelationInput | testSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testSections.
     */
    cursor?: testSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testSections.
     */
    distinct?: TestSectionScalarFieldEnum | TestSectionScalarFieldEnum[]
  }

  /**
   * testSection findMany
   */
  export type testSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter, which testSections to fetch.
     */
    where?: testSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testSections to fetch.
     */
    orderBy?: testSectionOrderByWithRelationInput | testSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testSections.
     */
    cursor?: testSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testSections.
     */
    skip?: number
    distinct?: TestSectionScalarFieldEnum | TestSectionScalarFieldEnum[]
  }

  /**
   * testSection create
   */
  export type testSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a testSection.
     */
    data: XOR<testSectionCreateInput, testSectionUncheckedCreateInput>
  }

  /**
   * testSection createMany
   */
  export type testSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testSections.
     */
    data: testSectionCreateManyInput | testSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testSection createManyAndReturn
   */
  export type testSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * The data used to create many testSections.
     */
    data: testSectionCreateManyInput | testSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * testSection update
   */
  export type testSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a testSection.
     */
    data: XOR<testSectionUpdateInput, testSectionUncheckedUpdateInput>
    /**
     * Choose, which testSection to update.
     */
    where: testSectionWhereUniqueInput
  }

  /**
   * testSection updateMany
   */
  export type testSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testSections.
     */
    data: XOR<testSectionUpdateManyMutationInput, testSectionUncheckedUpdateManyInput>
    /**
     * Filter which testSections to update
     */
    where?: testSectionWhereInput
    /**
     * Limit how many testSections to update.
     */
    limit?: number
  }

  /**
   * testSection updateManyAndReturn
   */
  export type testSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * The data used to update testSections.
     */
    data: XOR<testSectionUpdateManyMutationInput, testSectionUncheckedUpdateManyInput>
    /**
     * Filter which testSections to update
     */
    where?: testSectionWhereInput
    /**
     * Limit how many testSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * testSection upsert
   */
  export type testSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the testSection to update in case it exists.
     */
    where: testSectionWhereUniqueInput
    /**
     * In case the testSection found by the `where` argument doesn't exist, create a new testSection with this data.
     */
    create: XOR<testSectionCreateInput, testSectionUncheckedCreateInput>
    /**
     * In case the testSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testSectionUpdateInput, testSectionUncheckedUpdateInput>
  }

  /**
   * testSection delete
   */
  export type testSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    /**
     * Filter which testSection to delete.
     */
    where: testSectionWhereUniqueInput
  }

  /**
   * testSection deleteMany
   */
  export type testSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testSections to delete
     */
    where?: testSectionWhereInput
    /**
     * Limit how many testSections to delete.
     */
    limit?: number
  }

  /**
   * testSection.questions
   */
  export type testSection$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    where?: questionWhereInput
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    cursor?: questionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * testSection without action
   */
  export type testSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
  }


  /**
   * Model question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    questionId: string | null
    testCode: string | null
    testSectionId: string | null
    code: string | null
    prompt: string | null
    required: boolean | null
  }

  export type QuestionMaxAggregateOutputType = {
    questionId: string | null
    testCode: string | null
    testSectionId: string | null
    code: string | null
    prompt: string | null
    required: boolean | null
  }

  export type QuestionCountAggregateOutputType = {
    questionId: number
    testCode: number
    testSectionId: number
    code: number
    prompt: number
    required: number
    metadata: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    questionId?: true
    testCode?: true
    testSectionId?: true
    code?: true
    prompt?: true
    required?: true
  }

  export type QuestionMaxAggregateInputType = {
    questionId?: true
    testCode?: true
    testSectionId?: true
    code?: true
    prompt?: true
    required?: true
  }

  export type QuestionCountAggregateInputType = {
    questionId?: true
    testCode?: true
    testSectionId?: true
    code?: true
    prompt?: true
    required?: true
    metadata?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question to aggregate.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type questionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
    orderBy?: questionOrderByWithAggregationInput | questionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: questionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    questionId: string
    testCode: string
    testSectionId: string | null
    code: string | null
    prompt: string
    required: boolean
    metadata: JsonValue | null
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends questionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type questionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    testCode?: boolean
    testSectionId?: boolean
    code?: boolean
    prompt?: boolean
    required?: boolean
    metadata?: boolean
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
    questionOption?: boolean | question$questionOptionArgs<ExtArgs>
    answers?: boolean | question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type questionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    testCode?: boolean
    testSectionId?: boolean
    code?: boolean
    prompt?: boolean
    required?: boolean
    metadata?: boolean
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type questionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    testCode?: boolean
    testSectionId?: boolean
    code?: boolean
    prompt?: boolean
    required?: boolean
    metadata?: boolean
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type questionSelectScalar = {
    questionId?: boolean
    testCode?: boolean
    testSectionId?: boolean
    code?: boolean
    prompt?: boolean
    required?: boolean
    metadata?: boolean
  }

  export type questionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionId" | "testCode" | "testSectionId" | "code" | "prompt" | "required" | "metadata", ExtArgs["result"]["question"]>
  export type questionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
    questionOption?: boolean | question$questionOptionArgs<ExtArgs>
    answers?: boolean | question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }
  export type questionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | question$sectionArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }

  export type $questionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question"
    objects: {
      section: Prisma.$testSectionPayload<ExtArgs> | null
      test: Prisma.$testPayload<ExtArgs>
      questionOption: Prisma.$questionOptionPayload<ExtArgs>[]
      answers: Prisma.$answerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      questionId: string
      testCode: string
      testSectionId: string | null
      code: string | null
      prompt: string
      required: boolean
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type questionGetPayload<S extends boolean | null | undefined | questionDefaultArgs> = $Result.GetResult<Prisma.$questionPayload, S>

  type questionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface questionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question'], meta: { name: 'question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {questionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionFindUniqueArgs>(args: SelectSubset<T, questionFindUniqueArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionFindUniqueOrThrowArgs>(args: SelectSubset<T, questionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionFindFirstArgs>(args?: SelectSubset<T, questionFindFirstArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionFindFirstOrThrowArgs>(args?: SelectSubset<T, questionFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const questionWithQuestionIdOnly = await prisma.question.findMany({ select: { questionId: true } })
     * 
     */
    findMany<T extends questionFindManyArgs>(args?: SelectSubset<T, questionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {questionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends questionCreateArgs>(args: SelectSubset<T, questionCreateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionCreateManyArgs>(args?: SelectSubset<T, questionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {questionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `questionId`
     * const questionWithQuestionIdOnly = await prisma.question.createManyAndReturn({
     *   select: { questionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionCreateManyAndReturnArgs>(args?: SelectSubset<T, questionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {questionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends questionDeleteArgs>(args: SelectSubset<T, questionDeleteArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {questionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionUpdateArgs>(args: SelectSubset<T, questionUpdateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionDeleteManyArgs>(args?: SelectSubset<T, questionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionUpdateManyArgs>(args: SelectSubset<T, questionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {questionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `questionId`
     * const questionWithQuestionIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { questionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends questionUpdateManyAndReturnArgs>(args: SelectSubset<T, questionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {questionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends questionUpsertArgs>(args: SelectSubset<T, questionUpsertArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionCountArgs>(
      args?: Subset<T, questionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionGroupByArgs['orderBy'] }
        : { orderBy?: questionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question model
   */
  readonly fields: questionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends question$sectionArgs<ExtArgs> = {}>(args?: Subset<T, question$sectionArgs<ExtArgs>>): Prisma__testSectionClient<$Result.GetResult<Prisma.$testSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    test<T extends testDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testDefaultArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionOption<T extends question$questionOptionArgs<ExtArgs> = {}>(args?: Subset<T, question$questionOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends question$answersArgs<ExtArgs> = {}>(args?: Subset<T, question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the question model
   */
  interface questionFieldRefs {
    readonly questionId: FieldRef<"question", 'String'>
    readonly testCode: FieldRef<"question", 'String'>
    readonly testSectionId: FieldRef<"question", 'String'>
    readonly code: FieldRef<"question", 'String'>
    readonly prompt: FieldRef<"question", 'String'>
    readonly required: FieldRef<"question", 'Boolean'>
    readonly metadata: FieldRef<"question", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * question findUnique
   */
  export type questionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findUniqueOrThrow
   */
  export type questionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findFirst
   */
  export type questionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findFirstOrThrow
   */
  export type questionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findMany
   */
  export type questionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question create
   */
  export type questionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to create a question.
     */
    data: XOR<questionCreateInput, questionUncheckedCreateInput>
  }

  /**
   * question createMany
   */
  export type questionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionCreateManyInput | questionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question createManyAndReturn
   */
  export type questionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * The data used to create many questions.
     */
    data: questionCreateManyInput | questionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * question update
   */
  export type questionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to update a question.
     */
    data: XOR<questionUpdateInput, questionUncheckedUpdateInput>
    /**
     * Choose, which question to update.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question updateMany
   */
  export type questionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * question updateManyAndReturn
   */
  export type questionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * The data used to update questions.
     */
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * question upsert
   */
  export type questionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The filter to search for the question to update in case it exists.
     */
    where: questionWhereUniqueInput
    /**
     * In case the question found by the `where` argument doesn't exist, create a new question with this data.
     */
    create: XOR<questionCreateInput, questionUncheckedCreateInput>
    /**
     * In case the question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionUpdateInput, questionUncheckedUpdateInput>
  }

  /**
   * question delete
   */
  export type questionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter which question to delete.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question deleteMany
   */
  export type questionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * question.section
   */
  export type question$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testSection
     */
    select?: testSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testSection
     */
    omit?: testSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testSectionInclude<ExtArgs> | null
    where?: testSectionWhereInput
  }

  /**
   * question.questionOption
   */
  export type question$questionOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    where?: questionOptionWhereInput
    orderBy?: questionOptionOrderByWithRelationInput | questionOptionOrderByWithRelationInput[]
    cursor?: questionOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * question.answers
   */
  export type question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    where?: answerWhereInput
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    cursor?: answerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * question without action
   */
  export type questionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
  }


  /**
   * Model questionOption
   */

  export type AggregateQuestionOption = {
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  export type QuestionOptionAvgAggregateOutputType = {
    scoreValue: Decimal | null
  }

  export type QuestionOptionSumAggregateOutputType = {
    scoreValue: Decimal | null
  }

  export type QuestionOptionMinAggregateOutputType = {
    questionOptionId: string | null
    questionId: string | null
    label: string | null
    value: string | null
    scoreValue: Decimal | null
  }

  export type QuestionOptionMaxAggregateOutputType = {
    questionOptionId: string | null
    questionId: string | null
    label: string | null
    value: string | null
    scoreValue: Decimal | null
  }

  export type QuestionOptionCountAggregateOutputType = {
    questionOptionId: number
    questionId: number
    label: number
    value: number
    scoreValue: number
    _all: number
  }


  export type QuestionOptionAvgAggregateInputType = {
    scoreValue?: true
  }

  export type QuestionOptionSumAggregateInputType = {
    scoreValue?: true
  }

  export type QuestionOptionMinAggregateInputType = {
    questionOptionId?: true
    questionId?: true
    label?: true
    value?: true
    scoreValue?: true
  }

  export type QuestionOptionMaxAggregateInputType = {
    questionOptionId?: true
    questionId?: true
    label?: true
    value?: true
    scoreValue?: true
  }

  export type QuestionOptionCountAggregateInputType = {
    questionOptionId?: true
    questionId?: true
    label?: true
    value?: true
    scoreValue?: true
    _all?: true
  }

  export type QuestionOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questionOption to aggregate.
     */
    where?: questionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionOptions to fetch.
     */
    orderBy?: questionOptionOrderByWithRelationInput | questionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questionOptions
    **/
    _count?: true | QuestionOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type GetQuestionOptionAggregateType<T extends QuestionOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionOption[P]>
      : GetScalarType<T[P], AggregateQuestionOption[P]>
  }




  export type questionOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionOptionWhereInput
    orderBy?: questionOptionOrderByWithAggregationInput | questionOptionOrderByWithAggregationInput[]
    by: QuestionOptionScalarFieldEnum[] | QuestionOptionScalarFieldEnum
    having?: questionOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionOptionCountAggregateInputType | true
    _avg?: QuestionOptionAvgAggregateInputType
    _sum?: QuestionOptionSumAggregateInputType
    _min?: QuestionOptionMinAggregateInputType
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type QuestionOptionGroupByOutputType = {
    questionOptionId: string
    questionId: string
    label: string
    value: string | null
    scoreValue: Decimal | null
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  type GetQuestionOptionGroupByPayload<T extends questionOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
        }
      >
    >


  export type questionOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionOptionId?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    scoreValue?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
    answers?: boolean | questionOption$answersArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type questionOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionOptionId?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    scoreValue?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type questionOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionOptionId?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    scoreValue?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type questionOptionSelectScalar = {
    questionOptionId?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    scoreValue?: boolean
  }

  export type questionOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionOptionId" | "questionId" | "label" | "value" | "scoreValue", ExtArgs["result"]["questionOption"]>
  export type questionOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
    answers?: boolean | questionOption$answersArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questionOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
  }
  export type questionOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
  }

  export type $questionOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questionOption"
    objects: {
      question: Prisma.$questionPayload<ExtArgs>
      answers: Prisma.$answerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      questionOptionId: string
      questionId: string
      label: string
      value: string | null
      scoreValue: Prisma.Decimal | null
    }, ExtArgs["result"]["questionOption"]>
    composites: {}
  }

  type questionOptionGetPayload<S extends boolean | null | undefined | questionOptionDefaultArgs> = $Result.GetResult<Prisma.$questionOptionPayload, S>

  type questionOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionOptionCountAggregateInputType | true
    }

  export interface questionOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questionOption'], meta: { name: 'questionOption' } }
    /**
     * Find zero or one QuestionOption that matches the filter.
     * @param {questionOptionFindUniqueArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionOptionFindUniqueArgs>(args: SelectSubset<T, questionOptionFindUniqueArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionOptionFindUniqueOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, questionOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionFindFirstArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionOptionFindFirstArgs>(args?: SelectSubset<T, questionOptionFindFirstArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionFindFirstOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, questionOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany()
     * 
     * // Get first 10 QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany({ take: 10 })
     * 
     * // Only select the `questionOptionId`
     * const questionOptionWithQuestionOptionIdOnly = await prisma.questionOption.findMany({ select: { questionOptionId: true } })
     * 
     */
    findMany<T extends questionOptionFindManyArgs>(args?: SelectSubset<T, questionOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionOption.
     * @param {questionOptionCreateArgs} args - Arguments to create a QuestionOption.
     * @example
     * // Create one QuestionOption
     * const QuestionOption = await prisma.questionOption.create({
     *   data: {
     *     // ... data to create a QuestionOption
     *   }
     * })
     * 
     */
    create<T extends questionOptionCreateArgs>(args: SelectSubset<T, questionOptionCreateArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionOptions.
     * @param {questionOptionCreateManyArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionOptionCreateManyArgs>(args?: SelectSubset<T, questionOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionOptions and returns the data saved in the database.
     * @param {questionOptionCreateManyAndReturnArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionOptions and only return the `questionOptionId`
     * const questionOptionWithQuestionOptionIdOnly = await prisma.questionOption.createManyAndReturn({
     *   select: { questionOptionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, questionOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionOption.
     * @param {questionOptionDeleteArgs} args - Arguments to delete one QuestionOption.
     * @example
     * // Delete one QuestionOption
     * const QuestionOption = await prisma.questionOption.delete({
     *   where: {
     *     // ... filter to delete one QuestionOption
     *   }
     * })
     * 
     */
    delete<T extends questionOptionDeleteArgs>(args: SelectSubset<T, questionOptionDeleteArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionOption.
     * @param {questionOptionUpdateArgs} args - Arguments to update one QuestionOption.
     * @example
     * // Update one QuestionOption
     * const questionOption = await prisma.questionOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionOptionUpdateArgs>(args: SelectSubset<T, questionOptionUpdateArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionOptions.
     * @param {questionOptionDeleteManyArgs} args - Arguments to filter QuestionOptions to delete.
     * @example
     * // Delete a few QuestionOptions
     * const { count } = await prisma.questionOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionOptionDeleteManyArgs>(args?: SelectSubset<T, questionOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionOptionUpdateManyArgs>(args: SelectSubset<T, questionOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions and returns the data updated in the database.
     * @param {questionOptionUpdateManyAndReturnArgs} args - Arguments to update many QuestionOptions.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionOptions and only return the `questionOptionId`
     * const questionOptionWithQuestionOptionIdOnly = await prisma.questionOption.updateManyAndReturn({
     *   select: { questionOptionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends questionOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, questionOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionOption.
     * @param {questionOptionUpsertArgs} args - Arguments to update or create a QuestionOption.
     * @example
     * // Update or create a QuestionOption
     * const questionOption = await prisma.questionOption.upsert({
     *   create: {
     *     // ... data to create a QuestionOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionOption we want to update
     *   }
     * })
     */
    upsert<T extends questionOptionUpsertArgs>(args: SelectSubset<T, questionOptionUpsertArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionCountArgs} args - Arguments to filter QuestionOptions to count.
     * @example
     * // Count the number of QuestionOptions
     * const count = await prisma.questionOption.count({
     *   where: {
     *     // ... the filter for the QuestionOptions we want to count
     *   }
     * })
    **/
    count<T extends questionOptionCountArgs>(
      args?: Subset<T, questionOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionOptionAggregateArgs>(args: Subset<T, QuestionOptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionOptionAggregateType<T>>

    /**
     * Group by QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questionOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionOptionGroupByArgs['orderBy'] }
        : { orderBy?: questionOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questionOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questionOption model
   */
  readonly fields: questionOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questionOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends questionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionDefaultArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends questionOption$answersArgs<ExtArgs> = {}>(args?: Subset<T, questionOption$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the questionOption model
   */
  interface questionOptionFieldRefs {
    readonly questionOptionId: FieldRef<"questionOption", 'String'>
    readonly questionId: FieldRef<"questionOption", 'String'>
    readonly label: FieldRef<"questionOption", 'String'>
    readonly value: FieldRef<"questionOption", 'String'>
    readonly scoreValue: FieldRef<"questionOption", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * questionOption findUnique
   */
  export type questionOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter, which questionOption to fetch.
     */
    where: questionOptionWhereUniqueInput
  }

  /**
   * questionOption findUniqueOrThrow
   */
  export type questionOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter, which questionOption to fetch.
     */
    where: questionOptionWhereUniqueInput
  }

  /**
   * questionOption findFirst
   */
  export type questionOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter, which questionOption to fetch.
     */
    where?: questionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionOptions to fetch.
     */
    orderBy?: questionOptionOrderByWithRelationInput | questionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questionOptions.
     */
    cursor?: questionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * questionOption findFirstOrThrow
   */
  export type questionOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter, which questionOption to fetch.
     */
    where?: questionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionOptions to fetch.
     */
    orderBy?: questionOptionOrderByWithRelationInput | questionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questionOptions.
     */
    cursor?: questionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * questionOption findMany
   */
  export type questionOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter, which questionOptions to fetch.
     */
    where?: questionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionOptions to fetch.
     */
    orderBy?: questionOptionOrderByWithRelationInput | questionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questionOptions.
     */
    cursor?: questionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionOptions.
     */
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * questionOption create
   */
  export type questionOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a questionOption.
     */
    data: XOR<questionOptionCreateInput, questionOptionUncheckedCreateInput>
  }

  /**
   * questionOption createMany
   */
  export type questionOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questionOptions.
     */
    data: questionOptionCreateManyInput | questionOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questionOption createManyAndReturn
   */
  export type questionOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * The data used to create many questionOptions.
     */
    data: questionOptionCreateManyInput | questionOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * questionOption update
   */
  export type questionOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a questionOption.
     */
    data: XOR<questionOptionUpdateInput, questionOptionUncheckedUpdateInput>
    /**
     * Choose, which questionOption to update.
     */
    where: questionOptionWhereUniqueInput
  }

  /**
   * questionOption updateMany
   */
  export type questionOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questionOptions.
     */
    data: XOR<questionOptionUpdateManyMutationInput, questionOptionUncheckedUpdateManyInput>
    /**
     * Filter which questionOptions to update
     */
    where?: questionOptionWhereInput
    /**
     * Limit how many questionOptions to update.
     */
    limit?: number
  }

  /**
   * questionOption updateManyAndReturn
   */
  export type questionOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * The data used to update questionOptions.
     */
    data: XOR<questionOptionUpdateManyMutationInput, questionOptionUncheckedUpdateManyInput>
    /**
     * Filter which questionOptions to update
     */
    where?: questionOptionWhereInput
    /**
     * Limit how many questionOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * questionOption upsert
   */
  export type questionOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the questionOption to update in case it exists.
     */
    where: questionOptionWhereUniqueInput
    /**
     * In case the questionOption found by the `where` argument doesn't exist, create a new questionOption with this data.
     */
    create: XOR<questionOptionCreateInput, questionOptionUncheckedCreateInput>
    /**
     * In case the questionOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionOptionUpdateInput, questionOptionUncheckedUpdateInput>
  }

  /**
   * questionOption delete
   */
  export type questionOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    /**
     * Filter which questionOption to delete.
     */
    where: questionOptionWhereUniqueInput
  }

  /**
   * questionOption deleteMany
   */
  export type questionOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questionOptions to delete
     */
    where?: questionOptionWhereInput
    /**
     * Limit how many questionOptions to delete.
     */
    limit?: number
  }

  /**
   * questionOption.answers
   */
  export type questionOption$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    where?: answerWhereInput
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    cursor?: answerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * questionOption without action
   */
  export type questionOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
  }


  /**
   * Model assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    assignmentId: string | null
    testCode: string | null
    assignedToId: string | null
    assignedById: string | null
    status: $Enums.assignmentStatus | null
    dueAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    assignmentId: string | null
    testCode: string | null
    assignedToId: string | null
    assignedById: string | null
    status: $Enums.assignmentStatus | null
    dueAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    assignmentId: number
    testCode: number
    assignedToId: number
    assignedById: number
    status: number
    dueAt: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    assignmentId?: true
    testCode?: true
    assignedToId?: true
    assignedById?: true
    status?: true
    dueAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    assignmentId?: true
    testCode?: true
    assignedToId?: true
    assignedById?: true
    status?: true
    dueAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    assignmentId?: true
    testCode?: true
    assignedToId?: true
    assignedById?: true
    status?: true
    dueAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment to aggregate.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type assignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithAggregationInput | assignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: assignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    assignmentId: string
    testCode: string
    assignedToId: string
    assignedById: string
    status: $Enums.assignmentStatus
    dueAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends assignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type assignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    testCode?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    status?: boolean
    dueAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
    answers?: boolean | assignment$answersArgs<ExtArgs>
    score?: boolean | assignment$scoreArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type assignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    testCode?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    status?: boolean
    dueAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type assignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    testCode?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    status?: boolean
    dueAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type assignmentSelectScalar = {
    assignmentId?: boolean
    testCode?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    status?: boolean
    dueAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type assignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignmentId" | "testCode" | "assignedToId" | "assignedById" | "status" | "dueAt" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["assignment"]>
  export type assignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
    answers?: boolean | assignment$answersArgs<ExtArgs>
    score?: boolean | assignment$scoreArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type assignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }
  export type assignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedBy?: boolean | userDefaultArgs<ExtArgs>
    assignedTo?: boolean | userDefaultArgs<ExtArgs>
    test?: boolean | testDefaultArgs<ExtArgs>
  }

  export type $assignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assignment"
    objects: {
      assignedBy: Prisma.$userPayload<ExtArgs>
      assignedTo: Prisma.$userPayload<ExtArgs>
      test: Prisma.$testPayload<ExtArgs>
      answers: Prisma.$answerPayload<ExtArgs>[]
      score: Prisma.$assignmentScorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      assignmentId: string
      testCode: string
      assignedToId: string
      assignedById: string
      status: $Enums.assignmentStatus
      dueAt: Date | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type assignmentGetPayload<S extends boolean | null | undefined | assignmentDefaultArgs> = $Result.GetResult<Prisma.$assignmentPayload, S>

  type assignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface assignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignment'], meta: { name: 'assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {assignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assignmentFindUniqueArgs>(args: SelectSubset<T, assignmentFindUniqueArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, assignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assignmentFindFirstArgs>(args?: SelectSubset<T, assignmentFindFirstArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, assignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `assignmentId`
     * const assignmentWithAssignmentIdOnly = await prisma.assignment.findMany({ select: { assignmentId: true } })
     * 
     */
    findMany<T extends assignmentFindManyArgs>(args?: SelectSubset<T, assignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {assignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends assignmentCreateArgs>(args: SelectSubset<T, assignmentCreateArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {assignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assignmentCreateManyArgs>(args?: SelectSubset<T, assignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {assignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `assignmentId`
     * const assignmentWithAssignmentIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { assignmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends assignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, assignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {assignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends assignmentDeleteArgs>(args: SelectSubset<T, assignmentDeleteArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {assignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assignmentUpdateArgs>(args: SelectSubset<T, assignmentUpdateArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {assignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assignmentDeleteManyArgs>(args?: SelectSubset<T, assignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assignmentUpdateManyArgs>(args: SelectSubset<T, assignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {assignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `assignmentId`
     * const assignmentWithAssignmentIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { assignmentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends assignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, assignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {assignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends assignmentUpsertArgs>(args: SelectSubset<T, assignmentUpsertArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends assignmentCountArgs>(
      args?: Subset<T, assignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends assignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentGroupByArgs['orderBy'] }
        : { orderBy?: assignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, assignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assignment model
   */
  readonly fields: assignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedBy<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test<T extends testDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testDefaultArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends assignment$answersArgs<ExtArgs> = {}>(args?: Subset<T, assignment$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    score<T extends assignment$scoreArgs<ExtArgs> = {}>(args?: Subset<T, assignment$scoreArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the assignment model
   */
  interface assignmentFieldRefs {
    readonly assignmentId: FieldRef<"assignment", 'String'>
    readonly testCode: FieldRef<"assignment", 'String'>
    readonly assignedToId: FieldRef<"assignment", 'String'>
    readonly assignedById: FieldRef<"assignment", 'String'>
    readonly status: FieldRef<"assignment", 'assignmentStatus'>
    readonly dueAt: FieldRef<"assignment", 'DateTime'>
    readonly startedAt: FieldRef<"assignment", 'DateTime'>
    readonly completedAt: FieldRef<"assignment", 'DateTime'>
    readonly createdAt: FieldRef<"assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * assignment findUnique
   */
  export type assignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment findUniqueOrThrow
   */
  export type assignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment findFirst
   */
  export type assignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment findFirstOrThrow
   */
  export type assignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment findMany
   */
  export type assignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment create
   */
  export type assignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a assignment.
     */
    data: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>
  }

  /**
   * assignment createMany
   */
  export type assignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignments.
     */
    data: assignmentCreateManyInput | assignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignment createManyAndReturn
   */
  export type assignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * The data used to create many assignments.
     */
    data: assignmentCreateManyInput | assignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * assignment update
   */
  export type assignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a assignment.
     */
    data: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>
    /**
     * Choose, which assignment to update.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment updateMany
   */
  export type assignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyInput>
    /**
     * Filter which assignments to update
     */
    where?: assignmentWhereInput
    /**
     * Limit how many assignments to update.
     */
    limit?: number
  }

  /**
   * assignment updateManyAndReturn
   */
  export type assignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyInput>
    /**
     * Filter which assignments to update
     */
    where?: assignmentWhereInput
    /**
     * Limit how many assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * assignment upsert
   */
  export type assignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the assignment to update in case it exists.
     */
    where: assignmentWhereUniqueInput
    /**
     * In case the assignment found by the `where` argument doesn't exist, create a new assignment with this data.
     */
    create: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>
    /**
     * In case the assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>
  }

  /**
   * assignment delete
   */
  export type assignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter which assignment to delete.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment deleteMany
   */
  export type assignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to delete
     */
    where?: assignmentWhereInput
    /**
     * Limit how many assignments to delete.
     */
    limit?: number
  }

  /**
   * assignment.answers
   */
  export type assignment$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    where?: answerWhereInput
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    cursor?: answerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * assignment.score
   */
  export type assignment$scoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    where?: assignmentScoreWhereInput
  }

  /**
   * assignment without action
   */
  export type assignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
  }


  /**
   * Model answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    numericAnswer: Decimal | null
    score: Decimal | null
  }

  export type AnswerSumAggregateOutputType = {
    numericAnswer: Decimal | null
    score: Decimal | null
  }

  export type AnswerMinAggregateOutputType = {
    answerId: string | null
    assignmentId: string | null
    questionId: string | null
    questionOptionId: string | null
    numericAnswer: Decimal | null
    score: Decimal | null
  }

  export type AnswerMaxAggregateOutputType = {
    answerId: string | null
    assignmentId: string | null
    questionId: string | null
    questionOptionId: string | null
    numericAnswer: Decimal | null
    score: Decimal | null
  }

  export type AnswerCountAggregateOutputType = {
    answerId: number
    assignmentId: number
    questionId: number
    questionOptionId: number
    numericAnswer: number
    score: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    numericAnswer?: true
    score?: true
  }

  export type AnswerSumAggregateInputType = {
    numericAnswer?: true
    score?: true
  }

  export type AnswerMinAggregateInputType = {
    answerId?: true
    assignmentId?: true
    questionId?: true
    questionOptionId?: true
    numericAnswer?: true
    score?: true
  }

  export type AnswerMaxAggregateInputType = {
    answerId?: true
    assignmentId?: true
    questionId?: true
    questionOptionId?: true
    numericAnswer?: true
    score?: true
  }

  export type AnswerCountAggregateInputType = {
    answerId?: true
    assignmentId?: true
    questionId?: true
    questionOptionId?: true
    numericAnswer?: true
    score?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answer to aggregate.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type answerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
    orderBy?: answerOrderByWithAggregationInput | answerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: answerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    answerId: string
    assignmentId: string
    questionId: string
    questionOptionId: string | null
    numericAnswer: Decimal | null
    score: Decimal | null
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends answerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type answerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    assignmentId?: boolean
    questionId?: boolean
    questionOptionId?: boolean
    numericAnswer?: boolean
    score?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type answerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    assignmentId?: boolean
    questionId?: boolean
    questionOptionId?: boolean
    numericAnswer?: boolean
    score?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type answerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    assignmentId?: boolean
    questionId?: boolean
    questionOptionId?: boolean
    numericAnswer?: boolean
    score?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type answerSelectScalar = {
    answerId?: boolean
    assignmentId?: boolean
    questionId?: boolean
    questionOptionId?: boolean
    numericAnswer?: boolean
    score?: boolean
  }

  export type answerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"answerId" | "assignmentId" | "questionId" | "questionOptionId" | "numericAnswer" | "score", ExtArgs["result"]["answer"]>
  export type answerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }
  export type answerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }
  export type answerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
    option?: boolean | answer$optionArgs<ExtArgs>
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }

  export type $answerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answer"
    objects: {
      question: Prisma.$questionPayload<ExtArgs>
      option: Prisma.$questionOptionPayload<ExtArgs> | null
      assignment: Prisma.$assignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      answerId: string
      assignmentId: string
      questionId: string
      questionOptionId: string | null
      numericAnswer: Prisma.Decimal | null
      score: Prisma.Decimal | null
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type answerGetPayload<S extends boolean | null | undefined | answerDefaultArgs> = $Result.GetResult<Prisma.$answerPayload, S>

  type answerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface answerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answer'], meta: { name: 'answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {answerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answerFindUniqueArgs>(args: SelectSubset<T, answerFindUniqueArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answerFindUniqueOrThrowArgs>(args: SelectSubset<T, answerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answerFindFirstArgs>(args?: SelectSubset<T, answerFindFirstArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answerFindFirstOrThrowArgs>(args?: SelectSubset<T, answerFindFirstOrThrowArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `answerId`
     * const answerWithAnswerIdOnly = await prisma.answer.findMany({ select: { answerId: true } })
     * 
     */
    findMany<T extends answerFindManyArgs>(args?: SelectSubset<T, answerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {answerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends answerCreateArgs>(args: SelectSubset<T, answerCreateArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answerCreateManyArgs>(args?: SelectSubset<T, answerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {answerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `answerId`
     * const answerWithAnswerIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { answerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answerCreateManyAndReturnArgs>(args?: SelectSubset<T, answerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {answerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends answerDeleteArgs>(args: SelectSubset<T, answerDeleteArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {answerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answerUpdateArgs>(args: SelectSubset<T, answerUpdateArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answerDeleteManyArgs>(args?: SelectSubset<T, answerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answerUpdateManyArgs>(args: SelectSubset<T, answerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {answerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `answerId`
     * const answerWithAnswerIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { answerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends answerUpdateManyAndReturnArgs>(args: SelectSubset<T, answerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {answerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends answerUpsertArgs>(args: SelectSubset<T, answerUpsertArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answerCountArgs>(
      args?: Subset<T, answerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends answerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answerGroupByArgs['orderBy'] }
        : { orderBy?: answerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, answerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answer model
   */
  readonly fields: answerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends questionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionDefaultArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends answer$optionArgs<ExtArgs> = {}>(args?: Subset<T, answer$optionArgs<ExtArgs>>): Prisma__questionOptionClient<$Result.GetResult<Prisma.$questionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignment<T extends assignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, assignmentDefaultArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answer model
   */
  interface answerFieldRefs {
    readonly answerId: FieldRef<"answer", 'String'>
    readonly assignmentId: FieldRef<"answer", 'String'>
    readonly questionId: FieldRef<"answer", 'String'>
    readonly questionOptionId: FieldRef<"answer", 'String'>
    readonly numericAnswer: FieldRef<"answer", 'Decimal'>
    readonly score: FieldRef<"answer", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * answer findUnique
   */
  export type answerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer findUniqueOrThrow
   */
  export type answerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer findFirst
   */
  export type answerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer findFirstOrThrow
   */
  export type answerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer findMany
   */
  export type answerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer create
   */
  export type answerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The data needed to create a answer.
     */
    data: XOR<answerCreateInput, answerUncheckedCreateInput>
  }

  /**
   * answer createMany
   */
  export type answerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answerCreateManyInput | answerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answer createManyAndReturn
   */
  export type answerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * The data used to create many answers.
     */
    data: answerCreateManyInput | answerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answer update
   */
  export type answerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The data needed to update a answer.
     */
    data: XOR<answerUpdateInput, answerUncheckedUpdateInput>
    /**
     * Choose, which answer to update.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer updateMany
   */
  export type answerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answerWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answer updateManyAndReturn
   */
  export type answerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * The data used to update answers.
     */
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answerWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answer upsert
   */
  export type answerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The filter to search for the answer to update in case it exists.
     */
    where: answerWhereUniqueInput
    /**
     * In case the answer found by the `where` argument doesn't exist, create a new answer with this data.
     */
    create: XOR<answerCreateInput, answerUncheckedCreateInput>
    /**
     * In case the answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answerUpdateInput, answerUncheckedUpdateInput>
  }

  /**
   * answer delete
   */
  export type answerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter which answer to delete.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer deleteMany
   */
  export type answerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answerWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answer.option
   */
  export type answer$optionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionOption
     */
    select?: questionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionOption
     */
    omit?: questionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionOptionInclude<ExtArgs> | null
    where?: questionOptionWhereInput
  }

  /**
   * answer without action
   */
  export type answerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
  }


  /**
   * Model assignmentScore
   */

  export type AggregateAssignmentScore = {
    _count: AssignmentScoreCountAggregateOutputType | null
    _avg: AssignmentScoreAvgAggregateOutputType | null
    _sum: AssignmentScoreSumAggregateOutputType | null
    _min: AssignmentScoreMinAggregateOutputType | null
    _max: AssignmentScoreMaxAggregateOutputType | null
  }

  export type AssignmentScoreAvgAggregateOutputType = {
    totalScore: Decimal | null
    percentile: Decimal | null
  }

  export type AssignmentScoreSumAggregateOutputType = {
    totalScore: Decimal | null
    percentile: Decimal | null
  }

  export type AssignmentScoreMinAggregateOutputType = {
    assignmentId: string | null
    totalScore: Decimal | null
    percentile: Decimal | null
    interpretation: string | null
  }

  export type AssignmentScoreMaxAggregateOutputType = {
    assignmentId: string | null
    totalScore: Decimal | null
    percentile: Decimal | null
    interpretation: string | null
  }

  export type AssignmentScoreCountAggregateOutputType = {
    assignmentId: number
    totalScore: number
    percentile: number
    interpretation: number
    details: number
    _all: number
  }


  export type AssignmentScoreAvgAggregateInputType = {
    totalScore?: true
    percentile?: true
  }

  export type AssignmentScoreSumAggregateInputType = {
    totalScore?: true
    percentile?: true
  }

  export type AssignmentScoreMinAggregateInputType = {
    assignmentId?: true
    totalScore?: true
    percentile?: true
    interpretation?: true
  }

  export type AssignmentScoreMaxAggregateInputType = {
    assignmentId?: true
    totalScore?: true
    percentile?: true
    interpretation?: true
  }

  export type AssignmentScoreCountAggregateInputType = {
    assignmentId?: true
    totalScore?: true
    percentile?: true
    interpretation?: true
    details?: true
    _all?: true
  }

  export type AssignmentScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignmentScore to aggregate.
     */
    where?: assignmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignmentScores to fetch.
     */
    orderBy?: assignmentScoreOrderByWithRelationInput | assignmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assignmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assignmentScores
    **/
    _count?: true | AssignmentScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentScoreMaxAggregateInputType
  }

  export type GetAssignmentScoreAggregateType<T extends AssignmentScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentScore[P]>
      : GetScalarType<T[P], AggregateAssignmentScore[P]>
  }




  export type assignmentScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentScoreWhereInput
    orderBy?: assignmentScoreOrderByWithAggregationInput | assignmentScoreOrderByWithAggregationInput[]
    by: AssignmentScoreScalarFieldEnum[] | AssignmentScoreScalarFieldEnum
    having?: assignmentScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentScoreCountAggregateInputType | true
    _avg?: AssignmentScoreAvgAggregateInputType
    _sum?: AssignmentScoreSumAggregateInputType
    _min?: AssignmentScoreMinAggregateInputType
    _max?: AssignmentScoreMaxAggregateInputType
  }

  export type AssignmentScoreGroupByOutputType = {
    assignmentId: string
    totalScore: Decimal
    percentile: Decimal | null
    interpretation: string | null
    details: JsonValue | null
    _count: AssignmentScoreCountAggregateOutputType | null
    _avg: AssignmentScoreAvgAggregateOutputType | null
    _sum: AssignmentScoreSumAggregateOutputType | null
    _min: AssignmentScoreMinAggregateOutputType | null
    _max: AssignmentScoreMaxAggregateOutputType | null
  }

  type GetAssignmentScoreGroupByPayload<T extends assignmentScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentScoreGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentScoreGroupByOutputType[P]>
        }
      >
    >


  export type assignmentScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    totalScore?: boolean
    percentile?: boolean
    interpretation?: boolean
    details?: boolean
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentScore"]>

  export type assignmentScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    totalScore?: boolean
    percentile?: boolean
    interpretation?: boolean
    details?: boolean
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentScore"]>

  export type assignmentScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    totalScore?: boolean
    percentile?: boolean
    interpretation?: boolean
    details?: boolean
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentScore"]>

  export type assignmentScoreSelectScalar = {
    assignmentId?: boolean
    totalScore?: boolean
    percentile?: boolean
    interpretation?: boolean
    details?: boolean
  }

  export type assignmentScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignmentId" | "totalScore" | "percentile" | "interpretation" | "details", ExtArgs["result"]["assignmentScore"]>
  export type assignmentScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }
  export type assignmentScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }
  export type assignmentScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>
  }

  export type $assignmentScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assignmentScore"
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignmentId: string
      totalScore: Prisma.Decimal
      percentile: Prisma.Decimal | null
      interpretation: string | null
      details: Prisma.JsonValue | null
    }, ExtArgs["result"]["assignmentScore"]>
    composites: {}
  }

  type assignmentScoreGetPayload<S extends boolean | null | undefined | assignmentScoreDefaultArgs> = $Result.GetResult<Prisma.$assignmentScorePayload, S>

  type assignmentScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assignmentScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentScoreCountAggregateInputType | true
    }

  export interface assignmentScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignmentScore'], meta: { name: 'assignmentScore' } }
    /**
     * Find zero or one AssignmentScore that matches the filter.
     * @param {assignmentScoreFindUniqueArgs} args - Arguments to find a AssignmentScore
     * @example
     * // Get one AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assignmentScoreFindUniqueArgs>(args: SelectSubset<T, assignmentScoreFindUniqueArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assignmentScoreFindUniqueOrThrowArgs} args - Arguments to find a AssignmentScore
     * @example
     * // Get one AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assignmentScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, assignmentScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreFindFirstArgs} args - Arguments to find a AssignmentScore
     * @example
     * // Get one AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assignmentScoreFindFirstArgs>(args?: SelectSubset<T, assignmentScoreFindFirstArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreFindFirstOrThrowArgs} args - Arguments to find a AssignmentScore
     * @example
     * // Get one AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assignmentScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, assignmentScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentScores
     * const assignmentScores = await prisma.assignmentScore.findMany()
     * 
     * // Get first 10 AssignmentScores
     * const assignmentScores = await prisma.assignmentScore.findMany({ take: 10 })
     * 
     * // Only select the `assignmentId`
     * const assignmentScoreWithAssignmentIdOnly = await prisma.assignmentScore.findMany({ select: { assignmentId: true } })
     * 
     */
    findMany<T extends assignmentScoreFindManyArgs>(args?: SelectSubset<T, assignmentScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentScore.
     * @param {assignmentScoreCreateArgs} args - Arguments to create a AssignmentScore.
     * @example
     * // Create one AssignmentScore
     * const AssignmentScore = await prisma.assignmentScore.create({
     *   data: {
     *     // ... data to create a AssignmentScore
     *   }
     * })
     * 
     */
    create<T extends assignmentScoreCreateArgs>(args: SelectSubset<T, assignmentScoreCreateArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentScores.
     * @param {assignmentScoreCreateManyArgs} args - Arguments to create many AssignmentScores.
     * @example
     * // Create many AssignmentScores
     * const assignmentScore = await prisma.assignmentScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assignmentScoreCreateManyArgs>(args?: SelectSubset<T, assignmentScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentScores and returns the data saved in the database.
     * @param {assignmentScoreCreateManyAndReturnArgs} args - Arguments to create many AssignmentScores.
     * @example
     * // Create many AssignmentScores
     * const assignmentScore = await prisma.assignmentScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentScores and only return the `assignmentId`
     * const assignmentScoreWithAssignmentIdOnly = await prisma.assignmentScore.createManyAndReturn({
     *   select: { assignmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends assignmentScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, assignmentScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentScore.
     * @param {assignmentScoreDeleteArgs} args - Arguments to delete one AssignmentScore.
     * @example
     * // Delete one AssignmentScore
     * const AssignmentScore = await prisma.assignmentScore.delete({
     *   where: {
     *     // ... filter to delete one AssignmentScore
     *   }
     * })
     * 
     */
    delete<T extends assignmentScoreDeleteArgs>(args: SelectSubset<T, assignmentScoreDeleteArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentScore.
     * @param {assignmentScoreUpdateArgs} args - Arguments to update one AssignmentScore.
     * @example
     * // Update one AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assignmentScoreUpdateArgs>(args: SelectSubset<T, assignmentScoreUpdateArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentScores.
     * @param {assignmentScoreDeleteManyArgs} args - Arguments to filter AssignmentScores to delete.
     * @example
     * // Delete a few AssignmentScores
     * const { count } = await prisma.assignmentScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assignmentScoreDeleteManyArgs>(args?: SelectSubset<T, assignmentScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentScores
     * const assignmentScore = await prisma.assignmentScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assignmentScoreUpdateManyArgs>(args: SelectSubset<T, assignmentScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentScores and returns the data updated in the database.
     * @param {assignmentScoreUpdateManyAndReturnArgs} args - Arguments to update many AssignmentScores.
     * @example
     * // Update many AssignmentScores
     * const assignmentScore = await prisma.assignmentScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentScores and only return the `assignmentId`
     * const assignmentScoreWithAssignmentIdOnly = await prisma.assignmentScore.updateManyAndReturn({
     *   select: { assignmentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends assignmentScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, assignmentScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentScore.
     * @param {assignmentScoreUpsertArgs} args - Arguments to update or create a AssignmentScore.
     * @example
     * // Update or create a AssignmentScore
     * const assignmentScore = await prisma.assignmentScore.upsert({
     *   create: {
     *     // ... data to create a AssignmentScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentScore we want to update
     *   }
     * })
     */
    upsert<T extends assignmentScoreUpsertArgs>(args: SelectSubset<T, assignmentScoreUpsertArgs<ExtArgs>>): Prisma__assignmentScoreClient<$Result.GetResult<Prisma.$assignmentScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreCountArgs} args - Arguments to filter AssignmentScores to count.
     * @example
     * // Count the number of AssignmentScores
     * const count = await prisma.assignmentScore.count({
     *   where: {
     *     // ... the filter for the AssignmentScores we want to count
     *   }
     * })
    **/
    count<T extends assignmentScoreCountArgs>(
      args?: Subset<T, assignmentScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentScoreAggregateArgs>(args: Subset<T, AssignmentScoreAggregateArgs>): Prisma.PrismaPromise<GetAssignmentScoreAggregateType<T>>

    /**
     * Group by AssignmentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends assignmentScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentScoreGroupByArgs['orderBy'] }
        : { orderBy?: assignmentScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, assignmentScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assignmentScore model
   */
  readonly fields: assignmentScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignmentScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends assignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, assignmentDefaultArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the assignmentScore model
   */
  interface assignmentScoreFieldRefs {
    readonly assignmentId: FieldRef<"assignmentScore", 'String'>
    readonly totalScore: FieldRef<"assignmentScore", 'Decimal'>
    readonly percentile: FieldRef<"assignmentScore", 'Decimal'>
    readonly interpretation: FieldRef<"assignmentScore", 'String'>
    readonly details: FieldRef<"assignmentScore", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * assignmentScore findUnique
   */
  export type assignmentScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter, which assignmentScore to fetch.
     */
    where: assignmentScoreWhereUniqueInput
  }

  /**
   * assignmentScore findUniqueOrThrow
   */
  export type assignmentScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter, which assignmentScore to fetch.
     */
    where: assignmentScoreWhereUniqueInput
  }

  /**
   * assignmentScore findFirst
   */
  export type assignmentScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter, which assignmentScore to fetch.
     */
    where?: assignmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignmentScores to fetch.
     */
    orderBy?: assignmentScoreOrderByWithRelationInput | assignmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignmentScores.
     */
    cursor?: assignmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignmentScores.
     */
    distinct?: AssignmentScoreScalarFieldEnum | AssignmentScoreScalarFieldEnum[]
  }

  /**
   * assignmentScore findFirstOrThrow
   */
  export type assignmentScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter, which assignmentScore to fetch.
     */
    where?: assignmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignmentScores to fetch.
     */
    orderBy?: assignmentScoreOrderByWithRelationInput | assignmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignmentScores.
     */
    cursor?: assignmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignmentScores.
     */
    distinct?: AssignmentScoreScalarFieldEnum | AssignmentScoreScalarFieldEnum[]
  }

  /**
   * assignmentScore findMany
   */
  export type assignmentScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter, which assignmentScores to fetch.
     */
    where?: assignmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignmentScores to fetch.
     */
    orderBy?: assignmentScoreOrderByWithRelationInput | assignmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assignmentScores.
     */
    cursor?: assignmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignmentScores.
     */
    skip?: number
    distinct?: AssignmentScoreScalarFieldEnum | AssignmentScoreScalarFieldEnum[]
  }

  /**
   * assignmentScore create
   */
  export type assignmentScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a assignmentScore.
     */
    data: XOR<assignmentScoreCreateInput, assignmentScoreUncheckedCreateInput>
  }

  /**
   * assignmentScore createMany
   */
  export type assignmentScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignmentScores.
     */
    data: assignmentScoreCreateManyInput | assignmentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignmentScore createManyAndReturn
   */
  export type assignmentScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * The data used to create many assignmentScores.
     */
    data: assignmentScoreCreateManyInput | assignmentScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * assignmentScore update
   */
  export type assignmentScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a assignmentScore.
     */
    data: XOR<assignmentScoreUpdateInput, assignmentScoreUncheckedUpdateInput>
    /**
     * Choose, which assignmentScore to update.
     */
    where: assignmentScoreWhereUniqueInput
  }

  /**
   * assignmentScore updateMany
   */
  export type assignmentScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignmentScores.
     */
    data: XOR<assignmentScoreUpdateManyMutationInput, assignmentScoreUncheckedUpdateManyInput>
    /**
     * Filter which assignmentScores to update
     */
    where?: assignmentScoreWhereInput
    /**
     * Limit how many assignmentScores to update.
     */
    limit?: number
  }

  /**
   * assignmentScore updateManyAndReturn
   */
  export type assignmentScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * The data used to update assignmentScores.
     */
    data: XOR<assignmentScoreUpdateManyMutationInput, assignmentScoreUncheckedUpdateManyInput>
    /**
     * Filter which assignmentScores to update
     */
    where?: assignmentScoreWhereInput
    /**
     * Limit how many assignmentScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * assignmentScore upsert
   */
  export type assignmentScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the assignmentScore to update in case it exists.
     */
    where: assignmentScoreWhereUniqueInput
    /**
     * In case the assignmentScore found by the `where` argument doesn't exist, create a new assignmentScore with this data.
     */
    create: XOR<assignmentScoreCreateInput, assignmentScoreUncheckedCreateInput>
    /**
     * In case the assignmentScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentScoreUpdateInput, assignmentScoreUncheckedUpdateInput>
  }

  /**
   * assignmentScore delete
   */
  export type assignmentScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
    /**
     * Filter which assignmentScore to delete.
     */
    where: assignmentScoreWhereUniqueInput
  }

  /**
   * assignmentScore deleteMany
   */
  export type assignmentScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignmentScores to delete
     */
    where?: assignmentScoreWhereInput
    /**
     * Limit how many assignmentScores to delete.
     */
    limit?: number
  }

  /**
   * assignmentScore without action
   */
  export type assignmentScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignmentScore
     */
    select?: assignmentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignmentScore
     */
    omit?: assignmentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentScoreInclude<ExtArgs> | null
  }


  /**
   * Model refreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    refreshTokenId: string | null
    jti: string | null
    userId: string | null
    revokedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userAgent: string | null
    ip: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    refreshTokenId: string | null
    jti: string | null
    userId: string | null
    revokedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userAgent: string | null
    ip: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    refreshTokenId: number
    jti: number
    userId: number
    revokedAt: number
    expiresAt: number
    createdAt: number
    userAgent: number
    ip: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    refreshTokenId?: true
    jti?: true
    userId?: true
    revokedAt?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
    ip?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    refreshTokenId?: true
    jti?: true
    userId?: true
    revokedAt?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
    ip?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    refreshTokenId?: true
    jti?: true
    userId?: true
    revokedAt?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
    ip?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshToken to aggregate.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type refreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshTokenWhereInput
    orderBy?: refreshTokenOrderByWithAggregationInput | refreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: refreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    refreshTokenId: string
    jti: string
    userId: string
    revokedAt: Date | null
    expiresAt: Date
    createdAt: Date
    userAgent: string | null
    ip: string | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends refreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type refreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshTokenId?: boolean
    jti?: boolean
    userId?: boolean
    revokedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ip?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshTokenId?: boolean
    jti?: boolean
    userId?: boolean
    revokedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ip?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshTokenId?: boolean
    jti?: boolean
    userId?: boolean
    revokedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ip?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectScalar = {
    refreshTokenId?: boolean
    jti?: boolean
    userId?: boolean
    revokedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ip?: boolean
  }

  export type refreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"refreshTokenId" | "jti" | "userId" | "revokedAt" | "expiresAt" | "createdAt" | "userAgent" | "ip", ExtArgs["result"]["refreshToken"]>
  export type refreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type refreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type refreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $refreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refreshToken"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      refreshTokenId: string
      jti: string
      userId: string
      revokedAt: Date | null
      expiresAt: Date
      createdAt: Date
      userAgent: string | null
      ip: string | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type refreshTokenGetPayload<S extends boolean | null | undefined | refreshTokenDefaultArgs> = $Result.GetResult<Prisma.$refreshTokenPayload, S>

  type refreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface refreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refreshToken'], meta: { name: 'refreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {refreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refreshTokenFindUniqueArgs>(args: SelectSubset<T, refreshTokenFindUniqueArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refreshTokenFindFirstArgs>(args?: SelectSubset<T, refreshTokenFindFirstArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `refreshTokenId`
     * const refreshTokenWithRefreshTokenIdOnly = await prisma.refreshToken.findMany({ select: { refreshTokenId: true } })
     * 
     */
    findMany<T extends refreshTokenFindManyArgs>(args?: SelectSubset<T, refreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {refreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends refreshTokenCreateArgs>(args: SelectSubset<T, refreshTokenCreateArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {refreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refreshTokenCreateManyArgs>(args?: SelectSubset<T, refreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {refreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `refreshTokenId`
     * const refreshTokenWithRefreshTokenIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { refreshTokenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends refreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, refreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {refreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends refreshTokenDeleteArgs>(args: SelectSubset<T, refreshTokenDeleteArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {refreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refreshTokenUpdateArgs>(args: SelectSubset<T, refreshTokenUpdateArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {refreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refreshTokenDeleteManyArgs>(args?: SelectSubset<T, refreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refreshTokenUpdateManyArgs>(args: SelectSubset<T, refreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {refreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `refreshTokenId`
     * const refreshTokenWithRefreshTokenIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { refreshTokenId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends refreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, refreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {refreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends refreshTokenUpsertArgs>(args: SelectSubset<T, refreshTokenUpsertArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends refreshTokenCountArgs>(
      args?: Subset<T, refreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: refreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refreshToken model
   */
  readonly fields: refreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refreshToken model
   */
  interface refreshTokenFieldRefs {
    readonly refreshTokenId: FieldRef<"refreshToken", 'String'>
    readonly jti: FieldRef<"refreshToken", 'String'>
    readonly userId: FieldRef<"refreshToken", 'String'>
    readonly revokedAt: FieldRef<"refreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"refreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"refreshToken", 'DateTime'>
    readonly userAgent: FieldRef<"refreshToken", 'String'>
    readonly ip: FieldRef<"refreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * refreshToken findUnique
   */
  export type refreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken findUniqueOrThrow
   */
  export type refreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken findFirst
   */
  export type refreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken findFirstOrThrow
   */
  export type refreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken findMany
   */
  export type refreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshTokens to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken create
   */
  export type refreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refreshToken.
     */
    data: XOR<refreshTokenCreateInput, refreshTokenUncheckedCreateInput>
  }

  /**
   * refreshToken createMany
   */
  export type refreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refreshTokens.
     */
    data: refreshTokenCreateManyInput | refreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refreshToken createManyAndReturn
   */
  export type refreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many refreshTokens.
     */
    data: refreshTokenCreateManyInput | refreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * refreshToken update
   */
  export type refreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refreshToken.
     */
    data: XOR<refreshTokenUpdateInput, refreshTokenUncheckedUpdateInput>
    /**
     * Choose, which refreshToken to update.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken updateMany
   */
  export type refreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refreshTokens.
     */
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which refreshTokens to update
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to update.
     */
    limit?: number
  }

  /**
   * refreshToken updateManyAndReturn
   */
  export type refreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update refreshTokens.
     */
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which refreshTokens to update
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * refreshToken upsert
   */
  export type refreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refreshToken to update in case it exists.
     */
    where: refreshTokenWhereUniqueInput
    /**
     * In case the refreshToken found by the `where` argument doesn't exist, create a new refreshToken with this data.
     */
    create: XOR<refreshTokenCreateInput, refreshTokenUncheckedCreateInput>
    /**
     * In case the refreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refreshTokenUpdateInput, refreshTokenUncheckedUpdateInput>
  }

  /**
   * refreshToken delete
   */
  export type refreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter which refreshToken to delete.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken deleteMany
   */
  export type refreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshTokens to delete
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to delete.
     */
    limit?: number
  }

  /**
   * refreshToken without action
   */
  export type refreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    userNumber: 'userNumber',
    email: 'email',
    password: 'password',
    name: 'name',
    gender: 'gender',
    tokenVersion: 'tokenVersion',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TestScalarFieldEnum: {
    testId: 'testId',
    testCode: 'testCode',
    title: 'title',
    description: 'description',
    isPublished: 'isPublished',
    createdByNumber: 'createdByNumber',
    createdAt: 'createdAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestSectionScalarFieldEnum: {
    testSectionId: 'testSectionId',
    testSectionCode: 'testSectionCode',
    testCode: 'testCode',
    name: 'name'
  };

  export type TestSectionScalarFieldEnum = (typeof TestSectionScalarFieldEnum)[keyof typeof TestSectionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    questionId: 'questionId',
    testCode: 'testCode',
    testSectionId: 'testSectionId',
    code: 'code',
    prompt: 'prompt',
    required: 'required',
    metadata: 'metadata'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionOptionScalarFieldEnum: {
    questionOptionId: 'questionOptionId',
    questionId: 'questionId',
    label: 'label',
    value: 'value',
    scoreValue: 'scoreValue'
  };

  export type QuestionOptionScalarFieldEnum = (typeof QuestionOptionScalarFieldEnum)[keyof typeof QuestionOptionScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    assignmentId: 'assignmentId',
    testCode: 'testCode',
    assignedToId: 'assignedToId',
    assignedById: 'assignedById',
    status: 'status',
    dueAt: 'dueAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    answerId: 'answerId',
    assignmentId: 'assignmentId',
    questionId: 'questionId',
    questionOptionId: 'questionOptionId',
    numericAnswer: 'numericAnswer',
    score: 'score'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const AssignmentScoreScalarFieldEnum: {
    assignmentId: 'assignmentId',
    totalScore: 'totalScore',
    percentile: 'percentile',
    interpretation: 'interpretation',
    details: 'details'
  };

  export type AssignmentScoreScalarFieldEnum = (typeof AssignmentScoreScalarFieldEnum)[keyof typeof AssignmentScoreScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    refreshTokenId: 'refreshTokenId',
    jti: 'jti',
    userId: 'userId',
    revokedAt: 'revokedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userAgent: 'userAgent',
    ip: 'ip'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'userRole'
   */
  export type EnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole'>
    


  /**
   * Reference to a field of type 'userRole[]'
   */
  export type ListEnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'assignmentStatus'
   */
  export type EnumassignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'assignmentStatus'>
    


  /**
   * Reference to a field of type 'assignmentStatus[]'
   */
  export type ListEnumassignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'assignmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userId?: UuidFilter<"user"> | string
    userNumber?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    tokenVersion?: IntFilter<"user"> | number
    role?: EnumuserRoleFilter<"user"> | $Enums.userRole
    isActive?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    createdTests?: TestListRelationFilter
    assignmentsTo?: AssignmentListRelationFilter
    assignmentsBy?: AssignmentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userId?: SortOrder
    userNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    tokenVersion?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: refreshTokenOrderByRelationAggregateInput
    createdTests?: testOrderByRelationAggregateInput
    assignmentsTo?: assignmentOrderByRelationAggregateInput
    assignmentsBy?: assignmentOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    userNumber?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    tokenVersion?: IntFilter<"user"> | number
    role?: EnumuserRoleFilter<"user"> | $Enums.userRole
    isActive?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    createdTests?: TestListRelationFilter
    assignmentsTo?: AssignmentListRelationFilter
    assignmentsBy?: AssignmentListRelationFilter
  }, "userId" | "userNumber" | "email">

  export type userOrderByWithAggregationInput = {
    userId?: SortOrder
    userNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    tokenVersion?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"user"> | string
    userNumber?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    gender?: StringWithAggregatesFilter<"user"> | string
    tokenVersion?: IntWithAggregatesFilter<"user"> | number
    role?: EnumuserRoleWithAggregatesFilter<"user"> | $Enums.userRole
    isActive?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    testId?: UuidFilter<"test"> | string
    testCode?: StringNullableFilter<"test"> | string | null
    title?: StringFilter<"test"> | string
    description?: StringNullableFilter<"test"> | string | null
    isPublished?: BoolFilter<"test"> | boolean
    createdByNumber?: StringNullableFilter<"test"> | string | null
    createdAt?: DateTimeFilter<"test"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    sections?: TestSectionListRelationFilter
    questions?: QuestionListRelationFilter
    assignments?: AssignmentListRelationFilter
  }

  export type testOrderByWithRelationInput = {
    testId?: SortOrder
    testCode?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdByNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: userOrderByWithRelationInput
    sections?: testSectionOrderByRelationAggregateInput
    questions?: questionOrderByRelationAggregateInput
    assignments?: assignmentOrderByRelationAggregateInput
  }

  export type testWhereUniqueInput = Prisma.AtLeast<{
    testId?: string
    testCode?: string
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    title?: StringFilter<"test"> | string
    description?: StringNullableFilter<"test"> | string | null
    isPublished?: BoolFilter<"test"> | boolean
    createdByNumber?: StringNullableFilter<"test"> | string | null
    createdAt?: DateTimeFilter<"test"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    sections?: TestSectionListRelationFilter
    questions?: QuestionListRelationFilter
    assignments?: AssignmentListRelationFilter
  }, "testId" | "testCode">

  export type testOrderByWithAggregationInput = {
    testId?: SortOrder
    testCode?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdByNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: testCountOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    OR?: testScalarWhereWithAggregatesInput[]
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    testId?: UuidWithAggregatesFilter<"test"> | string
    testCode?: StringNullableWithAggregatesFilter<"test"> | string | null
    title?: StringWithAggregatesFilter<"test"> | string
    description?: StringNullableWithAggregatesFilter<"test"> | string | null
    isPublished?: BoolWithAggregatesFilter<"test"> | boolean
    createdByNumber?: StringNullableWithAggregatesFilter<"test"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"test"> | Date | string
  }

  export type testSectionWhereInput = {
    AND?: testSectionWhereInput | testSectionWhereInput[]
    OR?: testSectionWhereInput[]
    NOT?: testSectionWhereInput | testSectionWhereInput[]
    testSectionId?: UuidFilter<"testSection"> | string
    testSectionCode?: StringNullableFilter<"testSection"> | string | null
    testCode?: StringFilter<"testSection"> | string
    name?: StringNullableFilter<"testSection"> | string | null
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type testSectionOrderByWithRelationInput = {
    testSectionId?: SortOrder
    testSectionCode?: SortOrderInput | SortOrder
    testCode?: SortOrder
    name?: SortOrderInput | SortOrder
    test?: testOrderByWithRelationInput
    questions?: questionOrderByRelationAggregateInput
  }

  export type testSectionWhereUniqueInput = Prisma.AtLeast<{
    testSectionId?: string
    AND?: testSectionWhereInput | testSectionWhereInput[]
    OR?: testSectionWhereInput[]
    NOT?: testSectionWhereInput | testSectionWhereInput[]
    testSectionCode?: StringNullableFilter<"testSection"> | string | null
    testCode?: StringFilter<"testSection"> | string
    name?: StringNullableFilter<"testSection"> | string | null
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    questions?: QuestionListRelationFilter
  }, "testSectionId">

  export type testSectionOrderByWithAggregationInput = {
    testSectionId?: SortOrder
    testSectionCode?: SortOrderInput | SortOrder
    testCode?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: testSectionCountOrderByAggregateInput
    _max?: testSectionMaxOrderByAggregateInput
    _min?: testSectionMinOrderByAggregateInput
  }

  export type testSectionScalarWhereWithAggregatesInput = {
    AND?: testSectionScalarWhereWithAggregatesInput | testSectionScalarWhereWithAggregatesInput[]
    OR?: testSectionScalarWhereWithAggregatesInput[]
    NOT?: testSectionScalarWhereWithAggregatesInput | testSectionScalarWhereWithAggregatesInput[]
    testSectionId?: UuidWithAggregatesFilter<"testSection"> | string
    testSectionCode?: StringNullableWithAggregatesFilter<"testSection"> | string | null
    testCode?: StringWithAggregatesFilter<"testSection"> | string
    name?: StringNullableWithAggregatesFilter<"testSection"> | string | null
  }

  export type questionWhereInput = {
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    questionId?: UuidFilter<"question"> | string
    testCode?: StringFilter<"question"> | string
    testSectionId?: UuidNullableFilter<"question"> | string | null
    code?: StringNullableFilter<"question"> | string | null
    prompt?: StringFilter<"question"> | string
    required?: BoolFilter<"question"> | boolean
    metadata?: JsonNullableFilter<"question">
    section?: XOR<TestSectionNullableScalarRelationFilter, testSectionWhereInput> | null
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    questionOption?: QuestionOptionListRelationFilter
    answers?: AnswerListRelationFilter
  }

  export type questionOrderByWithRelationInput = {
    questionId?: SortOrder
    testCode?: SortOrder
    testSectionId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    prompt?: SortOrder
    required?: SortOrder
    metadata?: SortOrderInput | SortOrder
    section?: testSectionOrderByWithRelationInput
    test?: testOrderByWithRelationInput
    questionOption?: questionOptionOrderByRelationAggregateInput
    answers?: answerOrderByRelationAggregateInput
  }

  export type questionWhereUniqueInput = Prisma.AtLeast<{
    questionId?: string
    testCode_code?: questionTestCodeCodeCompoundUniqueInput
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    testCode?: StringFilter<"question"> | string
    testSectionId?: UuidNullableFilter<"question"> | string | null
    code?: StringNullableFilter<"question"> | string | null
    prompt?: StringFilter<"question"> | string
    required?: BoolFilter<"question"> | boolean
    metadata?: JsonNullableFilter<"question">
    section?: XOR<TestSectionNullableScalarRelationFilter, testSectionWhereInput> | null
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    questionOption?: QuestionOptionListRelationFilter
    answers?: AnswerListRelationFilter
  }, "questionId" | "testCode_code">

  export type questionOrderByWithAggregationInput = {
    questionId?: SortOrder
    testCode?: SortOrder
    testSectionId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    prompt?: SortOrder
    required?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: questionCountOrderByAggregateInput
    _max?: questionMaxOrderByAggregateInput
    _min?: questionMinOrderByAggregateInput
  }

  export type questionScalarWhereWithAggregatesInput = {
    AND?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    OR?: questionScalarWhereWithAggregatesInput[]
    NOT?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    questionId?: UuidWithAggregatesFilter<"question"> | string
    testCode?: StringWithAggregatesFilter<"question"> | string
    testSectionId?: UuidNullableWithAggregatesFilter<"question"> | string | null
    code?: StringNullableWithAggregatesFilter<"question"> | string | null
    prompt?: StringWithAggregatesFilter<"question"> | string
    required?: BoolWithAggregatesFilter<"question"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"question">
  }

  export type questionOptionWhereInput = {
    AND?: questionOptionWhereInput | questionOptionWhereInput[]
    OR?: questionOptionWhereInput[]
    NOT?: questionOptionWhereInput | questionOptionWhereInput[]
    questionOptionId?: UuidFilter<"questionOption"> | string
    questionId?: UuidFilter<"questionOption"> | string
    label?: StringFilter<"questionOption"> | string
    value?: StringNullableFilter<"questionOption"> | string | null
    scoreValue?: DecimalNullableFilter<"questionOption"> | Decimal | DecimalJsLike | number | string | null
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type questionOptionOrderByWithRelationInput = {
    questionOptionId?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrderInput | SortOrder
    scoreValue?: SortOrderInput | SortOrder
    question?: questionOrderByWithRelationInput
    answers?: answerOrderByRelationAggregateInput
  }

  export type questionOptionWhereUniqueInput = Prisma.AtLeast<{
    questionOptionId?: string
    AND?: questionOptionWhereInput | questionOptionWhereInput[]
    OR?: questionOptionWhereInput[]
    NOT?: questionOptionWhereInput | questionOptionWhereInput[]
    questionId?: UuidFilter<"questionOption"> | string
    label?: StringFilter<"questionOption"> | string
    value?: StringNullableFilter<"questionOption"> | string | null
    scoreValue?: DecimalNullableFilter<"questionOption"> | Decimal | DecimalJsLike | number | string | null
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
    answers?: AnswerListRelationFilter
  }, "questionOptionId">

  export type questionOptionOrderByWithAggregationInput = {
    questionOptionId?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrderInput | SortOrder
    scoreValue?: SortOrderInput | SortOrder
    _count?: questionOptionCountOrderByAggregateInput
    _avg?: questionOptionAvgOrderByAggregateInput
    _max?: questionOptionMaxOrderByAggregateInput
    _min?: questionOptionMinOrderByAggregateInput
    _sum?: questionOptionSumOrderByAggregateInput
  }

  export type questionOptionScalarWhereWithAggregatesInput = {
    AND?: questionOptionScalarWhereWithAggregatesInput | questionOptionScalarWhereWithAggregatesInput[]
    OR?: questionOptionScalarWhereWithAggregatesInput[]
    NOT?: questionOptionScalarWhereWithAggregatesInput | questionOptionScalarWhereWithAggregatesInput[]
    questionOptionId?: UuidWithAggregatesFilter<"questionOption"> | string
    questionId?: UuidWithAggregatesFilter<"questionOption"> | string
    label?: StringWithAggregatesFilter<"questionOption"> | string
    value?: StringNullableWithAggregatesFilter<"questionOption"> | string | null
    scoreValue?: DecimalNullableWithAggregatesFilter<"questionOption"> | Decimal | DecimalJsLike | number | string | null
  }

  export type assignmentWhereInput = {
    AND?: assignmentWhereInput | assignmentWhereInput[]
    OR?: assignmentWhereInput[]
    NOT?: assignmentWhereInput | assignmentWhereInput[]
    assignmentId?: UuidFilter<"assignment"> | string
    testCode?: StringFilter<"assignment"> | string
    assignedToId?: StringFilter<"assignment"> | string
    assignedById?: StringFilter<"assignment"> | string
    status?: EnumassignmentStatusFilter<"assignment"> | $Enums.assignmentStatus
    dueAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"assignment"> | Date | string
    assignedBy?: XOR<UserScalarRelationFilter, userWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, userWhereInput>
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    answers?: AnswerListRelationFilter
    score?: XOR<AssignmentScoreNullableScalarRelationFilter, assignmentScoreWhereInput> | null
  }

  export type assignmentOrderByWithRelationInput = {
    assignmentId?: SortOrder
    testCode?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignedBy?: userOrderByWithRelationInput
    assignedTo?: userOrderByWithRelationInput
    test?: testOrderByWithRelationInput
    answers?: answerOrderByRelationAggregateInput
    score?: assignmentScoreOrderByWithRelationInput
  }

  export type assignmentWhereUniqueInput = Prisma.AtLeast<{
    assignmentId?: string
    AND?: assignmentWhereInput | assignmentWhereInput[]
    OR?: assignmentWhereInput[]
    NOT?: assignmentWhereInput | assignmentWhereInput[]
    testCode?: StringFilter<"assignment"> | string
    assignedToId?: StringFilter<"assignment"> | string
    assignedById?: StringFilter<"assignment"> | string
    status?: EnumassignmentStatusFilter<"assignment"> | $Enums.assignmentStatus
    dueAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"assignment"> | Date | string
    assignedBy?: XOR<UserScalarRelationFilter, userWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, userWhereInput>
    test?: XOR<TestScalarRelationFilter, testWhereInput>
    answers?: AnswerListRelationFilter
    score?: XOR<AssignmentScoreNullableScalarRelationFilter, assignmentScoreWhereInput> | null
  }, "assignmentId">

  export type assignmentOrderByWithAggregationInput = {
    assignmentId?: SortOrder
    testCode?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: assignmentCountOrderByAggregateInput
    _max?: assignmentMaxOrderByAggregateInput
    _min?: assignmentMinOrderByAggregateInput
  }

  export type assignmentScalarWhereWithAggregatesInput = {
    AND?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[]
    OR?: assignmentScalarWhereWithAggregatesInput[]
    NOT?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[]
    assignmentId?: UuidWithAggregatesFilter<"assignment"> | string
    testCode?: StringWithAggregatesFilter<"assignment"> | string
    assignedToId?: StringWithAggregatesFilter<"assignment"> | string
    assignedById?: StringWithAggregatesFilter<"assignment"> | string
    status?: EnumassignmentStatusWithAggregatesFilter<"assignment"> | $Enums.assignmentStatus
    dueAt?: DateTimeNullableWithAggregatesFilter<"assignment"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"assignment"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"assignment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"assignment"> | Date | string
  }

  export type answerWhereInput = {
    AND?: answerWhereInput | answerWhereInput[]
    OR?: answerWhereInput[]
    NOT?: answerWhereInput | answerWhereInput[]
    answerId?: UuidFilter<"answer"> | string
    assignmentId?: UuidFilter<"answer"> | string
    questionId?: UuidFilter<"answer"> | string
    questionOptionId?: UuidNullableFilter<"answer"> | string | null
    numericAnswer?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    score?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
    option?: XOR<QuestionOptionNullableScalarRelationFilter, questionOptionWhereInput> | null
    assignment?: XOR<AssignmentScalarRelationFilter, assignmentWhereInput>
  }

  export type answerOrderByWithRelationInput = {
    answerId?: SortOrder
    assignmentId?: SortOrder
    questionId?: SortOrder
    questionOptionId?: SortOrderInput | SortOrder
    numericAnswer?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    question?: questionOrderByWithRelationInput
    option?: questionOptionOrderByWithRelationInput
    assignment?: assignmentOrderByWithRelationInput
  }

  export type answerWhereUniqueInput = Prisma.AtLeast<{
    answerId?: string
    assignmentId_questionId?: answerAssignmentIdQuestionIdCompoundUniqueInput
    AND?: answerWhereInput | answerWhereInput[]
    OR?: answerWhereInput[]
    NOT?: answerWhereInput | answerWhereInput[]
    assignmentId?: UuidFilter<"answer"> | string
    questionId?: UuidFilter<"answer"> | string
    questionOptionId?: UuidNullableFilter<"answer"> | string | null
    numericAnswer?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    score?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
    option?: XOR<QuestionOptionNullableScalarRelationFilter, questionOptionWhereInput> | null
    assignment?: XOR<AssignmentScalarRelationFilter, assignmentWhereInput>
  }, "answerId" | "assignmentId_questionId">

  export type answerOrderByWithAggregationInput = {
    answerId?: SortOrder
    assignmentId?: SortOrder
    questionId?: SortOrder
    questionOptionId?: SortOrderInput | SortOrder
    numericAnswer?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    _count?: answerCountOrderByAggregateInput
    _avg?: answerAvgOrderByAggregateInput
    _max?: answerMaxOrderByAggregateInput
    _min?: answerMinOrderByAggregateInput
    _sum?: answerSumOrderByAggregateInput
  }

  export type answerScalarWhereWithAggregatesInput = {
    AND?: answerScalarWhereWithAggregatesInput | answerScalarWhereWithAggregatesInput[]
    OR?: answerScalarWhereWithAggregatesInput[]
    NOT?: answerScalarWhereWithAggregatesInput | answerScalarWhereWithAggregatesInput[]
    answerId?: UuidWithAggregatesFilter<"answer"> | string
    assignmentId?: UuidWithAggregatesFilter<"answer"> | string
    questionId?: UuidWithAggregatesFilter<"answer"> | string
    questionOptionId?: UuidNullableWithAggregatesFilter<"answer"> | string | null
    numericAnswer?: DecimalNullableWithAggregatesFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    score?: DecimalNullableWithAggregatesFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
  }

  export type assignmentScoreWhereInput = {
    AND?: assignmentScoreWhereInput | assignmentScoreWhereInput[]
    OR?: assignmentScoreWhereInput[]
    NOT?: assignmentScoreWhereInput | assignmentScoreWhereInput[]
    assignmentId?: UuidFilter<"assignmentScore"> | string
    totalScore?: DecimalFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string
    percentile?: DecimalNullableFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string | null
    interpretation?: StringNullableFilter<"assignmentScore"> | string | null
    details?: JsonNullableFilter<"assignmentScore">
    assignment?: XOR<AssignmentScalarRelationFilter, assignmentWhereInput>
  }

  export type assignmentScoreOrderByWithRelationInput = {
    assignmentId?: SortOrder
    totalScore?: SortOrder
    percentile?: SortOrderInput | SortOrder
    interpretation?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    assignment?: assignmentOrderByWithRelationInput
  }

  export type assignmentScoreWhereUniqueInput = Prisma.AtLeast<{
    assignmentId?: string
    AND?: assignmentScoreWhereInput | assignmentScoreWhereInput[]
    OR?: assignmentScoreWhereInput[]
    NOT?: assignmentScoreWhereInput | assignmentScoreWhereInput[]
    totalScore?: DecimalFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string
    percentile?: DecimalNullableFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string | null
    interpretation?: StringNullableFilter<"assignmentScore"> | string | null
    details?: JsonNullableFilter<"assignmentScore">
    assignment?: XOR<AssignmentScalarRelationFilter, assignmentWhereInput>
  }, "assignmentId">

  export type assignmentScoreOrderByWithAggregationInput = {
    assignmentId?: SortOrder
    totalScore?: SortOrder
    percentile?: SortOrderInput | SortOrder
    interpretation?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    _count?: assignmentScoreCountOrderByAggregateInput
    _avg?: assignmentScoreAvgOrderByAggregateInput
    _max?: assignmentScoreMaxOrderByAggregateInput
    _min?: assignmentScoreMinOrderByAggregateInput
    _sum?: assignmentScoreSumOrderByAggregateInput
  }

  export type assignmentScoreScalarWhereWithAggregatesInput = {
    AND?: assignmentScoreScalarWhereWithAggregatesInput | assignmentScoreScalarWhereWithAggregatesInput[]
    OR?: assignmentScoreScalarWhereWithAggregatesInput[]
    NOT?: assignmentScoreScalarWhereWithAggregatesInput | assignmentScoreScalarWhereWithAggregatesInput[]
    assignmentId?: UuidWithAggregatesFilter<"assignmentScore"> | string
    totalScore?: DecimalWithAggregatesFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string
    percentile?: DecimalNullableWithAggregatesFilter<"assignmentScore"> | Decimal | DecimalJsLike | number | string | null
    interpretation?: StringNullableWithAggregatesFilter<"assignmentScore"> | string | null
    details?: JsonNullableWithAggregatesFilter<"assignmentScore">
  }

  export type refreshTokenWhereInput = {
    AND?: refreshTokenWhereInput | refreshTokenWhereInput[]
    OR?: refreshTokenWhereInput[]
    NOT?: refreshTokenWhereInput | refreshTokenWhereInput[]
    refreshTokenId?: UuidFilter<"refreshToken"> | string
    jti?: StringFilter<"refreshToken"> | string
    userId?: UuidFilter<"refreshToken"> | string
    revokedAt?: DateTimeNullableFilter<"refreshToken"> | Date | string | null
    expiresAt?: DateTimeFilter<"refreshToken"> | Date | string
    createdAt?: DateTimeFilter<"refreshToken"> | Date | string
    userAgent?: StringNullableFilter<"refreshToken"> | string | null
    ip?: StringNullableFilter<"refreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type refreshTokenOrderByWithRelationInput = {
    refreshTokenId?: SortOrder
    jti?: SortOrder
    userId?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type refreshTokenWhereUniqueInput = Prisma.AtLeast<{
    refreshTokenId?: string
    jti?: string
    AND?: refreshTokenWhereInput | refreshTokenWhereInput[]
    OR?: refreshTokenWhereInput[]
    NOT?: refreshTokenWhereInput | refreshTokenWhereInput[]
    userId?: UuidFilter<"refreshToken"> | string
    revokedAt?: DateTimeNullableFilter<"refreshToken"> | Date | string | null
    expiresAt?: DateTimeFilter<"refreshToken"> | Date | string
    createdAt?: DateTimeFilter<"refreshToken"> | Date | string
    userAgent?: StringNullableFilter<"refreshToken"> | string | null
    ip?: StringNullableFilter<"refreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "refreshTokenId" | "jti">

  export type refreshTokenOrderByWithAggregationInput = {
    refreshTokenId?: SortOrder
    jti?: SortOrder
    userId?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    _count?: refreshTokenCountOrderByAggregateInput
    _max?: refreshTokenMaxOrderByAggregateInput
    _min?: refreshTokenMinOrderByAggregateInput
  }

  export type refreshTokenScalarWhereWithAggregatesInput = {
    AND?: refreshTokenScalarWhereWithAggregatesInput | refreshTokenScalarWhereWithAggregatesInput[]
    OR?: refreshTokenScalarWhereWithAggregatesInput[]
    NOT?: refreshTokenScalarWhereWithAggregatesInput | refreshTokenScalarWhereWithAggregatesInput[]
    refreshTokenId?: UuidWithAggregatesFilter<"refreshToken"> | string
    jti?: StringWithAggregatesFilter<"refreshToken"> | string
    userId?: UuidWithAggregatesFilter<"refreshToken"> | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"refreshToken"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"refreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"refreshToken"> | Date | string
    userAgent?: StringNullableWithAggregatesFilter<"refreshToken"> | string | null
    ip?: StringNullableWithAggregatesFilter<"refreshToken"> | string | null
  }

  export type userCreateInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
    createdTests?: testCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentCreateNestedManyWithoutAssignedByInput
  }

  export type userUncheckedCreateInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
    createdTests?: testUncheckedCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentUncheckedCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentUncheckedCreateNestedManyWithoutAssignedByInput
  }

  export type userUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
    createdTests?: testUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUpdateManyWithoutAssignedByNestedInput
  }

  export type userUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
    createdTests?: testUncheckedUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUncheckedUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUncheckedUpdateManyWithoutAssignedByNestedInput
  }

  export type userCreateManyInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testCreateInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    createdBy?: userCreateNestedOneWithoutCreatedTestsInput
    sections?: testSectionCreateNestedManyWithoutTestInput
    questions?: questionCreateNestedManyWithoutTestInput
    assignments?: assignmentCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdByNumber?: string | null
    createdAt?: Date | string
    sections?: testSectionUncheckedCreateNestedManyWithoutTestInput
    questions?: questionUncheckedCreateNestedManyWithoutTestInput
    assignments?: assignmentUncheckedCreateNestedManyWithoutTestInput
  }

  export type testUpdateInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneWithoutCreatedTestsNestedInput
    sections?: testSectionUpdateManyWithoutTestNestedInput
    questions?: questionUpdateManyWithoutTestNestedInput
    assignments?: assignmentUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdByNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: testSectionUncheckedUpdateManyWithoutTestNestedInput
    questions?: questionUncheckedUpdateManyWithoutTestNestedInput
    assignments?: assignmentUncheckedUpdateManyWithoutTestNestedInput
  }

  export type testCreateManyInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdByNumber?: string | null
    createdAt?: Date | string
  }

  export type testUpdateManyMutationInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testUncheckedUpdateManyInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdByNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testSectionCreateInput = {
    testSectionId?: string
    testSectionCode?: string | null
    name?: string | null
    test: testCreateNestedOneWithoutSectionsInput
    questions?: questionCreateNestedManyWithoutSectionInput
  }

  export type testSectionUncheckedCreateInput = {
    testSectionId?: string
    testSectionCode?: string | null
    testCode: string
    name?: string | null
    questions?: questionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type testSectionUpdateInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    test?: testUpdateOneRequiredWithoutSectionsNestedInput
    questions?: questionUpdateManyWithoutSectionNestedInput
  }

  export type testSectionUncheckedUpdateInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type testSectionCreateManyInput = {
    testSectionId?: string
    testSectionCode?: string | null
    testCode: string
    name?: string | null
  }

  export type testSectionUpdateManyMutationInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testSectionUncheckedUpdateManyInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionCreateInput = {
    questionId?: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionCreateNestedOneWithoutQuestionsInput
    test: testCreateNestedOneWithoutQuestionsInput
    questionOption?: questionOptionCreateNestedManyWithoutQuestionInput
    answers?: answerCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateInput = {
    questionId?: string
    testCode: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: answerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionUpdateOneWithoutQuestionsNestedInput
    test?: testUpdateOneRequiredWithoutQuestionsNestedInput
    questionOption?: questionOptionUpdateManyWithoutQuestionNestedInput
    answers?: answerUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: answerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionCreateManyInput = {
    questionId?: string
    testCode: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionUpdateManyMutationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionOptionCreateInput = {
    questionOptionId?: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
    question: questionCreateNestedOneWithoutQuestionOptionInput
    answers?: answerCreateNestedManyWithoutOptionInput
  }

  export type questionOptionUncheckedCreateInput = {
    questionOptionId?: string
    questionId: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
    answers?: answerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type questionOptionUpdateInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    question?: questionUpdateOneRequiredWithoutQuestionOptionNestedInput
    answers?: answerUpdateManyWithoutOptionNestedInput
  }

  export type questionOptionUncheckedUpdateInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    answers?: answerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type questionOptionCreateManyInput = {
    questionOptionId?: string
    questionId: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type questionOptionUpdateManyMutationInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type questionOptionUncheckedUpdateManyInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type assignmentCreateInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedBy: userCreateNestedOneWithoutAssignmentsByInput
    assignedTo: userCreateNestedOneWithoutAssignmentsToInput
    test: testCreateNestedOneWithoutAssignmentsInput
    answers?: answerCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: answerUncheckedCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUpdateInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: userUpdateOneRequiredWithoutAssignmentsByNestedInput
    assignedTo?: userUpdateOneRequiredWithoutAssignmentsToNestedInput
    test?: testUpdateOneRequiredWithoutAssignmentsNestedInput
    answers?: answerUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answerUncheckedUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentCreateManyInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type assignmentUpdateManyMutationInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assignmentUncheckedUpdateManyInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerCreateInput = {
    answerId?: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
    question: questionCreateNestedOneWithoutAnswersInput
    option?: questionOptionCreateNestedOneWithoutAnswersInput
    assignment: assignmentCreateNestedOneWithoutAnswersInput
  }

  export type answerUncheckedCreateInput = {
    answerId?: string
    assignmentId: string
    questionId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpdateInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    question?: questionUpdateOneRequiredWithoutAnswersNestedInput
    option?: questionOptionUpdateOneWithoutAnswersNestedInput
    assignment?: assignmentUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answerUncheckedUpdateInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateManyInput = {
    answerId?: string
    assignmentId: string
    questionId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpdateManyMutationInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUncheckedUpdateManyInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type assignmentScoreCreateInput = {
    totalScore: Decimal | DecimalJsLike | number | string
    percentile?: Decimal | DecimalJsLike | number | string | null
    interpretation?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    assignment: assignmentCreateNestedOneWithoutScoreInput
  }

  export type assignmentScoreUncheckedCreateInput = {
    assignmentId: string
    totalScore: Decimal | DecimalJsLike | number | string
    percentile?: Decimal | DecimalJsLike | number | string | null
    interpretation?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreUpdateInput = {
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    assignment?: assignmentUpdateOneRequiredWithoutScoreNestedInput
  }

  export type assignmentScoreUncheckedUpdateInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreCreateManyInput = {
    assignmentId: string
    totalScore: Decimal | DecimalJsLike | number | string
    percentile?: Decimal | DecimalJsLike | number | string | null
    interpretation?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreUpdateManyMutationInput = {
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreUncheckedUpdateManyInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type refreshTokenCreateInput = {
    refreshTokenId?: string
    jti: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
    user: userCreateNestedOneWithoutRefreshTokensInput
  }

  export type refreshTokenUncheckedCreateInput = {
    refreshTokenId?: string
    jti: string
    userId: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
  }

  export type refreshTokenUpdateInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type refreshTokenUncheckedUpdateInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenCreateManyInput = {
    refreshTokenId?: string
    jti: string
    userId: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
  }

  export type refreshTokenUpdateManyMutationInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateManyInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: refreshTokenWhereInput
    some?: refreshTokenWhereInput
    none?: refreshTokenWhereInput
  }

  export type TestListRelationFilter = {
    every?: testWhereInput
    some?: testWhereInput
    none?: testWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: assignmentWhereInput
    some?: assignmentWhereInput
    none?: assignmentWhereInput
  }

  export type refreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type testOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type assignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    userId?: SortOrder
    userNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    tokenVersion?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userId?: SortOrder
    userNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    tokenVersion?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userId?: SortOrder
    userNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    tokenVersion?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type TestSectionListRelationFilter = {
    every?: testSectionWhereInput
    some?: testSectionWhereInput
    none?: testSectionWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: questionWhereInput
    some?: questionWhereInput
    none?: questionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type testSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type testCountOrderByAggregateInput = {
    testId?: SortOrder
    testCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdByNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    testId?: SortOrder
    testCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdByNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    testId?: SortOrder
    testCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdByNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TestScalarRelationFilter = {
    is?: testWhereInput
    isNot?: testWhereInput
  }

  export type testSectionCountOrderByAggregateInput = {
    testSectionId?: SortOrder
    testSectionCode?: SortOrder
    testCode?: SortOrder
    name?: SortOrder
  }

  export type testSectionMaxOrderByAggregateInput = {
    testSectionId?: SortOrder
    testSectionCode?: SortOrder
    testCode?: SortOrder
    name?: SortOrder
  }

  export type testSectionMinOrderByAggregateInput = {
    testSectionId?: SortOrder
    testSectionCode?: SortOrder
    testCode?: SortOrder
    name?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TestSectionNullableScalarRelationFilter = {
    is?: testSectionWhereInput | null
    isNot?: testSectionWhereInput | null
  }

  export type QuestionOptionListRelationFilter = {
    every?: questionOptionWhereInput
    some?: questionOptionWhereInput
    none?: questionOptionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: answerWhereInput
    some?: answerWhereInput
    none?: answerWhereInput
  }

  export type questionOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type answerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionTestCodeCodeCompoundUniqueInput = {
    testCode: string
    code: string
  }

  export type questionCountOrderByAggregateInput = {
    questionId?: SortOrder
    testCode?: SortOrder
    testSectionId?: SortOrder
    code?: SortOrder
    prompt?: SortOrder
    required?: SortOrder
    metadata?: SortOrder
  }

  export type questionMaxOrderByAggregateInput = {
    questionId?: SortOrder
    testCode?: SortOrder
    testSectionId?: SortOrder
    code?: SortOrder
    prompt?: SortOrder
    required?: SortOrder
  }

  export type questionMinOrderByAggregateInput = {
    questionId?: SortOrder
    testCode?: SortOrder
    testSectionId?: SortOrder
    code?: SortOrder
    prompt?: SortOrder
    required?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type QuestionScalarRelationFilter = {
    is?: questionWhereInput
    isNot?: questionWhereInput
  }

  export type questionOptionCountOrderByAggregateInput = {
    questionOptionId?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    scoreValue?: SortOrder
  }

  export type questionOptionAvgOrderByAggregateInput = {
    scoreValue?: SortOrder
  }

  export type questionOptionMaxOrderByAggregateInput = {
    questionOptionId?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    scoreValue?: SortOrder
  }

  export type questionOptionMinOrderByAggregateInput = {
    questionOptionId?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    scoreValue?: SortOrder
  }

  export type questionOptionSumOrderByAggregateInput = {
    scoreValue?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumassignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.assignmentStatus | EnumassignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumassignmentStatusFilter<$PrismaModel> | $Enums.assignmentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type AssignmentScoreNullableScalarRelationFilter = {
    is?: assignmentScoreWhereInput | null
    isNot?: assignmentScoreWhereInput | null
  }

  export type assignmentCountOrderByAggregateInput = {
    assignmentId?: SortOrder
    testCode?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type assignmentMaxOrderByAggregateInput = {
    assignmentId?: SortOrder
    testCode?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type assignmentMinOrderByAggregateInput = {
    assignmentId?: SortOrder
    testCode?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumassignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignmentStatus | EnumassignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumassignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.assignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumassignmentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type QuestionOptionNullableScalarRelationFilter = {
    is?: questionOptionWhereInput | null
    isNot?: questionOptionWhereInput | null
  }

  export type AssignmentScalarRelationFilter = {
    is?: assignmentWhereInput
    isNot?: assignmentWhereInput
  }

  export type answerAssignmentIdQuestionIdCompoundUniqueInput = {
    assignmentId: string
    questionId: string
  }

  export type answerCountOrderByAggregateInput = {
    answerId?: SortOrder
    assignmentId?: SortOrder
    questionId?: SortOrder
    questionOptionId?: SortOrder
    numericAnswer?: SortOrder
    score?: SortOrder
  }

  export type answerAvgOrderByAggregateInput = {
    numericAnswer?: SortOrder
    score?: SortOrder
  }

  export type answerMaxOrderByAggregateInput = {
    answerId?: SortOrder
    assignmentId?: SortOrder
    questionId?: SortOrder
    questionOptionId?: SortOrder
    numericAnswer?: SortOrder
    score?: SortOrder
  }

  export type answerMinOrderByAggregateInput = {
    answerId?: SortOrder
    assignmentId?: SortOrder
    questionId?: SortOrder
    questionOptionId?: SortOrder
    numericAnswer?: SortOrder
    score?: SortOrder
  }

  export type answerSumOrderByAggregateInput = {
    numericAnswer?: SortOrder
    score?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type assignmentScoreCountOrderByAggregateInput = {
    assignmentId?: SortOrder
    totalScore?: SortOrder
    percentile?: SortOrder
    interpretation?: SortOrder
    details?: SortOrder
  }

  export type assignmentScoreAvgOrderByAggregateInput = {
    totalScore?: SortOrder
    percentile?: SortOrder
  }

  export type assignmentScoreMaxOrderByAggregateInput = {
    assignmentId?: SortOrder
    totalScore?: SortOrder
    percentile?: SortOrder
    interpretation?: SortOrder
  }

  export type assignmentScoreMinOrderByAggregateInput = {
    assignmentId?: SortOrder
    totalScore?: SortOrder
    percentile?: SortOrder
    interpretation?: SortOrder
  }

  export type assignmentScoreSumOrderByAggregateInput = {
    totalScore?: SortOrder
    percentile?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type refreshTokenCountOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    jti?: SortOrder
    userId?: SortOrder
    revokedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
  }

  export type refreshTokenMaxOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    jti?: SortOrder
    userId?: SortOrder
    revokedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
  }

  export type refreshTokenMinOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    jti?: SortOrder
    userId?: SortOrder
    revokedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
  }

  export type refreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
  }

  export type testCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput> | testCreateWithoutCreatedByInput[] | testUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: testCreateOrConnectWithoutCreatedByInput | testCreateOrConnectWithoutCreatedByInput[]
    createMany?: testCreateManyCreatedByInputEnvelope
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
  }

  export type assignmentCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput> | assignmentCreateWithoutAssignedToInput[] | assignmentUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedToInput | assignmentCreateOrConnectWithoutAssignedToInput[]
    createMany?: assignmentCreateManyAssignedToInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type assignmentCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput> | assignmentCreateWithoutAssignedByInput[] | assignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedByInput | assignmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: assignmentCreateManyAssignedByInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type refreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
  }

  export type testUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput> | testCreateWithoutCreatedByInput[] | testUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: testCreateOrConnectWithoutCreatedByInput | testCreateOrConnectWithoutCreatedByInput[]
    createMany?: testCreateManyCreatedByInputEnvelope
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
  }

  export type assignmentUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput> | assignmentCreateWithoutAssignedToInput[] | assignmentUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedToInput | assignmentCreateOrConnectWithoutAssignedToInput[]
    createMany?: assignmentCreateManyAssignedToInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type assignmentUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput> | assignmentCreateWithoutAssignedByInput[] | assignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedByInput | assignmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: assignmentCreateManyAssignedByInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumuserRoleFieldUpdateOperationsInput = {
    set?: $Enums.userRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type refreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshTokenUpsertWithWhereUniqueWithoutUserInput | refreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    set?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    disconnect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    delete?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    update?: refreshTokenUpdateWithWhereUniqueWithoutUserInput | refreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshTokenUpdateManyWithWhereWithoutUserInput | refreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
  }

  export type testUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput> | testCreateWithoutCreatedByInput[] | testUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: testCreateOrConnectWithoutCreatedByInput | testCreateOrConnectWithoutCreatedByInput[]
    upsert?: testUpsertWithWhereUniqueWithoutCreatedByInput | testUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: testCreateManyCreatedByInputEnvelope
    set?: testWhereUniqueInput | testWhereUniqueInput[]
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[]
    delete?: testWhereUniqueInput | testWhereUniqueInput[]
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
    update?: testUpdateWithWhereUniqueWithoutCreatedByInput | testUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: testUpdateManyWithWhereWithoutCreatedByInput | testUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: testScalarWhereInput | testScalarWhereInput[]
  }

  export type assignmentUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput> | assignmentCreateWithoutAssignedToInput[] | assignmentUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedToInput | assignmentCreateOrConnectWithoutAssignedToInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutAssignedToInput | assignmentUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: assignmentCreateManyAssignedToInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutAssignedToInput | assignmentUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutAssignedToInput | assignmentUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type assignmentUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput> | assignmentCreateWithoutAssignedByInput[] | assignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedByInput | assignmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutAssignedByInput | assignmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: assignmentCreateManyAssignedByInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutAssignedByInput | assignmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutAssignedByInput | assignmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type refreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshTokenUpsertWithWhereUniqueWithoutUserInput | refreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    set?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    disconnect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    delete?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    update?: refreshTokenUpdateWithWhereUniqueWithoutUserInput | refreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshTokenUpdateManyWithWhereWithoutUserInput | refreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
  }

  export type testUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput> | testCreateWithoutCreatedByInput[] | testUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: testCreateOrConnectWithoutCreatedByInput | testCreateOrConnectWithoutCreatedByInput[]
    upsert?: testUpsertWithWhereUniqueWithoutCreatedByInput | testUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: testCreateManyCreatedByInputEnvelope
    set?: testWhereUniqueInput | testWhereUniqueInput[]
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[]
    delete?: testWhereUniqueInput | testWhereUniqueInput[]
    connect?: testWhereUniqueInput | testWhereUniqueInput[]
    update?: testUpdateWithWhereUniqueWithoutCreatedByInput | testUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: testUpdateManyWithWhereWithoutCreatedByInput | testUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: testScalarWhereInput | testScalarWhereInput[]
  }

  export type assignmentUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput> | assignmentCreateWithoutAssignedToInput[] | assignmentUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedToInput | assignmentCreateOrConnectWithoutAssignedToInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutAssignedToInput | assignmentUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: assignmentCreateManyAssignedToInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutAssignedToInput | assignmentUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutAssignedToInput | assignmentUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type assignmentUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput> | assignmentCreateWithoutAssignedByInput[] | assignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutAssignedByInput | assignmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutAssignedByInput | assignmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: assignmentCreateManyAssignedByInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutAssignedByInput | assignmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutAssignedByInput | assignmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCreatedTestsInput = {
    create?: XOR<userCreateWithoutCreatedTestsInput, userUncheckedCreateWithoutCreatedTestsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreatedTestsInput
    connect?: userWhereUniqueInput
  }

  export type testSectionCreateNestedManyWithoutTestInput = {
    create?: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput> | testSectionCreateWithoutTestInput[] | testSectionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: testSectionCreateOrConnectWithoutTestInput | testSectionCreateOrConnectWithoutTestInput[]
    createMany?: testSectionCreateManyTestInputEnvelope
    connect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
  }

  export type questionCreateNestedManyWithoutTestInput = {
    create?: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput> | questionCreateWithoutTestInput[] | questionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: questionCreateOrConnectWithoutTestInput | questionCreateOrConnectWithoutTestInput[]
    createMany?: questionCreateManyTestInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type assignmentCreateNestedManyWithoutTestInput = {
    create?: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput> | assignmentCreateWithoutTestInput[] | assignmentUncheckedCreateWithoutTestInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutTestInput | assignmentCreateOrConnectWithoutTestInput[]
    createMany?: assignmentCreateManyTestInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type testSectionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput> | testSectionCreateWithoutTestInput[] | testSectionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: testSectionCreateOrConnectWithoutTestInput | testSectionCreateOrConnectWithoutTestInput[]
    createMany?: testSectionCreateManyTestInputEnvelope
    connect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
  }

  export type questionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput> | questionCreateWithoutTestInput[] | questionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: questionCreateOrConnectWithoutTestInput | questionCreateOrConnectWithoutTestInput[]
    createMany?: questionCreateManyTestInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type assignmentUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput> | assignmentCreateWithoutTestInput[] | assignmentUncheckedCreateWithoutTestInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutTestInput | assignmentCreateOrConnectWithoutTestInput[]
    createMany?: assignmentCreateManyTestInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneWithoutCreatedTestsNestedInput = {
    create?: XOR<userCreateWithoutCreatedTestsInput, userUncheckedCreateWithoutCreatedTestsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreatedTestsInput
    upsert?: userUpsertWithoutCreatedTestsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCreatedTestsInput, userUpdateWithoutCreatedTestsInput>, userUncheckedUpdateWithoutCreatedTestsInput>
  }

  export type testSectionUpdateManyWithoutTestNestedInput = {
    create?: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput> | testSectionCreateWithoutTestInput[] | testSectionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: testSectionCreateOrConnectWithoutTestInput | testSectionCreateOrConnectWithoutTestInput[]
    upsert?: testSectionUpsertWithWhereUniqueWithoutTestInput | testSectionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: testSectionCreateManyTestInputEnvelope
    set?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    disconnect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    delete?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    connect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    update?: testSectionUpdateWithWhereUniqueWithoutTestInput | testSectionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: testSectionUpdateManyWithWhereWithoutTestInput | testSectionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: testSectionScalarWhereInput | testSectionScalarWhereInput[]
  }

  export type questionUpdateManyWithoutTestNestedInput = {
    create?: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput> | questionCreateWithoutTestInput[] | questionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: questionCreateOrConnectWithoutTestInput | questionCreateOrConnectWithoutTestInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutTestInput | questionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: questionCreateManyTestInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutTestInput | questionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: questionUpdateManyWithWhereWithoutTestInput | questionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type assignmentUpdateManyWithoutTestNestedInput = {
    create?: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput> | assignmentCreateWithoutTestInput[] | assignmentUncheckedCreateWithoutTestInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutTestInput | assignmentCreateOrConnectWithoutTestInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutTestInput | assignmentUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: assignmentCreateManyTestInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutTestInput | assignmentUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutTestInput | assignmentUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type testSectionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput> | testSectionCreateWithoutTestInput[] | testSectionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: testSectionCreateOrConnectWithoutTestInput | testSectionCreateOrConnectWithoutTestInput[]
    upsert?: testSectionUpsertWithWhereUniqueWithoutTestInput | testSectionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: testSectionCreateManyTestInputEnvelope
    set?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    disconnect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    delete?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    connect?: testSectionWhereUniqueInput | testSectionWhereUniqueInput[]
    update?: testSectionUpdateWithWhereUniqueWithoutTestInput | testSectionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: testSectionUpdateManyWithWhereWithoutTestInput | testSectionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: testSectionScalarWhereInput | testSectionScalarWhereInput[]
  }

  export type questionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput> | questionCreateWithoutTestInput[] | questionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: questionCreateOrConnectWithoutTestInput | questionCreateOrConnectWithoutTestInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutTestInput | questionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: questionCreateManyTestInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutTestInput | questionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: questionUpdateManyWithWhereWithoutTestInput | questionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type assignmentUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput> | assignmentCreateWithoutTestInput[] | assignmentUncheckedCreateWithoutTestInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutTestInput | assignmentCreateOrConnectWithoutTestInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutTestInput | assignmentUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: assignmentCreateManyTestInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutTestInput | assignmentUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutTestInput | assignmentUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type testCreateNestedOneWithoutSectionsInput = {
    create?: XOR<testCreateWithoutSectionsInput, testUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: testCreateOrConnectWithoutSectionsInput
    connect?: testWhereUniqueInput
  }

  export type questionCreateNestedManyWithoutSectionInput = {
    create?: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput> | questionCreateWithoutSectionInput[] | questionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: questionCreateOrConnectWithoutSectionInput | questionCreateOrConnectWithoutSectionInput[]
    createMany?: questionCreateManySectionInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type questionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput> | questionCreateWithoutSectionInput[] | questionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: questionCreateOrConnectWithoutSectionInput | questionCreateOrConnectWithoutSectionInput[]
    createMany?: questionCreateManySectionInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type testUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<testCreateWithoutSectionsInput, testUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: testCreateOrConnectWithoutSectionsInput
    upsert?: testUpsertWithoutSectionsInput
    connect?: testWhereUniqueInput
    update?: XOR<XOR<testUpdateToOneWithWhereWithoutSectionsInput, testUpdateWithoutSectionsInput>, testUncheckedUpdateWithoutSectionsInput>
  }

  export type questionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput> | questionCreateWithoutSectionInput[] | questionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: questionCreateOrConnectWithoutSectionInput | questionCreateOrConnectWithoutSectionInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutSectionInput | questionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: questionCreateManySectionInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutSectionInput | questionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: questionUpdateManyWithWhereWithoutSectionInput | questionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type questionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput> | questionCreateWithoutSectionInput[] | questionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: questionCreateOrConnectWithoutSectionInput | questionCreateOrConnectWithoutSectionInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutSectionInput | questionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: questionCreateManySectionInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutSectionInput | questionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: questionUpdateManyWithWhereWithoutSectionInput | questionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type testSectionCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<testSectionCreateWithoutQuestionsInput, testSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: testSectionCreateOrConnectWithoutQuestionsInput
    connect?: testSectionWhereUniqueInput
  }

  export type testCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<testCreateWithoutQuestionsInput, testUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: testCreateOrConnectWithoutQuestionsInput
    connect?: testWhereUniqueInput
  }

  export type questionOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput> | questionOptionCreateWithoutQuestionInput[] | questionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionOptionCreateOrConnectWithoutQuestionInput | questionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: questionOptionCreateManyQuestionInputEnvelope
    connect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
  }

  export type answerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type questionOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput> | questionOptionCreateWithoutQuestionInput[] | questionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionOptionCreateOrConnectWithoutQuestionInput | questionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: questionOptionCreateManyQuestionInputEnvelope
    connect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
  }

  export type answerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type testSectionUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<testSectionCreateWithoutQuestionsInput, testSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: testSectionCreateOrConnectWithoutQuestionsInput
    upsert?: testSectionUpsertWithoutQuestionsInput
    disconnect?: testSectionWhereInput | boolean
    delete?: testSectionWhereInput | boolean
    connect?: testSectionWhereUniqueInput
    update?: XOR<XOR<testSectionUpdateToOneWithWhereWithoutQuestionsInput, testSectionUpdateWithoutQuestionsInput>, testSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type testUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<testCreateWithoutQuestionsInput, testUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: testCreateOrConnectWithoutQuestionsInput
    upsert?: testUpsertWithoutQuestionsInput
    connect?: testWhereUniqueInput
    update?: XOR<XOR<testUpdateToOneWithWhereWithoutQuestionsInput, testUpdateWithoutQuestionsInput>, testUncheckedUpdateWithoutQuestionsInput>
  }

  export type questionOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput> | questionOptionCreateWithoutQuestionInput[] | questionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionOptionCreateOrConnectWithoutQuestionInput | questionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: questionOptionUpsertWithWhereUniqueWithoutQuestionInput | questionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: questionOptionCreateManyQuestionInputEnvelope
    set?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    disconnect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    delete?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    connect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    update?: questionOptionUpdateWithWhereUniqueWithoutQuestionInput | questionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: questionOptionUpdateManyWithWhereWithoutQuestionInput | questionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: questionOptionScalarWhereInput | questionOptionScalarWhereInput[]
  }

  export type answerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutQuestionInput | answerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutQuestionInput | answerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutQuestionInput | answerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type questionOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput> | questionOptionCreateWithoutQuestionInput[] | questionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionOptionCreateOrConnectWithoutQuestionInput | questionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: questionOptionUpsertWithWhereUniqueWithoutQuestionInput | questionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: questionOptionCreateManyQuestionInputEnvelope
    set?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    disconnect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    delete?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    connect?: questionOptionWhereUniqueInput | questionOptionWhereUniqueInput[]
    update?: questionOptionUpdateWithWhereUniqueWithoutQuestionInput | questionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: questionOptionUpdateManyWithWhereWithoutQuestionInput | questionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: questionOptionScalarWhereInput | questionOptionScalarWhereInput[]
  }

  export type answerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutQuestionInput | answerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutQuestionInput | answerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutQuestionInput | answerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type questionCreateNestedOneWithoutQuestionOptionInput = {
    create?: XOR<questionCreateWithoutQuestionOptionInput, questionUncheckedCreateWithoutQuestionOptionInput>
    connectOrCreate?: questionCreateOrConnectWithoutQuestionOptionInput
    connect?: questionWhereUniqueInput
  }

  export type answerCreateNestedManyWithoutOptionInput = {
    create?: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput> | answerCreateWithoutOptionInput[] | answerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutOptionInput | answerCreateOrConnectWithoutOptionInput[]
    createMany?: answerCreateManyOptionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type answerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput> | answerCreateWithoutOptionInput[] | answerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutOptionInput | answerCreateOrConnectWithoutOptionInput[]
    createMany?: answerCreateManyOptionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type questionUpdateOneRequiredWithoutQuestionOptionNestedInput = {
    create?: XOR<questionCreateWithoutQuestionOptionInput, questionUncheckedCreateWithoutQuestionOptionInput>
    connectOrCreate?: questionCreateOrConnectWithoutQuestionOptionInput
    upsert?: questionUpsertWithoutQuestionOptionInput
    connect?: questionWhereUniqueInput
    update?: XOR<XOR<questionUpdateToOneWithWhereWithoutQuestionOptionInput, questionUpdateWithoutQuestionOptionInput>, questionUncheckedUpdateWithoutQuestionOptionInput>
  }

  export type answerUpdateManyWithoutOptionNestedInput = {
    create?: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput> | answerCreateWithoutOptionInput[] | answerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutOptionInput | answerCreateOrConnectWithoutOptionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutOptionInput | answerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: answerCreateManyOptionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutOptionInput | answerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutOptionInput | answerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type answerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput> | answerCreateWithoutOptionInput[] | answerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutOptionInput | answerCreateOrConnectWithoutOptionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutOptionInput | answerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: answerCreateManyOptionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutOptionInput | answerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutOptionInput | answerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAssignmentsByInput = {
    create?: XOR<userCreateWithoutAssignmentsByInput, userUncheckedCreateWithoutAssignmentsByInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentsByInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutAssignmentsToInput = {
    create?: XOR<userCreateWithoutAssignmentsToInput, userUncheckedCreateWithoutAssignmentsToInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentsToInput
    connect?: userWhereUniqueInput
  }

  export type testCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<testCreateWithoutAssignmentsInput, testUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: testCreateOrConnectWithoutAssignmentsInput
    connect?: testWhereUniqueInput
  }

  export type answerCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput> | answerCreateWithoutAssignmentInput[] | answerUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: answerCreateOrConnectWithoutAssignmentInput | answerCreateOrConnectWithoutAssignmentInput[]
    createMany?: answerCreateManyAssignmentInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type assignmentScoreCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: assignmentScoreCreateOrConnectWithoutAssignmentInput
    connect?: assignmentScoreWhereUniqueInput
  }

  export type answerUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput> | answerCreateWithoutAssignmentInput[] | answerUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: answerCreateOrConnectWithoutAssignmentInput | answerCreateOrConnectWithoutAssignmentInput[]
    createMany?: answerCreateManyAssignmentInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: assignmentScoreCreateOrConnectWithoutAssignmentInput
    connect?: assignmentScoreWhereUniqueInput
  }

  export type EnumassignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.assignmentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutAssignmentsByNestedInput = {
    create?: XOR<userCreateWithoutAssignmentsByInput, userUncheckedCreateWithoutAssignmentsByInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentsByInput
    upsert?: userUpsertWithoutAssignmentsByInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAssignmentsByInput, userUpdateWithoutAssignmentsByInput>, userUncheckedUpdateWithoutAssignmentsByInput>
  }

  export type userUpdateOneRequiredWithoutAssignmentsToNestedInput = {
    create?: XOR<userCreateWithoutAssignmentsToInput, userUncheckedCreateWithoutAssignmentsToInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentsToInput
    upsert?: userUpsertWithoutAssignmentsToInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAssignmentsToInput, userUpdateWithoutAssignmentsToInput>, userUncheckedUpdateWithoutAssignmentsToInput>
  }

  export type testUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<testCreateWithoutAssignmentsInput, testUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: testCreateOrConnectWithoutAssignmentsInput
    upsert?: testUpsertWithoutAssignmentsInput
    connect?: testWhereUniqueInput
    update?: XOR<XOR<testUpdateToOneWithWhereWithoutAssignmentsInput, testUpdateWithoutAssignmentsInput>, testUncheckedUpdateWithoutAssignmentsInput>
  }

  export type answerUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput> | answerCreateWithoutAssignmentInput[] | answerUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: answerCreateOrConnectWithoutAssignmentInput | answerCreateOrConnectWithoutAssignmentInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutAssignmentInput | answerUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: answerCreateManyAssignmentInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutAssignmentInput | answerUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: answerUpdateManyWithWhereWithoutAssignmentInput | answerUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type assignmentScoreUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: assignmentScoreCreateOrConnectWithoutAssignmentInput
    upsert?: assignmentScoreUpsertWithoutAssignmentInput
    disconnect?: assignmentScoreWhereInput | boolean
    delete?: assignmentScoreWhereInput | boolean
    connect?: assignmentScoreWhereUniqueInput
    update?: XOR<XOR<assignmentScoreUpdateToOneWithWhereWithoutAssignmentInput, assignmentScoreUpdateWithoutAssignmentInput>, assignmentScoreUncheckedUpdateWithoutAssignmentInput>
  }

  export type answerUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput> | answerCreateWithoutAssignmentInput[] | answerUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: answerCreateOrConnectWithoutAssignmentInput | answerCreateOrConnectWithoutAssignmentInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutAssignmentInput | answerUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: answerCreateManyAssignmentInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutAssignmentInput | answerUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: answerUpdateManyWithWhereWithoutAssignmentInput | answerUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: assignmentScoreCreateOrConnectWithoutAssignmentInput
    upsert?: assignmentScoreUpsertWithoutAssignmentInput
    disconnect?: assignmentScoreWhereInput | boolean
    delete?: assignmentScoreWhereInput | boolean
    connect?: assignmentScoreWhereUniqueInput
    update?: XOR<XOR<assignmentScoreUpdateToOneWithWhereWithoutAssignmentInput, assignmentScoreUpdateWithoutAssignmentInput>, assignmentScoreUncheckedUpdateWithoutAssignmentInput>
  }

  export type questionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<questionCreateWithoutAnswersInput, questionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionCreateOrConnectWithoutAnswersInput
    connect?: questionWhereUniqueInput
  }

  export type questionOptionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<questionOptionCreateWithoutAnswersInput, questionOptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionOptionCreateOrConnectWithoutAnswersInput
    connect?: questionOptionWhereUniqueInput
  }

  export type assignmentCreateNestedOneWithoutAnswersInput = {
    create?: XOR<assignmentCreateWithoutAnswersInput, assignmentUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: assignmentCreateOrConnectWithoutAnswersInput
    connect?: assignmentWhereUniqueInput
  }

  export type questionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<questionCreateWithoutAnswersInput, questionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionCreateOrConnectWithoutAnswersInput
    upsert?: questionUpsertWithoutAnswersInput
    connect?: questionWhereUniqueInput
    update?: XOR<XOR<questionUpdateToOneWithWhereWithoutAnswersInput, questionUpdateWithoutAnswersInput>, questionUncheckedUpdateWithoutAnswersInput>
  }

  export type questionOptionUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<questionOptionCreateWithoutAnswersInput, questionOptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionOptionCreateOrConnectWithoutAnswersInput
    upsert?: questionOptionUpsertWithoutAnswersInput
    disconnect?: questionOptionWhereInput | boolean
    delete?: questionOptionWhereInput | boolean
    connect?: questionOptionWhereUniqueInput
    update?: XOR<XOR<questionOptionUpdateToOneWithWhereWithoutAnswersInput, questionOptionUpdateWithoutAnswersInput>, questionOptionUncheckedUpdateWithoutAnswersInput>
  }

  export type assignmentUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<assignmentCreateWithoutAnswersInput, assignmentUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: assignmentCreateOrConnectWithoutAnswersInput
    upsert?: assignmentUpsertWithoutAnswersInput
    connect?: assignmentWhereUniqueInput
    update?: XOR<XOR<assignmentUpdateToOneWithWhereWithoutAnswersInput, assignmentUpdateWithoutAnswersInput>, assignmentUncheckedUpdateWithoutAnswersInput>
  }

  export type assignmentCreateNestedOneWithoutScoreInput = {
    create?: XOR<assignmentCreateWithoutScoreInput, assignmentUncheckedCreateWithoutScoreInput>
    connectOrCreate?: assignmentCreateOrConnectWithoutScoreInput
    connect?: assignmentWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type assignmentUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<assignmentCreateWithoutScoreInput, assignmentUncheckedCreateWithoutScoreInput>
    connectOrCreate?: assignmentCreateOrConnectWithoutScoreInput
    upsert?: assignmentUpsertWithoutScoreInput
    connect?: assignmentWhereUniqueInput
    update?: XOR<XOR<assignmentUpdateToOneWithWhereWithoutScoreInput, assignmentUpdateWithoutScoreInput>, assignmentUncheckedUpdateWithoutScoreInput>
  }

  export type userCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<userCreateWithoutRefreshTokensInput, userUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: userCreateOrConnectWithoutRefreshTokensInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<userCreateWithoutRefreshTokensInput, userUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: userCreateOrConnectWithoutRefreshTokensInput
    upsert?: userUpsertWithoutRefreshTokensInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRefreshTokensInput, userUpdateWithoutRefreshTokensInput>, userUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumassignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.assignmentStatus | EnumassignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumassignmentStatusFilter<$PrismaModel> | $Enums.assignmentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumassignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignmentStatus | EnumassignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignmentStatus[] | ListEnumassignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumassignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.assignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumassignmentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type refreshTokenCreateWithoutUserInput = {
    refreshTokenId?: string
    jti: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
  }

  export type refreshTokenUncheckedCreateWithoutUserInput = {
    refreshTokenId?: string
    jti: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
  }

  export type refreshTokenCreateOrConnectWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    create: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput>
  }

  export type refreshTokenCreateManyUserInputEnvelope = {
    data: refreshTokenCreateManyUserInput | refreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type testCreateWithoutCreatedByInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    sections?: testSectionCreateNestedManyWithoutTestInput
    questions?: questionCreateNestedManyWithoutTestInput
    assignments?: assignmentCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateWithoutCreatedByInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    sections?: testSectionUncheckedCreateNestedManyWithoutTestInput
    questions?: questionUncheckedCreateNestedManyWithoutTestInput
    assignments?: assignmentUncheckedCreateNestedManyWithoutTestInput
  }

  export type testCreateOrConnectWithoutCreatedByInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput>
  }

  export type testCreateManyCreatedByInputEnvelope = {
    data: testCreateManyCreatedByInput | testCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type assignmentCreateWithoutAssignedToInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedBy: userCreateNestedOneWithoutAssignmentsByInput
    test: testCreateNestedOneWithoutAssignmentsInput
    answers?: answerCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutAssignedToInput = {
    assignmentId?: string
    testCode: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: answerUncheckedCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentCreateOrConnectWithoutAssignedToInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput>
  }

  export type assignmentCreateManyAssignedToInputEnvelope = {
    data: assignmentCreateManyAssignedToInput | assignmentCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type assignmentCreateWithoutAssignedByInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedTo: userCreateNestedOneWithoutAssignmentsToInput
    test: testCreateNestedOneWithoutAssignmentsInput
    answers?: answerCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutAssignedByInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: answerUncheckedCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentCreateOrConnectWithoutAssignedByInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput>
  }

  export type assignmentCreateManyAssignedByInputEnvelope = {
    data: assignmentCreateManyAssignedByInput | assignmentCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type refreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    update: XOR<refreshTokenUpdateWithoutUserInput, refreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput>
  }

  export type refreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    data: XOR<refreshTokenUpdateWithoutUserInput, refreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type refreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: refreshTokenScalarWhereInput
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type refreshTokenScalarWhereInput = {
    AND?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
    OR?: refreshTokenScalarWhereInput[]
    NOT?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
    refreshTokenId?: UuidFilter<"refreshToken"> | string
    jti?: StringFilter<"refreshToken"> | string
    userId?: UuidFilter<"refreshToken"> | string
    revokedAt?: DateTimeNullableFilter<"refreshToken"> | Date | string | null
    expiresAt?: DateTimeFilter<"refreshToken"> | Date | string
    createdAt?: DateTimeFilter<"refreshToken"> | Date | string
    userAgent?: StringNullableFilter<"refreshToken"> | string | null
    ip?: StringNullableFilter<"refreshToken"> | string | null
  }

  export type testUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: testWhereUniqueInput
    update: XOR<testUpdateWithoutCreatedByInput, testUncheckedUpdateWithoutCreatedByInput>
    create: XOR<testCreateWithoutCreatedByInput, testUncheckedCreateWithoutCreatedByInput>
  }

  export type testUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: testWhereUniqueInput
    data: XOR<testUpdateWithoutCreatedByInput, testUncheckedUpdateWithoutCreatedByInput>
  }

  export type testUpdateManyWithWhereWithoutCreatedByInput = {
    where: testScalarWhereInput
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type testScalarWhereInput = {
    AND?: testScalarWhereInput | testScalarWhereInput[]
    OR?: testScalarWhereInput[]
    NOT?: testScalarWhereInput | testScalarWhereInput[]
    testId?: UuidFilter<"test"> | string
    testCode?: StringNullableFilter<"test"> | string | null
    title?: StringFilter<"test"> | string
    description?: StringNullableFilter<"test"> | string | null
    isPublished?: BoolFilter<"test"> | boolean
    createdByNumber?: StringNullableFilter<"test"> | string | null
    createdAt?: DateTimeFilter<"test"> | Date | string
  }

  export type assignmentUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: assignmentWhereUniqueInput
    update: XOR<assignmentUpdateWithoutAssignedToInput, assignmentUncheckedUpdateWithoutAssignedToInput>
    create: XOR<assignmentCreateWithoutAssignedToInput, assignmentUncheckedCreateWithoutAssignedToInput>
  }

  export type assignmentUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: assignmentWhereUniqueInput
    data: XOR<assignmentUpdateWithoutAssignedToInput, assignmentUncheckedUpdateWithoutAssignedToInput>
  }

  export type assignmentUpdateManyWithWhereWithoutAssignedToInput = {
    where: assignmentScalarWhereInput
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type assignmentScalarWhereInput = {
    AND?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
    OR?: assignmentScalarWhereInput[]
    NOT?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
    assignmentId?: UuidFilter<"assignment"> | string
    testCode?: StringFilter<"assignment"> | string
    assignedToId?: StringFilter<"assignment"> | string
    assignedById?: StringFilter<"assignment"> | string
    status?: EnumassignmentStatusFilter<"assignment"> | $Enums.assignmentStatus
    dueAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"assignment"> | Date | string
  }

  export type assignmentUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: assignmentWhereUniqueInput
    update: XOR<assignmentUpdateWithoutAssignedByInput, assignmentUncheckedUpdateWithoutAssignedByInput>
    create: XOR<assignmentCreateWithoutAssignedByInput, assignmentUncheckedCreateWithoutAssignedByInput>
  }

  export type assignmentUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: assignmentWhereUniqueInput
    data: XOR<assignmentUpdateWithoutAssignedByInput, assignmentUncheckedUpdateWithoutAssignedByInput>
  }

  export type assignmentUpdateManyWithWhereWithoutAssignedByInput = {
    where: assignmentScalarWhereInput
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type userCreateWithoutCreatedTestsInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
    assignmentsTo?: assignmentCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentCreateNestedManyWithoutAssignedByInput
  }

  export type userUncheckedCreateWithoutCreatedTestsInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
    assignmentsTo?: assignmentUncheckedCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentUncheckedCreateNestedManyWithoutAssignedByInput
  }

  export type userCreateOrConnectWithoutCreatedTestsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCreatedTestsInput, userUncheckedCreateWithoutCreatedTestsInput>
  }

  export type testSectionCreateWithoutTestInput = {
    testSectionId?: string
    testSectionCode?: string | null
    name?: string | null
    questions?: questionCreateNestedManyWithoutSectionInput
  }

  export type testSectionUncheckedCreateWithoutTestInput = {
    testSectionId?: string
    testSectionCode?: string | null
    name?: string | null
    questions?: questionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type testSectionCreateOrConnectWithoutTestInput = {
    where: testSectionWhereUniqueInput
    create: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput>
  }

  export type testSectionCreateManyTestInputEnvelope = {
    data: testSectionCreateManyTestInput | testSectionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type questionCreateWithoutTestInput = {
    questionId?: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionCreateNestedOneWithoutQuestionsInput
    questionOption?: questionOptionCreateNestedManyWithoutQuestionInput
    answers?: answerCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutTestInput = {
    questionId?: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: answerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionCreateOrConnectWithoutTestInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput>
  }

  export type questionCreateManyTestInputEnvelope = {
    data: questionCreateManyTestInput | questionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type assignmentCreateWithoutTestInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedBy: userCreateNestedOneWithoutAssignmentsByInput
    assignedTo: userCreateNestedOneWithoutAssignmentsToInput
    answers?: answerCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutTestInput = {
    assignmentId?: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: answerUncheckedCreateNestedManyWithoutAssignmentInput
    score?: assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentCreateOrConnectWithoutTestInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput>
  }

  export type assignmentCreateManyTestInputEnvelope = {
    data: assignmentCreateManyTestInput | assignmentCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCreatedTestsInput = {
    update: XOR<userUpdateWithoutCreatedTestsInput, userUncheckedUpdateWithoutCreatedTestsInput>
    create: XOR<userCreateWithoutCreatedTestsInput, userUncheckedCreateWithoutCreatedTestsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCreatedTestsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCreatedTestsInput, userUncheckedUpdateWithoutCreatedTestsInput>
  }

  export type userUpdateWithoutCreatedTestsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
    assignmentsTo?: assignmentUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUpdateManyWithoutAssignedByNestedInput
  }

  export type userUncheckedUpdateWithoutCreatedTestsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
    assignmentsTo?: assignmentUncheckedUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUncheckedUpdateManyWithoutAssignedByNestedInput
  }

  export type testSectionUpsertWithWhereUniqueWithoutTestInput = {
    where: testSectionWhereUniqueInput
    update: XOR<testSectionUpdateWithoutTestInput, testSectionUncheckedUpdateWithoutTestInput>
    create: XOR<testSectionCreateWithoutTestInput, testSectionUncheckedCreateWithoutTestInput>
  }

  export type testSectionUpdateWithWhereUniqueWithoutTestInput = {
    where: testSectionWhereUniqueInput
    data: XOR<testSectionUpdateWithoutTestInput, testSectionUncheckedUpdateWithoutTestInput>
  }

  export type testSectionUpdateManyWithWhereWithoutTestInput = {
    where: testSectionScalarWhereInput
    data: XOR<testSectionUpdateManyMutationInput, testSectionUncheckedUpdateManyWithoutTestInput>
  }

  export type testSectionScalarWhereInput = {
    AND?: testSectionScalarWhereInput | testSectionScalarWhereInput[]
    OR?: testSectionScalarWhereInput[]
    NOT?: testSectionScalarWhereInput | testSectionScalarWhereInput[]
    testSectionId?: UuidFilter<"testSection"> | string
    testSectionCode?: StringNullableFilter<"testSection"> | string | null
    testCode?: StringFilter<"testSection"> | string
    name?: StringNullableFilter<"testSection"> | string | null
  }

  export type questionUpsertWithWhereUniqueWithoutTestInput = {
    where: questionWhereUniqueInput
    update: XOR<questionUpdateWithoutTestInput, questionUncheckedUpdateWithoutTestInput>
    create: XOR<questionCreateWithoutTestInput, questionUncheckedCreateWithoutTestInput>
  }

  export type questionUpdateWithWhereUniqueWithoutTestInput = {
    where: questionWhereUniqueInput
    data: XOR<questionUpdateWithoutTestInput, questionUncheckedUpdateWithoutTestInput>
  }

  export type questionUpdateManyWithWhereWithoutTestInput = {
    where: questionScalarWhereInput
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyWithoutTestInput>
  }

  export type questionScalarWhereInput = {
    AND?: questionScalarWhereInput | questionScalarWhereInput[]
    OR?: questionScalarWhereInput[]
    NOT?: questionScalarWhereInput | questionScalarWhereInput[]
    questionId?: UuidFilter<"question"> | string
    testCode?: StringFilter<"question"> | string
    testSectionId?: UuidNullableFilter<"question"> | string | null
    code?: StringNullableFilter<"question"> | string | null
    prompt?: StringFilter<"question"> | string
    required?: BoolFilter<"question"> | boolean
    metadata?: JsonNullableFilter<"question">
  }

  export type assignmentUpsertWithWhereUniqueWithoutTestInput = {
    where: assignmentWhereUniqueInput
    update: XOR<assignmentUpdateWithoutTestInput, assignmentUncheckedUpdateWithoutTestInput>
    create: XOR<assignmentCreateWithoutTestInput, assignmentUncheckedCreateWithoutTestInput>
  }

  export type assignmentUpdateWithWhereUniqueWithoutTestInput = {
    where: assignmentWhereUniqueInput
    data: XOR<assignmentUpdateWithoutTestInput, assignmentUncheckedUpdateWithoutTestInput>
  }

  export type assignmentUpdateManyWithWhereWithoutTestInput = {
    where: assignmentScalarWhereInput
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutTestInput>
  }

  export type testCreateWithoutSectionsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    createdBy?: userCreateNestedOneWithoutCreatedTestsInput
    questions?: questionCreateNestedManyWithoutTestInput
    assignments?: assignmentCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateWithoutSectionsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdByNumber?: string | null
    createdAt?: Date | string
    questions?: questionUncheckedCreateNestedManyWithoutTestInput
    assignments?: assignmentUncheckedCreateNestedManyWithoutTestInput
  }

  export type testCreateOrConnectWithoutSectionsInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutSectionsInput, testUncheckedCreateWithoutSectionsInput>
  }

  export type questionCreateWithoutSectionInput = {
    questionId?: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    test: testCreateNestedOneWithoutQuestionsInput
    questionOption?: questionOptionCreateNestedManyWithoutQuestionInput
    answers?: answerCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutSectionInput = {
    questionId?: string
    testCode: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: answerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionCreateOrConnectWithoutSectionInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput>
  }

  export type questionCreateManySectionInputEnvelope = {
    data: questionCreateManySectionInput | questionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type testUpsertWithoutSectionsInput = {
    update: XOR<testUpdateWithoutSectionsInput, testUncheckedUpdateWithoutSectionsInput>
    create: XOR<testCreateWithoutSectionsInput, testUncheckedCreateWithoutSectionsInput>
    where?: testWhereInput
  }

  export type testUpdateToOneWithWhereWithoutSectionsInput = {
    where?: testWhereInput
    data: XOR<testUpdateWithoutSectionsInput, testUncheckedUpdateWithoutSectionsInput>
  }

  export type testUpdateWithoutSectionsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneWithoutCreatedTestsNestedInput
    questions?: questionUpdateManyWithoutTestNestedInput
    assignments?: assignmentUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateWithoutSectionsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdByNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionUncheckedUpdateManyWithoutTestNestedInput
    assignments?: assignmentUncheckedUpdateManyWithoutTestNestedInput
  }

  export type questionUpsertWithWhereUniqueWithoutSectionInput = {
    where: questionWhereUniqueInput
    update: XOR<questionUpdateWithoutSectionInput, questionUncheckedUpdateWithoutSectionInput>
    create: XOR<questionCreateWithoutSectionInput, questionUncheckedCreateWithoutSectionInput>
  }

  export type questionUpdateWithWhereUniqueWithoutSectionInput = {
    where: questionWhereUniqueInput
    data: XOR<questionUpdateWithoutSectionInput, questionUncheckedUpdateWithoutSectionInput>
  }

  export type questionUpdateManyWithWhereWithoutSectionInput = {
    where: questionScalarWhereInput
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyWithoutSectionInput>
  }

  export type testSectionCreateWithoutQuestionsInput = {
    testSectionId?: string
    testSectionCode?: string | null
    name?: string | null
    test: testCreateNestedOneWithoutSectionsInput
  }

  export type testSectionUncheckedCreateWithoutQuestionsInput = {
    testSectionId?: string
    testSectionCode?: string | null
    testCode: string
    name?: string | null
  }

  export type testSectionCreateOrConnectWithoutQuestionsInput = {
    where: testSectionWhereUniqueInput
    create: XOR<testSectionCreateWithoutQuestionsInput, testSectionUncheckedCreateWithoutQuestionsInput>
  }

  export type testCreateWithoutQuestionsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    createdBy?: userCreateNestedOneWithoutCreatedTestsInput
    sections?: testSectionCreateNestedManyWithoutTestInput
    assignments?: assignmentCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateWithoutQuestionsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdByNumber?: string | null
    createdAt?: Date | string
    sections?: testSectionUncheckedCreateNestedManyWithoutTestInput
    assignments?: assignmentUncheckedCreateNestedManyWithoutTestInput
  }

  export type testCreateOrConnectWithoutQuestionsInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutQuestionsInput, testUncheckedCreateWithoutQuestionsInput>
  }

  export type questionOptionCreateWithoutQuestionInput = {
    questionOptionId?: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
    answers?: answerCreateNestedManyWithoutOptionInput
  }

  export type questionOptionUncheckedCreateWithoutQuestionInput = {
    questionOptionId?: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
    answers?: answerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type questionOptionCreateOrConnectWithoutQuestionInput = {
    where: questionOptionWhereUniqueInput
    create: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type questionOptionCreateManyQuestionInputEnvelope = {
    data: questionOptionCreateManyQuestionInput | questionOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type answerCreateWithoutQuestionInput = {
    answerId?: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
    option?: questionOptionCreateNestedOneWithoutAnswersInput
    assignment: assignmentCreateNestedOneWithoutAnswersInput
  }

  export type answerUncheckedCreateWithoutQuestionInput = {
    answerId?: string
    assignmentId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateOrConnectWithoutQuestionInput = {
    where: answerWhereUniqueInput
    create: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput>
  }

  export type answerCreateManyQuestionInputEnvelope = {
    data: answerCreateManyQuestionInput | answerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type testSectionUpsertWithoutQuestionsInput = {
    update: XOR<testSectionUpdateWithoutQuestionsInput, testSectionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<testSectionCreateWithoutQuestionsInput, testSectionUncheckedCreateWithoutQuestionsInput>
    where?: testSectionWhereInput
  }

  export type testSectionUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: testSectionWhereInput
    data: XOR<testSectionUpdateWithoutQuestionsInput, testSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type testSectionUpdateWithoutQuestionsInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    test?: testUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type testSectionUncheckedUpdateWithoutQuestionsInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUpsertWithoutQuestionsInput = {
    update: XOR<testUpdateWithoutQuestionsInput, testUncheckedUpdateWithoutQuestionsInput>
    create: XOR<testCreateWithoutQuestionsInput, testUncheckedCreateWithoutQuestionsInput>
    where?: testWhereInput
  }

  export type testUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: testWhereInput
    data: XOR<testUpdateWithoutQuestionsInput, testUncheckedUpdateWithoutQuestionsInput>
  }

  export type testUpdateWithoutQuestionsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneWithoutCreatedTestsNestedInput
    sections?: testSectionUpdateManyWithoutTestNestedInput
    assignments?: assignmentUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateWithoutQuestionsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdByNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: testSectionUncheckedUpdateManyWithoutTestNestedInput
    assignments?: assignmentUncheckedUpdateManyWithoutTestNestedInput
  }

  export type questionOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: questionOptionWhereUniqueInput
    update: XOR<questionOptionUpdateWithoutQuestionInput, questionOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<questionOptionCreateWithoutQuestionInput, questionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type questionOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: questionOptionWhereUniqueInput
    data: XOR<questionOptionUpdateWithoutQuestionInput, questionOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type questionOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: questionOptionScalarWhereInput
    data: XOR<questionOptionUpdateManyMutationInput, questionOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type questionOptionScalarWhereInput = {
    AND?: questionOptionScalarWhereInput | questionOptionScalarWhereInput[]
    OR?: questionOptionScalarWhereInput[]
    NOT?: questionOptionScalarWhereInput | questionOptionScalarWhereInput[]
    questionOptionId?: UuidFilter<"questionOption"> | string
    questionId?: UuidFilter<"questionOption"> | string
    label?: StringFilter<"questionOption"> | string
    value?: StringNullableFilter<"questionOption"> | string | null
    scoreValue?: DecimalNullableFilter<"questionOption"> | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: answerWhereUniqueInput
    update: XOR<answerUpdateWithoutQuestionInput, answerUncheckedUpdateWithoutQuestionInput>
    create: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput>
  }

  export type answerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: answerWhereUniqueInput
    data: XOR<answerUpdateWithoutQuestionInput, answerUncheckedUpdateWithoutQuestionInput>
  }

  export type answerUpdateManyWithWhereWithoutQuestionInput = {
    where: answerScalarWhereInput
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type answerScalarWhereInput = {
    AND?: answerScalarWhereInput | answerScalarWhereInput[]
    OR?: answerScalarWhereInput[]
    NOT?: answerScalarWhereInput | answerScalarWhereInput[]
    answerId?: UuidFilter<"answer"> | string
    assignmentId?: UuidFilter<"answer"> | string
    questionId?: UuidFilter<"answer"> | string
    questionOptionId?: UuidNullableFilter<"answer"> | string | null
    numericAnswer?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
    score?: DecimalNullableFilter<"answer"> | Decimal | DecimalJsLike | number | string | null
  }

  export type questionCreateWithoutQuestionOptionInput = {
    questionId?: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionCreateNestedOneWithoutQuestionsInput
    test: testCreateNestedOneWithoutQuestionsInput
    answers?: answerCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutQuestionOptionInput = {
    questionId?: string
    testCode: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    answers?: answerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionCreateOrConnectWithoutQuestionOptionInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutQuestionOptionInput, questionUncheckedCreateWithoutQuestionOptionInput>
  }

  export type answerCreateWithoutOptionInput = {
    answerId?: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
    question: questionCreateNestedOneWithoutAnswersInput
    assignment: assignmentCreateNestedOneWithoutAnswersInput
  }

  export type answerUncheckedCreateWithoutOptionInput = {
    answerId?: string
    assignmentId: string
    questionId: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateOrConnectWithoutOptionInput = {
    where: answerWhereUniqueInput
    create: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput>
  }

  export type answerCreateManyOptionInputEnvelope = {
    data: answerCreateManyOptionInput | answerCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type questionUpsertWithoutQuestionOptionInput = {
    update: XOR<questionUpdateWithoutQuestionOptionInput, questionUncheckedUpdateWithoutQuestionOptionInput>
    create: XOR<questionCreateWithoutQuestionOptionInput, questionUncheckedCreateWithoutQuestionOptionInput>
    where?: questionWhereInput
  }

  export type questionUpdateToOneWithWhereWithoutQuestionOptionInput = {
    where?: questionWhereInput
    data: XOR<questionUpdateWithoutQuestionOptionInput, questionUncheckedUpdateWithoutQuestionOptionInput>
  }

  export type questionUpdateWithoutQuestionOptionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionUpdateOneWithoutQuestionsNestedInput
    test?: testUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: answerUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutQuestionOptionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    answers?: answerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type answerUpsertWithWhereUniqueWithoutOptionInput = {
    where: answerWhereUniqueInput
    update: XOR<answerUpdateWithoutOptionInput, answerUncheckedUpdateWithoutOptionInput>
    create: XOR<answerCreateWithoutOptionInput, answerUncheckedCreateWithoutOptionInput>
  }

  export type answerUpdateWithWhereUniqueWithoutOptionInput = {
    where: answerWhereUniqueInput
    data: XOR<answerUpdateWithoutOptionInput, answerUncheckedUpdateWithoutOptionInput>
  }

  export type answerUpdateManyWithWhereWithoutOptionInput = {
    where: answerScalarWhereInput
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyWithoutOptionInput>
  }

  export type userCreateWithoutAssignmentsByInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
    createdTests?: testCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentCreateNestedManyWithoutAssignedToInput
  }

  export type userUncheckedCreateWithoutAssignmentsByInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
    createdTests?: testUncheckedCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type userCreateOrConnectWithoutAssignmentsByInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAssignmentsByInput, userUncheckedCreateWithoutAssignmentsByInput>
  }

  export type userCreateWithoutAssignmentsToInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
    createdTests?: testCreateNestedManyWithoutCreatedByInput
    assignmentsBy?: assignmentCreateNestedManyWithoutAssignedByInput
  }

  export type userUncheckedCreateWithoutAssignmentsToInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
    createdTests?: testUncheckedCreateNestedManyWithoutCreatedByInput
    assignmentsBy?: assignmentUncheckedCreateNestedManyWithoutAssignedByInput
  }

  export type userCreateOrConnectWithoutAssignmentsToInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAssignmentsToInput, userUncheckedCreateWithoutAssignmentsToInput>
  }

  export type testCreateWithoutAssignmentsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    createdBy?: userCreateNestedOneWithoutCreatedTestsInput
    sections?: testSectionCreateNestedManyWithoutTestInput
    questions?: questionCreateNestedManyWithoutTestInput
  }

  export type testUncheckedCreateWithoutAssignmentsInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdByNumber?: string | null
    createdAt?: Date | string
    sections?: testSectionUncheckedCreateNestedManyWithoutTestInput
    questions?: questionUncheckedCreateNestedManyWithoutTestInput
  }

  export type testCreateOrConnectWithoutAssignmentsInput = {
    where: testWhereUniqueInput
    create: XOR<testCreateWithoutAssignmentsInput, testUncheckedCreateWithoutAssignmentsInput>
  }

  export type answerCreateWithoutAssignmentInput = {
    answerId?: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
    question: questionCreateNestedOneWithoutAnswersInput
    option?: questionOptionCreateNestedOneWithoutAnswersInput
  }

  export type answerUncheckedCreateWithoutAssignmentInput = {
    answerId?: string
    questionId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateOrConnectWithoutAssignmentInput = {
    where: answerWhereUniqueInput
    create: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput>
  }

  export type answerCreateManyAssignmentInputEnvelope = {
    data: answerCreateManyAssignmentInput | answerCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type assignmentScoreCreateWithoutAssignmentInput = {
    totalScore: Decimal | DecimalJsLike | number | string
    percentile?: Decimal | DecimalJsLike | number | string | null
    interpretation?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreUncheckedCreateWithoutAssignmentInput = {
    totalScore: Decimal | DecimalJsLike | number | string
    percentile?: Decimal | DecimalJsLike | number | string | null
    interpretation?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreCreateOrConnectWithoutAssignmentInput = {
    where: assignmentScoreWhereUniqueInput
    create: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
  }

  export type userUpsertWithoutAssignmentsByInput = {
    update: XOR<userUpdateWithoutAssignmentsByInput, userUncheckedUpdateWithoutAssignmentsByInput>
    create: XOR<userCreateWithoutAssignmentsByInput, userUncheckedCreateWithoutAssignmentsByInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAssignmentsByInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAssignmentsByInput, userUncheckedUpdateWithoutAssignmentsByInput>
  }

  export type userUpdateWithoutAssignmentsByInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
    createdTests?: testUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUpdateManyWithoutAssignedToNestedInput
  }

  export type userUncheckedUpdateWithoutAssignmentsByInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
    createdTests?: testUncheckedUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type userUpsertWithoutAssignmentsToInput = {
    update: XOR<userUpdateWithoutAssignmentsToInput, userUncheckedUpdateWithoutAssignmentsToInput>
    create: XOR<userCreateWithoutAssignmentsToInput, userUncheckedCreateWithoutAssignmentsToInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAssignmentsToInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAssignmentsToInput, userUncheckedUpdateWithoutAssignmentsToInput>
  }

  export type userUpdateWithoutAssignmentsToInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
    createdTests?: testUpdateManyWithoutCreatedByNestedInput
    assignmentsBy?: assignmentUpdateManyWithoutAssignedByNestedInput
  }

  export type userUncheckedUpdateWithoutAssignmentsToInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
    createdTests?: testUncheckedUpdateManyWithoutCreatedByNestedInput
    assignmentsBy?: assignmentUncheckedUpdateManyWithoutAssignedByNestedInput
  }

  export type testUpsertWithoutAssignmentsInput = {
    update: XOR<testUpdateWithoutAssignmentsInput, testUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<testCreateWithoutAssignmentsInput, testUncheckedCreateWithoutAssignmentsInput>
    where?: testWhereInput
  }

  export type testUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: testWhereInput
    data: XOR<testUpdateWithoutAssignmentsInput, testUncheckedUpdateWithoutAssignmentsInput>
  }

  export type testUpdateWithoutAssignmentsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneWithoutCreatedTestsNestedInput
    sections?: testSectionUpdateManyWithoutTestNestedInput
    questions?: questionUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateWithoutAssignmentsInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdByNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: testSectionUncheckedUpdateManyWithoutTestNestedInput
    questions?: questionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type answerUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: answerWhereUniqueInput
    update: XOR<answerUpdateWithoutAssignmentInput, answerUncheckedUpdateWithoutAssignmentInput>
    create: XOR<answerCreateWithoutAssignmentInput, answerUncheckedCreateWithoutAssignmentInput>
  }

  export type answerUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: answerWhereUniqueInput
    data: XOR<answerUpdateWithoutAssignmentInput, answerUncheckedUpdateWithoutAssignmentInput>
  }

  export type answerUpdateManyWithWhereWithoutAssignmentInput = {
    where: answerScalarWhereInput
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type assignmentScoreUpsertWithoutAssignmentInput = {
    update: XOR<assignmentScoreUpdateWithoutAssignmentInput, assignmentScoreUncheckedUpdateWithoutAssignmentInput>
    create: XOR<assignmentScoreCreateWithoutAssignmentInput, assignmentScoreUncheckedCreateWithoutAssignmentInput>
    where?: assignmentScoreWhereInput
  }

  export type assignmentScoreUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: assignmentScoreWhereInput
    data: XOR<assignmentScoreUpdateWithoutAssignmentInput, assignmentScoreUncheckedUpdateWithoutAssignmentInput>
  }

  export type assignmentScoreUpdateWithoutAssignmentInput = {
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentScoreUncheckedUpdateWithoutAssignmentInput = {
    totalScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentile?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionCreateWithoutAnswersInput = {
    questionId?: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionCreateNestedOneWithoutQuestionsInput
    test: testCreateNestedOneWithoutQuestionsInput
    questionOption?: questionOptionCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutAnswersInput = {
    questionId?: string
    testCode: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionCreateOrConnectWithoutAnswersInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutAnswersInput, questionUncheckedCreateWithoutAnswersInput>
  }

  export type questionOptionCreateWithoutAnswersInput = {
    questionOptionId?: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
    question: questionCreateNestedOneWithoutQuestionOptionInput
  }

  export type questionOptionUncheckedCreateWithoutAnswersInput = {
    questionOptionId?: string
    questionId: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type questionOptionCreateOrConnectWithoutAnswersInput = {
    where: questionOptionWhereUniqueInput
    create: XOR<questionOptionCreateWithoutAnswersInput, questionOptionUncheckedCreateWithoutAnswersInput>
  }

  export type assignmentCreateWithoutAnswersInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedBy: userCreateNestedOneWithoutAssignmentsByInput
    assignedTo: userCreateNestedOneWithoutAssignmentsToInput
    test: testCreateNestedOneWithoutAssignmentsInput
    score?: assignmentScoreCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutAnswersInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    score?: assignmentScoreUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentCreateOrConnectWithoutAnswersInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutAnswersInput, assignmentUncheckedCreateWithoutAnswersInput>
  }

  export type questionUpsertWithoutAnswersInput = {
    update: XOR<questionUpdateWithoutAnswersInput, questionUncheckedUpdateWithoutAnswersInput>
    create: XOR<questionCreateWithoutAnswersInput, questionUncheckedCreateWithoutAnswersInput>
    where?: questionWhereInput
  }

  export type questionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: questionWhereInput
    data: XOR<questionUpdateWithoutAnswersInput, questionUncheckedUpdateWithoutAnswersInput>
  }

  export type questionUpdateWithoutAnswersInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionUpdateOneWithoutQuestionsNestedInput
    test?: testUpdateOneRequiredWithoutQuestionsNestedInput
    questionOption?: questionOptionUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutAnswersInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionOptionUpsertWithoutAnswersInput = {
    update: XOR<questionOptionUpdateWithoutAnswersInput, questionOptionUncheckedUpdateWithoutAnswersInput>
    create: XOR<questionOptionCreateWithoutAnswersInput, questionOptionUncheckedCreateWithoutAnswersInput>
    where?: questionOptionWhereInput
  }

  export type questionOptionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: questionOptionWhereInput
    data: XOR<questionOptionUpdateWithoutAnswersInput, questionOptionUncheckedUpdateWithoutAnswersInput>
  }

  export type questionOptionUpdateWithoutAnswersInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    question?: questionUpdateOneRequiredWithoutQuestionOptionNestedInput
  }

  export type questionOptionUncheckedUpdateWithoutAnswersInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type assignmentUpsertWithoutAnswersInput = {
    update: XOR<assignmentUpdateWithoutAnswersInput, assignmentUncheckedUpdateWithoutAnswersInput>
    create: XOR<assignmentCreateWithoutAnswersInput, assignmentUncheckedCreateWithoutAnswersInput>
    where?: assignmentWhereInput
  }

  export type assignmentUpdateToOneWithWhereWithoutAnswersInput = {
    where?: assignmentWhereInput
    data: XOR<assignmentUpdateWithoutAnswersInput, assignmentUncheckedUpdateWithoutAnswersInput>
  }

  export type assignmentUpdateWithoutAnswersInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: userUpdateOneRequiredWithoutAssignmentsByNestedInput
    assignedTo?: userUpdateOneRequiredWithoutAssignmentsToNestedInput
    test?: testUpdateOneRequiredWithoutAssignmentsNestedInput
    score?: assignmentScoreUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutAnswersInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentCreateWithoutScoreInput = {
    assignmentId?: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    assignedBy: userCreateNestedOneWithoutAssignmentsByInput
    assignedTo: userCreateNestedOneWithoutAssignmentsToInput
    test: testCreateNestedOneWithoutAssignmentsInput
    answers?: answerCreateNestedManyWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutScoreInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: answerUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type assignmentCreateOrConnectWithoutScoreInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutScoreInput, assignmentUncheckedCreateWithoutScoreInput>
  }

  export type assignmentUpsertWithoutScoreInput = {
    update: XOR<assignmentUpdateWithoutScoreInput, assignmentUncheckedUpdateWithoutScoreInput>
    create: XOR<assignmentCreateWithoutScoreInput, assignmentUncheckedCreateWithoutScoreInput>
    where?: assignmentWhereInput
  }

  export type assignmentUpdateToOneWithWhereWithoutScoreInput = {
    where?: assignmentWhereInput
    data: XOR<assignmentUpdateWithoutScoreInput, assignmentUncheckedUpdateWithoutScoreInput>
  }

  export type assignmentUpdateWithoutScoreInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: userUpdateOneRequiredWithoutAssignmentsByNestedInput
    assignedTo?: userUpdateOneRequiredWithoutAssignmentsToNestedInput
    test?: testUpdateOneRequiredWithoutAssignmentsNestedInput
    answers?: answerUpdateManyWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutScoreInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answerUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type userCreateWithoutRefreshTokensInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTests?: testCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentCreateNestedManyWithoutAssignedByInput
  }

  export type userUncheckedCreateWithoutRefreshTokensInput = {
    userId?: string
    userNumber: string
    email: string
    password: string
    name: string
    gender: string
    tokenVersion?: number
    role: $Enums.userRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTests?: testUncheckedCreateNestedManyWithoutCreatedByInput
    assignmentsTo?: assignmentUncheckedCreateNestedManyWithoutAssignedToInput
    assignmentsBy?: assignmentUncheckedCreateNestedManyWithoutAssignedByInput
  }

  export type userCreateOrConnectWithoutRefreshTokensInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRefreshTokensInput, userUncheckedCreateWithoutRefreshTokensInput>
  }

  export type userUpsertWithoutRefreshTokensInput = {
    update: XOR<userUpdateWithoutRefreshTokensInput, userUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<userCreateWithoutRefreshTokensInput, userUncheckedCreateWithoutRefreshTokensInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRefreshTokensInput, userUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type userUpdateWithoutRefreshTokensInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTests?: testUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUpdateManyWithoutAssignedByNestedInput
  }

  export type userUncheckedUpdateWithoutRefreshTokensInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTests?: testUncheckedUpdateManyWithoutCreatedByNestedInput
    assignmentsTo?: assignmentUncheckedUpdateManyWithoutAssignedToNestedInput
    assignmentsBy?: assignmentUncheckedUpdateManyWithoutAssignedByNestedInput
  }

  export type refreshTokenCreateManyUserInput = {
    refreshTokenId?: string
    jti: string
    revokedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
    ip?: string | null
  }

  export type testCreateManyCreatedByInput = {
    testId?: string
    testCode?: string | null
    title: string
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
  }

  export type assignmentCreateManyAssignedToInput = {
    assignmentId?: string
    testCode: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type assignmentCreateManyAssignedByInput = {
    assignmentId?: string
    testCode: string
    assignedToId: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type refreshTokenUpdateWithoutUserInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateWithoutUserInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateManyWithoutUserInput = {
    refreshTokenId?: StringFieldUpdateOperationsInput | string
    jti?: StringFieldUpdateOperationsInput | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUpdateWithoutCreatedByInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: testSectionUpdateManyWithoutTestNestedInput
    questions?: questionUpdateManyWithoutTestNestedInput
    assignments?: assignmentUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateWithoutCreatedByInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: testSectionUncheckedUpdateManyWithoutTestNestedInput
    questions?: questionUncheckedUpdateManyWithoutTestNestedInput
    assignments?: assignmentUncheckedUpdateManyWithoutTestNestedInput
  }

  export type testUncheckedUpdateManyWithoutCreatedByInput = {
    testId?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assignmentUpdateWithoutAssignedToInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: userUpdateOneRequiredWithoutAssignmentsByNestedInput
    test?: testUpdateOneRequiredWithoutAssignmentsNestedInput
    answers?: answerUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutAssignedToInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answerUncheckedUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateManyWithoutAssignedToInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assignmentUpdateWithoutAssignedByInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: userUpdateOneRequiredWithoutAssignmentsToNestedInput
    test?: testUpdateOneRequiredWithoutAssignmentsNestedInput
    answers?: answerUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutAssignedByInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answerUncheckedUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateManyWithoutAssignedByInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testSectionCreateManyTestInput = {
    testSectionId?: string
    testSectionCode?: string | null
    name?: string | null
  }

  export type questionCreateManyTestInput = {
    questionId?: string
    testSectionId?: string | null
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentCreateManyTestInput = {
    assignmentId?: string
    assignedToId: string
    assignedById: string
    status?: $Enums.assignmentStatus
    dueAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type testSectionUpdateWithoutTestInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionUpdateManyWithoutSectionNestedInput
  }

  export type testSectionUncheckedUpdateWithoutTestInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type testSectionUncheckedUpdateManyWithoutTestInput = {
    testSectionId?: StringFieldUpdateOperationsInput | string
    testSectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionUpdateWithoutTestInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    section?: testSectionUpdateOneWithoutQuestionsNestedInput
    questionOption?: questionOptionUpdateManyWithoutQuestionNestedInput
    answers?: answerUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutTestInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: answerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateManyWithoutTestInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testSectionId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assignmentUpdateWithoutTestInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: userUpdateOneRequiredWithoutAssignmentsByNestedInput
    assignedTo?: userUpdateOneRequiredWithoutAssignmentsToNestedInput
    answers?: answerUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutTestInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answerUncheckedUpdateManyWithoutAssignmentNestedInput
    score?: assignmentScoreUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateManyWithoutTestInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    status?: EnumassignmentStatusFieldUpdateOperationsInput | $Enums.assignmentStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionCreateManySectionInput = {
    questionId?: string
    testCode: string
    code?: string | null
    prompt: string
    required?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionUpdateWithoutSectionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    test?: testUpdateOneRequiredWithoutQuestionsNestedInput
    questionOption?: questionOptionUpdateManyWithoutQuestionNestedInput
    answers?: answerUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutSectionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    questionOption?: questionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: answerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateManyWithoutSectionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    testCode?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type questionOptionCreateManyQuestionInput = {
    questionOptionId?: string
    label: string
    value?: string | null
    scoreValue?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateManyQuestionInput = {
    answerId?: string
    assignmentId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type questionOptionUpdateWithoutQuestionInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    answers?: answerUpdateManyWithoutOptionNestedInput
  }

  export type questionOptionUncheckedUpdateWithoutQuestionInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    answers?: answerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type questionOptionUncheckedUpdateManyWithoutQuestionInput = {
    questionOptionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    scoreValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpdateWithoutQuestionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    option?: questionOptionUpdateOneWithoutAnswersNestedInput
    assignment?: assignmentUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answerUncheckedUpdateWithoutQuestionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUncheckedUpdateManyWithoutQuestionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateManyOptionInput = {
    answerId?: string
    assignmentId: string
    questionId: string
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpdateWithoutOptionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    question?: questionUpdateOneRequiredWithoutAnswersNestedInput
    assignment?: assignmentUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answerUncheckedUpdateWithoutOptionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUncheckedUpdateManyWithoutOptionInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerCreateManyAssignmentInput = {
    answerId?: string
    questionId: string
    questionOptionId?: string | null
    numericAnswer?: Decimal | DecimalJsLike | number | string | null
    score?: Decimal | DecimalJsLike | number | string | null
  }

  export type answerUpdateWithoutAssignmentInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    question?: questionUpdateOneRequiredWithoutAnswersNestedInput
    option?: questionOptionUpdateOneWithoutAnswersNestedInput
  }

  export type answerUncheckedUpdateWithoutAssignmentInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type answerUncheckedUpdateManyWithoutAssignmentInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    questionOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    numericAnswer?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}