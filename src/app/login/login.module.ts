import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService as MyAuthService} from '../auth.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, HttpClientModule],
    providers: [MyAuthService],
    declarations: [LoginComponent]
})
export class LoginModule { }
