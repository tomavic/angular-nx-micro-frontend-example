import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntitySchema } from '@org/libs/todo/data-access-todo';
import { ITodo } from '@org/shared/domain';

import { Repository } from 'typeorm';

@Injectable()
export class FeatureTodoService {
  constructor(
    @InjectRepository(ToDoEntitySchema)
    private todoRepository: Repository<ITodo>
  ) {}

  async getAll(): Promise<ITodo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: Pick<ITodo, 'title' | 'description'>): Promise<ITodo> {
    const newTodo = await this.todoRepository.save({ ...todo });
    return newTodo;
  }

  async getOne(id: string): Promise<ITodo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`To-do could not be found!`);
    }
    return todo;
  }
}
