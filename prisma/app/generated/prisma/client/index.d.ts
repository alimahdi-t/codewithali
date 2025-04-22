/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Enrolment
 *
 */
export type Enrolment = $Result.DefaultSelection<Prisma.$EnrolmentPayload>;
/**
 * Model Course
 *
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>;
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model CourseTag
 *
 */
export type CourseTag = $Result.DefaultSelection<Prisma.$CourseTagPayload>;
/**
 * Model ContactMessage
 *
 */
export type ContactMessage =
  $Result.DefaultSelection<Prisma.$ContactMessagePayload>;
/**
 * Model Discount
 *
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const MessageStatus: {
    PENDING: "PENDING";
    IN_PROGRESS: "IN_PROGRESS";
    RESOLVED: "RESOLVED";
  };

  export type MessageStatus =
    (typeof MessageStatus)[keyof typeof MessageStatus];

  export const CommentStatus: {
    PENDING: "PENDING";
    APPROVED: "APPROVED";
    REJECTED: "REJECTED";
  };

  export type CommentStatus =
    (typeof CommentStatus)[keyof typeof CommentStatus];

  export const Role: {
    USER: "USER";
    INSTRUCTOR: "INSTRUCTOR";
    AUTHOR: "AUTHOR";
    INSTRUCOT_AUTHOR: "INSTRUCOT_AUTHOR";
    ADMIN: "ADMIN";
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const Level: {
    BEGINNER: "BEGINNER";
    ADVANCED: "ADVANCED";
    EXPERT: "EXPERT";
  };

  export type Level = (typeof Level)[keyof typeof Level];

  export const CourseStatus: {
    COMPLETED: "COMPLETED";
    PREORDER: "PREORDER";
    ONGOING: "ONGOING";
    CANCELLED: "CANCELLED";
    UPCOMING: "UPCOMING";
  };

  export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus];
}

export type MessageStatus = $Enums.MessageStatus;

export const MessageStatus: typeof $Enums.MessageStatus;

export type CommentStatus = $Enums.CommentStatus;

export const CommentStatus: typeof $Enums.CommentStatus;

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type Level = $Enums.Level;

export const Level: typeof $Enums.Level;

export type CourseStatus = $Enums.CourseStatus;

export const CourseStatus: typeof $Enums.CourseStatus;

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
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolment`: Exposes CRUD operations for the **Enrolment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Enrolments
   * const enrolments = await prisma.enrolment.findMany()
   * ```
   */
  get enrolment(): Prisma.EnrolmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseTag`: Exposes CRUD operations for the **CourseTag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CourseTags
   * const courseTags = await prisma.courseTag.findMany()
   * ```
   */
  get courseTag(): Prisma.CourseTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ContactMessages
   * const contactMessages = await prisma.contactMessage.findMany()
   * ```
   */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Discounts
   * const discounts = await prisma.discount.findMany()
   * ```
   */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;
  /**
   * Validator
   */
  export import validator = runtime.Public.validator;
  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;
  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;
  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Account: "Account";
    Enrolment: "Enrolment";
    Course: "Course";
    Post: "Post";
    Tag: "Tag";
    CourseTag: "CourseTag";
    ContactMessage: "ContactMessage";
    Discount: "Discount";
    Comment: "Comment";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "account"
        | "enrolment"
        | "course"
        | "post"
        | "tag"
        | "courseTag"
        | "contactMessage"
        | "discount"
        | "comment";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Enrolment: {
        payload: Prisma.$EnrolmentPayload<ExtArgs>;
        fields: Prisma.EnrolmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EnrolmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EnrolmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          findFirst: {
            args: Prisma.EnrolmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EnrolmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          findMany: {
            args: Prisma.EnrolmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>[];
          };
          create: {
            args: Prisma.EnrolmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          createMany: {
            args: Prisma.EnrolmentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EnrolmentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>[];
          };
          delete: {
            args: Prisma.EnrolmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          update: {
            args: Prisma.EnrolmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          deleteMany: {
            args: Prisma.EnrolmentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EnrolmentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EnrolmentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>[];
          };
          upsert: {
            args: Prisma.EnrolmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnrolmentPayload>;
          };
          aggregate: {
            args: Prisma.EnrolmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEnrolment>;
          };
          groupBy: {
            args: Prisma.EnrolmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EnrolmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.EnrolmentCountArgs<ExtArgs>;
            result: $Utils.Optional<EnrolmentCountAggregateOutputType> | number;
          };
        };
      };
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>;
        fields: Prisma.CourseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[];
          };
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result: $Utils.Optional<PostCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      CourseTag: {
        payload: Prisma.$CourseTagPayload<ExtArgs>;
        fields: Prisma.CourseTagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CourseTagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CourseTagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          findFirst: {
            args: Prisma.CourseTagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CourseTagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          findMany: {
            args: Prisma.CourseTagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[];
          };
          create: {
            args: Prisma.CourseTagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          createMany: {
            args: Prisma.CourseTagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CourseTagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[];
          };
          delete: {
            args: Prisma.CourseTagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          update: {
            args: Prisma.CourseTagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          deleteMany: {
            args: Prisma.CourseTagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CourseTagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CourseTagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[];
          };
          upsert: {
            args: Prisma.CourseTagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>;
          };
          aggregate: {
            args: Prisma.CourseTagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourseTag>;
          };
          groupBy: {
            args: Prisma.CourseTagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseTagGroupByOutputType>[];
          };
          count: {
            args: Prisma.CourseTagCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseTagCountAggregateOutputType> | number;
          };
        };
      };
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>;
        fields: Prisma.ContactMessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
          };
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
          };
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
          };
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
          };
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContactMessage>;
          };
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContactMessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ContactMessageCountAggregateOutputType>
              | number;
          };
        };
      };
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>;
        fields: Prisma.DiscountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[];
          };
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DiscountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[];
          };
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DiscountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[];
          };
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>;
          };
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDiscount>;
          };
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DiscountGroupByOutputType>[];
          };
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>;
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    account?: AccountOmit;
    enrolment?: EnrolmentOmit;
    course?: CourseOmit;
    post?: PostOmit;
    tag?: TagOmit;
    courseTag?: CourseTagOmit;
    contactMessage?: ContactMessageOmit;
    discount?: DiscountOmit;
    comment?: CommentOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrolment: number;
    Course: number;
    Post: number;
    accounts: number;
    Comment: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    enrolment?: boolean | UserCountOutputTypeCountEnrolmentArgs;
    Course?: boolean | UserCountOutputTypeCountCourseArgs;
    Post?: boolean | UserCountOutputTypeCountPostArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    Comment?: boolean | UserCountOutputTypeCountCommentArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EnrolmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    Enrolment: number;
    tag: number;
    Comment: number;
  };

  export type CourseCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Enrolment?: boolean | CourseCountOutputTypeCountEnrolmentArgs;
    tag?: boolean | CourseCountOutputTypeCountTagArgs;
    Comment?: boolean | CourseCountOutputTypeCountCommentArgs;
  };

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EnrolmentWhereInput;
  };

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseTagWhereInput;
  };

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number;
    Comment: number;
  };

  export type PostCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs;
    Comment?: boolean | PostCountOutputTypeCountCommentArgs;
  };

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number;
    courses: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs;
    courses?: boolean | TagCountOutputTypeCountCoursesArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCoursesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseTagWhereInput;
  };

  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    Course: number;
  };

  export type DiscountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Course?: boolean | DiscountCountOutputTypeCountCourseArgs;
  };

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountCourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseWhereInput;
  };

  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number;
  };

  export type CommentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs;
  };

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    bio: string | null;
    emailVerified: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    bio: string | null;
    emailVerified: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    firstName: number;
    lastName: number;
    imageUrl: number;
    email: number;
    password: number;
    phoneNumber: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    bio: number;
    emailVerified: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    imageUrl?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    emailVerified?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    imageUrl?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    emailVerified?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    imageUrl?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    emailVerified?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    username: string | null;
    firstName: string;
    lastName: string;
    imageUrl: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    emailVerified: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      imageUrl?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      bio?: boolean;
      emailVerified?: boolean;
      enrolment?: boolean | User$enrolmentArgs<ExtArgs>;
      Course?: boolean | User$CourseArgs<ExtArgs>;
      Post?: boolean | User$PostArgs<ExtArgs>;
      accounts?: boolean | User$accountsArgs<ExtArgs>;
      Comment?: boolean | User$CommentArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      imageUrl?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      bio?: boolean;
      emailVerified?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      imageUrl?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      bio?: boolean;
      emailVerified?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    imageUrl?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bio?: boolean;
    emailVerified?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "username"
    | "firstName"
    | "lastName"
    | "imageUrl"
    | "email"
    | "password"
    | "phoneNumber"
    | "role"
    | "createdAt"
    | "updatedAt"
    | "bio"
    | "emailVerified",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    enrolment?: boolean | User$enrolmentArgs<ExtArgs>;
    Course?: boolean | User$CourseArgs<ExtArgs>;
    Post?: boolean | User$PostArgs<ExtArgs>;
    accounts?: boolean | User$accountsArgs<ExtArgs>;
    Comment?: boolean | User$CommentArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      enrolment: Prisma.$EnrolmentPayload<ExtArgs>[];
      Course: Prisma.$CoursePayload<ExtArgs>[];
      Post: Prisma.$PostPayload<ExtArgs>[];
      accounts: Prisma.$AccountPayload<ExtArgs>[];
      Comment: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        username: string | null;
        firstName: string;
        lastName: string;
        imageUrl: string | null;
        email: string | null;
        password: string | null;
        phoneNumber: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        emailVerified: Date | null;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    enrolment<T extends User$enrolmentArgs<ExtArgs> = {}>(
      args?: Subset<T, User$enrolmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EnrolmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Course<T extends User$CourseArgs<ExtArgs> = {}>(
      args?: Subset<T, User$CourseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CoursePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Post<T extends User$PostArgs<ExtArgs> = {}>(
      args?: Subset<T, User$PostArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Comment<T extends User$CommentArgs<ExtArgs> = {}>(
      args?: Subset<T, User$CommentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly username: FieldRef<"User", "String">;
    readonly firstName: FieldRef<"User", "String">;
    readonly lastName: FieldRef<"User", "String">;
    readonly imageUrl: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly phoneNumber: FieldRef<"User", "String">;
    readonly role: FieldRef<"User", "Role">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
    readonly bio: FieldRef<"User", "String">;
    readonly emailVerified: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.enrolment
   */
  export type User$enrolmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    where?: EnrolmentWhereInput;
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    cursor?: EnrolmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EnrolmentScalarFieldEnum | EnrolmentScalarFieldEnum[];
  };

  /**
   * User.Course
   */
  export type User$CourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    where?: CourseWhereInput;
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    cursor?: CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * User.Post
   */
  export type User$PostArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * User.Comment
   */
  export type User$CommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountAvgAggregateOutputType = {
    userId: number | null;
    expires_at: number | null;
    refresh_token_expires_in: number | null;
  };

  export type AccountSumAggregateOutputType = {
    userId: number | null;
    expires_at: number | null;
    refresh_token_expires_in: number | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    userId: number | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    refresh_token_expires_in: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    userId: number | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    refresh_token_expires_in: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    provider: number;
    providerAccountId: number;
    refresh_token: number;
    access_token: number;
    expires_at: number;
    token_type: number;
    scope: number;
    id_token: number;
    session_state: number;
    refresh_token_expires_in: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AccountAvgAggregateInputType = {
    userId?: true;
    expires_at?: true;
    refresh_token_expires_in?: true;
  };

  export type AccountSumAggregateInputType = {
    userId?: true;
    expires_at?: true;
    refresh_token_expires_in?: true;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    refresh_token_expires_in?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    refresh_token_expires_in?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    refresh_token_expires_in?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _avg?: AccountAvgAggregateInputType;
    _sum?: AccountSumAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    refresh_token_expires_in: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      refresh_token_expires_in?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Account$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      refresh_token_expires_in?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Account$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      refresh_token_expires_in?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Account$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    refresh_token?: boolean;
    access_token?: boolean;
    expires_at?: boolean;
    token_type?: boolean;
    scope?: boolean;
    id_token?: boolean;
    session_state?: boolean;
    refresh_token_expires_in?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "type"
    | "provider"
    | "providerAccountId"
    | "refresh_token"
    | "access_token"
    | "expires_at"
    | "token_type"
    | "scope"
    | "id_token"
    | "session_state"
    | "refresh_token_expires_in"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["account"]
  >;
  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Account$userArgs<ExtArgs>;
  };
  export type AccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Account$userArgs<ExtArgs>;
  };
  export type AccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Account$userArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Account";
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: number;
        type: string;
        provider: string;
        providerAccountId: string;
        refresh_token: string | null;
        access_token: string | null;
        expires_at: number | null;
        token_type: string | null;
        scope: string | null;
        id_token: string | null;
        session_state: string | null;
        refresh_token_expires_in: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["account"]
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Account"];
      meta: { name: "Account" };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Account$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", "String">;
    readonly userId: FieldRef<"Account", "Int">;
    readonly type: FieldRef<"Account", "String">;
    readonly provider: FieldRef<"Account", "String">;
    readonly providerAccountId: FieldRef<"Account", "String">;
    readonly refresh_token: FieldRef<"Account", "String">;
    readonly access_token: FieldRef<"Account", "String">;
    readonly expires_at: FieldRef<"Account", "Int">;
    readonly token_type: FieldRef<"Account", "String">;
    readonly scope: FieldRef<"Account", "String">;
    readonly id_token: FieldRef<"Account", "String">;
    readonly session_state: FieldRef<"Account", "String">;
    readonly refresh_token_expires_in: FieldRef<"Account", "Int">;
    readonly createdAt: FieldRef<"Account", "DateTime">;
    readonly updatedAt: FieldRef<"Account", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
  };

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number;
  };

  /**
   * Account.user
   */
  export type Account$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Enrolment
   */

  export type AggregateEnrolment = {
    _count: EnrolmentCountAggregateOutputType | null;
    _avg: EnrolmentAvgAggregateOutputType | null;
    _sum: EnrolmentSumAggregateOutputType | null;
    _min: EnrolmentMinAggregateOutputType | null;
    _max: EnrolmentMaxAggregateOutputType | null;
  };

  export type EnrolmentAvgAggregateOutputType = {
    user_id: number | null;
    course_id: number | null;
  };

  export type EnrolmentSumAggregateOutputType = {
    user_id: number | null;
    course_id: number | null;
  };

  export type EnrolmentMinAggregateOutputType = {
    user_id: number | null;
    course_id: number | null;
    enrolmentDate: Date | null;
  };

  export type EnrolmentMaxAggregateOutputType = {
    user_id: number | null;
    course_id: number | null;
    enrolmentDate: Date | null;
  };

  export type EnrolmentCountAggregateOutputType = {
    user_id: number;
    course_id: number;
    enrolmentDate: number;
    _all: number;
  };

  export type EnrolmentAvgAggregateInputType = {
    user_id?: true;
    course_id?: true;
  };

  export type EnrolmentSumAggregateInputType = {
    user_id?: true;
    course_id?: true;
  };

  export type EnrolmentMinAggregateInputType = {
    user_id?: true;
    course_id?: true;
    enrolmentDate?: true;
  };

  export type EnrolmentMaxAggregateInputType = {
    user_id?: true;
    course_id?: true;
    enrolmentDate?: true;
  };

  export type EnrolmentCountAggregateInputType = {
    user_id?: true;
    course_id?: true;
    enrolmentDate?: true;
    _all?: true;
  };

  export type EnrolmentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Enrolment to aggregate.
     */
    where?: EnrolmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enrolments to fetch.
     */
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EnrolmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enrolments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Enrolments
     **/
    _count?: true | EnrolmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EnrolmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EnrolmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EnrolmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EnrolmentMaxAggregateInputType;
  };

  export type GetEnrolmentAggregateType<T extends EnrolmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEnrolment]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolment[P]>
      : GetScalarType<T[P], AggregateEnrolment[P]>;
  };

  export type EnrolmentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EnrolmentWhereInput;
    orderBy?:
      | EnrolmentOrderByWithAggregationInput
      | EnrolmentOrderByWithAggregationInput[];
    by: EnrolmentScalarFieldEnum[] | EnrolmentScalarFieldEnum;
    having?: EnrolmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnrolmentCountAggregateInputType | true;
    _avg?: EnrolmentAvgAggregateInputType;
    _sum?: EnrolmentSumAggregateInputType;
    _min?: EnrolmentMinAggregateInputType;
    _max?: EnrolmentMaxAggregateInputType;
  };

  export type EnrolmentGroupByOutputType = {
    user_id: number;
    course_id: number;
    enrolmentDate: Date;
    _count: EnrolmentCountAggregateOutputType | null;
    _avg: EnrolmentAvgAggregateOutputType | null;
    _sum: EnrolmentSumAggregateOutputType | null;
    _min: EnrolmentMinAggregateOutputType | null;
    _max: EnrolmentMaxAggregateOutputType | null;
  };

  type GetEnrolmentGroupByPayload<T extends EnrolmentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EnrolmentGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof EnrolmentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolmentGroupByOutputType[P]>;
        }
      >
    >;

  export type EnrolmentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      course_id?: boolean;
      enrolmentDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["enrolment"]
  >;

  export type EnrolmentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      course_id?: boolean;
      enrolmentDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["enrolment"]
  >;

  export type EnrolmentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      course_id?: boolean;
      enrolmentDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["enrolment"]
  >;

  export type EnrolmentSelectScalar = {
    user_id?: boolean;
    course_id?: boolean;
    enrolmentDate?: boolean;
  };

  export type EnrolmentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "user_id" | "course_id" | "enrolmentDate",
    ExtArgs["result"]["enrolment"]
  >;
  export type EnrolmentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | CourseDefaultArgs<ExtArgs>;
  };
  export type EnrolmentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | CourseDefaultArgs<ExtArgs>;
  };
  export type EnrolmentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | CourseDefaultArgs<ExtArgs>;
  };

  export type $EnrolmentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Enrolment";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      course: Prisma.$CoursePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: number;
        course_id: number;
        enrolmentDate: Date;
      },
      ExtArgs["result"]["enrolment"]
    >;
    composites: {};
  };

  type EnrolmentGetPayload<
    S extends boolean | null | undefined | EnrolmentDefaultArgs,
  > = $Result.GetResult<Prisma.$EnrolmentPayload, S>;

  type EnrolmentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    EnrolmentFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: EnrolmentCountAggregateInputType | true;
  };

  export interface EnrolmentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Enrolment"];
      meta: { name: "Enrolment" };
    };
    /**
     * Find zero or one Enrolment that matches the filter.
     * @param {EnrolmentFindUniqueArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrolmentFindUniqueArgs>(
      args: SelectSubset<T, EnrolmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Enrolment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrolmentFindUniqueOrThrowArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrolmentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EnrolmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Enrolment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindFirstArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrolmentFindFirstArgs>(
      args?: SelectSubset<T, EnrolmentFindFirstArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Enrolment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindFirstOrThrowArgs} args - Arguments to find a Enrolment
     * @example
     * // Get one Enrolment
     * const enrolment = await prisma.enrolment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrolmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EnrolmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Enrolments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrolments
     * const enrolments = await prisma.enrolment.findMany()
     *
     * // Get first 10 Enrolments
     * const enrolments = await prisma.enrolment.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const enrolmentWithUser_idOnly = await prisma.enrolment.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends EnrolmentFindManyArgs>(
      args?: SelectSubset<T, EnrolmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Enrolment.
     * @param {EnrolmentCreateArgs} args - Arguments to create a Enrolment.
     * @example
     * // Create one Enrolment
     * const Enrolment = await prisma.enrolment.create({
     *   data: {
     *     // ... data to create a Enrolment
     *   }
     * })
     *
     */
    create<T extends EnrolmentCreateArgs>(
      args: SelectSubset<T, EnrolmentCreateArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Enrolments.
     * @param {EnrolmentCreateManyArgs} args - Arguments to create many Enrolments.
     * @example
     * // Create many Enrolments
     * const enrolment = await prisma.enrolment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EnrolmentCreateManyArgs>(
      args?: SelectSubset<T, EnrolmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Enrolments and returns the data saved in the database.
     * @param {EnrolmentCreateManyAndReturnArgs} args - Arguments to create many Enrolments.
     * @example
     * // Create many Enrolments
     * const enrolment = await prisma.enrolment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Enrolments and only return the `user_id`
     * const enrolmentWithUser_idOnly = await prisma.enrolment.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EnrolmentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EnrolmentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Enrolment.
     * @param {EnrolmentDeleteArgs} args - Arguments to delete one Enrolment.
     * @example
     * // Delete one Enrolment
     * const Enrolment = await prisma.enrolment.delete({
     *   where: {
     *     // ... filter to delete one Enrolment
     *   }
     * })
     *
     */
    delete<T extends EnrolmentDeleteArgs>(
      args: SelectSubset<T, EnrolmentDeleteArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Enrolment.
     * @param {EnrolmentUpdateArgs} args - Arguments to update one Enrolment.
     * @example
     * // Update one Enrolment
     * const enrolment = await prisma.enrolment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EnrolmentUpdateArgs>(
      args: SelectSubset<T, EnrolmentUpdateArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Enrolments.
     * @param {EnrolmentDeleteManyArgs} args - Arguments to filter Enrolments to delete.
     * @example
     * // Delete a few Enrolments
     * const { count } = await prisma.enrolment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EnrolmentDeleteManyArgs>(
      args?: SelectSubset<T, EnrolmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Enrolments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrolments
     * const enrolment = await prisma.enrolment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EnrolmentUpdateManyArgs>(
      args: SelectSubset<T, EnrolmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Enrolments and returns the data updated in the database.
     * @param {EnrolmentUpdateManyAndReturnArgs} args - Arguments to update many Enrolments.
     * @example
     * // Update many Enrolments
     * const enrolment = await prisma.enrolment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Enrolments and only return the `user_id`
     * const enrolmentWithUser_idOnly = await prisma.enrolment.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends EnrolmentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EnrolmentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Enrolment.
     * @param {EnrolmentUpsertArgs} args - Arguments to update or create a Enrolment.
     * @example
     * // Update or create a Enrolment
     * const enrolment = await prisma.enrolment.upsert({
     *   create: {
     *     // ... data to create a Enrolment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrolment we want to update
     *   }
     * })
     */
    upsert<T extends EnrolmentUpsertArgs>(
      args: SelectSubset<T, EnrolmentUpsertArgs<ExtArgs>>,
    ): Prisma__EnrolmentClient<
      $Result.GetResult<
        Prisma.$EnrolmentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Enrolments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentCountArgs} args - Arguments to filter Enrolments to count.
     * @example
     * // Count the number of Enrolments
     * const count = await prisma.enrolment.count({
     *   where: {
     *     // ... the filter for the Enrolments we want to count
     *   }
     * })
     **/
    count<T extends EnrolmentCountArgs>(
      args?: Subset<T, EnrolmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EnrolmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Enrolment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrolmentAggregateArgs>(
      args: Subset<T, EnrolmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetEnrolmentAggregateType<T>>;

    /**
     * Group by Enrolment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolmentGroupByArgs} args - Group by arguments.
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
      T extends EnrolmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolmentGroupByArgs["orderBy"] }
        : { orderBy?: EnrolmentGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, EnrolmentGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEnrolmentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Enrolment model
     */
    readonly fields: EnrolmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrolment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourseDefaultArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      | $Result.GetResult<
          Prisma.$CoursePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Enrolment model
   */
  interface EnrolmentFieldRefs {
    readonly user_id: FieldRef<"Enrolment", "Int">;
    readonly course_id: FieldRef<"Enrolment", "Int">;
    readonly enrolmentDate: FieldRef<"Enrolment", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Enrolment findUnique
   */
  export type EnrolmentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter, which Enrolment to fetch.
     */
    where: EnrolmentWhereUniqueInput;
  };

  /**
   * Enrolment findUniqueOrThrow
   */
  export type EnrolmentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter, which Enrolment to fetch.
     */
    where: EnrolmentWhereUniqueInput;
  };

  /**
   * Enrolment findFirst
   */
  export type EnrolmentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter, which Enrolment to fetch.
     */
    where?: EnrolmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enrolments to fetch.
     */
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enrolments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Enrolments.
     */
    distinct?: EnrolmentScalarFieldEnum | EnrolmentScalarFieldEnum[];
  };

  /**
   * Enrolment findFirstOrThrow
   */
  export type EnrolmentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter, which Enrolment to fetch.
     */
    where?: EnrolmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enrolments to fetch.
     */
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enrolments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Enrolments.
     */
    distinct?: EnrolmentScalarFieldEnum | EnrolmentScalarFieldEnum[];
  };

  /**
   * Enrolment findMany
   */
  export type EnrolmentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter, which Enrolments to fetch.
     */
    where?: EnrolmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enrolments to fetch.
     */
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Enrolments.
     */
    cursor?: EnrolmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enrolments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enrolments.
     */
    skip?: number;
    distinct?: EnrolmentScalarFieldEnum | EnrolmentScalarFieldEnum[];
  };

  /**
   * Enrolment create
   */
  export type EnrolmentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Enrolment.
     */
    data: XOR<EnrolmentCreateInput, EnrolmentUncheckedCreateInput>;
  };

  /**
   * Enrolment createMany
   */
  export type EnrolmentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Enrolments.
     */
    data: EnrolmentCreateManyInput | EnrolmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Enrolment createManyAndReturn
   */
  export type EnrolmentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * The data used to create many Enrolments.
     */
    data: EnrolmentCreateManyInput | EnrolmentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Enrolment update
   */
  export type EnrolmentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Enrolment.
     */
    data: XOR<EnrolmentUpdateInput, EnrolmentUncheckedUpdateInput>;
    /**
     * Choose, which Enrolment to update.
     */
    where: EnrolmentWhereUniqueInput;
  };

  /**
   * Enrolment updateMany
   */
  export type EnrolmentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Enrolments.
     */
    data: XOR<
      EnrolmentUpdateManyMutationInput,
      EnrolmentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Enrolments to update
     */
    where?: EnrolmentWhereInput;
    /**
     * Limit how many Enrolments to update.
     */
    limit?: number;
  };

  /**
   * Enrolment updateManyAndReturn
   */
  export type EnrolmentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * The data used to update Enrolments.
     */
    data: XOR<
      EnrolmentUpdateManyMutationInput,
      EnrolmentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Enrolments to update
     */
    where?: EnrolmentWhereInput;
    /**
     * Limit how many Enrolments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Enrolment upsert
   */
  export type EnrolmentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Enrolment to update in case it exists.
     */
    where: EnrolmentWhereUniqueInput;
    /**
     * In case the Enrolment found by the `where` argument doesn't exist, create a new Enrolment with this data.
     */
    create: XOR<EnrolmentCreateInput, EnrolmentUncheckedCreateInput>;
    /**
     * In case the Enrolment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolmentUpdateInput, EnrolmentUncheckedUpdateInput>;
  };

  /**
   * Enrolment delete
   */
  export type EnrolmentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    /**
     * Filter which Enrolment to delete.
     */
    where: EnrolmentWhereUniqueInput;
  };

  /**
   * Enrolment deleteMany
   */
  export type EnrolmentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Enrolments to delete
     */
    where?: EnrolmentWhereInput;
    /**
     * Limit how many Enrolments to delete.
     */
    limit?: number;
  };

  /**
   * Enrolment without action
   */
  export type EnrolmentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
  };

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    instructorId: number | null;
  };

  export type CourseSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    instructorId: number | null;
  };

  export type CourseMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    title: string | null;
    description: string | null;
    content: string | null;
    imageUrl: string | null;
    level: $Enums.Level | null;
    status: $Enums.CourseStatus | null;
    price: number | null;
    createdAt: Date | null;
    updateAt: Date | null;
    instructorId: number | null;
    discountId: string | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    title: string | null;
    description: string | null;
    content: string | null;
    imageUrl: string | null;
    level: $Enums.Level | null;
    status: $Enums.CourseStatus | null;
    price: number | null;
    createdAt: Date | null;
    updateAt: Date | null;
    instructorId: number | null;
    discountId: string | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    slug: number;
    title: number;
    description: number;
    content: number;
    imageUrl: number;
    level: number;
    status: number;
    price: number;
    createdAt: number;
    updateAt: number;
    instructorId: number;
    discountId: number;
    _all: number;
  };

  export type CourseAvgAggregateInputType = {
    id?: true;
    price?: true;
    instructorId?: true;
  };

  export type CourseSumAggregateInputType = {
    id?: true;
    price?: true;
    instructorId?: true;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    description?: true;
    content?: true;
    imageUrl?: true;
    level?: true;
    status?: true;
    price?: true;
    createdAt?: true;
    updateAt?: true;
    instructorId?: true;
    discountId?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    description?: true;
    content?: true;
    imageUrl?: true;
    level?: true;
    status?: true;
    price?: true;
    createdAt?: true;
    updateAt?: true;
    instructorId?: true;
    discountId?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    description?: true;
    content?: true;
    imageUrl?: true;
    level?: true;
    status?: true;
    price?: true;
    createdAt?: true;
    updateAt?: true;
    instructorId?: true;
    discountId?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type CourseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseWhereInput;
    orderBy?:
      | CourseOrderByWithAggregationInput
      | CourseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt: Date;
    updateAt: Date;
    instructorId: number;
    discountId: string | null;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CourseGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CourseGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>;
        }
      >
    >;

  export type CourseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      level?: boolean;
      status?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updateAt?: boolean;
      instructorId?: boolean;
      discountId?: boolean;
      discount?: boolean | Course$discountArgs<ExtArgs>;
      instructor?: boolean | UserDefaultArgs<ExtArgs>;
      Enrolment?: boolean | Course$EnrolmentArgs<ExtArgs>;
      tag?: boolean | Course$tagArgs<ExtArgs>;
      Comment?: boolean | Course$CommentArgs<ExtArgs>;
      _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["course"]
  >;

  export type CourseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      level?: boolean;
      status?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updateAt?: boolean;
      instructorId?: boolean;
      discountId?: boolean;
      discount?: boolean | Course$discountArgs<ExtArgs>;
      instructor?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["course"]
  >;

  export type CourseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      level?: boolean;
      status?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updateAt?: boolean;
      instructorId?: boolean;
      discountId?: boolean;
      discount?: boolean | Course$discountArgs<ExtArgs>;
      instructor?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["course"]
  >;

  export type CourseSelectScalar = {
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    description?: boolean;
    content?: boolean;
    imageUrl?: boolean;
    level?: boolean;
    status?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    instructorId?: boolean;
    discountId?: boolean;
  };

  export type CourseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "slug"
    | "title"
    | "description"
    | "content"
    | "imageUrl"
    | "level"
    | "status"
    | "price"
    | "createdAt"
    | "updateAt"
    | "instructorId"
    | "discountId",
    ExtArgs["result"]["course"]
  >;
  export type CourseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    discount?: boolean | Course$discountArgs<ExtArgs>;
    instructor?: boolean | UserDefaultArgs<ExtArgs>;
    Enrolment?: boolean | Course$EnrolmentArgs<ExtArgs>;
    tag?: boolean | Course$tagArgs<ExtArgs>;
    Comment?: boolean | Course$CommentArgs<ExtArgs>;
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CourseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    discount?: boolean | Course$discountArgs<ExtArgs>;
    instructor?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CourseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    discount?: boolean | Course$discountArgs<ExtArgs>;
    instructor?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CoursePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Course";
    objects: {
      discount: Prisma.$DiscountPayload<ExtArgs> | null;
      instructor: Prisma.$UserPayload<ExtArgs>;
      Enrolment: Prisma.$EnrolmentPayload<ExtArgs>[];
      tag: Prisma.$CourseTagPayload<ExtArgs>[];
      Comment: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        slug: string;
        title: string;
        description: string;
        content: string;
        imageUrl: string;
        level: $Enums.Level;
        status: $Enums.CourseStatus;
        price: number;
        createdAt: Date;
        updateAt: Date;
        instructorId: number;
        discountId: string | null;
      },
      ExtArgs["result"]["course"]
    >;
    composites: {};
  };

  type CourseGetPayload<
    S extends boolean | null | undefined | CourseDefaultArgs,
  > = $Result.GetResult<Prisma.$CoursePayload, S>;

  type CourseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CourseFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface CourseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Course"];
      meta: { name: "Course" };
    };
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourseFindManyArgs>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     */
    create<T extends CourseCreateArgs>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseCreateManyArgs>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     */
    delete<T extends CourseDeleteArgs>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseUpdateArgs>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseDeleteManyArgs>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseUpdateManyArgs>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs["orderBy"] }
        : { orderBy?: CourseGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCourseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Course model
     */
    readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    discount<T extends Course$discountArgs<ExtArgs> = {}>(
      args?: Subset<T, Course$discountArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    Enrolment<T extends Course$EnrolmentArgs<ExtArgs> = {}>(
      args?: Subset<T, Course$EnrolmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EnrolmentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    tag<T extends Course$tagArgs<ExtArgs> = {}>(
      args?: Subset<T, Course$tagArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CourseTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Comment<T extends Course$CommentArgs<ExtArgs> = {}>(
      args?: Subset<T, Course$CommentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", "Int">;
    readonly slug: FieldRef<"Course", "String">;
    readonly title: FieldRef<"Course", "String">;
    readonly description: FieldRef<"Course", "String">;
    readonly content: FieldRef<"Course", "String">;
    readonly imageUrl: FieldRef<"Course", "String">;
    readonly level: FieldRef<"Course", "Level">;
    readonly status: FieldRef<"Course", "CourseStatus">;
    readonly price: FieldRef<"Course", "Int">;
    readonly createdAt: FieldRef<"Course", "DateTime">;
    readonly updateAt: FieldRef<"Course", "DateTime">;
    readonly instructorId: FieldRef<"Course", "Int">;
    readonly discountId: FieldRef<"Course", "String">;
  }

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Course create
   */
  export type CourseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>;
  };

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Course update
   */
  export type CourseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>;
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
  };

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput;
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>;
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>;
  };

  /**
   * Course delete
   */
  export type CourseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput;
  };

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput;
    /**
     * Limit how many Courses to delete.
     */
    limit?: number;
  };

  /**
   * Course.discount
   */
  export type Course$discountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    where?: DiscountWhereInput;
  };

  /**
   * Course.Enrolment
   */
  export type Course$EnrolmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enrolment
     */
    select?: EnrolmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrolment
     */
    omit?: EnrolmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolmentInclude<ExtArgs> | null;
    where?: EnrolmentWhereInput;
    orderBy?:
      | EnrolmentOrderByWithRelationInput
      | EnrolmentOrderByWithRelationInput[];
    cursor?: EnrolmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EnrolmentScalarFieldEnum | EnrolmentScalarFieldEnum[];
  };

  /**
   * Course.tag
   */
  export type Course$tagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    where?: CourseTagWhereInput;
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    cursor?: CourseTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[];
  };

  /**
   * Course.Comment
   */
  export type Course$CommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Course without action
   */
  export type CourseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    readingTime: number | null;
  };

  export type PostSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    readingTime: number | null;
  };

  export type PostMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    title: string | null;
    content: string | null;
    imageUrl: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    isEditorPick: boolean | null;
    readingTime: number | null;
  };

  export type PostMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    title: string | null;
    content: string | null;
    imageUrl: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    isEditorPick: boolean | null;
    readingTime: number | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    slug: number;
    title: number;
    content: number;
    imageUrl: number;
    createAt: number;
    updatedAt: number;
    authorId: number;
    isEditorPick: number;
    readingTime: number;
    _all: number;
  };

  export type PostAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    readingTime?: true;
  };

  export type PostSumAggregateInputType = {
    id?: true;
    authorId?: true;
    readingTime?: true;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createAt?: true;
    updatedAt?: true;
    authorId?: true;
    isEditorPick?: true;
    readingTime?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createAt?: true;
    updatedAt?: true;
    authorId?: true;
    isEditorPick?: true;
    readingTime?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createAt?: true;
    updatedAt?: true;
    authorId?: true;
    isEditorPick?: true;
    readingTime?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
    orderBy?:
      | PostOrderByWithAggregationInput
      | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt: Date;
    updatedAt: Date;
    authorId: number;
    isEditorPick: boolean | null;
    readingTime: number;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      createAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      isEditorPick?: boolean;
      readingTime?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      tags?: boolean | Post$tagsArgs<ExtArgs>;
      Comment?: boolean | Post$CommentArgs<ExtArgs>;
      _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      createAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      isEditorPick?: boolean;
      readingTime?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      slug?: boolean;
      title?: boolean;
      content?: boolean;
      imageUrl?: boolean;
      createAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      isEditorPick?: boolean;
      readingTime?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectScalar = {
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    content?: boolean;
    imageUrl?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    isEditorPick?: boolean;
    readingTime?: boolean;
  };

  export type PostOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "slug"
    | "title"
    | "content"
    | "imageUrl"
    | "createAt"
    | "updatedAt"
    | "authorId"
    | "isEditorPick"
    | "readingTime",
    ExtArgs["result"]["post"]
  >;
  export type PostInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    tags?: boolean | Post$tagsArgs<ExtArgs>;
    Comment?: boolean | Post$CommentArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PostPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Post";
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      tags: Prisma.$TagPayload<ExtArgs>[];
      Comment: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        slug: string;
        title: string;
        content: string;
        imageUrl: string;
        createAt: Date;
        updatedAt: Date;
        authorId: number;
        isEditorPick: boolean | null;
        readingTime: number;
      },
      ExtArgs["result"]["post"]
    >;
    composites: {};
  };

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> =
    $Result.GetResult<Prisma.$PostPayload, S>;

  type PostCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PostFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Post"];
      meta: { name: "Post" };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>,
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs["orderBy"] }
        : { orderBy?: PostGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    Comment<T extends Post$CommentArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$CommentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", "Int">;
    readonly slug: FieldRef<"Post", "String">;
    readonly title: FieldRef<"Post", "String">;
    readonly content: FieldRef<"Post", "String">;
    readonly imageUrl: FieldRef<"Post", "String">;
    readonly createAt: FieldRef<"Post", "DateTime">;
    readonly updatedAt: FieldRef<"Post", "DateTime">;
    readonly authorId: FieldRef<"Post", "Int">;
    readonly isEditorPick: FieldRef<"Post", "Boolean">;
    readonly readingTime: FieldRef<"Post", "Int">;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post create
   */
  export type PostCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post.tags
   */
  export type Post$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Post.Comment
   */
  export type Post$CommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagAvgAggregateOutputType = {
    id: number | null;
  };

  export type TagSumAggregateOutputType = {
    id: number | null;
  };

  export type TagMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TagMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type TagAvgAggregateInputType = {
    id?: true;
  };

  export type TagSumAggregateInputType = {
    id?: true;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _avg?: TagAvgAggregateInputType;
    _sum?: TagSumAggregateInputType;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: number;
    name: string;
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      posts?: boolean | Tag$postsArgs<ExtArgs>;
      courses?: boolean | Tag$coursesArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type TagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>;
  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | Tag$postsArgs<ExtArgs>;
    courses?: boolean | Tag$coursesArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type TagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Tag";
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
      courses: Prisma.$CourseTagPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
      },
      ExtArgs["result"]["tag"]
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>;

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Tag"];
      meta: { name: "Tag" };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>,
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs["orderBy"] }
        : { orderBy?: TagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$postsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    courses<T extends Tag$coursesArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$coursesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CourseTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", "Int">;
    readonly name: FieldRef<"Tag", "String">;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to delete.
     */
    limit?: number;
  };

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Tag.courses
   */
  export type Tag$coursesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    where?: CourseTagWhereInput;
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    cursor?: CourseTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model CourseTag
   */

  export type AggregateCourseTag = {
    _count: CourseTagCountAggregateOutputType | null;
    _avg: CourseTagAvgAggregateOutputType | null;
    _sum: CourseTagSumAggregateOutputType | null;
    _min: CourseTagMinAggregateOutputType | null;
    _max: CourseTagMaxAggregateOutputType | null;
  };

  export type CourseTagAvgAggregateOutputType = {
    course_id: number | null;
    tag_id: number | null;
  };

  export type CourseTagSumAggregateOutputType = {
    course_id: number | null;
    tag_id: number | null;
  };

  export type CourseTagMinAggregateOutputType = {
    course_id: number | null;
    tag_id: number | null;
  };

  export type CourseTagMaxAggregateOutputType = {
    course_id: number | null;
    tag_id: number | null;
  };

  export type CourseTagCountAggregateOutputType = {
    course_id: number;
    tag_id: number;
    _all: number;
  };

  export type CourseTagAvgAggregateInputType = {
    course_id?: true;
    tag_id?: true;
  };

  export type CourseTagSumAggregateInputType = {
    course_id?: true;
    tag_id?: true;
  };

  export type CourseTagMinAggregateInputType = {
    course_id?: true;
    tag_id?: true;
  };

  export type CourseTagMaxAggregateInputType = {
    course_id?: true;
    tag_id?: true;
  };

  export type CourseTagCountAggregateInputType = {
    course_id?: true;
    tag_id?: true;
    _all?: true;
  };

  export type CourseTagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CourseTag to aggregate.
     */
    where?: CourseTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseTags to fetch.
     */
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CourseTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CourseTags
     **/
    _count?: true | CourseTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourseTagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourseTagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseTagMaxAggregateInputType;
  };

  export type GetCourseTagAggregateType<T extends CourseTagAggregateArgs> = {
    [P in keyof T & keyof AggregateCourseTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseTag[P]>
      : GetScalarType<T[P], AggregateCourseTag[P]>;
  };

  export type CourseTagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CourseTagWhereInput;
    orderBy?:
      | CourseTagOrderByWithAggregationInput
      | CourseTagOrderByWithAggregationInput[];
    by: CourseTagScalarFieldEnum[] | CourseTagScalarFieldEnum;
    having?: CourseTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseTagCountAggregateInputType | true;
    _avg?: CourseTagAvgAggregateInputType;
    _sum?: CourseTagSumAggregateInputType;
    _min?: CourseTagMinAggregateInputType;
    _max?: CourseTagMaxAggregateInputType;
  };

  export type CourseTagGroupByOutputType = {
    course_id: number;
    tag_id: number;
    _count: CourseTagCountAggregateOutputType | null;
    _avg: CourseTagAvgAggregateOutputType | null;
    _sum: CourseTagSumAggregateOutputType | null;
    _min: CourseTagMinAggregateOutputType | null;
    _max: CourseTagMaxAggregateOutputType | null;
  };

  type GetCourseTagGroupByPayload<T extends CourseTagGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CourseTagGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CourseTagGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTagGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTagGroupByOutputType[P]>;
        }
      >
    >;

  export type CourseTagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      course_id?: boolean;
      tag_id?: boolean;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["courseTag"]
  >;

  export type CourseTagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      course_id?: boolean;
      tag_id?: boolean;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["courseTag"]
  >;

  export type CourseTagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      course_id?: boolean;
      tag_id?: boolean;
      course?: boolean | CourseDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["courseTag"]
  >;

  export type CourseTagSelectScalar = {
    course_id?: boolean;
    tag_id?: boolean;
  };

  export type CourseTagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "course_id" | "tag_id",
    ExtArgs["result"]["courseTag"]
  >;
  export type CourseTagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    course?: boolean | CourseDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type CourseTagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    course?: boolean | CourseDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type CourseTagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    course?: boolean | CourseDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };

  export type $CourseTagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CourseTag";
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>;
      tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        course_id: number;
        tag_id: number;
      },
      ExtArgs["result"]["courseTag"]
    >;
    composites: {};
  };

  type CourseTagGetPayload<
    S extends boolean | null | undefined | CourseTagDefaultArgs,
  > = $Result.GetResult<Prisma.$CourseTagPayload, S>;

  type CourseTagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CourseTagFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: CourseTagCountAggregateInputType | true;
  };

  export interface CourseTagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CourseTag"];
      meta: { name: "CourseTag" };
    };
    /**
     * Find zero or one CourseTag that matches the filter.
     * @param {CourseTagFindUniqueArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTagFindUniqueArgs>(
      args: SelectSubset<T, CourseTagFindUniqueArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CourseTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseTagFindUniqueOrThrowArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CourseTagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CourseTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindFirstArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTagFindFirstArgs>(
      args?: SelectSubset<T, CourseTagFindFirstArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CourseTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindFirstOrThrowArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseTagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CourseTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTags
     * const courseTags = await prisma.courseTag.findMany()
     *
     * // Get first 10 CourseTags
     * const courseTags = await prisma.courseTag.findMany({ take: 10 })
     *
     * // Only select the `course_id`
     * const courseTagWithCourse_idOnly = await prisma.courseTag.findMany({ select: { course_id: true } })
     *
     */
    findMany<T extends CourseTagFindManyArgs>(
      args?: SelectSubset<T, CourseTagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CourseTag.
     * @param {CourseTagCreateArgs} args - Arguments to create a CourseTag.
     * @example
     * // Create one CourseTag
     * const CourseTag = await prisma.courseTag.create({
     *   data: {
     *     // ... data to create a CourseTag
     *   }
     * })
     *
     */
    create<T extends CourseTagCreateArgs>(
      args: SelectSubset<T, CourseTagCreateArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CourseTags.
     * @param {CourseTagCreateManyArgs} args - Arguments to create many CourseTags.
     * @example
     * // Create many CourseTags
     * const courseTag = await prisma.courseTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseTagCreateManyArgs>(
      args?: SelectSubset<T, CourseTagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CourseTags and returns the data saved in the database.
     * @param {CourseTagCreateManyAndReturnArgs} args - Arguments to create many CourseTags.
     * @example
     * // Create many CourseTags
     * const courseTag = await prisma.courseTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CourseTags and only return the `course_id`
     * const courseTagWithCourse_idOnly = await prisma.courseTag.createManyAndReturn({
     *   select: { course_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CourseTagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CourseTagCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CourseTag.
     * @param {CourseTagDeleteArgs} args - Arguments to delete one CourseTag.
     * @example
     * // Delete one CourseTag
     * const CourseTag = await prisma.courseTag.delete({
     *   where: {
     *     // ... filter to delete one CourseTag
     *   }
     * })
     *
     */
    delete<T extends CourseTagDeleteArgs>(
      args: SelectSubset<T, CourseTagDeleteArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CourseTag.
     * @param {CourseTagUpdateArgs} args - Arguments to update one CourseTag.
     * @example
     * // Update one CourseTag
     * const courseTag = await prisma.courseTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseTagUpdateArgs>(
      args: SelectSubset<T, CourseTagUpdateArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CourseTags.
     * @param {CourseTagDeleteManyArgs} args - Arguments to filter CourseTags to delete.
     * @example
     * // Delete a few CourseTags
     * const { count } = await prisma.courseTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseTagDeleteManyArgs>(
      args?: SelectSubset<T, CourseTagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTags
     * const courseTag = await prisma.courseTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseTagUpdateManyArgs>(
      args: SelectSubset<T, CourseTagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CourseTags and returns the data updated in the database.
     * @param {CourseTagUpdateManyAndReturnArgs} args - Arguments to update many CourseTags.
     * @example
     * // Update many CourseTags
     * const courseTag = await prisma.courseTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CourseTags and only return the `course_id`
     * const courseTagWithCourse_idOnly = await prisma.courseTag.updateManyAndReturn({
     *   select: { course_id: true },
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
    updateManyAndReturn<T extends CourseTagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CourseTagUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CourseTag.
     * @param {CourseTagUpsertArgs} args - Arguments to update or create a CourseTag.
     * @example
     * // Update or create a CourseTag
     * const courseTag = await prisma.courseTag.upsert({
     *   create: {
     *     // ... data to create a CourseTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseTag we want to update
     *   }
     * })
     */
    upsert<T extends CourseTagUpsertArgs>(
      args: SelectSubset<T, CourseTagUpsertArgs<ExtArgs>>,
    ): Prisma__CourseTagClient<
      $Result.GetResult<
        Prisma.$CourseTagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagCountArgs} args - Arguments to filter CourseTags to count.
     * @example
     * // Count the number of CourseTags
     * const count = await prisma.courseTag.count({
     *   where: {
     *     // ... the filter for the CourseTags we want to count
     *   }
     * })
     **/
    count<T extends CourseTagCountArgs>(
      args?: Subset<T, CourseTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CourseTagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseTagAggregateArgs>(
      args: Subset<T, CourseTagAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseTagAggregateType<T>>;

    /**
     * Group by CourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagGroupByArgs} args - Group by arguments.
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
      T extends CourseTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTagGroupByArgs["orderBy"] }
        : { orderBy?: CourseTagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CourseTagGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCourseTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CourseTag model
     */
    readonly fields: CourseTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourseDefaultArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      | $Result.GetResult<
          Prisma.$CoursePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>,
    ): Prisma__TagClient<
      | $Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CourseTag model
   */
  interface CourseTagFieldRefs {
    readonly course_id: FieldRef<"CourseTag", "Int">;
    readonly tag_id: FieldRef<"CourseTag", "Int">;
  }

  // Custom InputTypes
  /**
   * CourseTag findUnique
   */
  export type CourseTagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter, which CourseTag to fetch.
     */
    where: CourseTagWhereUniqueInput;
  };

  /**
   * CourseTag findUniqueOrThrow
   */
  export type CourseTagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter, which CourseTag to fetch.
     */
    where: CourseTagWhereUniqueInput;
  };

  /**
   * CourseTag findFirst
   */
  export type CourseTagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter, which CourseTag to fetch.
     */
    where?: CourseTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseTags to fetch.
     */
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CourseTags.
     */
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[];
  };

  /**
   * CourseTag findFirstOrThrow
   */
  export type CourseTagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter, which CourseTag to fetch.
     */
    where?: CourseTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseTags to fetch.
     */
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CourseTags.
     */
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[];
  };

  /**
   * CourseTag findMany
   */
  export type CourseTagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter, which CourseTags to fetch.
     */
    where?: CourseTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CourseTags to fetch.
     */
    orderBy?:
      | CourseTagOrderByWithRelationInput
      | CourseTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CourseTags.
     */
    skip?: number;
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[];
  };

  /**
   * CourseTag create
   */
  export type CourseTagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * The data needed to create a CourseTag.
     */
    data: XOR<CourseTagCreateInput, CourseTagUncheckedCreateInput>;
  };

  /**
   * CourseTag createMany
   */
  export type CourseTagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CourseTags.
     */
    data: CourseTagCreateManyInput | CourseTagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CourseTag createManyAndReturn
   */
  export type CourseTagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * The data used to create many CourseTags.
     */
    data: CourseTagCreateManyInput | CourseTagCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CourseTag update
   */
  export type CourseTagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * The data needed to update a CourseTag.
     */
    data: XOR<CourseTagUpdateInput, CourseTagUncheckedUpdateInput>;
    /**
     * Choose, which CourseTag to update.
     */
    where: CourseTagWhereUniqueInput;
  };

  /**
   * CourseTag updateMany
   */
  export type CourseTagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CourseTags.
     */
    data: XOR<
      CourseTagUpdateManyMutationInput,
      CourseTagUncheckedUpdateManyInput
    >;
    /**
     * Filter which CourseTags to update
     */
    where?: CourseTagWhereInput;
    /**
     * Limit how many CourseTags to update.
     */
    limit?: number;
  };

  /**
   * CourseTag updateManyAndReturn
   */
  export type CourseTagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * The data used to update CourseTags.
     */
    data: XOR<
      CourseTagUpdateManyMutationInput,
      CourseTagUncheckedUpdateManyInput
    >;
    /**
     * Filter which CourseTags to update
     */
    where?: CourseTagWhereInput;
    /**
     * Limit how many CourseTags to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CourseTag upsert
   */
  export type CourseTagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * The filter to search for the CourseTag to update in case it exists.
     */
    where: CourseTagWhereUniqueInput;
    /**
     * In case the CourseTag found by the `where` argument doesn't exist, create a new CourseTag with this data.
     */
    create: XOR<CourseTagCreateInput, CourseTagUncheckedCreateInput>;
    /**
     * In case the CourseTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTagUpdateInput, CourseTagUncheckedUpdateInput>;
  };

  /**
   * CourseTag delete
   */
  export type CourseTagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
    /**
     * Filter which CourseTag to delete.
     */
    where: CourseTagWhereUniqueInput;
  };

  /**
   * CourseTag deleteMany
   */
  export type CourseTagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CourseTags to delete
     */
    where?: CourseTagWhereInput;
    /**
     * Limit how many CourseTags to delete.
     */
    limit?: number;
  };

  /**
   * CourseTag without action
   */
  export type CourseTagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null;
  };

  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null;
    _min: ContactMessageMinAggregateOutputType | null;
    _max: ContactMessageMaxAggregateOutputType | null;
  };

  export type ContactMessageMinAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    title: string | null;
    message: string | null;
    status: $Enums.MessageStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    title: string | null;
    message: string | null;
    status: $Enums.MessageStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ContactMessageCountAggregateOutputType = {
    id: number;
    fullName: number;
    email: number;
    phone: number;
    title: number;
    message: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ContactMessageMinAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    title?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ContactMessageMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    title?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ContactMessageCountAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    title?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ContactMessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?:
      | ContactMessageOrderByWithRelationInput
      | ContactMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContactMessages
     **/
    _count?: true | ContactMessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContactMessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContactMessageMaxAggregateInputType;
  };

  export type GetContactMessageAggregateType<
    T extends ContactMessageAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateContactMessage]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>;
  };

  export type ContactMessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ContactMessageWhereInput;
    orderBy?:
      | ContactMessageOrderByWithAggregationInput
      | ContactMessageOrderByWithAggregationInput[];
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum;
    having?: ContactMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactMessageCountAggregateInputType | true;
    _min?: ContactMessageMinAggregateInputType;
    _max?: ContactMessageMaxAggregateInputType;
  };

  export type ContactMessageGroupByOutputType = {
    id: string;
    fullName: string;
    email: string;
    phone: string | null;
    title: string;
    message: string;
    status: $Enums.MessageStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ContactMessageCountAggregateOutputType | null;
    _min: ContactMessageMinAggregateOutputType | null;
    _max: ContactMessageMaxAggregateOutputType | null;
  };

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ContactMessageGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ContactMessageGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>;
        }
      >
    >;

  export type ContactMessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fullName?: boolean;
      email?: boolean;
      phone?: boolean;
      title?: boolean;
      message?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["contactMessage"]
  >;

  export type ContactMessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fullName?: boolean;
      email?: boolean;
      phone?: boolean;
      title?: boolean;
      message?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["contactMessage"]
  >;

  export type ContactMessageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fullName?: boolean;
      email?: boolean;
      phone?: boolean;
      title?: boolean;
      message?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["contactMessage"]
  >;

  export type ContactMessageSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    phone?: boolean;
    title?: boolean;
    message?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ContactMessageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "fullName"
    | "email"
    | "phone"
    | "title"
    | "message"
    | "status"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["contactMessage"]
  >;

  export type $ContactMessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ContactMessage";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        fullName: string;
        email: string;
        phone: string | null;
        title: string;
        message: string;
        status: $Enums.MessageStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["contactMessage"]
    >;
    composites: {};
  };

  type ContactMessageGetPayload<
    S extends boolean | null | undefined | ContactMessageDefaultArgs,
  > = $Result.GetResult<Prisma.$ContactMessagePayload, S>;

  type ContactMessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ContactMessageFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ContactMessageCountAggregateInputType | true;
  };

  export interface ContactMessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ContactMessage"];
      meta: { name: "ContactMessage" };
    };
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(
      args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(
      args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     *
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContactMessageFindManyArgs>(
      args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     *
     */
    create<T extends ContactMessageCreateArgs>(
      args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContactMessageCreateManyArgs>(
      args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     *
     */
    delete<T extends ContactMessageDeleteArgs>(
      args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContactMessageUpdateArgs>(
      args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(
      args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(
      args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(
      args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>,
    ): Prisma__ContactMessageClient<
      $Result.GetResult<
        Prisma.$ContactMessagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
     **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ContactMessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactMessageAggregateArgs>(
      args: Subset<T, ContactMessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>;

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
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
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs["orderBy"] }
        : { orderBy?: ContactMessageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetContactMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContactMessage model
     */
    readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", "String">;
    readonly fullName: FieldRef<"ContactMessage", "String">;
    readonly email: FieldRef<"ContactMessage", "String">;
    readonly phone: FieldRef<"ContactMessage", "String">;
    readonly title: FieldRef<"ContactMessage", "String">;
    readonly message: FieldRef<"ContactMessage", "String">;
    readonly status: FieldRef<"ContactMessage", "MessageStatus">;
    readonly createdAt: FieldRef<"ContactMessage", "DateTime">;
    readonly updatedAt: FieldRef<"ContactMessage", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput;
  };

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput;
  };

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?:
      | ContactMessageOrderByWithRelationInput
      | ContactMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[];
  };

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?:
      | ContactMessageOrderByWithRelationInput
      | ContactMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[];
  };

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?:
      | ContactMessageOrderByWithRelationInput
      | ContactMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactMessages.
     */
    skip?: number;
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[];
  };

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>;
  };

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>;
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput;
  };

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<
      ContactMessageUpdateManyMutationInput,
      ContactMessageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput;
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number;
  };

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<
      ContactMessageUpdateManyMutationInput,
      ContactMessageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput;
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number;
  };

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput;
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>;
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>;
  };

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput;
  };

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput;
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number;
  };

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null;
  };

  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null;
    _avg: DiscountAvgAggregateOutputType | null;
    _sum: DiscountSumAggregateOutputType | null;
    _min: DiscountMinAggregateOutputType | null;
    _max: DiscountMaxAggregateOutputType | null;
  };

  export type DiscountAvgAggregateOutputType = {
    percentage: number | null;
  };

  export type DiscountSumAggregateOutputType = {
    percentage: number | null;
  };

  export type DiscountMinAggregateOutputType = {
    id: string | null;
    percentage: number | null;
    startsAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type DiscountMaxAggregateOutputType = {
    id: string | null;
    percentage: number | null;
    startsAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type DiscountCountAggregateOutputType = {
    id: number;
    percentage: number;
    startsAt: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
  };

  export type DiscountAvgAggregateInputType = {
    percentage?: true;
  };

  export type DiscountSumAggregateInputType = {
    percentage?: true;
  };

  export type DiscountMinAggregateInputType = {
    id?: true;
    percentage?: true;
    startsAt?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type DiscountMaxAggregateInputType = {
    id?: true;
    percentage?: true;
    startsAt?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type DiscountCountAggregateInputType = {
    id?: true;
    percentage?: true;
    startsAt?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type DiscountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounts to fetch.
     */
    orderBy?:
      | DiscountOrderByWithRelationInput
      | DiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Discounts
     **/
    _count?: true | DiscountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DiscountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DiscountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DiscountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DiscountMaxAggregateInputType;
  };

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
    [P in keyof T & keyof AggregateDiscount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>;
  };

  export type DiscountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DiscountWhereInput;
    orderBy?:
      | DiscountOrderByWithAggregationInput
      | DiscountOrderByWithAggregationInput[];
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum;
    having?: DiscountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DiscountCountAggregateInputType | true;
    _avg?: DiscountAvgAggregateInputType;
    _sum?: DiscountSumAggregateInputType;
    _min?: DiscountMinAggregateInputType;
    _max?: DiscountMaxAggregateInputType;
  };

  export type DiscountGroupByOutputType = {
    id: string;
    percentage: number;
    startsAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date;
    _count: DiscountCountAggregateOutputType | null;
    _avg: DiscountAvgAggregateOutputType | null;
    _sum: DiscountSumAggregateOutputType | null;
    _min: DiscountMinAggregateOutputType | null;
    _max: DiscountMaxAggregateOutputType | null;
  };

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DiscountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof DiscountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>;
        }
      >
    >;

  export type DiscountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      percentage?: boolean;
      startsAt?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      Course?: boolean | Discount$CourseArgs<ExtArgs>;
      _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["discount"]
  >;

  export type DiscountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      percentage?: boolean;
      startsAt?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["discount"]
  >;

  export type DiscountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      percentage?: boolean;
      startsAt?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["discount"]
  >;

  export type DiscountSelectScalar = {
    id?: boolean;
    percentage?: boolean;
    startsAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
  };

  export type DiscountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "percentage" | "startsAt" | "expiresAt" | "createdAt",
    ExtArgs["result"]["discount"]
  >;
  export type DiscountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Course?: boolean | Discount$CourseArgs<ExtArgs>;
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type DiscountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type DiscountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $DiscountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Discount";
    objects: {
      Course: Prisma.$CoursePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        percentage: number;
        startsAt: Date | null;
        expiresAt: Date | null;
        createdAt: Date;
      },
      ExtArgs["result"]["discount"]
    >;
    composites: {};
  };

  type DiscountGetPayload<
    S extends boolean | null | undefined | DiscountDefaultArgs,
  > = $Result.GetResult<Prisma.$DiscountPayload, S>;

  type DiscountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<DiscountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: DiscountCountAggregateInputType | true;
  };

  export interface DiscountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Discount"];
      meta: { name: "Discount" };
    };
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(
      args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(
      args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     *
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DiscountFindManyArgs>(
      args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     *
     */
    create<T extends DiscountCreateArgs>(
      args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DiscountCreateManyArgs>(
      args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {DiscountCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DiscountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DiscountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     *
     */
    delete<T extends DiscountDeleteArgs>(
      args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DiscountUpdateArgs>(
      args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DiscountDeleteManyArgs>(
      args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DiscountUpdateManyArgs>(
      args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {DiscountUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DiscountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DiscountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(
      args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>,
    ): Prisma__DiscountClient<
      $Result.GetResult<
        Prisma.$DiscountPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
     **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], DiscountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountAggregateArgs>(
      args: Subset<T, DiscountAggregateArgs>,
    ): Prisma.PrismaPromise<GetDiscountAggregateType<T>>;

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
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
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs["orderBy"] }
        : { orderBy?: DiscountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetDiscountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Discount model
     */
    readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Course<T extends Discount$CourseArgs<ExtArgs> = {}>(
      args?: Subset<T, Discount$CourseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CoursePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", "String">;
    readonly percentage: FieldRef<"Discount", "Int">;
    readonly startsAt: FieldRef<"Discount", "DateTime">;
    readonly expiresAt: FieldRef<"Discount", "DateTime">;
    readonly createdAt: FieldRef<"Discount", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput;
  };

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput;
  };

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounts to fetch.
     */
    orderBy?:
      | DiscountOrderByWithRelationInput
      | DiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[];
  };

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounts to fetch.
     */
    orderBy?:
      | DiscountOrderByWithRelationInput
      | DiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[];
  };

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounts to fetch.
     */
    orderBy?:
      | DiscountOrderByWithRelationInput
      | DiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounts.
     */
    skip?: number;
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[];
  };

  /**
   * Discount create
   */
  export type DiscountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>;
  };

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Discount createManyAndReturn
   */
  export type DiscountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>;
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput;
  };

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<
      DiscountUpdateManyMutationInput,
      DiscountUncheckedUpdateManyInput
    >;
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput;
    /**
     * Limit how many Discounts to update.
     */
    limit?: number;
  };

  /**
   * Discount updateManyAndReturn
   */
  export type DiscountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * The data used to update Discounts.
     */
    data: XOR<
      DiscountUpdateManyMutationInput,
      DiscountUncheckedUpdateManyInput
    >;
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput;
    /**
     * Limit how many Discounts to update.
     */
    limit?: number;
  };

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput;
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>;
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>;
  };

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput;
  };

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput;
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number;
  };

  /**
   * Discount.Course
   */
  export type Discount$CourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    where?: CourseWhereInput;
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[];
    cursor?: CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentAvgAggregateOutputType = {
    authorId: number | null;
    courseId: number | null;
    postId: number | null;
  };

  export type CommentSumAggregateOutputType = {
    authorId: number | null;
    courseId: number | null;
    postId: number | null;
  };

  export type CommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    courseId: number | null;
    postId: number | null;
    parentId: string | null;
    status: $Enums.CommentStatus | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    courseId: number | null;
    postId: number | null;
    parentId: string | null;
    status: $Enums.CommentStatus | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    courseId: number;
    postId: number;
    parentId: number;
    status: number;
    _all: number;
  };

  export type CommentAvgAggregateInputType = {
    authorId?: true;
    courseId?: true;
    postId?: true;
  };

  export type CommentSumAggregateInputType = {
    authorId?: true;
    courseId?: true;
    postId?: true;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    courseId?: true;
    postId?: true;
    parentId?: true;
    status?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    courseId?: true;
    postId?: true;
    parentId?: true;
    status?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    courseId?: true;
    postId?: true;
    parentId?: true;
    status?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _avg?: CommentAvgAggregateInputType;
    _sum?: CommentSumAggregateInputType;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    courseId: number | null;
    postId: number | null;
    parentId: string | null;
    status: $Enums.CommentStatus;
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      courseId?: boolean;
      postId?: boolean;
      parentId?: boolean;
      status?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | Comment$courseArgs<ExtArgs>;
      post?: boolean | Comment$postArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
      replies?: boolean | Comment$repliesArgs<ExtArgs>;
      _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      courseId?: boolean;
      postId?: boolean;
      parentId?: boolean;
      status?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | Comment$courseArgs<ExtArgs>;
      post?: boolean | Comment$postArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      courseId?: boolean;
      postId?: boolean;
      parentId?: boolean;
      status?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      course?: boolean | Comment$courseArgs<ExtArgs>;
      post?: boolean | Comment$postArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    courseId?: boolean;
    postId?: boolean;
    parentId?: boolean;
    status?: boolean;
  };

  export type CommentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "content"
    | "createdAt"
    | "updatedAt"
    | "authorId"
    | "courseId"
    | "postId"
    | "parentId"
    | "status",
    ExtArgs["result"]["comment"]
  >;
  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | Comment$courseArgs<ExtArgs>;
    post?: boolean | Comment$postArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
    replies?: boolean | Comment$repliesArgs<ExtArgs>;
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | Comment$courseArgs<ExtArgs>;
    post?: boolean | Comment$postArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    course?: boolean | Comment$courseArgs<ExtArgs>;
    post?: boolean | Comment$postArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Comment";
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      course: Prisma.$CoursePayload<ExtArgs> | null;
      post: Prisma.$PostPayload<ExtArgs> | null;
      parent: Prisma.$CommentPayload<ExtArgs> | null;
      replies: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        courseId: number | null;
        postId: number | null;
        parentId: string | null;
        status: $Enums.CommentStatus;
      },
      ExtArgs["result"]["comment"]
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CommentFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Comment"];
      meta: { name: "Comment" };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>,
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs["orderBy"] }
        : { orderBy?: CommentGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    course<T extends Comment$courseArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$courseArgs<ExtArgs>>,
    ): Prisma__CourseClient<
      $Result.GetResult<
        Prisma.$CoursePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    post<T extends Comment$postArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$postArgs<ExtArgs>>,
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$parentArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$repliesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", "String">;
    readonly content: FieldRef<"Comment", "String">;
    readonly createdAt: FieldRef<"Comment", "DateTime">;
    readonly updatedAt: FieldRef<"Comment", "DateTime">;
    readonly authorId: FieldRef<"Comment", "Int">;
    readonly courseId: FieldRef<"Comment", "Int">;
    readonly postId: FieldRef<"Comment", "Int">;
    readonly parentId: FieldRef<"Comment", "String">;
    readonly status: FieldRef<"Comment", "CommentStatus">;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment.course
   */
  export type Comment$courseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null;
    where?: CourseWhereInput;
  };

  /**
   * Comment.post
   */
  export type Comment$postArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
  };

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
  };

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    username: "username";
    firstName: "firstName";
    lastName: "lastName";
    imageUrl: "imageUrl";
    email: "email";
    password: "password";
    phoneNumber: "phoneNumber";
    role: "role";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    bio: "bio";
    emailVerified: "emailVerified";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const AccountScalarFieldEnum: {
    id: "id";
    userId: "userId";
    type: "type";
    provider: "provider";
    providerAccountId: "providerAccountId";
    refresh_token: "refresh_token";
    access_token: "access_token";
    expires_at: "expires_at";
    token_type: "token_type";
    scope: "scope";
    id_token: "id_token";
    session_state: "session_state";
    refresh_token_expires_in: "refresh_token_expires_in";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const EnrolmentScalarFieldEnum: {
    user_id: "user_id";
    course_id: "course_id";
    enrolmentDate: "enrolmentDate";
  };

  export type EnrolmentScalarFieldEnum =
    (typeof EnrolmentScalarFieldEnum)[keyof typeof EnrolmentScalarFieldEnum];

  export const CourseScalarFieldEnum: {
    id: "id";
    slug: "slug";
    title: "title";
    description: "description";
    content: "content";
    imageUrl: "imageUrl";
    level: "level";
    status: "status";
    price: "price";
    createdAt: "createdAt";
    updateAt: "updateAt";
    instructorId: "instructorId";
    discountId: "discountId";
  };

  export type CourseScalarFieldEnum =
    (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: "id";
    slug: "slug";
    title: "title";
    content: "content";
    imageUrl: "imageUrl";
    createAt: "createAt";
    updatedAt: "updatedAt";
    authorId: "authorId";
    isEditorPick: "isEditorPick";
    readingTime: "readingTime";
  };

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const CourseTagScalarFieldEnum: {
    course_id: "course_id";
    tag_id: "tag_id";
  };

  export type CourseTagScalarFieldEnum =
    (typeof CourseTagScalarFieldEnum)[keyof typeof CourseTagScalarFieldEnum];

  export const ContactMessageScalarFieldEnum: {
    id: "id";
    fullName: "fullName";
    email: "email";
    phone: "phone";
    title: "title";
    message: "message";
    status: "status";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ContactMessageScalarFieldEnum =
    (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum];

  export const DiscountScalarFieldEnum: {
    id: "id";
    percentage: "percentage";
    startsAt: "startsAt";
    expiresAt: "expiresAt";
    createdAt: "createdAt";
  };

  export type DiscountScalarFieldEnum =
    (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: "id";
    content: "content";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    authorId: "authorId";
    courseId: "courseId";
    postId: "postId";
    parentId: "parentId";
    status: "status";
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Level"
  >;

  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Level[]"
  >;

  /**
   * Reference to a field of type 'CourseStatus'
   */
  export type EnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "CourseStatus"
  >;

  /**
   * Reference to a field of type 'CourseStatus[]'
   */
  export type ListEnumCourseStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "CourseStatus[]">;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "MessageStatus"
  >;

  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "MessageStatus[]">;

  /**
   * Reference to a field of type 'CommentStatus'
   */
  export type EnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "CommentStatus"
  >;

  /**
   * Reference to a field of type 'CommentStatus[]'
   */
  export type ListEnumCommentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "CommentStatus[]">;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    username?: StringNullableFilter<"User"> | string | null;
    firstName?: StringFilter<"User"> | string;
    lastName?: StringFilter<"User"> | string;
    imageUrl?: StringNullableFilter<"User"> | string | null;
    email?: StringNullableFilter<"User"> | string | null;
    password?: StringNullableFilter<"User"> | string | null;
    phoneNumber?: StringNullableFilter<"User"> | string | null;
    role?: EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    bio?: StringNullableFilter<"User"> | string | null;
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null;
    enrolment?: EnrolmentListRelationFilter;
    Course?: CourseListRelationFilter;
    Post?: PostListRelationFilter;
    accounts?: AccountListRelationFilter;
    Comment?: CommentListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrderInput | SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    phoneNumber?: SortOrderInput | SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    emailVerified?: SortOrderInput | SortOrder;
    enrolment?: EnrolmentOrderByRelationAggregateInput;
    Course?: CourseOrderByRelationAggregateInput;
    Post?: PostOrderByRelationAggregateInput;
    accounts?: AccountOrderByRelationAggregateInput;
    Comment?: CommentOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      username?: string;
      email?: string;
      phoneNumber?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      firstName?: StringFilter<"User"> | string;
      lastName?: StringFilter<"User"> | string;
      imageUrl?: StringNullableFilter<"User"> | string | null;
      password?: StringNullableFilter<"User"> | string | null;
      role?: EnumRoleFilter<"User"> | $Enums.Role;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      bio?: StringNullableFilter<"User"> | string | null;
      emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null;
      enrolment?: EnrolmentListRelationFilter;
      Course?: CourseListRelationFilter;
      Post?: PostListRelationFilter;
      accounts?: AccountListRelationFilter;
      Comment?: CommentListRelationFilter;
    },
    "id" | "username" | "email" | "phoneNumber"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrderInput | SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    imageUrl?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    phoneNumber?: SortOrderInput | SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    emailVerified?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    username?: StringNullableWithAggregatesFilter<"User"> | string | null;
    firstName?: StringWithAggregatesFilter<"User"> | string;
    lastName?: StringWithAggregatesFilter<"User"> | string;
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: StringNullableWithAggregatesFilter<"User"> | string | null;
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null;
    emailVerified?:
      | DateTimeNullableWithAggregatesFilter<"User">
      | Date
      | string
      | null;
  };

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<"Account"> | string;
    userId?: IntFilter<"Account"> | number;
    type?: StringFilter<"Account"> | string;
    provider?: StringFilter<"Account"> | string;
    providerAccountId?: StringFilter<"Account"> | string;
    refresh_token?: StringNullableFilter<"Account"> | string | null;
    access_token?: StringNullableFilter<"Account"> | string | null;
    expires_at?: IntNullableFilter<"Account"> | number | null;
    token_type?: StringNullableFilter<"Account"> | string | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    id_token?: StringNullableFilter<"Account"> | string | null;
    session_state?: StringNullableFilter<"Account"> | string | null;
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null;
    createdAt?: DateTimeFilter<"Account"> | Date | string;
    updatedAt?: DateTimeFilter<"Account"> | Date | string;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrderInput | SortOrder;
    access_token?: SortOrderInput | SortOrder;
    expires_at?: SortOrderInput | SortOrder;
    token_type?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    id_token?: SortOrderInput | SortOrder;
    session_state?: SortOrderInput | SortOrder;
    refresh_token_expires_in?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: number;
      provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      type?: StringFilter<"Account"> | string;
      provider?: StringFilter<"Account"> | string;
      providerAccountId?: StringFilter<"Account"> | string;
      refresh_token?: StringNullableFilter<"Account"> | string | null;
      access_token?: StringNullableFilter<"Account"> | string | null;
      expires_at?: IntNullableFilter<"Account"> | number | null;
      token_type?: StringNullableFilter<"Account"> | string | null;
      scope?: StringNullableFilter<"Account"> | string | null;
      id_token?: StringNullableFilter<"Account"> | string | null;
      session_state?: StringNullableFilter<"Account"> | string | null;
      refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null;
      createdAt?: DateTimeFilter<"Account"> | Date | string;
      updatedAt?: DateTimeFilter<"Account"> | Date | string;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    "id" | "userId" | "provider_providerAccountId"
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrderInput | SortOrder;
    access_token?: SortOrderInput | SortOrder;
    expires_at?: SortOrderInput | SortOrder;
    token_type?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    id_token?: SortOrderInput | SortOrder;
    session_state?: SortOrderInput | SortOrder;
    refresh_token_expires_in?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _avg?: AccountAvgOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
    _sum?: AccountSumOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Account"> | string;
    userId?: IntWithAggregatesFilter<"Account"> | number;
    type?: StringWithAggregatesFilter<"Account"> | string;
    provider?: StringWithAggregatesFilter<"Account"> | string;
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string;
    refresh_token?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    access_token?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null;
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    session_state?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    refresh_token_expires_in?:
      | IntNullableWithAggregatesFilter<"Account">
      | number
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
  };

  export type EnrolmentWhereInput = {
    AND?: EnrolmentWhereInput | EnrolmentWhereInput[];
    OR?: EnrolmentWhereInput[];
    NOT?: EnrolmentWhereInput | EnrolmentWhereInput[];
    user_id?: IntFilter<"Enrolment"> | number;
    course_id?: IntFilter<"Enrolment"> | number;
    enrolmentDate?: DateTimeFilter<"Enrolment"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>;
  };

  export type EnrolmentOrderByWithRelationInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
    enrolmentDate?: SortOrder;
    user?: UserOrderByWithRelationInput;
    course?: CourseOrderByWithRelationInput;
  };

  export type EnrolmentWhereUniqueInput = Prisma.AtLeast<
    {
      user_id_course_id?: EnrolmentUser_idCourse_idCompoundUniqueInput;
      AND?: EnrolmentWhereInput | EnrolmentWhereInput[];
      OR?: EnrolmentWhereInput[];
      NOT?: EnrolmentWhereInput | EnrolmentWhereInput[];
      user_id?: IntFilter<"Enrolment"> | number;
      course_id?: IntFilter<"Enrolment"> | number;
      enrolmentDate?: DateTimeFilter<"Enrolment"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      course?: XOR<CourseScalarRelationFilter, CourseWhereInput>;
    },
    "user_id_course_id"
  >;

  export type EnrolmentOrderByWithAggregationInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
    enrolmentDate?: SortOrder;
    _count?: EnrolmentCountOrderByAggregateInput;
    _avg?: EnrolmentAvgOrderByAggregateInput;
    _max?: EnrolmentMaxOrderByAggregateInput;
    _min?: EnrolmentMinOrderByAggregateInput;
    _sum?: EnrolmentSumOrderByAggregateInput;
  };

  export type EnrolmentScalarWhereWithAggregatesInput = {
    AND?:
      | EnrolmentScalarWhereWithAggregatesInput
      | EnrolmentScalarWhereWithAggregatesInput[];
    OR?: EnrolmentScalarWhereWithAggregatesInput[];
    NOT?:
      | EnrolmentScalarWhereWithAggregatesInput
      | EnrolmentScalarWhereWithAggregatesInput[];
    user_id?: IntWithAggregatesFilter<"Enrolment"> | number;
    course_id?: IntWithAggregatesFilter<"Enrolment"> | number;
    enrolmentDate?: DateTimeWithAggregatesFilter<"Enrolment"> | Date | string;
  };

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[];
    OR?: CourseWhereInput[];
    NOT?: CourseWhereInput | CourseWhereInput[];
    id?: IntFilter<"Course"> | number;
    slug?: StringFilter<"Course"> | string;
    title?: StringFilter<"Course"> | string;
    description?: StringFilter<"Course"> | string;
    content?: StringFilter<"Course"> | string;
    imageUrl?: StringFilter<"Course"> | string;
    level?: EnumLevelFilter<"Course"> | $Enums.Level;
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
    price?: IntFilter<"Course"> | number;
    createdAt?: DateTimeFilter<"Course"> | Date | string;
    updateAt?: DateTimeFilter<"Course"> | Date | string;
    instructorId?: IntFilter<"Course"> | number;
    discountId?: StringNullableFilter<"Course"> | string | null;
    discount?: XOR<
      DiscountNullableScalarRelationFilter,
      DiscountWhereInput
    > | null;
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>;
    Enrolment?: EnrolmentListRelationFilter;
    tag?: CourseTagListRelationFilter;
    Comment?: CommentListRelationFilter;
  };

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    level?: SortOrder;
    status?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updateAt?: SortOrder;
    instructorId?: SortOrder;
    discountId?: SortOrderInput | SortOrder;
    discount?: DiscountOrderByWithRelationInput;
    instructor?: UserOrderByWithRelationInput;
    Enrolment?: EnrolmentOrderByRelationAggregateInput;
    tag?: CourseTagOrderByRelationAggregateInput;
    Comment?: CommentOrderByRelationAggregateInput;
  };

  export type CourseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      slug?: string;
      AND?: CourseWhereInput | CourseWhereInput[];
      OR?: CourseWhereInput[];
      NOT?: CourseWhereInput | CourseWhereInput[];
      title?: StringFilter<"Course"> | string;
      description?: StringFilter<"Course"> | string;
      content?: StringFilter<"Course"> | string;
      imageUrl?: StringFilter<"Course"> | string;
      level?: EnumLevelFilter<"Course"> | $Enums.Level;
      status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
      price?: IntFilter<"Course"> | number;
      createdAt?: DateTimeFilter<"Course"> | Date | string;
      updateAt?: DateTimeFilter<"Course"> | Date | string;
      instructorId?: IntFilter<"Course"> | number;
      discountId?: StringNullableFilter<"Course"> | string | null;
      discount?: XOR<
        DiscountNullableScalarRelationFilter,
        DiscountWhereInput
      > | null;
      instructor?: XOR<UserScalarRelationFilter, UserWhereInput>;
      Enrolment?: EnrolmentListRelationFilter;
      tag?: CourseTagListRelationFilter;
      Comment?: CommentListRelationFilter;
    },
    "id" | "slug"
  >;

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    level?: SortOrder;
    status?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updateAt?: SortOrder;
    instructorId?: SortOrder;
    discountId?: SortOrderInput | SortOrder;
    _count?: CourseCountOrderByAggregateInput;
    _avg?: CourseAvgOrderByAggregateInput;
    _max?: CourseMaxOrderByAggregateInput;
    _min?: CourseMinOrderByAggregateInput;
    _sum?: CourseSumOrderByAggregateInput;
  };

  export type CourseScalarWhereWithAggregatesInput = {
    AND?:
      | CourseScalarWhereWithAggregatesInput
      | CourseScalarWhereWithAggregatesInput[];
    OR?: CourseScalarWhereWithAggregatesInput[];
    NOT?:
      | CourseScalarWhereWithAggregatesInput
      | CourseScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Course"> | number;
    slug?: StringWithAggregatesFilter<"Course"> | string;
    title?: StringWithAggregatesFilter<"Course"> | string;
    description?: StringWithAggregatesFilter<"Course"> | string;
    content?: StringWithAggregatesFilter<"Course"> | string;
    imageUrl?: StringWithAggregatesFilter<"Course"> | string;
    level?: EnumLevelWithAggregatesFilter<"Course"> | $Enums.Level;
    status?:
      | EnumCourseStatusWithAggregatesFilter<"Course">
      | $Enums.CourseStatus;
    price?: IntWithAggregatesFilter<"Course"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updateAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string;
    instructorId?: IntWithAggregatesFilter<"Course"> | number;
    discountId?: StringNullableWithAggregatesFilter<"Course"> | string | null;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: IntFilter<"Post"> | number;
    slug?: StringFilter<"Post"> | string;
    title?: StringFilter<"Post"> | string;
    content?: StringFilter<"Post"> | string;
    imageUrl?: StringFilter<"Post"> | string;
    createAt?: DateTimeFilter<"Post"> | Date | string;
    updatedAt?: DateTimeFilter<"Post"> | Date | string;
    authorId?: IntFilter<"Post"> | number;
    isEditorPick?: BoolNullableFilter<"Post"> | boolean | null;
    readingTime?: IntFilter<"Post"> | number;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    tags?: TagListRelationFilter;
    Comment?: CommentListRelationFilter;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    createAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    isEditorPick?: SortOrderInput | SortOrder;
    readingTime?: SortOrder;
    author?: UserOrderByWithRelationInput;
    tags?: TagOrderByRelationAggregateInput;
    Comment?: CommentOrderByRelationAggregateInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      slug?: string;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      title?: StringFilter<"Post"> | string;
      content?: StringFilter<"Post"> | string;
      imageUrl?: StringFilter<"Post"> | string;
      createAt?: DateTimeFilter<"Post"> | Date | string;
      updatedAt?: DateTimeFilter<"Post"> | Date | string;
      authorId?: IntFilter<"Post"> | number;
      isEditorPick?: BoolNullableFilter<"Post"> | boolean | null;
      readingTime?: IntFilter<"Post"> | number;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      tags?: TagListRelationFilter;
      Comment?: CommentListRelationFilter;
    },
    "id" | "slug"
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    createAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    isEditorPick?: SortOrderInput | SortOrder;
    readingTime?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Post"> | number;
    slug?: StringWithAggregatesFilter<"Post"> | string;
    title?: StringWithAggregatesFilter<"Post"> | string;
    content?: StringWithAggregatesFilter<"Post"> | string;
    imageUrl?: StringWithAggregatesFilter<"Post"> | string;
    createAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string;
    authorId?: IntWithAggregatesFilter<"Post"> | number;
    isEditorPick?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null;
    readingTime?: IntWithAggregatesFilter<"Post"> | number;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: IntFilter<"Tag"> | number;
    name?: StringFilter<"Tag"> | string;
    posts?: PostListRelationFilter;
    courses?: CourseTagListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    courses?: CourseTagOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      posts?: PostListRelationFilter;
      courses?: CourseTagListRelationFilter;
    },
    "id" | "name"
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _avg?: TagAvgOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
    _sum?: TagSumOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Tag"> | number;
    name?: StringWithAggregatesFilter<"Tag"> | string;
  };

  export type CourseTagWhereInput = {
    AND?: CourseTagWhereInput | CourseTagWhereInput[];
    OR?: CourseTagWhereInput[];
    NOT?: CourseTagWhereInput | CourseTagWhereInput[];
    course_id?: IntFilter<"CourseTag"> | number;
    tag_id?: IntFilter<"CourseTag"> | number;
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>;
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
  };

  export type CourseTagOrderByWithRelationInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
    course?: CourseOrderByWithRelationInput;
    tag?: TagOrderByWithRelationInput;
  };

  export type CourseTagWhereUniqueInput = Prisma.AtLeast<
    {
      course_id_tag_id?: CourseTagCourse_idTag_idCompoundUniqueInput;
      AND?: CourseTagWhereInput | CourseTagWhereInput[];
      OR?: CourseTagWhereInput[];
      NOT?: CourseTagWhereInput | CourseTagWhereInput[];
      course_id?: IntFilter<"CourseTag"> | number;
      tag_id?: IntFilter<"CourseTag"> | number;
      course?: XOR<CourseScalarRelationFilter, CourseWhereInput>;
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    },
    "course_id_tag_id"
  >;

  export type CourseTagOrderByWithAggregationInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
    _count?: CourseTagCountOrderByAggregateInput;
    _avg?: CourseTagAvgOrderByAggregateInput;
    _max?: CourseTagMaxOrderByAggregateInput;
    _min?: CourseTagMinOrderByAggregateInput;
    _sum?: CourseTagSumOrderByAggregateInput;
  };

  export type CourseTagScalarWhereWithAggregatesInput = {
    AND?:
      | CourseTagScalarWhereWithAggregatesInput
      | CourseTagScalarWhereWithAggregatesInput[];
    OR?: CourseTagScalarWhereWithAggregatesInput[];
    NOT?:
      | CourseTagScalarWhereWithAggregatesInput
      | CourseTagScalarWhereWithAggregatesInput[];
    course_id?: IntWithAggregatesFilter<"CourseTag"> | number;
    tag_id?: IntWithAggregatesFilter<"CourseTag"> | number;
  };

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[];
    OR?: ContactMessageWhereInput[];
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[];
    id?: StringFilter<"ContactMessage"> | string;
    fullName?: StringFilter<"ContactMessage"> | string;
    email?: StringFilter<"ContactMessage"> | string;
    phone?: StringNullableFilter<"ContactMessage"> | string | null;
    title?: StringFilter<"ContactMessage"> | string;
    message?: StringFilter<"ContactMessage"> | string;
    status?: EnumMessageStatusFilter<"ContactMessage"> | $Enums.MessageStatus;
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string;
    updatedAt?: DateTimeFilter<"ContactMessage"> | Date | string;
  };

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder;
    fullName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ContactMessageWhereInput | ContactMessageWhereInput[];
      OR?: ContactMessageWhereInput[];
      NOT?: ContactMessageWhereInput | ContactMessageWhereInput[];
      fullName?: StringFilter<"ContactMessage"> | string;
      email?: StringFilter<"ContactMessage"> | string;
      phone?: StringNullableFilter<"ContactMessage"> | string | null;
      title?: StringFilter<"ContactMessage"> | string;
      message?: StringFilter<"ContactMessage"> | string;
      status?: EnumMessageStatusFilter<"ContactMessage"> | $Enums.MessageStatus;
      createdAt?: DateTimeFilter<"ContactMessage"> | Date | string;
      updatedAt?: DateTimeFilter<"ContactMessage"> | Date | string;
    },
    "id"
  >;

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder;
    fullName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ContactMessageCountOrderByAggregateInput;
    _max?: ContactMessageMaxOrderByAggregateInput;
    _min?: ContactMessageMinOrderByAggregateInput;
  };

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?:
      | ContactMessageScalarWhereWithAggregatesInput
      | ContactMessageScalarWhereWithAggregatesInput[];
    OR?: ContactMessageScalarWhereWithAggregatesInput[];
    NOT?:
      | ContactMessageScalarWhereWithAggregatesInput
      | ContactMessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ContactMessage"> | string;
    fullName?: StringWithAggregatesFilter<"ContactMessage"> | string;
    email?: StringWithAggregatesFilter<"ContactMessage"> | string;
    phone?:
      | StringNullableWithAggregatesFilter<"ContactMessage">
      | string
      | null;
    title?: StringWithAggregatesFilter<"ContactMessage"> | string;
    message?: StringWithAggregatesFilter<"ContactMessage"> | string;
    status?:
      | EnumMessageStatusWithAggregatesFilter<"ContactMessage">
      | $Enums.MessageStatus;
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string;
  };

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[];
    OR?: DiscountWhereInput[];
    NOT?: DiscountWhereInput | DiscountWhereInput[];
    id?: StringFilter<"Discount"> | string;
    percentage?: IntFilter<"Discount"> | number;
    startsAt?: DateTimeNullableFilter<"Discount"> | Date | string | null;
    expiresAt?: DateTimeNullableFilter<"Discount"> | Date | string | null;
    createdAt?: DateTimeFilter<"Discount"> | Date | string;
    Course?: CourseListRelationFilter;
  };

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder;
    percentage?: SortOrder;
    startsAt?: SortOrderInput | SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    Course?: CourseOrderByRelationAggregateInput;
  };

  export type DiscountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: DiscountWhereInput | DiscountWhereInput[];
      OR?: DiscountWhereInput[];
      NOT?: DiscountWhereInput | DiscountWhereInput[];
      percentage?: IntFilter<"Discount"> | number;
      startsAt?: DateTimeNullableFilter<"Discount"> | Date | string | null;
      expiresAt?: DateTimeNullableFilter<"Discount"> | Date | string | null;
      createdAt?: DateTimeFilter<"Discount"> | Date | string;
      Course?: CourseListRelationFilter;
    },
    "id"
  >;

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder;
    percentage?: SortOrder;
    startsAt?: SortOrderInput | SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: DiscountCountOrderByAggregateInput;
    _avg?: DiscountAvgOrderByAggregateInput;
    _max?: DiscountMaxOrderByAggregateInput;
    _min?: DiscountMinOrderByAggregateInput;
    _sum?: DiscountSumOrderByAggregateInput;
  };

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?:
      | DiscountScalarWhereWithAggregatesInput
      | DiscountScalarWhereWithAggregatesInput[];
    OR?: DiscountScalarWhereWithAggregatesInput[];
    NOT?:
      | DiscountScalarWhereWithAggregatesInput
      | DiscountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Discount"> | string;
    percentage?: IntWithAggregatesFilter<"Discount"> | number;
    startsAt?:
      | DateTimeNullableWithAggregatesFilter<"Discount">
      | Date
      | string
      | null;
    expiresAt?:
      | DateTimeNullableWithAggregatesFilter<"Discount">
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: StringFilter<"Comment"> | string;
    content?: StringFilter<"Comment"> | string;
    createdAt?: DateTimeFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeFilter<"Comment"> | Date | string;
    authorId?: IntFilter<"Comment"> | number;
    courseId?: IntNullableFilter<"Comment"> | number | null;
    postId?: IntNullableFilter<"Comment"> | number | null;
    parentId?: StringNullableFilter<"Comment"> | string | null;
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null;
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null;
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null;
    replies?: CommentListRelationFilter;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    courseId?: SortOrderInput | SortOrder;
    postId?: SortOrderInput | SortOrder;
    parentId?: SortOrderInput | SortOrder;
    status?: SortOrder;
    author?: UserOrderByWithRelationInput;
    course?: CourseOrderByWithRelationInput;
    post?: PostOrderByWithRelationInput;
    parent?: CommentOrderByWithRelationInput;
    replies?: CommentOrderByRelationAggregateInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<"Comment"> | string;
      createdAt?: DateTimeFilter<"Comment"> | Date | string;
      updatedAt?: DateTimeFilter<"Comment"> | Date | string;
      authorId?: IntFilter<"Comment"> | number;
      courseId?: IntNullableFilter<"Comment"> | number | null;
      postId?: IntNullableFilter<"Comment"> | number | null;
      parentId?: StringNullableFilter<"Comment"> | string | null;
      status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null;
      post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null;
      parent?: XOR<
        CommentNullableScalarRelationFilter,
        CommentWhereInput
      > | null;
      replies?: CommentListRelationFilter;
    },
    "id"
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    courseId?: SortOrderInput | SortOrder;
    postId?: SortOrderInput | SortOrder;
    parentId?: SortOrderInput | SortOrder;
    status?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Comment"> | string;
    content?: StringWithAggregatesFilter<"Comment"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string;
    authorId?: IntWithAggregatesFilter<"Comment"> | number;
    courseId?: IntNullableWithAggregatesFilter<"Comment"> | number | null;
    postId?: IntNullableWithAggregatesFilter<"Comment"> | number | null;
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null;
    status?:
      | EnumCommentStatusWithAggregatesFilter<"Comment">
      | $Enums.CommentStatus;
  };

  export type UserCreateInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentCreateNestedManyWithoutUserInput;
    Course?: CourseCreateNestedManyWithoutInstructorInput;
    Post?: PostCreateNestedManyWithoutAuthorInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    Comment?: CommentCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentUncheckedCreateNestedManyWithoutUserInput;
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput;
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUpdateManyWithoutUserNestedInput;
    Course?: CourseUpdateManyWithoutInstructorNestedInput;
    Post?: PostUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    Comment?: CommentUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput;
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
  };

  export type UserUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AccountCreateInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAccountsInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateManyInput = {
    id?: string;
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnrolmentCreateInput = {
    enrolmentDate?: Date | string;
    user: UserCreateNestedOneWithoutEnrolmentInput;
    course: CourseCreateNestedOneWithoutEnrolmentInput;
  };

  export type EnrolmentUncheckedCreateInput = {
    user_id: number;
    course_id: number;
    enrolmentDate?: Date | string;
  };

  export type EnrolmentUpdateInput = {
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutEnrolmentNestedInput;
    course?: CourseUpdateOneRequiredWithoutEnrolmentNestedInput;
  };

  export type EnrolmentUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    course_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnrolmentCreateManyInput = {
    user_id: number;
    course_id: number;
    enrolmentDate?: Date | string;
  };

  export type EnrolmentUpdateManyMutationInput = {
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnrolmentUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    course_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseCreateInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discount?: DiscountCreateNestedOneWithoutCourseInput;
    instructor: UserCreateNestedOneWithoutCourseInput;
    Enrolment?: EnrolmentCreateNestedManyWithoutCourseInput;
    tag?: CourseTagCreateNestedManyWithoutCourseInput;
    Comment?: CommentCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    discountId?: string | null;
    Enrolment?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput;
    tag?: CourseTagUncheckedCreateNestedManyWithoutCourseInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discount?: DiscountUpdateOneWithoutCourseNestedInput;
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput;
    Enrolment?: EnrolmentUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
    Enrolment?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUncheckedUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type CourseCreateManyInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    discountId?: string | null;
  };

  export type CourseUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PostCreateInput = {
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: TagCreateNestedManyWithoutPostsInput;
    Comment?: CommentCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    isEditorPick?: boolean | null;
    readingTime: number;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: TagUpdateManyWithoutPostsNestedInput;
    Comment?: CommentUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostCreateManyInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    isEditorPick?: boolean | null;
    readingTime: number;
  };

  export type PostUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
  };

  export type TagCreateInput = {
    name: string;
    posts?: PostCreateNestedManyWithoutTagsInput;
    courses?: CourseTagCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateInput = {
    id?: number;
    name: string;
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
    courses?: CourseTagUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    posts?: PostUpdateManyWithoutTagsNestedInput;
    courses?: CourseTagUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput;
    courses?: CourseTagUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagCreateManyInput = {
    id?: number;
    name: string;
  };

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CourseTagCreateInput = {
    course: CourseCreateNestedOneWithoutTagInput;
    tag: TagCreateNestedOneWithoutCoursesInput;
  };

  export type CourseTagUncheckedCreateInput = {
    course_id: number;
    tag_id: number;
  };

  export type CourseTagUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutTagNestedInput;
    tag?: TagUpdateOneRequiredWithoutCoursesNestedInput;
  };

  export type CourseTagUncheckedUpdateInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
    tag_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CourseTagCreateManyInput = {
    course_id: number;
    tag_id: number;
  };

  export type CourseTagUpdateManyMutationInput = {};

  export type CourseTagUncheckedUpdateManyInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
    tag_id?: IntFieldUpdateOperationsInput | number;
  };

  export type ContactMessageCreateInput = {
    id?: string;
    fullName: string;
    email: string;
    phone?: string | null;
    title: string;
    message: string;
    status?: $Enums.MessageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactMessageUncheckedCreateInput = {
    id?: string;
    fullName: string;
    email: string;
    phone?: string | null;
    title: string;
    message: string;
    status?: $Enums.MessageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactMessageCreateManyInput = {
    id?: string;
    fullName: string;
    email: string;
    phone?: string | null;
    title: string;
    message: string;
    status?: $Enums.MessageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscountCreateInput = {
    id?: string;
    percentage: number;
    startsAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    Course?: CourseCreateNestedManyWithoutDiscountInput;
  };

  export type DiscountUncheckedCreateInput = {
    id?: string;
    percentage: number;
    startsAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    Course?: CourseUncheckedCreateNestedManyWithoutDiscountInput;
  };

  export type DiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Course?: CourseUpdateManyWithoutDiscountNestedInput;
  };

  export type DiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Course?: CourseUncheckedUpdateManyWithoutDiscountNestedInput;
  };

  export type DiscountCreateManyInput = {
    id?: string;
    percentage: number;
    startsAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    author: UserCreateNestedOneWithoutCommentInput;
    course?: CourseCreateNestedOneWithoutCommentInput;
    post?: PostCreateNestedOneWithoutCommentInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
    course?: CourseUpdateOneWithoutCommentNestedInput;
    post?: PostUpdateOneWithoutCommentNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
  };

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type EnrolmentListRelationFilter = {
    every?: EnrolmentWhereInput;
    some?: EnrolmentWhereInput;
    none?: EnrolmentWhereInput;
  };

  export type CourseListRelationFilter = {
    every?: CourseWhereInput;
    some?: CourseWhereInput;
    none?: CourseWhereInput;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type EnrolmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    imageUrl?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bio?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    imageUrl?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bio?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    imageUrl?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bio?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string;
    providerAccountId: string;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    refresh_token_expires_in?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountAvgOrderByAggregateInput = {
    userId?: SortOrder;
    expires_at?: SortOrder;
    refresh_token_expires_in?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    refresh_token_expires_in?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    refresh_token_expires_in?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountSumOrderByAggregateInput = {
    userId?: SortOrder;
    expires_at?: SortOrder;
    refresh_token_expires_in?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput;
    isNot?: CourseWhereInput;
  };

  export type EnrolmentUser_idCourse_idCompoundUniqueInput = {
    user_id: number;
    course_id: number;
  };

  export type EnrolmentCountOrderByAggregateInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
    enrolmentDate?: SortOrder;
  };

  export type EnrolmentAvgOrderByAggregateInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
  };

  export type EnrolmentMaxOrderByAggregateInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
    enrolmentDate?: SortOrder;
  };

  export type EnrolmentMinOrderByAggregateInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
    enrolmentDate?: SortOrder;
  };

  export type EnrolmentSumOrderByAggregateInput = {
    user_id?: SortOrder;
    course_id?: SortOrder;
  };

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level;
  };

  export type EnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus;
  };

  export type DiscountNullableScalarRelationFilter = {
    is?: DiscountWhereInput | null;
    isNot?: DiscountWhereInput | null;
  };

  export type CourseTagListRelationFilter = {
    every?: CourseTagWhereInput;
    some?: CourseTagWhereInput;
    none?: CourseTagWhereInput;
  };

  export type CourseTagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    level?: SortOrder;
    status?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updateAt?: SortOrder;
    instructorId?: SortOrder;
    discountId?: SortOrder;
  };

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    instructorId?: SortOrder;
  };

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    level?: SortOrder;
    status?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updateAt?: SortOrder;
    instructorId?: SortOrder;
    discountId?: SortOrder;
  };

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    level?: SortOrder;
    status?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updateAt?: SortOrder;
    instructorId?: SortOrder;
    discountId?: SortOrder;
  };

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    instructorId?: SortOrder;
  };

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLevelFilter<$PrismaModel>;
    _max?: NestedEnumLevelFilter<$PrismaModel>;
  };

  export type EnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.CourseStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>;
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type TagListRelationFilter = {
    every?: TagWhereInput;
    some?: TagWhereInput;
    none?: TagWhereInput;
  };

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    createAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    isEditorPick?: SortOrder;
    readingTime?: SortOrder;
  };

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    readingTime?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    createAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    isEditorPick?: SortOrder;
    readingTime?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    slug?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    imageUrl?: SortOrder;
    createAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    isEditorPick?: SortOrder;
    readingTime?: SortOrder;
  };

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    readingTime?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TagScalarRelationFilter = {
    is?: TagWhereInput;
    isNot?: TagWhereInput;
  };

  export type CourseTagCourse_idTag_idCompoundUniqueInput = {
    course_id: number;
    tag_id: number;
  };

  export type CourseTagCountOrderByAggregateInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
  };

  export type CourseTagAvgOrderByAggregateInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
  };

  export type CourseTagMaxOrderByAggregateInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
  };

  export type CourseTagMinOrderByAggregateInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
  };

  export type CourseTagSumOrderByAggregateInput = {
    course_id?: SortOrder;
    tag_id?: SortOrder;
  };

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MessageStatus
      | EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus;
  };

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder;
    fullName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    fullName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder;
    fullName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MessageStatus
      | EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MessageStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>;
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>;
  };

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder;
    percentage?: SortOrder;
    startsAt?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DiscountAvgOrderByAggregateInput = {
    percentage?: SortOrder;
  };

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder;
    percentage?: SortOrder;
    startsAt?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder;
    percentage?: SortOrder;
    startsAt?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DiscountSumOrderByAggregateInput = {
    percentage?: SortOrder;
  };

  export type EnumCommentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CommentStatus
      | EnumCommentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus;
  };

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null;
    isNot?: CourseWhereInput | null;
  };

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null;
    isNot?: PostWhereInput | null;
  };

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null;
    isNot?: CommentWhereInput | null;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    courseId?: SortOrder;
    postId?: SortOrder;
    parentId?: SortOrder;
    status?: SortOrder;
  };

  export type CommentAvgOrderByAggregateInput = {
    authorId?: SortOrder;
    courseId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    courseId?: SortOrder;
    postId?: SortOrder;
    parentId?: SortOrder;
    status?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    courseId?: SortOrder;
    postId?: SortOrder;
    parentId?: SortOrder;
    status?: SortOrder;
  };

  export type CommentSumOrderByAggregateInput = {
    authorId?: SortOrder;
    courseId?: SortOrder;
    postId?: SortOrder;
  };

  export type EnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CommentStatus
      | EnumCommentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.CommentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>;
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>;
  };

  export type EnrolmentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutUserInput,
          EnrolmentUncheckedCreateWithoutUserInput
        >
      | EnrolmentCreateWithoutUserInput[]
      | EnrolmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutUserInput
      | EnrolmentCreateOrConnectWithoutUserInput[];
    createMany?: EnrolmentCreateManyUserInputEnvelope;
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
  };

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?:
      | XOR<
          CourseCreateWithoutInstructorInput,
          CourseUncheckedCreateWithoutInstructorInput
        >
      | CourseCreateWithoutInstructorInput[]
      | CourseUncheckedCreateWithoutInstructorInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutInstructorInput
      | CourseCreateOrConnectWithoutInstructorInput[];
    createMany?: CourseCreateManyInstructorInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type AccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type EnrolmentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutUserInput,
          EnrolmentUncheckedCreateWithoutUserInput
        >
      | EnrolmentCreateWithoutUserInput[]
      | EnrolmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutUserInput
      | EnrolmentCreateOrConnectWithoutUserInput[];
    createMany?: EnrolmentCreateManyUserInputEnvelope;
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
  };

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?:
      | XOR<
          CourseCreateWithoutInstructorInput,
          CourseUncheckedCreateWithoutInstructorInput
        >
      | CourseCreateWithoutInstructorInput[]
      | CourseUncheckedCreateWithoutInstructorInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutInstructorInput
      | CourseCreateOrConnectWithoutInstructorInput[];
    createMany?: CourseCreateManyInstructorInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type EnrolmentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutUserInput,
          EnrolmentUncheckedCreateWithoutUserInput
        >
      | EnrolmentCreateWithoutUserInput[]
      | EnrolmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutUserInput
      | EnrolmentCreateOrConnectWithoutUserInput[];
    upsert?:
      | EnrolmentUpsertWithWhereUniqueWithoutUserInput
      | EnrolmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: EnrolmentCreateManyUserInputEnvelope;
    set?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    disconnect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    delete?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    update?:
      | EnrolmentUpdateWithWhereUniqueWithoutUserInput
      | EnrolmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | EnrolmentUpdateManyWithWhereWithoutUserInput
      | EnrolmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
  };

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutInstructorInput,
          CourseUncheckedCreateWithoutInstructorInput
        >
      | CourseCreateWithoutInstructorInput[]
      | CourseUncheckedCreateWithoutInstructorInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutInstructorInput
      | CourseCreateOrConnectWithoutInstructorInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutInstructorInput
      | CourseUpsertWithWhereUniqueWithoutInstructorInput[];
    createMany?: CourseCreateManyInstructorInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutInstructorInput
      | CourseUpdateWithWhereUniqueWithoutInstructorInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutInstructorInput
      | CourseUpdateManyWithWhereWithoutInstructorInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnrolmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutUserInput,
          EnrolmentUncheckedCreateWithoutUserInput
        >
      | EnrolmentCreateWithoutUserInput[]
      | EnrolmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutUserInput
      | EnrolmentCreateOrConnectWithoutUserInput[];
    upsert?:
      | EnrolmentUpsertWithWhereUniqueWithoutUserInput
      | EnrolmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: EnrolmentCreateManyUserInputEnvelope;
    set?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    disconnect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    delete?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    update?:
      | EnrolmentUpdateWithWhereUniqueWithoutUserInput
      | EnrolmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | EnrolmentUpdateManyWithWhereWithoutUserInput
      | EnrolmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
  };

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutInstructorInput,
          CourseUncheckedCreateWithoutInstructorInput
        >
      | CourseCreateWithoutInstructorInput[]
      | CourseUncheckedCreateWithoutInstructorInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutInstructorInput
      | CourseCreateOrConnectWithoutInstructorInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutInstructorInput
      | CourseUpsertWithWhereUniqueWithoutInstructorInput[];
    createMany?: CourseCreateManyInstructorInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutInstructorInput
      | CourseUpdateWithWhereUniqueWithoutInstructorInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutInstructorInput
      | CourseUpdateManyWithWhereWithoutInstructorInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    upsert?: UserUpsertWithoutAccountsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountsInput,
        UserUpdateWithoutAccountsInput
      >,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserCreateNestedOneWithoutEnrolmentInput = {
    create?: XOR<
      UserCreateWithoutEnrolmentInput,
      UserUncheckedCreateWithoutEnrolmentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEnrolmentInput;
    connect?: UserWhereUniqueInput;
  };

  export type CourseCreateNestedOneWithoutEnrolmentInput = {
    create?: XOR<
      CourseCreateWithoutEnrolmentInput,
      CourseUncheckedCreateWithoutEnrolmentInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolmentInput;
    connect?: CourseWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutEnrolmentNestedInput = {
    create?: XOR<
      UserCreateWithoutEnrolmentInput,
      UserUncheckedCreateWithoutEnrolmentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEnrolmentInput;
    upsert?: UserUpsertWithoutEnrolmentInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutEnrolmentInput,
        UserUpdateWithoutEnrolmentInput
      >,
      UserUncheckedUpdateWithoutEnrolmentInput
    >;
  };

  export type CourseUpdateOneRequiredWithoutEnrolmentNestedInput = {
    create?: XOR<
      CourseCreateWithoutEnrolmentInput,
      CourseUncheckedCreateWithoutEnrolmentInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolmentInput;
    upsert?: CourseUpsertWithoutEnrolmentInput;
    connect?: CourseWhereUniqueInput;
    update?: XOR<
      XOR<
        CourseUpdateToOneWithWhereWithoutEnrolmentInput,
        CourseUpdateWithoutEnrolmentInput
      >,
      CourseUncheckedUpdateWithoutEnrolmentInput
    >;
  };

  export type DiscountCreateNestedOneWithoutCourseInput = {
    create?: XOR<
      DiscountCreateWithoutCourseInput,
      DiscountUncheckedCreateWithoutCourseInput
    >;
    connectOrCreate?: DiscountCreateOrConnectWithoutCourseInput;
    connect?: DiscountWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutCourseInput = {
    create?: XOR<
      UserCreateWithoutCourseInput,
      UserUncheckedCreateWithoutCourseInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnrolmentCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutCourseInput,
          EnrolmentUncheckedCreateWithoutCourseInput
        >
      | EnrolmentCreateWithoutCourseInput[]
      | EnrolmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutCourseInput
      | EnrolmentCreateOrConnectWithoutCourseInput[];
    createMany?: EnrolmentCreateManyCourseInputEnvelope;
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
  };

  export type CourseTagCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutCourseInput,
          CourseTagUncheckedCreateWithoutCourseInput
        >
      | CourseTagCreateWithoutCourseInput[]
      | CourseTagUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutCourseInput
      | CourseTagCreateOrConnectWithoutCourseInput[];
    createMany?: CourseTagCreateManyCourseInputEnvelope;
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          CommentCreateWithoutCourseInput,
          CommentUncheckedCreateWithoutCourseInput
        >
      | CommentCreateWithoutCourseInput[]
      | CommentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutCourseInput
      | CommentCreateOrConnectWithoutCourseInput[];
    createMany?: CommentCreateManyCourseInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type EnrolmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutCourseInput,
          EnrolmentUncheckedCreateWithoutCourseInput
        >
      | EnrolmentCreateWithoutCourseInput[]
      | EnrolmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutCourseInput
      | EnrolmentCreateOrConnectWithoutCourseInput[];
    createMany?: EnrolmentCreateManyCourseInputEnvelope;
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
  };

  export type CourseTagUncheckedCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutCourseInput,
          CourseTagUncheckedCreateWithoutCourseInput
        >
      | CourseTagCreateWithoutCourseInput[]
      | CourseTagUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutCourseInput
      | CourseTagCreateOrConnectWithoutCourseInput[];
    createMany?: CourseTagCreateManyCourseInputEnvelope;
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<
          CommentCreateWithoutCourseInput,
          CommentUncheckedCreateWithoutCourseInput
        >
      | CommentCreateWithoutCourseInput[]
      | CommentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutCourseInput
      | CommentCreateOrConnectWithoutCourseInput[];
    createMany?: CommentCreateManyCourseInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level;
  };

  export type EnumCourseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CourseStatus;
  };

  export type DiscountUpdateOneWithoutCourseNestedInput = {
    create?: XOR<
      DiscountCreateWithoutCourseInput,
      DiscountUncheckedCreateWithoutCourseInput
    >;
    connectOrCreate?: DiscountCreateOrConnectWithoutCourseInput;
    upsert?: DiscountUpsertWithoutCourseInput;
    disconnect?: DiscountWhereInput | boolean;
    delete?: DiscountWhereInput | boolean;
    connect?: DiscountWhereUniqueInput;
    update?: XOR<
      XOR<
        DiscountUpdateToOneWithWhereWithoutCourseInput,
        DiscountUpdateWithoutCourseInput
      >,
      DiscountUncheckedUpdateWithoutCourseInput
    >;
  };

  export type UserUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<
      UserCreateWithoutCourseInput,
      UserUncheckedCreateWithoutCourseInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput;
    upsert?: UserUpsertWithoutCourseInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCourseInput,
        UserUpdateWithoutCourseInput
      >,
      UserUncheckedUpdateWithoutCourseInput
    >;
  };

  export type EnrolmentUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutCourseInput,
          EnrolmentUncheckedCreateWithoutCourseInput
        >
      | EnrolmentCreateWithoutCourseInput[]
      | EnrolmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutCourseInput
      | EnrolmentCreateOrConnectWithoutCourseInput[];
    upsert?:
      | EnrolmentUpsertWithWhereUniqueWithoutCourseInput
      | EnrolmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: EnrolmentCreateManyCourseInputEnvelope;
    set?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    disconnect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    delete?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    update?:
      | EnrolmentUpdateWithWhereUniqueWithoutCourseInput
      | EnrolmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | EnrolmentUpdateManyWithWhereWithoutCourseInput
      | EnrolmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
  };

  export type CourseTagUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutCourseInput,
          CourseTagUncheckedCreateWithoutCourseInput
        >
      | CourseTagCreateWithoutCourseInput[]
      | CourseTagUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutCourseInput
      | CourseTagCreateOrConnectWithoutCourseInput[];
    upsert?:
      | CourseTagUpsertWithWhereUniqueWithoutCourseInput
      | CourseTagUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: CourseTagCreateManyCourseInputEnvelope;
    set?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    disconnect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    delete?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    update?:
      | CourseTagUpdateWithWhereUniqueWithoutCourseInput
      | CourseTagUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | CourseTagUpdateManyWithWhereWithoutCourseInput
      | CourseTagUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutCourseInput,
          CommentUncheckedCreateWithoutCourseInput
        >
      | CommentCreateWithoutCourseInput[]
      | CommentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutCourseInput
      | CommentCreateOrConnectWithoutCourseInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutCourseInput
      | CommentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: CommentCreateManyCourseInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutCourseInput
      | CommentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutCourseInput
      | CommentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type EnrolmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          EnrolmentCreateWithoutCourseInput,
          EnrolmentUncheckedCreateWithoutCourseInput
        >
      | EnrolmentCreateWithoutCourseInput[]
      | EnrolmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | EnrolmentCreateOrConnectWithoutCourseInput
      | EnrolmentCreateOrConnectWithoutCourseInput[];
    upsert?:
      | EnrolmentUpsertWithWhereUniqueWithoutCourseInput
      | EnrolmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: EnrolmentCreateManyCourseInputEnvelope;
    set?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    disconnect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    delete?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    connect?: EnrolmentWhereUniqueInput | EnrolmentWhereUniqueInput[];
    update?:
      | EnrolmentUpdateWithWhereUniqueWithoutCourseInput
      | EnrolmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | EnrolmentUpdateManyWithWhereWithoutCourseInput
      | EnrolmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
  };

  export type CourseTagUncheckedUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutCourseInput,
          CourseTagUncheckedCreateWithoutCourseInput
        >
      | CourseTagCreateWithoutCourseInput[]
      | CourseTagUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutCourseInput
      | CourseTagCreateOrConnectWithoutCourseInput[];
    upsert?:
      | CourseTagUpsertWithWhereUniqueWithoutCourseInput
      | CourseTagUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: CourseTagCreateManyCourseInputEnvelope;
    set?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    disconnect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    delete?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    update?:
      | CourseTagUpdateWithWhereUniqueWithoutCourseInput
      | CourseTagUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | CourseTagUpdateManyWithWhereWithoutCourseInput
      | CourseTagUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutCourseInput,
          CommentUncheckedCreateWithoutCourseInput
        >
      | CommentCreateWithoutCourseInput[]
      | CommentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutCourseInput
      | CommentCreateOrConnectWithoutCourseInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutCourseInput
      | CommentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: CommentCreateManyCourseInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutCourseInput
      | CommentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutCourseInput
      | CommentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<
      UserCreateWithoutPostInput,
      UserUncheckedCreateWithoutPostInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;
    connect?: UserWhereUniqueInput;
  };

  export type TagCreateNestedManyWithoutPostsInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutPostsInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<
      UserCreateWithoutPostInput,
      UserUncheckedCreateWithoutPostInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;
    upsert?: UserUpsertWithoutPostInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutPostInput, UserUpdateWithoutPostInput>,
      UserUncheckedUpdateWithoutPostInput
    >;
  };

  export type TagUpdateManyWithoutPostsNestedInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutPostsInput
      | TagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutPostsInput
      | TagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutPostsInput
      | TagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutPostsInput
      | TagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutPostsInput
      | TagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutPostsInput
      | TagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type PostCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CourseTagCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutTagInput,
          CourseTagUncheckedCreateWithoutTagInput
        >
      | CourseTagCreateWithoutTagInput[]
      | CourseTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutTagInput
      | CourseTagCreateOrConnectWithoutTagInput[];
    createMany?: CourseTagCreateManyTagInputEnvelope;
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CourseTagUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutTagInput,
          CourseTagUncheckedCreateWithoutTagInput
        >
      | CourseTagCreateWithoutTagInput[]
      | CourseTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutTagInput
      | CourseTagCreateOrConnectWithoutTagInput[];
    createMany?: CourseTagCreateManyTagInputEnvelope;
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
  };

  export type PostUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutTagsInput
      | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutTagsInput
      | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutTagsInput
      | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CourseTagUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutTagInput,
          CourseTagUncheckedCreateWithoutTagInput
        >
      | CourseTagCreateWithoutTagInput[]
      | CourseTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutTagInput
      | CourseTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | CourseTagUpsertWithWhereUniqueWithoutTagInput
      | CourseTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: CourseTagCreateManyTagInputEnvelope;
    set?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    disconnect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    delete?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    update?:
      | CourseTagUpdateWithWhereUniqueWithoutTagInput
      | CourseTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | CourseTagUpdateManyWithWhereWithoutTagInput
      | CourseTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutTagsInput
      | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutTagsInput
      | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutTagsInput
      | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CourseTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          CourseTagCreateWithoutTagInput,
          CourseTagUncheckedCreateWithoutTagInput
        >
      | CourseTagCreateWithoutTagInput[]
      | CourseTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | CourseTagCreateOrConnectWithoutTagInput
      | CourseTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | CourseTagUpsertWithWhereUniqueWithoutTagInput
      | CourseTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: CourseTagCreateManyTagInputEnvelope;
    set?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    disconnect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    delete?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    connect?: CourseTagWhereUniqueInput | CourseTagWhereUniqueInput[];
    update?:
      | CourseTagUpdateWithWhereUniqueWithoutTagInput
      | CourseTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | CourseTagUpdateManyWithWhereWithoutTagInput
      | CourseTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
  };

  export type CourseCreateNestedOneWithoutTagInput = {
    create?: XOR<
      CourseCreateWithoutTagInput,
      CourseUncheckedCreateWithoutTagInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutTagInput;
    connect?: CourseWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutCoursesInput = {
    create?: XOR<
      TagCreateWithoutCoursesInput,
      TagUncheckedCreateWithoutCoursesInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutCoursesInput;
    connect?: TagWhereUniqueInput;
  };

  export type CourseUpdateOneRequiredWithoutTagNestedInput = {
    create?: XOR<
      CourseCreateWithoutTagInput,
      CourseUncheckedCreateWithoutTagInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutTagInput;
    upsert?: CourseUpsertWithoutTagInput;
    connect?: CourseWhereUniqueInput;
    update?: XOR<
      XOR<
        CourseUpdateToOneWithWhereWithoutTagInput,
        CourseUpdateWithoutTagInput
      >,
      CourseUncheckedUpdateWithoutTagInput
    >;
  };

  export type TagUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<
      TagCreateWithoutCoursesInput,
      TagUncheckedCreateWithoutCoursesInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutCoursesInput;
    upsert?: TagUpsertWithoutCoursesInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<
        TagUpdateToOneWithWhereWithoutCoursesInput,
        TagUpdateWithoutCoursesInput
      >,
      TagUncheckedUpdateWithoutCoursesInput
    >;
  };

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus;
  };

  export type CourseCreateNestedManyWithoutDiscountInput = {
    create?:
      | XOR<
          CourseCreateWithoutDiscountInput,
          CourseUncheckedCreateWithoutDiscountInput
        >
      | CourseCreateWithoutDiscountInput[]
      | CourseUncheckedCreateWithoutDiscountInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutDiscountInput
      | CourseCreateOrConnectWithoutDiscountInput[];
    createMany?: CourseCreateManyDiscountInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type CourseUncheckedCreateNestedManyWithoutDiscountInput = {
    create?:
      | XOR<
          CourseCreateWithoutDiscountInput,
          CourseUncheckedCreateWithoutDiscountInput
        >
      | CourseCreateWithoutDiscountInput[]
      | CourseUncheckedCreateWithoutDiscountInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutDiscountInput
      | CourseCreateOrConnectWithoutDiscountInput[];
    createMany?: CourseCreateManyDiscountInputEnvelope;
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
  };

  export type CourseUpdateManyWithoutDiscountNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutDiscountInput,
          CourseUncheckedCreateWithoutDiscountInput
        >
      | CourseCreateWithoutDiscountInput[]
      | CourseUncheckedCreateWithoutDiscountInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutDiscountInput
      | CourseCreateOrConnectWithoutDiscountInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutDiscountInput
      | CourseUpsertWithWhereUniqueWithoutDiscountInput[];
    createMany?: CourseCreateManyDiscountInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutDiscountInput
      | CourseUpdateWithWhereUniqueWithoutDiscountInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutDiscountInput
      | CourseUpdateManyWithWhereWithoutDiscountInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type CourseUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?:
      | XOR<
          CourseCreateWithoutDiscountInput,
          CourseUncheckedCreateWithoutDiscountInput
        >
      | CourseCreateWithoutDiscountInput[]
      | CourseUncheckedCreateWithoutDiscountInput[];
    connectOrCreate?:
      | CourseCreateOrConnectWithoutDiscountInput
      | CourseCreateOrConnectWithoutDiscountInput[];
    upsert?:
      | CourseUpsertWithWhereUniqueWithoutDiscountInput
      | CourseUpsertWithWhereUniqueWithoutDiscountInput[];
    createMany?: CourseCreateManyDiscountInputEnvelope;
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[];
    update?:
      | CourseUpdateWithWhereUniqueWithoutDiscountInput
      | CourseUpdateWithWhereUniqueWithoutDiscountInput[];
    updateMany?:
      | CourseUpdateManyWithWhereWithoutDiscountInput
      | CourseUpdateManyWithWhereWithoutDiscountInput[];
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    connect?: UserWhereUniqueInput;
  };

  export type CourseCreateNestedOneWithoutCommentInput = {
    create?: XOR<
      CourseCreateWithoutCommentInput,
      CourseUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutCommentInput;
    connect?: CourseWhereUniqueInput;
  };

  export type PostCreateNestedOneWithoutCommentInput = {
    create?: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput;
    connect?: PostWhereUniqueInput;
  };

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput;
    connect?: CommentWhereUniqueInput;
  };

  export type CommentCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type EnumCommentStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommentStatus;
  };

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    upsert?: UserUpsertWithoutCommentInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentInput,
        UserUpdateWithoutCommentInput
      >,
      UserUncheckedUpdateWithoutCommentInput
    >;
  };

  export type CourseUpdateOneWithoutCommentNestedInput = {
    create?: XOR<
      CourseCreateWithoutCommentInput,
      CourseUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: CourseCreateOrConnectWithoutCommentInput;
    upsert?: CourseUpsertWithoutCommentInput;
    disconnect?: CourseWhereInput | boolean;
    delete?: CourseWhereInput | boolean;
    connect?: CourseWhereUniqueInput;
    update?: XOR<
      XOR<
        CourseUpdateToOneWithWhereWithoutCommentInput,
        CourseUpdateWithoutCommentInput
      >,
      CourseUncheckedUpdateWithoutCommentInput
    >;
  };

  export type PostUpdateOneWithoutCommentNestedInput = {
    create?: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput;
    upsert?: PostUpsertWithoutCommentInput;
    disconnect?: PostWhereInput | boolean;
    delete?: PostWhereInput | boolean;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutCommentInput,
        PostUpdateWithoutCommentInput
      >,
      PostUncheckedUpdateWithoutCommentInput
    >;
  };

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput;
    upsert?: CommentUpsertWithoutRepliesInput;
    disconnect?: CommentWhereInput | boolean;
    delete?: CommentWhereInput | boolean;
    connect?: CommentWhereUniqueInput;
    update?: XOR<
      XOR<
        CommentUpdateToOneWithWhereWithoutRepliesInput,
        CommentUpdateWithoutRepliesInput
      >,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutParentInput
      | CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutParentInput
      | CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutParentInput
      | CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutParentInput
      | CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutParentInput
      | CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutParentInput
      | CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level;
  };

  export type NestedEnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CourseStatus[]
      | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus;
  };

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLevelFilter<$PrismaModel>;
    _max?: NestedEnumLevelFilter<$PrismaModel>;
  };

  export type NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.CourseStatus
        | EnumCourseStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.CourseStatus[]
        | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.CourseStatus[]
        | ListEnumCourseStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.CourseStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumCourseStatusFilter<$PrismaModel>;
      _max?: NestedEnumCourseStatusFilter<$PrismaModel>;
    };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MessageStatus
      | EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus;
  };

  export type NestedEnumMessageStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.MessageStatus
      | EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageStatus[]
      | ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MessageStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>;
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>;
  };

  export type NestedEnumCommentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CommentStatus
      | EnumCommentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus;
  };

  export type NestedEnumCommentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.CommentStatus
      | EnumCommentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CommentStatus[]
      | ListEnumCommentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.CommentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>;
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>;
  };

  export type EnrolmentCreateWithoutUserInput = {
    enrolmentDate?: Date | string;
    course: CourseCreateNestedOneWithoutEnrolmentInput;
  };

  export type EnrolmentUncheckedCreateWithoutUserInput = {
    course_id: number;
    enrolmentDate?: Date | string;
  };

  export type EnrolmentCreateOrConnectWithoutUserInput = {
    where: EnrolmentWhereUniqueInput;
    create: XOR<
      EnrolmentCreateWithoutUserInput,
      EnrolmentUncheckedCreateWithoutUserInput
    >;
  };

  export type EnrolmentCreateManyUserInputEnvelope = {
    data: EnrolmentCreateManyUserInput | EnrolmentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CourseCreateWithoutInstructorInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discount?: DiscountCreateNestedOneWithoutCourseInput;
    Enrolment?: EnrolmentCreateNestedManyWithoutCourseInput;
    tag?: CourseTagCreateNestedManyWithoutCourseInput;
    Comment?: CommentCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discountId?: string | null;
    Enrolment?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput;
    tag?: CourseTagUncheckedCreateNestedManyWithoutCourseInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutInstructorInput,
      CourseUncheckedCreateWithoutInstructorInput
    >;
  };

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[];
    skipDuplicates?: boolean;
  };

  export type PostCreateWithoutAuthorInput = {
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
    tags?: TagCreateNestedManyWithoutPostsInput;
    Comment?: CommentCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type AccountCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    course?: CourseCreateNestedOneWithoutCommentInput;
    post?: PostCreateNestedOneWithoutCommentInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courseId?: number | null;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutAuthorInput,
      CommentUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type EnrolmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrolmentWhereUniqueInput;
    update: XOR<
      EnrolmentUpdateWithoutUserInput,
      EnrolmentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      EnrolmentCreateWithoutUserInput,
      EnrolmentUncheckedCreateWithoutUserInput
    >;
  };

  export type EnrolmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrolmentWhereUniqueInput;
    data: XOR<
      EnrolmentUpdateWithoutUserInput,
      EnrolmentUncheckedUpdateWithoutUserInput
    >;
  };

  export type EnrolmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrolmentScalarWhereInput;
    data: XOR<
      EnrolmentUpdateManyMutationInput,
      EnrolmentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type EnrolmentScalarWhereInput = {
    AND?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
    OR?: EnrolmentScalarWhereInput[];
    NOT?: EnrolmentScalarWhereInput | EnrolmentScalarWhereInput[];
    user_id?: IntFilter<"Enrolment"> | number;
    course_id?: IntFilter<"Enrolment"> | number;
    enrolmentDate?: DateTimeFilter<"Enrolment"> | Date | string;
  };

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput;
    update: XOR<
      CourseUpdateWithoutInstructorInput,
      CourseUncheckedUpdateWithoutInstructorInput
    >;
    create: XOR<
      CourseCreateWithoutInstructorInput,
      CourseUncheckedCreateWithoutInstructorInput
    >;
  };

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput;
    data: XOR<
      CourseUpdateWithoutInstructorInput,
      CourseUncheckedUpdateWithoutInstructorInput
    >;
  };

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput;
    data: XOR<
      CourseUpdateManyMutationInput,
      CourseUncheckedUpdateManyWithoutInstructorInput
    >;
  };

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[];
    OR?: CourseScalarWhereInput[];
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[];
    id?: IntFilter<"Course"> | number;
    slug?: StringFilter<"Course"> | string;
    title?: StringFilter<"Course"> | string;
    description?: StringFilter<"Course"> | string;
    content?: StringFilter<"Course"> | string;
    imageUrl?: StringFilter<"Course"> | string;
    level?: EnumLevelFilter<"Course"> | $Enums.Level;
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus;
    price?: IntFilter<"Course"> | number;
    createdAt?: DateTimeFilter<"Course"> | Date | string;
    updateAt?: DateTimeFilter<"Course"> | Date | string;
    instructorId?: IntFilter<"Course"> | number;
    discountId?: StringNullableFilter<"Course"> | string | null;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: IntFilter<"Post"> | number;
    slug?: StringFilter<"Post"> | string;
    title?: StringFilter<"Post"> | string;
    content?: StringFilter<"Post"> | string;
    imageUrl?: StringFilter<"Post"> | string;
    createAt?: DateTimeFilter<"Post"> | Date | string;
    updatedAt?: DateTimeFilter<"Post"> | Date | string;
    authorId?: IntFilter<"Post"> | number;
    isEditorPick?: BoolNullableFilter<"Post"> | boolean | null;
    readingTime?: IntFilter<"Post"> | number;
  };

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[];
    OR?: AccountScalarWhereInput[];
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[];
    id?: StringFilter<"Account"> | string;
    userId?: IntFilter<"Account"> | number;
    type?: StringFilter<"Account"> | string;
    provider?: StringFilter<"Account"> | string;
    providerAccountId?: StringFilter<"Account"> | string;
    refresh_token?: StringNullableFilter<"Account"> | string | null;
    access_token?: StringNullableFilter<"Account"> | string | null;
    expires_at?: IntNullableFilter<"Account"> | number | null;
    token_type?: StringNullableFilter<"Account"> | string | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    id_token?: StringNullableFilter<"Account"> | string | null;
    session_state?: StringNullableFilter<"Account"> | string | null;
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null;
    createdAt?: DateTimeFilter<"Account"> | Date | string;
    updatedAt?: DateTimeFilter<"Account"> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutAuthorInput,
      CommentUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      CommentCreateWithoutAuthorInput,
      CommentUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutAuthorInput,
      CommentUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: StringFilter<"Comment"> | string;
    content?: StringFilter<"Comment"> | string;
    createdAt?: DateTimeFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeFilter<"Comment"> | Date | string;
    authorId?: IntFilter<"Comment"> | number;
    courseId?: IntNullableFilter<"Comment"> | number | null;
    postId?: IntNullableFilter<"Comment"> | number | null;
    parentId?: StringNullableFilter<"Comment"> | string | null;
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus;
  };

  export type UserCreateWithoutAccountsInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentCreateNestedManyWithoutUserInput;
    Course?: CourseCreateNestedManyWithoutInstructorInput;
    Post?: PostCreateNestedManyWithoutAuthorInput;
    Comment?: CommentCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentUncheckedCreateNestedManyWithoutUserInput;
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput;
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserUpdateWithoutAccountsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUpdateManyWithoutUserNestedInput;
    Course?: CourseUpdateManyWithoutInstructorNestedInput;
    Post?: PostUpdateManyWithoutAuthorNestedInput;
    Comment?: CommentUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput;
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type UserCreateWithoutEnrolmentInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    Course?: CourseCreateNestedManyWithoutInstructorInput;
    Post?: PostCreateNestedManyWithoutAuthorInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    Comment?: CommentCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateWithoutEnrolmentInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput;
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserCreateOrConnectWithoutEnrolmentInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutEnrolmentInput,
      UserUncheckedCreateWithoutEnrolmentInput
    >;
  };

  export type CourseCreateWithoutEnrolmentInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discount?: DiscountCreateNestedOneWithoutCourseInput;
    instructor: UserCreateNestedOneWithoutCourseInput;
    tag?: CourseTagCreateNestedManyWithoutCourseInput;
    Comment?: CommentCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateWithoutEnrolmentInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    discountId?: string | null;
    tag?: CourseTagUncheckedCreateNestedManyWithoutCourseInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseCreateOrConnectWithoutEnrolmentInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutEnrolmentInput,
      CourseUncheckedCreateWithoutEnrolmentInput
    >;
  };

  export type UserUpsertWithoutEnrolmentInput = {
    update: XOR<
      UserUpdateWithoutEnrolmentInput,
      UserUncheckedUpdateWithoutEnrolmentInput
    >;
    create: XOR<
      UserCreateWithoutEnrolmentInput,
      UserUncheckedCreateWithoutEnrolmentInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutEnrolmentInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutEnrolmentInput,
      UserUncheckedUpdateWithoutEnrolmentInput
    >;
  };

  export type UserUpdateWithoutEnrolmentInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Course?: CourseUpdateManyWithoutInstructorNestedInput;
    Post?: PostUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    Comment?: CommentUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateWithoutEnrolmentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type CourseUpsertWithoutEnrolmentInput = {
    update: XOR<
      CourseUpdateWithoutEnrolmentInput,
      CourseUncheckedUpdateWithoutEnrolmentInput
    >;
    create: XOR<
      CourseCreateWithoutEnrolmentInput,
      CourseUncheckedCreateWithoutEnrolmentInput
    >;
    where?: CourseWhereInput;
  };

  export type CourseUpdateToOneWithWhereWithoutEnrolmentInput = {
    where?: CourseWhereInput;
    data: XOR<
      CourseUpdateWithoutEnrolmentInput,
      CourseUncheckedUpdateWithoutEnrolmentInput
    >;
  };

  export type CourseUpdateWithoutEnrolmentInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discount?: DiscountUpdateOneWithoutCourseNestedInput;
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput;
    tag?: CourseTagUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateWithoutEnrolmentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
    tag?: CourseTagUncheckedUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type DiscountCreateWithoutCourseInput = {
    id?: string;
    percentage: number;
    startsAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DiscountUncheckedCreateWithoutCourseInput = {
    id?: string;
    percentage: number;
    startsAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DiscountCreateOrConnectWithoutCourseInput = {
    where: DiscountWhereUniqueInput;
    create: XOR<
      DiscountCreateWithoutCourseInput,
      DiscountUncheckedCreateWithoutCourseInput
    >;
  };

  export type UserCreateWithoutCourseInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentCreateNestedManyWithoutUserInput;
    Post?: PostCreateNestedManyWithoutAuthorInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    Comment?: CommentCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateWithoutCourseInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentUncheckedCreateNestedManyWithoutUserInput;
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserCreateOrConnectWithoutCourseInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCourseInput,
      UserUncheckedCreateWithoutCourseInput
    >;
  };

  export type EnrolmentCreateWithoutCourseInput = {
    enrolmentDate?: Date | string;
    user: UserCreateNestedOneWithoutEnrolmentInput;
  };

  export type EnrolmentUncheckedCreateWithoutCourseInput = {
    user_id: number;
    enrolmentDate?: Date | string;
  };

  export type EnrolmentCreateOrConnectWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput;
    create: XOR<
      EnrolmentCreateWithoutCourseInput,
      EnrolmentUncheckedCreateWithoutCourseInput
    >;
  };

  export type EnrolmentCreateManyCourseInputEnvelope = {
    data: EnrolmentCreateManyCourseInput | EnrolmentCreateManyCourseInput[];
    skipDuplicates?: boolean;
  };

  export type CourseTagCreateWithoutCourseInput = {
    tag: TagCreateNestedOneWithoutCoursesInput;
  };

  export type CourseTagUncheckedCreateWithoutCourseInput = {
    tag_id: number;
  };

  export type CourseTagCreateOrConnectWithoutCourseInput = {
    where: CourseTagWhereUniqueInput;
    create: XOR<
      CourseTagCreateWithoutCourseInput,
      CourseTagUncheckedCreateWithoutCourseInput
    >;
  };

  export type CourseTagCreateManyCourseInputEnvelope = {
    data: CourseTagCreateManyCourseInput | CourseTagCreateManyCourseInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutCourseInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    author: UserCreateNestedOneWithoutCommentInput;
    post?: PostCreateNestedOneWithoutCommentInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutCourseInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutCourseInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutCourseInput,
      CommentUncheckedCreateWithoutCourseInput
    >;
  };

  export type CommentCreateManyCourseInputEnvelope = {
    data: CommentCreateManyCourseInput | CommentCreateManyCourseInput[];
    skipDuplicates?: boolean;
  };

  export type DiscountUpsertWithoutCourseInput = {
    update: XOR<
      DiscountUpdateWithoutCourseInput,
      DiscountUncheckedUpdateWithoutCourseInput
    >;
    create: XOR<
      DiscountCreateWithoutCourseInput,
      DiscountUncheckedCreateWithoutCourseInput
    >;
    where?: DiscountWhereInput;
  };

  export type DiscountUpdateToOneWithWhereWithoutCourseInput = {
    where?: DiscountWhereInput;
    data: XOR<
      DiscountUpdateWithoutCourseInput,
      DiscountUncheckedUpdateWithoutCourseInput
    >;
  };

  export type DiscountUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DiscountUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    percentage?: IntFieldUpdateOperationsInput | number;
    startsAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    expiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpsertWithoutCourseInput = {
    update: XOR<
      UserUpdateWithoutCourseInput,
      UserUncheckedUpdateWithoutCourseInput
    >;
    create: XOR<
      UserCreateWithoutCourseInput,
      UserUncheckedCreateWithoutCourseInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCourseInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCourseInput,
      UserUncheckedUpdateWithoutCourseInput
    >;
  };

  export type UserUpdateWithoutCourseInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUpdateManyWithoutUserNestedInput;
    Post?: PostUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    Comment?: CommentUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput;
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type EnrolmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput;
    update: XOR<
      EnrolmentUpdateWithoutCourseInput,
      EnrolmentUncheckedUpdateWithoutCourseInput
    >;
    create: XOR<
      EnrolmentCreateWithoutCourseInput,
      EnrolmentUncheckedCreateWithoutCourseInput
    >;
  };

  export type EnrolmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrolmentWhereUniqueInput;
    data: XOR<
      EnrolmentUpdateWithoutCourseInput,
      EnrolmentUncheckedUpdateWithoutCourseInput
    >;
  };

  export type EnrolmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrolmentScalarWhereInput;
    data: XOR<
      EnrolmentUpdateManyMutationInput,
      EnrolmentUncheckedUpdateManyWithoutCourseInput
    >;
  };

  export type CourseTagUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseTagWhereUniqueInput;
    update: XOR<
      CourseTagUpdateWithoutCourseInput,
      CourseTagUncheckedUpdateWithoutCourseInput
    >;
    create: XOR<
      CourseTagCreateWithoutCourseInput,
      CourseTagUncheckedCreateWithoutCourseInput
    >;
  };

  export type CourseTagUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseTagWhereUniqueInput;
    data: XOR<
      CourseTagUpdateWithoutCourseInput,
      CourseTagUncheckedUpdateWithoutCourseInput
    >;
  };

  export type CourseTagUpdateManyWithWhereWithoutCourseInput = {
    where: CourseTagScalarWhereInput;
    data: XOR<
      CourseTagUpdateManyMutationInput,
      CourseTagUncheckedUpdateManyWithoutCourseInput
    >;
  };

  export type CourseTagScalarWhereInput = {
    AND?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
    OR?: CourseTagScalarWhereInput[];
    NOT?: CourseTagScalarWhereInput | CourseTagScalarWhereInput[];
    course_id?: IntFilter<"CourseTag"> | number;
    tag_id?: IntFilter<"CourseTag"> | number;
  };

  export type CommentUpsertWithWhereUniqueWithoutCourseInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutCourseInput,
      CommentUncheckedUpdateWithoutCourseInput
    >;
    create: XOR<
      CommentCreateWithoutCourseInput,
      CommentUncheckedCreateWithoutCourseInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutCourseInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutCourseInput,
      CommentUncheckedUpdateWithoutCourseInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutCourseInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutCourseInput
    >;
  };

  export type UserCreateWithoutPostInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentCreateNestedManyWithoutUserInput;
    Course?: CourseCreateNestedManyWithoutInstructorInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    Comment?: CommentCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentUncheckedCreateNestedManyWithoutUserInput;
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostInput,
      UserUncheckedCreateWithoutPostInput
    >;
  };

  export type TagCreateWithoutPostsInput = {
    name: string;
    courses?: CourseTagCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: number;
    name: string;
    courses?: CourseTagUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >;
  };

  export type CommentCreateWithoutPostInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    author: UserCreateNestedOneWithoutCommentInput;
    course?: CourseCreateNestedOneWithoutCommentInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >;
  };

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPostInput = {
    update: XOR<
      UserUpdateWithoutPostInput,
      UserUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      UserCreateWithoutPostInput,
      UserUncheckedCreateWithoutPostInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>;
  };

  export type UserUpdateWithoutPostInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUpdateManyWithoutUserNestedInput;
    Course?: CourseUpdateManyWithoutInstructorNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    Comment?: CommentUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput;
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type TagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutPostsInput,
      TagUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput;
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>;
  };

  export type TagUpdateManyWithWhereWithoutPostsInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutPostsInput
    >;
  };

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[];
    OR?: TagScalarWhereInput[];
    NOT?: TagScalarWhereInput | TagScalarWhereInput[];
    id?: IntFilter<"Tag"> | number;
    name?: StringFilter<"Tag"> | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type PostCreateWithoutTagsInput = {
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
    author: UserCreateNestedOneWithoutPostInput;
    Comment?: CommentCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    isEditorPick?: boolean | null;
    readingTime: number;
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutTagsInput,
      PostUncheckedCreateWithoutTagsInput
    >;
  };

  export type CourseTagCreateWithoutTagInput = {
    course: CourseCreateNestedOneWithoutTagInput;
  };

  export type CourseTagUncheckedCreateWithoutTagInput = {
    course_id: number;
  };

  export type CourseTagCreateOrConnectWithoutTagInput = {
    where: CourseTagWhereUniqueInput;
    create: XOR<
      CourseTagCreateWithoutTagInput,
      CourseTagUncheckedCreateWithoutTagInput
    >;
  };

  export type CourseTagCreateManyTagInputEnvelope = {
    data: CourseTagCreateManyTagInput | CourseTagCreateManyTagInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutTagsInput,
      PostUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      PostCreateWithoutTagsInput,
      PostUncheckedCreateWithoutTagsInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
  };

  export type PostUpdateManyWithWhereWithoutTagsInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutTagsInput
    >;
  };

  export type CourseTagUpsertWithWhereUniqueWithoutTagInput = {
    where: CourseTagWhereUniqueInput;
    update: XOR<
      CourseTagUpdateWithoutTagInput,
      CourseTagUncheckedUpdateWithoutTagInput
    >;
    create: XOR<
      CourseTagCreateWithoutTagInput,
      CourseTagUncheckedCreateWithoutTagInput
    >;
  };

  export type CourseTagUpdateWithWhereUniqueWithoutTagInput = {
    where: CourseTagWhereUniqueInput;
    data: XOR<
      CourseTagUpdateWithoutTagInput,
      CourseTagUncheckedUpdateWithoutTagInput
    >;
  };

  export type CourseTagUpdateManyWithWhereWithoutTagInput = {
    where: CourseTagScalarWhereInput;
    data: XOR<
      CourseTagUpdateManyMutationInput,
      CourseTagUncheckedUpdateManyWithoutTagInput
    >;
  };

  export type CourseCreateWithoutTagInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discount?: DiscountCreateNestedOneWithoutCourseInput;
    instructor: UserCreateNestedOneWithoutCourseInput;
    Enrolment?: EnrolmentCreateNestedManyWithoutCourseInput;
    Comment?: CommentCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateWithoutTagInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    discountId?: string | null;
    Enrolment?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseCreateOrConnectWithoutTagInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutTagInput,
      CourseUncheckedCreateWithoutTagInput
    >;
  };

  export type TagCreateWithoutCoursesInput = {
    name: string;
    posts?: PostCreateNestedManyWithoutTagsInput;
  };

  export type TagUncheckedCreateWithoutCoursesInput = {
    id?: number;
    name: string;
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
  };

  export type TagCreateOrConnectWithoutCoursesInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutCoursesInput,
      TagUncheckedCreateWithoutCoursesInput
    >;
  };

  export type CourseUpsertWithoutTagInput = {
    update: XOR<
      CourseUpdateWithoutTagInput,
      CourseUncheckedUpdateWithoutTagInput
    >;
    create: XOR<
      CourseCreateWithoutTagInput,
      CourseUncheckedCreateWithoutTagInput
    >;
    where?: CourseWhereInput;
  };

  export type CourseUpdateToOneWithWhereWithoutTagInput = {
    where?: CourseWhereInput;
    data: XOR<
      CourseUpdateWithoutTagInput,
      CourseUncheckedUpdateWithoutTagInput
    >;
  };

  export type CourseUpdateWithoutTagInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discount?: DiscountUpdateOneWithoutCourseNestedInput;
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput;
    Enrolment?: EnrolmentUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
    Enrolment?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type TagUpsertWithoutCoursesInput = {
    update: XOR<
      TagUpdateWithoutCoursesInput,
      TagUncheckedUpdateWithoutCoursesInput
    >;
    create: XOR<
      TagCreateWithoutCoursesInput,
      TagUncheckedCreateWithoutCoursesInput
    >;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TagWhereInput;
    data: XOR<
      TagUpdateWithoutCoursesInput,
      TagUncheckedUpdateWithoutCoursesInput
    >;
  };

  export type TagUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    posts?: PostUpdateManyWithoutTagsNestedInput;
  };

  export type TagUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput;
  };

  export type CourseCreateWithoutDiscountInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructor: UserCreateNestedOneWithoutCourseInput;
    Enrolment?: EnrolmentCreateNestedManyWithoutCourseInput;
    tag?: CourseTagCreateNestedManyWithoutCourseInput;
    Comment?: CommentCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateWithoutDiscountInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    Enrolment?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput;
    tag?: CourseTagUncheckedCreateNestedManyWithoutCourseInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseCreateOrConnectWithoutDiscountInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutDiscountInput,
      CourseUncheckedCreateWithoutDiscountInput
    >;
  };

  export type CourseCreateManyDiscountInputEnvelope = {
    data: CourseCreateManyDiscountInput | CourseCreateManyDiscountInput[];
    skipDuplicates?: boolean;
  };

  export type CourseUpsertWithWhereUniqueWithoutDiscountInput = {
    where: CourseWhereUniqueInput;
    update: XOR<
      CourseUpdateWithoutDiscountInput,
      CourseUncheckedUpdateWithoutDiscountInput
    >;
    create: XOR<
      CourseCreateWithoutDiscountInput,
      CourseUncheckedCreateWithoutDiscountInput
    >;
  };

  export type CourseUpdateWithWhereUniqueWithoutDiscountInput = {
    where: CourseWhereUniqueInput;
    data: XOR<
      CourseUpdateWithoutDiscountInput,
      CourseUncheckedUpdateWithoutDiscountInput
    >;
  };

  export type CourseUpdateManyWithWhereWithoutDiscountInput = {
    where: CourseScalarWhereInput;
    data: XOR<
      CourseUpdateManyMutationInput,
      CourseUncheckedUpdateManyWithoutDiscountInput
    >;
  };

  export type UserCreateWithoutCommentInput = {
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentCreateNestedManyWithoutUserInput;
    Course?: CourseCreateNestedManyWithoutInstructorInput;
    Post?: PostCreateNestedManyWithoutAuthorInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: number;
    username?: string | null;
    firstName: string;
    lastName: string;
    imageUrl?: string | null;
    email?: string | null;
    password?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bio?: string | null;
    emailVerified?: Date | string | null;
    enrolment?: EnrolmentUncheckedCreateNestedManyWithoutUserInput;
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput;
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >;
  };

  export type CourseCreateWithoutCommentInput = {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discount?: DiscountCreateNestedOneWithoutCourseInput;
    instructor: UserCreateNestedOneWithoutCourseInput;
    Enrolment?: EnrolmentCreateNestedManyWithoutCourseInput;
    tag?: CourseTagCreateNestedManyWithoutCourseInput;
  };

  export type CourseUncheckedCreateWithoutCommentInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
    discountId?: string | null;
    Enrolment?: EnrolmentUncheckedCreateNestedManyWithoutCourseInput;
    tag?: CourseTagUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type CourseCreateOrConnectWithoutCommentInput = {
    where: CourseWhereUniqueInput;
    create: XOR<
      CourseCreateWithoutCommentInput,
      CourseUncheckedCreateWithoutCommentInput
    >;
  };

  export type PostCreateWithoutCommentInput = {
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: TagCreateNestedManyWithoutPostsInput;
  };

  export type PostUncheckedCreateWithoutCommentInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    isEditorPick?: boolean | null;
    readingTime: number;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
  };

  export type PostCreateOrConnectWithoutCommentInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >;
  };

  export type CommentCreateWithoutRepliesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    author: UserCreateNestedOneWithoutCommentInput;
    course?: CourseCreateNestedOneWithoutCommentInput;
    post?: PostCreateNestedOneWithoutCommentInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
  };

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
  };

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
  };

  export type CommentCreateWithoutParentInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.CommentStatus;
    author: UserCreateNestedOneWithoutCommentInput;
    course?: CourseCreateNestedOneWithoutCommentInput;
    post?: PostCreateNestedOneWithoutCommentInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    postId?: number | null;
    status?: $Enums.CommentStatus;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutParentInput,
      CommentUncheckedCreateWithoutParentInput
    >;
  };

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCommentInput = {
    update: XOR<
      UserUpdateWithoutCommentInput,
      UserUncheckedUpdateWithoutCommentInput
    >;
    create: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentInput,
      UserUncheckedUpdateWithoutCommentInput
    >;
  };

  export type UserUpdateWithoutCommentInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUpdateManyWithoutUserNestedInput;
    Course?: CourseUpdateManyWithoutInstructorNestedInput;
    Post?: PostUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enrolment?: EnrolmentUncheckedUpdateManyWithoutUserNestedInput;
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CourseUpsertWithoutCommentInput = {
    update: XOR<
      CourseUpdateWithoutCommentInput,
      CourseUncheckedUpdateWithoutCommentInput
    >;
    create: XOR<
      CourseCreateWithoutCommentInput,
      CourseUncheckedCreateWithoutCommentInput
    >;
    where?: CourseWhereInput;
  };

  export type CourseUpdateToOneWithWhereWithoutCommentInput = {
    where?: CourseWhereInput;
    data: XOR<
      CourseUpdateWithoutCommentInput,
      CourseUncheckedUpdateWithoutCommentInput
    >;
  };

  export type CourseUpdateWithoutCommentInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discount?: DiscountUpdateOneWithoutCourseNestedInput;
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput;
    Enrolment?: EnrolmentUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
    Enrolment?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type PostUpsertWithoutCommentInput = {
    update: XOR<
      PostUpdateWithoutCommentInput,
      PostUncheckedUpdateWithoutCommentInput
    >;
    create: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutCommentInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutCommentInput,
      PostUncheckedUpdateWithoutCommentInput
    >;
  };

  export type PostUpdateWithoutCommentInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: TagUpdateManyWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
  };

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<
      CommentUpdateWithoutRepliesInput,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
    create: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    where?: CommentWhereInput;
  };

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput;
    data: XOR<
      CommentUpdateWithoutRepliesInput,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
    course?: CourseUpdateOneWithoutCommentNestedInput;
    post?: PostUpdateOneWithoutCommentNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
  };

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutParentInput,
      CommentUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      CommentCreateWithoutParentInput,
      CommentUncheckedCreateWithoutParentInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutParentInput,
      CommentUncheckedUpdateWithoutParentInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type EnrolmentCreateManyUserInput = {
    course_id: number;
    enrolmentDate?: Date | string;
  };

  export type CourseCreateManyInstructorInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    discountId?: string | null;
  };

  export type PostCreateManyAuthorInput = {
    id?: number;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createAt?: Date | string;
    updatedAt?: Date | string;
    isEditorPick?: boolean | null;
    readingTime: number;
  };

  export type AccountCreateManyUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    refresh_token_expires_in?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentCreateManyAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courseId?: number | null;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
  };

  export type EnrolmentUpdateWithoutUserInput = {
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: CourseUpdateOneRequiredWithoutEnrolmentNestedInput;
  };

  export type EnrolmentUncheckedUpdateWithoutUserInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnrolmentUncheckedUpdateManyWithoutUserInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseUpdateWithoutInstructorInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discount?: DiscountUpdateOneWithoutCourseNestedInput;
    Enrolment?: EnrolmentUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
    Enrolment?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUncheckedUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discountId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PostUpdateWithoutAuthorInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    tags?: TagUpdateManyWithoutPostsNestedInput;
    Comment?: CommentUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
  };

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token_expires_in?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    course?: CourseUpdateOneWithoutCommentNestedInput;
    post?: PostUpdateOneWithoutCommentNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type EnrolmentCreateManyCourseInput = {
    user_id: number;
    enrolmentDate?: Date | string;
  };

  export type CourseTagCreateManyCourseInput = {
    tag_id: number;
  };

  export type CommentCreateManyCourseInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
  };

  export type EnrolmentUpdateWithoutCourseInput = {
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutEnrolmentNestedInput;
  };

  export type EnrolmentUncheckedUpdateWithoutCourseInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnrolmentUncheckedUpdateManyWithoutCourseInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    enrolmentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourseTagUpdateWithoutCourseInput = {
    tag?: TagUpdateOneRequiredWithoutCoursesNestedInput;
  };

  export type CourseTagUncheckedUpdateWithoutCourseInput = {
    tag_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CourseTagUncheckedUpdateManyWithoutCourseInput = {
    tag_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
    post?: PostUpdateOneWithoutCommentNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type CommentCreateManyPostInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    parentId?: string | null;
    status?: $Enums.CommentStatus;
  };

  export type TagUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    courses?: CourseTagUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    courses?: CourseTagUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
    course?: CourseUpdateOneWithoutCommentNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  export type CourseTagCreateManyTagInput = {
    course_id: number;
  };

  export type PostUpdateWithoutTagsInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    Comment?: CommentUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    isEditorPick?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    readingTime?: IntFieldUpdateOperationsInput | number;
  };

  export type CourseTagUpdateWithoutTagInput = {
    course?: CourseUpdateOneRequiredWithoutTagNestedInput;
  };

  export type CourseTagUncheckedUpdateWithoutTagInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CourseTagUncheckedUpdateManyWithoutTagInput = {
    course_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CourseCreateManyDiscountInput = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    level: $Enums.Level;
    status: $Enums.CourseStatus;
    price: number;
    createdAt?: Date | string;
    updateAt?: Date | string;
    instructorId: number;
  };

  export type CourseUpdateWithoutDiscountInput = {
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput;
    Enrolment?: EnrolmentUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
    Enrolment?: EnrolmentUncheckedUpdateManyWithoutCourseNestedInput;
    tag?: CourseTagUncheckedUpdateManyWithoutCourseNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type CourseUncheckedUpdateManyWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number;
    slug?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level;
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus;
    price?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    instructorId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentCreateManyParentInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    courseId?: number | null;
    postId?: number | null;
    status?: $Enums.CommentStatus;
  };

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
    course?: CourseUpdateOneWithoutCommentNestedInput;
    post?: PostUpdateOneWithoutCommentNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    courseId?: NullableIntFieldUpdateOperationsInput | number | null;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}