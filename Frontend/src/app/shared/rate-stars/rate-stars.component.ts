import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'rate-stars',
  templateUrl: './rate-stars.component.html',
  styleUrls: ['./rate-stars.component.scss']
})
export class RateStarsComponent implements OnInit {

  @Input() numberOfStars?: number;
  @Input() starSize: number = 1;
  @ViewChild('starDiv',{static:true}) starDiv

  noOfStarsArr: number[] = [];
  noOfBlankStarsArr: number[] = [];

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

    for (let i = 0; i < this.numberOfStars; i++) {
      this.noOfStarsArr.push(i)
    }
    for (let i = 0; i < 5 - this.numberOfStars; i++) {
      this.noOfBlankStarsArr.push(i)
    }

    if (this.starSize == 0) {
      this.render.setStyle(this.starDiv.nativeElement, "transform", "scale(.8)")
    }

  }

}
