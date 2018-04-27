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

    public username = 'bar';
    public password: String = '11';

    ngOnInit() {

    }

    public loginwithFacebook() {
        this.myAuthService.loginwithFacebook().subscribe(
            data => { // Success
                this.myAuthService.facebookLogin(data).subscribe(
                    data => console.log(data),
                    () => console.log('yay')
                );
            },
            err => { // Error
                console.log('Error' + err);
            }
        );
    }

    public facebookLogin() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            res => { // Success
                console.log(res);
                this.myAuthService.obtainAccessToken(res.id, res.id).subscribe(
                    data => console.log(data),
                    err => console.log(err)
                )
            },
            msg => { // Error
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

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
        this.myAuthService.obtainAccessToken(this.username, this.password).subscribe(
            data => {
                console.log("success");
                console.log(data);
            },
            err => {
                alert('Invalid Credentials: ' + err.error);
                console.log(err);
            }
        );
    }
}
