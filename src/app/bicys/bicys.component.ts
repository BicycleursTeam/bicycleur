import { Component, OnInit } from '@angular/core';
import { BicyService } from './shared/bicy.service';

@Component({
  selector: 'app-bicys',
  templateUrl: './bicys.component.html',
  styleUrls: ['./bicys.component.css'],
  providers: [BicyService],
})
export class BicysComponent implements OnInit {

  constructor(private bicyService: BicyService ) { }

  ngOnInit() {
  }

}
