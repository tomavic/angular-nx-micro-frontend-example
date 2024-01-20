import { Test } from '@nestjs/testing';
import { FeatureTodoService } from './feature-todo.service';

describe('FeatureTodoService', () => {
  let service: FeatureTodoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTodoService],
    }).compile();

    service = module.get(FeatureTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
