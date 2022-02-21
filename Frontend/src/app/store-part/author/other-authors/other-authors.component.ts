import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'other-authors',
  templateUrl: './other-authors.component.html',
  styleUrls: ['./other-authors.component.scss'],
})
export class OtherAuthorsComponent implements OnInit {

  users: User[] = []
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
