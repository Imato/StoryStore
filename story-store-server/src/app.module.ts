import { Module } from '@nestjs/common';
import { AboutController } from './controllers/about/about.controller';
import { StoryController } from './controllers/story/story.controller';
import { StoryService} from './controllers/story/story.service';

@Module({
  imports: [],
  controllers: [AboutController, StoryController],
  providers: [StoryService],
})
export class AppModule {}
