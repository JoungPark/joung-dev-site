import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as SocialAuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { routerTransition } from '../router.animations';
import { AppAuthService } from '../shared/services/app-auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(public router: Router, private socialAuthService: SocialAuthService, private appAuthService: AppAuthService) {}

    public name = 'bar';
    public email = 'bar@example.com'
    public password: String = '11';
    public passwordRepeat: String = '11';

    ngOnInit() {}

    onRegister() {
        if (this.password != this.passwordRepeat) {
            return;
        }
        this.appAuthService.signUp(this.email, this.password, this.name).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('yay')
        );
        this.router.navigateByUrl('/login');
    }

    signupFacebook() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            res => { // Success
                console.log(res);
                this.appAuthService.signUpSocial(res).subscribe(
                    data => console.log(data),
                    err => console.log(err),
                    () => console.log('yay')
                );
                this.router.navigateByUrl('/login');
            },
            msg => { // Error
                console.log('Error' + msg);
            }
        );
    }
}
