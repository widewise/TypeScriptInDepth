import { type } from "os";
import { Shelf, ReferenceItem, UniversityLibrarian, RefBook } from "./classes";
import { PersonBook, BookOrUndefined, BookProperties, BookRequiredFields, UpdatedBook, createCustomerFunctionType } from "./types";
import { Category } from "./enums";
import { Magazine, Book, Logger, Person, Author, Librarian} from "./interfaces";
import { createCustomerID, getBookTitlesByCategory, getBookByID, bookTitleTransform, checkoutBooks, createCustomer, getAllBooks, getBookProp, getTitles, logBookTitles, logFirstAvailable, printBook, purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./functions";
import Encyclopedia from "./classes/encyclopedia";

//showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}
//=====================================================================

// Task 02.01
//logFirstAvailable(getAllBooks());

//const titles = getBookTitlesByCategory(Category.JavaScript);
//logBookTitles(titles);

//const result = getBookAuthorByIndex(2);
//console.log(result);


//Task 03.01
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// const book = getBookByID(2);
// console.log(book);

//Task 03.02
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id : number) => string;
// idGenerator = (name: string, id : number) => `${id}${name}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Ann', 10);
// console.log(myID);

//Task 03.03

//const customer1 = createCustomer('Ann');
//const customer2 = createCustomer('Ann', 20);
//const customer3 = createCustomer('Ann', 21, 'Moscow');
//const titles = getBookTitlesByCategory();
//console.log(titles);
//logFirstAvailable();
//const myBooks: string[] = checkoutBooks('Ann', 1, 2, 4);
//const myBooks: string[] = checkoutBooks('Ann', ...[1, 2, 4]);
//console.log(myBooks);

//Task 03.04
//const checkedOutBooks1 = getTitles(false);
//console.log(checkedOutBooks1);
//const checkedOutBooks2 = getTitles('Ann');
//console.log(checkedOutBooks2);
//const checkedOutBooks3 = getTitles(1, false);
//console.log(checkedOutBooks3);

//Task 03.05
//const title1 = bookTitleTransform(getAllBooks()[0].title);
//console.log(title1);
//const title2 = bookTitleTransform(10);
//console.log(title2);

//Task 04.01
//const myBook = {
//  id: 5,
//  title: 'Colors, Backgrounds, and Gradients',
//  author: 'Eric A. Meyer',
//  available: true,
//  category: Category.CSS,
//  pages: 200,
//  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//};
//printBook(myBook);
//myBook.markDamaged('missing back cover');

//Task 04.02
// let logDamage: Logger;
// logDamage = (reason: string) => console.log(`Damage logger ${reason}`);
// logDamage('some stains');

//Task 04.03
// const favoriteAutor: Autor = {
//   name: 'Anna',
//   email: 'Anna@gmail.com',
//   numBooksPublished: 10
// }

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'Boris@gmail.com',
//   department: 'Fantastic',
//   assistCustomer: (name: string) => console.log(name)
// }

//Task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }
// console.log(offer?.magazine)

//Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

//Task 05.01
// const ref = new ReferenceItem('Super TypeScript', 2012);
// ref.printItem();
// ref.publisher = 'Popular book publisher'
// console.log(ref.publisher);

//Task 05.02
//const refBook = new Encyclopedia('Large book', 2019, 5);
// console.log(refBook);
// refBook.printItem();

//Task 05.03
// const refBook = new Encyclopedia('Large book', 2019, 5);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
//const favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@gmail.com',
//   id: 11,
//   title: 'Introduction to TypeScript',
//   author: 'Boris',
//   category: Category.TypeScript,
//   available: true
// };
// console.log(personBook);

//Task 06.03
// const refBook: RefBook = new RefBook('Large book', 2019, 5);
// console.log(refBook);
// refBook.printItem();

//Task 06.05
// import('./classes').then(module =>{
//   const reader = new module.Reader();
//   console.log(reader);
//   reader.name = 'Anna';
//   reader.take(getAllBooks()[0])
// })

//Task 07.01 TDB
// const inventory = 
// [
//    {
//      id: 10,
//      title: 'The C Programming Language',
//      author: 'K & R',
//      available: true,
//      category: Category.Software },
//    { 
//      id: 11,
//      title: 'Code Complete',
//      author: 'Steve McConnell',
//      available: true,
//      category: Category.Software
//     },
//    {
//      id: 12,
//      title: '8-Bit Graphics with Cobol',
//      author: 'A. B.',
//      available: true,
//      category: Category.Software
//     },
//    {
//      id: 13,
//      title: 'Cool autoexec.bat Scripts!',
//      author: 'C. D.', available: true, category: Category.Software }
// ];

//const purgeInventory = purge(inventory);
//console.log(purgeInventory);
//console.log(purge([0,1,2,3,4]));
  
//Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine);

//Task 07.03
// bookShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag);

//Task 07.04
// const book: BookRequiredFields = {
//   id: 1,
//   title: 'Refactoring TypeScript',
//   author: 'Unknown',
//   available: false,
//   category: Category.TypeScript,
//   pages: 500,
//   markDamaged: null
// };

// const book: UpdatedBook = {
//   id: 1,
//   pages: 400
// }

//const params: Parameters<createCustomerFunctionType> = ['Anna', 25, 'Kyiv'];
//createCustomer(...params);

//Task 08.01
// const universityLibrarian = new UniversityLibrarian();

//Task 08.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();
// (fLibrarian as any).printLibrarian();

//Task 08.03
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

//Task 08.04
// const enc = new Encyclopedia('Title', 2019, 30);
// enc.printItem();

//Task 08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

//Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);

//Task 08.07
// const enc = new Encyclopedia('Title', 2019, 30);
// enc.copies = 10;
// console.log(enc.copies);

//Task 09.01
// console.log('Beginning search ...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

//Task 09.02
// console.log('Beginning search ...');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(data => {
//   console.log(data);
//   return data.length;
// })
// .then(numOfBooks => console.log(numOfBooks))
// .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
// .then(data => console.log(data))
//  .catch(reason => console.log(reason));
// console.log('End');

//Task 09.03
console.log('Beginning search ...');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(reason => console.log(reason));
console.log('End');