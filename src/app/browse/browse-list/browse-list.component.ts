import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/common/user.service';
import { User } from 'src/app/common/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { app } from 'firebase';
import { Response } from 'selenium-webdriver/http';

export interface Genders {
  value: string;
  viewValue: string;
}

export interface UserTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-browse-list",
  templateUrl: "./browse-list.component.html",
  styleUrls: ["./browse-list.component.scss"]
})
export class BrowseListComponent implements OnInit {
  constructor(private userService: userService) {}

  filteredLocationString = "";
  filterOccupationString = "";
  users = [];
  currentUserstring = localStorage.getItem("currentUser");

  ngOnInit() {
    let currentUser = JSON.parse(this.currentUserstring);

    this.userService.getAllUsers().subscribe(
      //(error) => console.log(error),
      (response: Response) => {
        //console.log(response);
        //looping through what we got which is an object
        for (let key in response) {
          let value = response[key];
          if (value.deleted != true && value.email != currentUser.email) {
            this.users.push(value);
          }
        }
        console.log(this.users);
      }
    );
  }

  selected = "all";

  genders: Genders[] = [
    { value: "all", viewValue: "Gender (All)" },
    { value: "male", viewValue: "Male" },
    { value: "female", viewValue: "Female" },
    { value: "other", viewValue: "Other" }
  ];

  userTypes: UserTypes[] = [
    { value: 'all', viewValue: 'User type (All)' },
    { value: 'babysitter', viewValue: 'Babysitters' },
    { value: 'daddy', viewValue: 'Daddies' }
  ]

  getCurrentAge(birthdate) {
    const dateOFBirth = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - dateOFBirth.getFullYear();
    const m = today.getMonth() - dateOFBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateOFBirth.getDate())) {
      age--;
    }
    return age;
  }
  
}
