import { Controller, Get, Post, Inject, Param } from '@nestjs/common';
import { StoryService } from './story.service';
import { Story } from '../../model';

@Controller('story')
export class StoryController {

    @Inject()
    private readonly storyService: StoryService;

    @Get()
    getAll(): Story[] {
        return this.storyService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number): Story {
        return this.storyService.get(id);
    }
}
