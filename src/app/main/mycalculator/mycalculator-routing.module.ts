import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycalculatorComponent } from './mycalculator.component';

const routes: Routes = [
    {
        path: '', component: MycalculatorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycalculatorRoutingModule { }
