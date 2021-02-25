import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
    { 
      path: '', redirectTo: 'home', pathMatch: 'full' 
    },
    {
      path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
  ];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
