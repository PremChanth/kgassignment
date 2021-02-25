import { NgModule } from '@angular/core';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule
    // BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
