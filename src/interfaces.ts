import { Category } from "./enums";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger //(reason: string) => void;
  }
  
  interface DamageLogger {
    (param: string):void;
  }
  
  interface Person {
    name: string;
    email: string;
  }
  
  interface Author extends Person {
    numBooksPublished : number;
  }
  
  interface Librarian extends Person {
    department : string;
    assistCustomer : (custName: string) => void;
  }

  interface Magazine {
    title: string;
    publisher: string;
  }

  interface ShelfItem {
    title: string;
  }

  interface LibMgrCallback {
    (err: Error, titles: string[]): void;
  }

  interface Callback<S extends Error, T> {
    (err: S, data: T): void;
  }

  export {
    Book,
    DamageLogger as Logger,
    Person,
    Author,
    Librarian,
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback
  }