import { Injectable } from '@nestjs/common';
import { Story } from '../../model';

@Injectable()
export class StoryService {
    private data: Story[];

    constructor() {
        this.data = [];
        this.save(new Story(0, 'Test story'));
        this.save(new Story(1, 'Test story 1'));
        this.save(new Story(2, 'Test story 2'));
    }

    public get(id: number): Story {
        return this.data[id];
    }

    public getAll(): Story[] {
        return this.data;
    }

    public save(story: Story) {
        this.data[story.id] = story;
    }
}
