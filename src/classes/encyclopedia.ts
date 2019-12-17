import { ReferenceItem } from "./classes";

export default class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
      super(title, year);
    }
  
    printCitation(): void {
      console.log(`${this.title} - ${this.year}`)
    }
  
    printItem() {
      super.printItem();
      console.log(`Edition ${this.edition} (${this.year})`)
    }  
  }

