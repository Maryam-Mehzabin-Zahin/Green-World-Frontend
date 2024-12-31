export class GreenPost {
    id: string;
    desc: string;
    profile: string;
    colors: string[];

    constructor(id: string, desc: string, profile: string, colors: string[]) {
        this.id = id;
        this.desc = desc;
        this.profile = profile;
        this.colors = colors;
      }
} 