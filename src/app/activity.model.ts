export class Activity {
    activity: string;
    type: string;
    participants : number;
    price: number;
    link: string;
    key: string;
    accessibility: string;
    error: string;
    constructor(data: Activity) {
        this.activity = data.activity;
        this.type = data.type;
        this.participants = data.participants;
        this.price = data.price;
        this.link = data.link;
        this.key = data.key;
        this.accessibility = data.accessibility;
        this.error = data.error;
    }
  }