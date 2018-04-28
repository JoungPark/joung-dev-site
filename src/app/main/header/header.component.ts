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
        var accessTokenString = sessionStorage.getItem('accessToken');
        if (accessTokenString != null) {
            var accessToken = JSON.parse(accessTokenString);
            this.username = accessToken.displayusername;
            console.log(accessToken.userId);
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
