import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AuthService as MyAuthService} from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SignupRoutingModule
  ],
  providers: [MyAuthService],
  declarations: [SignupComponent]
})
export class SignupModule { }
