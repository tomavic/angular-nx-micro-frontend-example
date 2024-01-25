import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeatureTodoService } from './feature-todo.service';
import { ITodo } from '@org/shared/domain';
import { CreateTodoDto, TodoDto } from './dtos/todo.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('todos')
export class FeatureTodoController {
  constructor(private featureTodoService: FeatureTodoService) {}

  @Get('')
  @ApiOkResponse({
    type: TodoDto,
    isArray: true,
  })
  @ApiOperation({
    summary: 'Returns all to-do items',
    tags: ['todos'],
  })
  getAll() {
    return this.featureTodoService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: TodoDto,
  })
  @ApiOperation({
    summary: 'Returns a single to-do if it exists',
    tags: ['todos'],
  })
  getOne(@Param('id') id: string) {
    return this.featureTodoService.getOne(id);
  }

  @Post('')
  @ApiCreatedResponse({
    type: TodoDto,
  })
  @ApiOperation({
    summary: 'Creates a new to-do and returns the saved object',
    tags: ['todos'],
  })
  create(@Body() data: CreateTodoDto) {
    return this.featureTodoService.create(data);
  }
}
