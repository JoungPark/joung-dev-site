import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService as SocialAuthService, SocialUser } from "angular4-social-login";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    username: String;
    user: SocialUser;
    loggedIn: boolean;

    constructor(private socialAuthService: SocialAuthService) { }

    ngOnInit() {
        this.socialAuthService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (this.user != null) {
                this.username = user.name;
            }
            console.log(this.user);
        });
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.socialAuthService.signOut();
    }
}
