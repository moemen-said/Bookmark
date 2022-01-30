import { Component, Input, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model'

@Component({
  selector: 'other-author-item',
  templateUrl: './other-author-item.component.html',
  styleUrls: ['./other-author-item.component.scss']
})
export class OtherAuthorItemComponent implements OnInit {

  @Input() authorData:author

  constructor() { }

  ngOnInit(): void {
  }

}
