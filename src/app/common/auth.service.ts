import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { userService } from "./user.service";
import { Router } from "@angular/router";

@Injectable()
export class authService {
  token: string;
  allUsers = [];

    constructor(private userService: userService, private router: Router) {}

  signUserUp(email: string, password: string) {
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  logUserIn(email: string, password: string) {
    /*
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => this.token = token
                )
            }
        ).catch(
            error => console.log(error)
        ) */
    
    //get all the users
    this.userService.getAllUsers().subscribe((response: Response) => {
        
        //make an array of users
        for (let key in response) {
            let value = response[key];
            this.allUsers.push(value);
        }

        //loop through all the users to find matching email and password
        var matchingEmailAndPassword = false;
        var admin = false;
        for (var i = 0; i < this.allUsers.length; i++){
            if(this.allUsers[i].email == email && this.allUsers[i].password == password){
                matchingEmailAndPassword = true;
                if(this.allUsers[i].user_type == 'admin'){
                    admin = true;
                }
                break;
            }
        }

        //if there was a match, then log user in (put it in their localstorage)
        if(matchingEmailAndPassword == true){
            if(admin != true){
                localStorage.loggedIn = true;
                console.log("logged in");
                this.router.navigate(["/browse"]);
            }else{
                localStorage.loggedInAdmin = true;
                console.log("logged in");
                this.router.navigate(["/admin-portal"]);
            }

        }else{
            localStorage.loggedIn = false
            console.log('not logged in');
            this.router.navigate(["/login"]);
        }
    });
  }
  /*
  getToken() {
    return firebase
      .auth()
      .currentUser.getIdToken()
      .then(
        //this action is asynchronous
        (token: string) => (this.token = token)
      );
  }
  */

  isUserAuthenticated() {
    this.userService.getAllUsers().subscribe((response: Response) => {
      for (let key in response) {
        let value = response[key];
        this.allUsers.push(value);
      }
    });
  }
}