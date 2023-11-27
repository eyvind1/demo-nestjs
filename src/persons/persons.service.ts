import { Injectable } from '@nestjs/common';
import { CreatePersonDTO } from './dto/person.dto';
import { v4 } from 'uuid';
import { Person } from './person.entity';

@Injectable()
export class PersonsService {

    private persons: Person[] = [
        {
          id: '1',
          name: 'demo',
          address: 'some place',
          role: 'student',
          age: 22
        },
      ];

    /**
     * Create a person
     * @param fieldPerson 
     * @returns 
     */
    createPerson(fieldPerson:CreatePersonDTO) {
        const idPerson = {
            id: v4()
        } 
        const newPerson = Object.assign(idPerson,fieldPerson);
        return newPerson
    }

    /**
     * get list of persons
     * @returns 
     */
    getAllPersons() {
        return this.persons;
      }
}
