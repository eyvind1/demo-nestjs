import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [TasksModule, PersonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
