import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService as SocialAuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { AuthService as MyAuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private socialAuthService: SocialAuthService, private myAuthService: MyAuthService) { }

    ngOnInit() {

    }

    public facebookLogin() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            res => { // Success
                this.myAuthService.facebookLogin(res).subscribe(
                    data => console.log(data),
                    err => console.log(err),
                    () => console.log('yay')
                );;
            },
            msg => { // Error
                console.log('Error' + msg);
            }
        );
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
