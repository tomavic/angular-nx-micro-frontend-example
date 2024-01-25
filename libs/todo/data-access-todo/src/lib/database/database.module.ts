import { ToDoEntitySchema } from './schemas/to-do.entity-schema';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntitySchema])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
