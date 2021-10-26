import { getBooksByCategoryPromise } from "./functions";
import { Book, Person, Author } from "./interfaces";

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type createCustomerFunctionType = (name: string, age?: number, city?: string) => void

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type rt = ReturnType<typeof getBooksByCategoryPromise>;
type s = Unpromisify<rt>;