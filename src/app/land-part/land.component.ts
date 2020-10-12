import { headerAnimation, contentAnimation } from './land-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss'],
  animations: [headerAnimation, contentAnimation]
})
export class LandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
