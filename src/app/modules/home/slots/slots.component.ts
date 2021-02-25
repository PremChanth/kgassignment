import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from "@angular/material/dialog";
import { AddSlotComponent } from "../models/add-slot/add-slot.component";
import { SlotsService } from '../../../services/slots.service';
import * as moment from 'moment';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  seletedDate = new Date();
  morningSlots;
  eveningSlots;
  changeColor: boolean;

  constructor(private dialog: MatDialog,
    private slotsService: SlotsService) { }

  ngOnInit() {
    this.getSlots();
  }

  openCalendar(picker: MatDatepicker<Date>) {
    picker.open();
  }

  onSelect(event){
    this.seletedDate = event;
    this.getSlots();
  }
  changeFontcolor(){
    this.changeColor = true;
  }

changeFontcolor1(){
    this.changeColor = false;
  }
  openAddSlotModel(slotType: any) {
    const dialogRef = this.dialog.open(AddSlotComponent, {
      width: '300px',
      height: '300px',
      data: { selectedDate: this.seletedDate, slotType: slotType }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getSlots();
    });
  }

  getSlots() {
    let formatDate = moment(this.seletedDate).format('YYYY-MM-DD')
    this.slotsService.getSlots(formatDate).subscribe(data => {
      // console.log('slot data', data.data);
      if (data.status) {
          this.morningSlots = data.data.filter(o => o.slotType == 'morning');
          this.eveningSlots = data.data.filter(o => o.slotType == 'evening');   
      }
    });
  }

}
