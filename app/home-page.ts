import {Component} from "angular2/core";
import {OFFERS} from "./offers-mock-service";

@Component({
    selector: 'home-page',
    templateUrl: 'views/home-page.html'
})
export class HomePageComponent {
    offers = OFFERS;
}