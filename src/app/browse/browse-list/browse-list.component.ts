import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

  users = [
    {
      name: "Saska", 
      surname: "Labusova", 
      birth_date : "23/10/1994", 
      email : "s.labus@gmail.com", 
      password : "Password123", 
      user_type : "sitter", 
      occupation : "student", 
      location: "Copemhagen",
      introduction : "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/saska.jpg"
    },
    {
      name: "Adam",
      surname: "Antal",
      birth_date: "10/10/1994",
      email: "a.antal@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "student",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/adam.jpg"
    },
    {
      name: "Katarina",
      surname: "Kukavica",
      birth_date: "30/6/1995",
      email: "k.kukavica@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "CEO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/katka.jpg"
    },
    {
      name: "Daddy",
      surname: "One",
      birth_date: "30/6/1995",
      email: "d.one@gmail.com",
      password: "Password123",
      user_type: "parent",
      occupation: "COO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/daddy1.jpg",
      children: [
        {
          name: "Autumn",
          birth_date: "20/9/2006",
          location: "Copemhagen",
          introduction: "Autumn is very nice and calm.",
          allergies: "almonds",
          picture_location: "src/assets/img/users/baby1.jpg",
          babysitting_time: [
            {
              from: "4/12/2018 8:00",
              to: "4/12/2018 15:30"
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
