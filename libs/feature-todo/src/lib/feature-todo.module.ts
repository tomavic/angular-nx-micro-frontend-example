import { Module } from '@nestjs/common';
import { FeatureTodoController } from './feature-todo.controller';
import { FeatureTodoService } from './feature-todo.service';
import { DataAccessTodoModule } from '@org/libs/todo/data-access-todo';

@Module({
  imports: [DataAccessTodoModule],
  controllers: [FeatureTodoController],
  providers: [FeatureTodoService],
  exports: [FeatureTodoService],
})
export class FeatureTodoModule {}
