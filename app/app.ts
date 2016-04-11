import {Component} from 'angular2/core'
import {RouteConfig} from "angular2/router";
import {HomePageComponent} from "./home-page";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ProductsComponent} from "./products";
import {LoginComponent} from "./login";


@Component({
    selector: 'app',
    templateUrl: 'views/app.html',
    directives: ROUTER_DIRECTIVES
})
@RouteConfig([
    {path:'/', name:'HomePage', component: HomePageComponent, useAsDefault: true},
    {path:'/products', name:'Products', component: ProductsComponent},
    {path:'/login', name:'LoginPage', component: LoginComponent}
])
export class App {

}