import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'other-author-item',
  templateUrl: './other-author-item.component.html',
  styleUrls: ['./other-author-item.component.scss'],
})
export class OtherAuthorItemComponent implements OnInit {
  @Input() authorData: user;

  constructor() {}

  ngOnInit(): void {}
}
