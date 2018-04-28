import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService as SocialAuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { AppAuthService } from '../shared/services/app-auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private socialAuthService: SocialAuthService, private appAuthService: AppAuthService) { }

    public loginFail = false;
    public username = 'bar';
    public password: String = '11';

    ngOnInit() {

    }

    onLoggedin() {
        this.loginFail = false;
        this.appAuthService.obtainAccessToken(this.username, this.password).subscribe(
            data => {
                this.loginSuccess(data);
            },  
            err => {
                // alert('Login Fail: ' + err.error);
                this.loginFail = true;
                console.log(err);
            }
        );
    }

    public facebookLogin() {
        this.loginFail = false;
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            res => { // Success
                // console.log(res); 
                this.appAuthService.obtainAccessTokenSocial(res.id).subscribe(
                    data => {
                        // console.log(data);
                        this.loginSuccess(data);
                    },
                    err => {
                        alert('Invalid Credentials: ' + err.error);
                        console.log(err);
                    }
                )
            },
            msg => { // Error
                // alert('Social Login fail');
                this.loginFail = true;
                console.log('Error' + msg);
            }
        );
    }

    public googleLogin() {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
            res => { // Success
                console.log(res);
            },
            msg => { // Error
                console.log('Error' + msg);
            }
        );
    }

    loginSuccess(response) {
        var accessToken = this.parseJwt(response.accessToken);
        sessionStorage.setItem('accessToken', JSON.stringify(accessToken));

        this.router.navigateByUrl("/");
    }

    parseJwt (token:String) : JSON {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
}
