import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {BellComponent} from "./bell.component";

@NgModule({
    "declarations": [
        BellComponent
    ],
    "imports": [
        BrowserModule
    ],
    "providers": [],
    "bootstrap": [
        BellComponent
    ]
})
export class BellModule {}
