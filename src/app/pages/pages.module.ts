import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover'; */
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ComponentsModule } from '../components/components.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientModuleComponent } from './patient-module/patient-module.component';


@NgModule({
  declarations: [LandingPageComponent, RegisterPageComponent, LoginPageComponent, PatientModuleComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    // PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    // TabsModule.forRoot(),
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot(),
  ],
  exports: [LandingPageComponent],
})
export class PagesModule { }
