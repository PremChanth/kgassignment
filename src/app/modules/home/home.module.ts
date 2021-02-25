import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../shared_modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppoinmentComponent } from './appoinments/appoinments.component';
import { SlotsComponent } from './slots/slots.component';
import { AddSlotComponent } from './models/add-slot/add-slot.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppoinmentComponent,
    SlotsComponent,
    AddSlotComponent 
   ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddSlotComponent
  ]
})
export class HomeModule { }
