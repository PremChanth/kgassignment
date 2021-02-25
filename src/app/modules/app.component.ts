import { Component } from '@angular/core';
import { SlotsService } from '../services/slots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public slotsService: SlotsService) { }

  // search() {
  // 	window.location.href = "https://www.google.co.in/search?q=Bhaskar+Rajoriya";
  // }

}
