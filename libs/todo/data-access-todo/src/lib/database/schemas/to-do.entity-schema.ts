import { ITodo } from '@org/shared/domain';
import { EntitySchema } from 'typeorm';

export const ToDoEntitySchema = new EntitySchema<ITodo>({
  name: 'todo',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true,
    },
    title: {
      type: String,
      nullable: false,
    },
    description: {
      type: String,
      nullable: true,
    },
    completed: {
      type: 'boolean',
      default: false,
      nullable: false,
    },
  },
});
