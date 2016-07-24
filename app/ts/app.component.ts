import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
}
