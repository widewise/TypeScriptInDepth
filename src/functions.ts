import { Book, LibMgrCallback } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
    const books: readonly any[] =	<const>[
          {
            id: 1, 
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
          },
          { 
            id: 2, 
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
          },
          { 
            id: 3, 
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS
          },
          { 
            id: 4, 
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
          }
      ];
      
      return books;
  }
  
  export function logFirstAvailable(books: readonly any[] = getAllBooks()): void{
    const numberofBooks: number = books.length;
    let title: string;
  
    for(const book of books){
      if(book.available){
        title = book.title;
        break; 
      }
    }
    
    console.log(`Total books: ${numberofBooks}`);
    console.log(`First Avaiable book: ${title}`);
  }
  
  export function getBookTitlesByCategory(
    category: Category = Category.JavaScript
    ): Array<string>{
    console.log(`Getting books in category ${Category[category]}`);
  
    const books = getAllBooks();

    return books
      .filter((book: Book) => book.category == category)
      .map((book: Book) => book.title);
  }
  
  export function logBookTitles(titles: string[]): void{
    for(const title of titles){
      console.log(title);
    }
  }
  
  function getBookAuthorByIndex(index: number): [string, string]{
    const books = getAllBooks();
    const {title, autor} = books[index] as any;
  
    return [title, autor];
  }
  
  //export function calcTotalPages(): bigint {
  //   const data = [
  //     { 
  //       lib: 'libName1',
  //       books: 1_000_000_000,
  //       avgPagesPerBook: 250
  //     },
  //     { 
  //       lib: 'libName2',
  //       books: 5_000_000_000,
  //       avgPagesPerBook: 300
  //     },
  //     {
  //       lib: 'libName3',
  //       books: 3_000_000_000,
  //       avgPagesPerBook: 280
  //     }
  //   ];
  
  //   let result = data.reduce((acc: bigint, obj: any) => {
  //     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  //   }, 0n);
  
  //   return result;
  // }
  
  // function calcTotalPages(): void {
  //   const data = <const>[
  //     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
  //     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
  //     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  //   ];
  //   const result =  data.reduce((acc: bigint, obj) => {
  //     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  //   }, BigInt(0));
  //   console.log(result);
  // }

  export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
  }
  
  export function createCustomerID(name: string, id : number): string{
    return `${name}: ${id}`
  }
  
  
  export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`customer name ${name}`);
  
    if(age){  
      console.log(`customer age ${age}`);
    }
  
    if(city){  
      console.log(`customer city ${city}`);
    }
  }
  
  export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);
    const titles: string[] = [];
    for(const id of bookIDs)
    {
      const book = getBookByID(id);
      if(book && book.available)
      {
        titles.push(book.title);
      }
    }
  
    return titles;
  }
  
  export function getTitles(author: string): string[];
  export function getTitles(available: boolean): string[];
  export function getTitles(id: number, available: boolean): string[];
  export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if(args.length === 0)
    {
      return [];
    }
    else if (args.length === 1){
      const arg = args[0];
      if(typeof arg === 'string') {
        return books.filter( book => book.author === arg).map(book => book.title);
      }
      else if(typeof arg === 'boolean') {
        return books.filter( book => book.available === arg).map(book => book.title);
      }
  
    }
    else if (args.length === 2){
      const id = args[0];
      const available = args[1];
      if(typeof id === 'number' && typeof available === 'boolean') {
        return books.filter(book => book.id === id && book.available === available).map(book => book.title);
      }
    }
  }
  
  //export function assertStringValue(value : any) : asserts value is string {
  //   if(typeof value !== 'string'){
  //     throw new TypeError('Value should have been a string!')
  //   }  
  // }
  
  export function bookTitleTransform(title: any){
    //assertStringValue(title);
  
    return [...title].reverse().join();
  }

  export function printBook(book: Book){
    console.log(`${book.title} + by + ${book.author}`);
  }
  
  export function getBookProp(book: Book, propName: BookProperties): any {
    if (typeof book[propName] === 'function') {
      return (book[propName] as Function).name;
    }
    return book[propName];
  }

  export function purge<T>(inventory: T[]): T[] {
    const result: T[] = new Array<T>();
    inventory.forEach((item: T, index: number) => {
      if(index !== 0 && index !== 1) {
        result.push(item);
      }
    });
    return result;
  }

  export function getBooksByCategory(
    categoty: Category,
    callback: LibMgrCallback) {
      setTimeout(() => {
        try {
          const titles = getBookTitlesByCategory(categoty);
          if(titles.length > 0) {
            callback(null, titles);
          }
          else {
            throw new Error('No books found');
          }
        }
        catch(error) {
          callback(error, null);
        }
      }, 2000)
  }

  export function logCategorySearch(err: Error, titles: string[]): void {
    if(err) {
      console.log(err.message);
    }
    else {
      console.log(titles);
    }
  }

  export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
      setTimeout(() => {
          const titles = getBookTitlesByCategory(category);
          if(titles.length > 0) {
            resolve(titles);
          }
          else {
            reject('No books found');
          }
      }, 2000)
    });

    return p;
  }

  export async function logSearchResults(
    category: Category
  ): Promise<any> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
  }