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

    constructor() { }

    ngOnInit() {
        console.log("ngOnInit HeaderComponent");
        var accessTokenString = localStorage.getItem('accessToken');
        if (accessTokenString != null) {
            var accessToken = JSON.parse(accessTokenString);
            this.username = accessToken.displayusername;
            console.log(this.username);
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

    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }

    onLoggedout() {
        localStorage.removeItem('accessToken');
        // this.socialAuthService.signOut();
    }
}
