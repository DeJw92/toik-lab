import {Component, OnInit} from "angular2/core";
import {Offer} from "./offer";
import {Http} from "angular2/http";

@Component({
    selector: 'home-page',
    templateUrl: 'views/home-page.html'
})
export class HomePageComponent implements OnInit{
    offers:Offer[] = [];
    
    constructor(private http:Http) {}
    
    ngOnInit() {
        this.http.get("http://localhost:8080/ready-offers")
            .map(res => res.json())
            .subscribe(
                offers => {
                    this.offers = offers;
                },
                err => console.log("Service is unavailable")
            );
    }
}