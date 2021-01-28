import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate-stars',
  templateUrl: './rate-stars.component.html',
  styleUrls: ['./rate-stars.component.scss']
})
export class RateStarsComponent implements OnInit {

  @Input() numberOfStars: number;

  noOfStarsArr: number[]=[];
  noOfBlankStarsArr: number[]=[];

  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < this.numberOfStars; i++) {
      this.noOfStarsArr.push(i)
    }
    for (let i = 0; i < 5 - this.numberOfStars; i++) {
      this.noOfBlankStarsArr.push(i)
    }

  }

}
