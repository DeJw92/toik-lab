import {Component} from 'angular2/core'
import {RouteConfig} from "angular2/router";
import {HomePageComponent} from "./home-page";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ProductsComponent} from "./products";
import {Login} from "./login";


@Component({
    selector: 'app',
    templateUrl: 'views/app.html',
    directives: ROUTER_DIRECTIVES
})
@RouteConfig([
    {path:'/', redirectTo: ['LoginPage']},
    {path:'/home', name:'Home', component: HomePageComponent},
    {path:'/products', name:'Products', component: ProductsComponent},
    {path:'/login', name:'LoginPage', component: Login}
])
export class App {

}