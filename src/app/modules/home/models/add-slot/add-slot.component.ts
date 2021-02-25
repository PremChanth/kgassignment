import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { MatSnackBar } from '@angular/material/snack-bar';

import { SlotsService } from '../../../../services/slots.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent implements OnInit {
  public addSlotForm: FormGroup;
  public startTime: string;
  public endTime: string;
  public selectedDate;
  constructor(public dialogRef: MatDialogRef<AddSlotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private slotsService: SlotsService,
    private snackBar: MatSnackBar
    ) { 
      this.selectedDate = data.selectedDate;
    }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addSlotForm = this.fb.group({
      startTime: [this.startTime, [Validators.required]],
      endTime: [this.endTime, [Validators.required]]
    });
  }

  addSlot() {
    if (this.addSlotForm.invalid) {
      return;
    }

    let startTime = this.addSlotForm.value.startTime;
    let endTime = this.addSlotForm.value.endTime;

    let startTimeHour = (startTime).split(':')[0];
    let startTimeMin = (startTime).split(':')[1];
    let endTimeHour = (endTime).split(':')[0];
    let endTimeMin = (endTime).split(':')[1];

    let startdate = new Date(this.selectedDate);
    let enddate = new Date(this.selectedDate);

    startdate.setHours(startTimeHour);
    startdate.setMinutes(startTimeMin);

    enddate.setHours(endTimeHour);
    enddate.setMinutes(endTimeMin);


    const slotCreateModel = {
      date: this.selectedDate.getTime(),
      startTime: startdate.getTime(),
      endTime: enddate.getTime(),
      slotType: this.data.slotType
    };

    this.addSlotAPICall(slotCreateModel);

  }

  addSlotAPICall(slotCreateModel) {
    this.slotsService.addSlot(slotCreateModel).subscribe( data => {
      if (data.status) {
          this.dialogRef.close();
      }

      this.snackBar.open(data.message, '', {
        duration: 2000,
      });
    }, (err)=> {
      this.snackBar.open(err, '', {
        duration: 2000,
      });
    });

  }

  cancel() {
    this.dialogRef.close();
  }

  onStartTimeChange(event) {
    let startTime = this.addSlotForm.value.startTime;
    let hour = startTime.split(':')[0];
    let min = startTime.split(':')[1];
    let date = new Date();
    date.setHours(hour);
    date.setMinutes(min);
    date.setMinutes(date.getMinutes() + 30);
   
    this.addSlotForm.patchValue({
      endTime: moment(date).format('HH:mm')
    })
  
  }

}
