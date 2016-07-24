/**
 * Created by Sidney on 7/24/2016.
 */
export class Video {
    id:number;
    title:string;
    videoCode:string;
    desc:string;

    constructor(id:number, title:string, videoCode:string, desc:string) {
        this.id = id;
        this.title = title;
        this.videoCode = videoCode;
        this.desc = desc;
    }
}