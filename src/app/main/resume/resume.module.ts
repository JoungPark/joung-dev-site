import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ResumeRoutingModule, PageHeaderModule, HttpClientModule],
    providers: [ResumeService],
    declarations: [ResumeComponent]
})
export class ResumeModule {}
