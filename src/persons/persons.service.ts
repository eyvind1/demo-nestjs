import { Injectable } from '@nestjs/common';
import { CreatePersonDTO, UpdatePersonDTO } from './dto/person.dto';
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
      age: 22,
    },
  ];

  /**
   * Create a person
   * @param fieldPerson
   * @returns
   */
  createPerson(fieldPerson: CreatePersonDTO) {
    const idPerson = {
      id: v4(),
    };
    const newPerson = Object.assign(idPerson, fieldPerson);
    this.persons.push(newPerson);
    return newPerson;
  }

  /**
   * get list of persons
   * @returns
   */
  getAllPersons() {
    return this.persons;
  }

  getPersonById(id: string): Person {
    return this.persons.find((person) => person.id === id);
  }

  updatePerson(id: string, updatedFields: UpdatePersonDTO): Person {
    const person = this.getPersonById(id);
    const newPerson = Object.assign(person, updatedFields);
    this.persons = this.persons.map((person) => (person.id == id ? newPerson : person));
    return newPerson;
  }

  deletePerson(id:string) {
    this.persons = this.persons.filter(person => person.id !== id)
  }
}
