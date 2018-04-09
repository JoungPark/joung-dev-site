import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'resume' },
            { path: 'resume', loadChildren: './resume/resume.module#ResumeModule' },
            { path: 'mycalculator', loadChildren: './mycalculator/mycalculator.module#MycalculatorModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
