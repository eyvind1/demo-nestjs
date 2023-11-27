import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePersonDTO } from './dto/person.dto';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(
    private personService: PersonsService
  ) {}

  @Post()
  createTask(@Body() newPerson: CreatePersonDTO) {
    return this.personService.createPerson(newPerson);
  }

  @Get()
  getAllPersons() {
    return this.personService.getAllPersons();
  }
}
