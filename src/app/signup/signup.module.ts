import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AppAuthService} from '../shared/services/app-auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SignupRoutingModule
  ],
  providers: [AppAuthService],
  declarations: [SignupComponent]
})
export class SignupModule { }
