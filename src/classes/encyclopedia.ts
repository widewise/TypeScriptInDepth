//import { ReferenceItem } from "./classes";

export default class Encyclopedia /*extends ReferenceItem*/ {
    constructor(id, number, title: string, year: number, public edition: number) {
      //super(id, title, year);
    }
  
    // printItem() {
    //   super.printItem();
    //   console.log(`Edition ${this.edition} (${this.year})`)
    // }  
  
    // printCitation(): void {
    //   console.log(`${this.title} - ${this.year}`)
    // }
  }

