import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Rx';
import {Headers, Http} from "angular2/http";
@Injectable()
export class Authentication {
    token: string;

    constructor(private http:Http) {
        this.token = localStorage.getItem('token');
    }

    login(username: String) {
        this.http.post('http://localhost:8080/login', JSON.stringify({
                login: username
            }), {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .map(res => res.json())
            .subscribe(
                res => this.token = res.token,
                err => console.log("Service is unavailable")
            );
        if(this.token == "failed") {
            this.token = undefined;
            return Observable.throw('authentication failure');
        }
        return Observable.of(this.token);
    }

    logout() {

        this.token = undefined;
        localStorage.removeItem('token');

        return Observable.of(true);
    }
}
