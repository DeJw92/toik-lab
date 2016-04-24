import {Component, OnInit} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {Offer} from "./offer";
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';


@Component({
    templateUrl: 'views/products-form.html',
    selector: 'products',
    directives: FORM_DIRECTIVES
})
export class ProductsComponent implements OnInit{
    offers:Offer[] = [];

    constructor(private http:Http) {}

    ngOnInit() {
        this.http.get("http://localhost:8080/offers")
            .map(res => res.json())
            .subscribe(
                offers => {
                    this.offers = offers;
                },
                err => console.log("Service is unavailable")
            );
    }
    
    onSubmit(offer:Offer) {
        this.offers.push(offer);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:8080/offers', JSON.stringify(offer), {
                headers: headers
            })
            .map(res => res.json())
            .subscribe(
                err => console.log("Service is unavailable"),
                () => console.log('Offer saved')
            );
    }
}