import * as Interfaces from "../interfaces";
import { timeout } from "../decorators";

export abstract class ReferenceItem {
    
    //title : string;
    //year : number;
    //  constructor(newTitle: string, newYear: number){
    //    console.log('Creating a new ReferenceItem ...')
    //    this.title = newTitle;
    //    this.year = newYear;
    //  }
    private _publisher: string;
    
    get publisher():string{
       return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
      this._publisher = newPublisher;
    }
    
    static department: string = 'Literature';
    constructor(public title: string, protected year: number){
        console.log('Creating a new ReferenceItem ...');
      }
    
      abstract printCitation(): void;
    
      @timeout(2000)
      printItem(): void{
       console.log(`${this.title} was published in ${this.year}`);
       console.log(`Department ${ReferenceItem.department}`);
     }
    }