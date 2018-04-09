import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { MycalculatorRoutingModule } from './mycalculator-routing.module';
import { MycalculatorComponent } from './mycalculator.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MycalculatorRoutingModule, PageHeaderModule, FormsModule],
    declarations: [MycalculatorComponent]
})
export class MycalculatorModule {}
