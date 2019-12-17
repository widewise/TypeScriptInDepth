import * as Interfaces from "../interfaces";
import { sealed, logger, writable, logParameter, logMethod } from "../decorators";

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter() custName: string) {
      console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
      console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
      console.log('Teaching community');
    }
  }