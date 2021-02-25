import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppoinmentComponent } from './appoinments/appoinments.component';
import { SlotsComponent } from './slots/slots.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'appointments', component: AppoinmentComponent },
  { path: 'slots', component: SlotsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }