import { Injectable } from '@nestjs/common';
import { Story } from '../../model';

@Injectable()
export class StoryService {
    private data: Map<number, Story>;

    constructor() {
        this.data = new Map();
        this.data[1] = new Story(1, 'Test story');
    }

    public get(id: number): Story {
        return this.data[id];
    }

    public getAll(): Story[] {
        const d: Story[] = [];

        this.data.forEach((v) => {
            d.push(v);
        });

        return d;
    }

    public save(story: Story) {
        this.data[story.id] = story;
    }
}
