import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../../../services/appointments.service';
import * as moment from 'moment';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})


export class AppoinmentComponent implements OnInit {

  displayedColumns: string[] = ['patient_name', 'phone_number', 'appointment', 'waited'];
  seletedDate = new Date();
  appointmentList: MatTableDataSource<any>;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    let formatDate = moment(this.seletedDate).format('YYYY-MM-DD')
    this.appointmentService.getAppointments(formatDate).subscribe(data => {

      if (data.status) {
        this.appointmentList = new MatTableDataSource(data.data);
      }
    });
  }

}
