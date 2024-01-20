import { Module } from '@nestjs/common';
import { FeatureTodoController } from './feature-todo.controller';
import { FeatureTodoService } from './feature-todo.service';

@Module({
  controllers: [FeatureTodoController],
  providers: [FeatureTodoService],
  exports: [FeatureTodoService],
})
export class FeatureTodoModule {}
