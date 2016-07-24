///<reference path="../../node_modules/angular2/src/core/metadata.d.ts"/>
import {Component} from "angular2/core";
import {Video} from "./video";

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']

})

export class PlaylistComponent {
    onSelect(vid:Video) {
        console.log(JSON.stringify(vid));
    }
}