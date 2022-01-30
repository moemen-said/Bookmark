import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { author, gender } from 'src/app/models/author.model';

@Component({
  selector: 'other-authors',
  templateUrl: './other-authors.component.html',
  styleUrls: ['./other-authors.component.scss'],
})
export class OtherAuthorsComponent implements OnInit {

  authors: author[] = [
    { id: '', authorName: 'Marian', noOfBooks: 2, gender: gender.female, nationality: 'Egyptian', rate: 1, profilePicLink: "../../../../assets/images/female1.jpg" },
    { id: '', authorName: 'Marwan', noOfBooks: 8, gender: gender.male, nationality: 'Egyptian', rate: 4, profilePicLink:"../../../../assets/images/male_user.svg" },
    { id: '', authorName: 'Moemen', noOfBooks: 5, gender: gender.male, nationality: 'Egyptian', rate: 5,  profilePicLink: "../../../../assets/images/male2.jpg" },
    { id: '', authorName: 'Magda', noOfBooks: 3, gender: gender.female, nationality: 'Egyptian', rate: 4,  profilePicLink: "../../../../assets/images/female_user.svg" },
    { id: '', authorName: 'Mohamed', noOfBooks: 1, gender: gender.male, nationality: 'Egyptian', rate: 2,  profilePicLink: "../../../../assets/images/male3.jpg" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
