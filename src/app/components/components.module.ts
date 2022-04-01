import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderLandingComponent } from './header-landing/header-landing.component';



@NgModule({
  declarations: [
    HeaderLandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderLandingComponent
  ]
})
export class ComponentsModule { }
