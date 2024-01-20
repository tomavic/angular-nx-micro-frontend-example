import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeatureTodoService } from './feature-todo.service';
import { ITodo } from '@org/shared/domain';
import { CreateTodoDto } from './dtos/todo.dto';

@Controller('feature-todo')
export class FeatureTodoController {
  constructor(private featureTodoService: FeatureTodoService) {}

  @Get('')
  getAll(): ITodo[] {
    return this.featureTodoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ITodo {
    return this.featureTodoService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateTodoDto): ITodo {
    return this.featureTodoService.create(data);
  }
}
