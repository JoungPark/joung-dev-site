import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthService as SocialAuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { AuthService as MyAuthService } from '../auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private socialAuthService: SocialAuthService, private myAuthService: MyAuthService) {}

    ngOnInit() {}

    signupFacebook() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            res => { // Success
                console.log(res);
                this.myAuthService.signUpSocial(res).subscribe(
                    data => console.log(data),
                    err => console.log(err),
                    () => console.log('yay')
                );
            },
            msg => { // Error
                console.log('Error' + msg);
            }
        );
    }
}
