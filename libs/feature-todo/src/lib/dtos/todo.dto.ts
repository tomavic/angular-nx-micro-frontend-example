import {
  ICreateTodo,
  ITodo,
  IUpdateTodo,
  IUpsertTodo,
} from '@org/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateTodoDto implements ICreateTodo {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;
}

export class UpsertTodoDto implements IUpsertTodo {
  @IsString()
  @IsNotEmpty()
  title!: string;

  id!: string;
  completed!: boolean;

  @IsString()
  @IsNotEmpty()
  description!: string;
}

export class UpdateTodoDto implements IUpdateTodo {
  @IsString()
  @IsNotEmpty()
  title!: string;

  id!: string;
  completed!: boolean;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
