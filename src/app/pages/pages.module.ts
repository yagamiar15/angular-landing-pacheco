import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    SignUpComponent
  ]
})
export class PagesModule { }
