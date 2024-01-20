import { Test } from '@nestjs/testing';
import { FeatureTodoController } from './feature-todo.controller';
import { FeatureTodoService } from './feature-todo.service';

describe('FeatureTodoController', () => {
  let controller: FeatureTodoController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTodoService],
      controllers: [FeatureTodoController],
    }).compile();

    controller = module.get(FeatureTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
