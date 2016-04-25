import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {Authentication} from "./authentication";

@Component({
    selector: 'login',
    directives: [ FORM_DIRECTIVES, NgIf ],
    template: `
    <form [ngFormModel]="form">
      <div *ngIf="error">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid" (click)="onSubmit(form.value)">Login</button>
      </div>
    </form>
  `
})

export class Login {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            username:  ['', Validators.required],
        });
    }

    onSubmit(value: any) {
        this.auth.login(value.username)
            .subscribe(
                (token: any) => { this.router.navigate(['/Home']); },
                () => { this.error = true; }
            );
    }
}