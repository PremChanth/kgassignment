import { Component, OnInit } from '@angular/core';
import { SlotsService } from '../../services/slots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isOpenNav: boolean = false;
  constructor(
  	public slotsService: SlotsService, 
  	public router: Router
  ) { }

  ngOnInit() {
  }

  goToAppointments() {
    this.router.navigate(['home/appointments'])
  }

  goToSlots() {
    this.router.navigate(['home/slots'])
  }
}
