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

@Component({
  selector: "app-browse-list",
  templateUrl: "./browse-list.component.html",
  styleUrls: ["./browse-list.component.scss"]
})
export class BrowseListComponent implements OnInit {
  constructor(
    private userService: userService) {}

  filteredLocation = "";
  users = [];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      //(error) => console.log(error),
      (response: Response) => {
        //console.log(response);
        //looping through what we got which is an object
        for (let key in response) {
          let value = response[key];
          if (value.deleted != true) {
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

  getLocationPipe() {}
}
