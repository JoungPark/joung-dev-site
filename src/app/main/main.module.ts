import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './maiin-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [MainComponent, HeaderComponent]
})
export class MainModule {}
