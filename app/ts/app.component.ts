import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {PlaylistComponent} from "./playlist.component";
import {Video} from "./video";
import {id} from "angular2/i18n";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "Angular 2 for Beginners - Tutorial 6", "pz9sbuMvhQU", "Creating our First Component"),
            new Video(2, "Angular 2 for Beginners - Tutorial 7", "f8qBeaGe2S4", "Nested Components")
        ]
    }
}
