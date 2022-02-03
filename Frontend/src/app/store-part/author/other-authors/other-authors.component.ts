import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'other-authors',
  templateUrl: './other-authors.component.html',
  styleUrls: ['./other-authors.component.scss'],
})
export class OtherAuthorsComponent implements OnInit {

  users: user[] = []
  //   { id: '', name: 'Marian' },
  //   { id: '', name: 'Marwan' },
  //   { id: '', name: 'Moemen'},
  //   { id: '', name: 'Magda' },
  //   { id: '', name: 'Mohamed'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
