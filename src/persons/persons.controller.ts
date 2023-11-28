import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePersonDTO, UpdatePersonDTO } from './dto/person.dto';
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

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields:UpdatePersonDTO) {
    return this.personService.updatePerson(id, updatedFields)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.personService.deletePerson(id)
  }
}
