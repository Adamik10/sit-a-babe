import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'sit-a-baby';
  description = 'Angular-application';

  ngOnInit() {
    /*
    firebase.initializeApp({
      apiKey: "AIzaSyBuTkdG0uAwAC6Ch5SdsRr5zLw8_I7ZSoI",
      authDomain: "sit-a-baby.firebaseapp.com"
    });
    */
  }


}