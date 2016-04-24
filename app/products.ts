import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {Offer} from "./offer";

@Component({
    templateUrl: 'views/products-form.html',
    selector: 'products',
    directives: FORM_DIRECTIVES
})
export class ProductsComponent {
    offers:Offer[] = [];
    
    onSubmit(offer:Offer) {
        this.offers.push(offer);
    }
}