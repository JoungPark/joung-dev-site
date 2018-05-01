import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

    username: String;
    loggedIn: boolean;

    constructor(private router: Router) { }

    ngOnInit() {
        console.log("ngOnInit HeaderComponent");
        var jwt_access_token = sessionStorage.getItem('jwt_access_token');
        if (jwt_access_token != null) {
            var accessToken = this.parseJwt(jwt_access_token);
            this.username = accessToken.user_name;
            // console.log(accessToken.userId);
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        // this.socialAuthService.authState.subscribe((user) => {
        //     this.user = user;
        //     this.loggedIn = (user != null);
        //     if (this.user != null) {
        //         this.username = user.name;
        //     }
        //     console.log(this.user);
        // });
    }

    parseJwt (token:String) : JSON {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };

    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }

    onLoggedout() {
        sessionStorage.removeItem('accessToken');
        this.loggedIn = false;
        this.router.navigateByUrl("/");
        // this.socialAuthService.signOut();
    }
}
