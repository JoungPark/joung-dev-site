import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppAuthService} from '../shared/services/app-auth.service';

@NgModule({
    imports: [CommonModule, FormsModule, LoginRoutingModule, HttpClientModule],
    providers: [AppAuthService],
    declarations: [LoginComponent]
})
export class LoginModule { }
