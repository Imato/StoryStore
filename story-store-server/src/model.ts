export class Story {
    public id: number;
    public date: Date;
    public text: string;

    constructor(id: number = null, text: string = null) {
        this.id = id;
        this.date = new Date();
        this.text = text;
    }
}
