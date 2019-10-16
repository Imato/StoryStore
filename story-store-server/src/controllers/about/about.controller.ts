import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class AboutController {
    @Get()
    get(): string {
        return 'StoryServer, author: Alexey Varentsov';
    }
}
