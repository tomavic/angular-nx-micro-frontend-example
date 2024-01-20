import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureTodoModule } from '@org/libs/feature-todo';

@Module({
  imports: [FeatureTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
