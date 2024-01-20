import { ITodo } from '@org/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateTodoDto implements Pick<ITodo, 'title' | 'description'> {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
