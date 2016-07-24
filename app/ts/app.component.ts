import {Component} from 'angular2/core';
import {Config} from "./config.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html'
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
}
