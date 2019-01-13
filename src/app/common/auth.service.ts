import { Injectable } from "@angular/core";
// import * as firebase from "firebase";
import { userService } from "./user.service";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class authService {
  token: string;
  allUsers = [];

    constructor(private userService: userService, private router: Router) {}

  signUserUp(email: string, password: string) {
      /*
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
      */
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

        let currentUser = {};

        //loop through all the users to find matching email and password
        var matchingEmailAndPassword = false;
        var admin = false;
        for (var i = 0; i < this.allUsers.length; i++){
            if(this.allUsers[i].email == email && this.allUsers[i].password == password){
                matchingEmailAndPassword = true;
                if(this.allUsers[i].user_type == 'admin'){
                    admin = true;
                }
                //now add all the info necessary about the user to the localstorage
                currentUser['id'] = this.allUsers[i].id 
                currentUser['userName'] = this.allUsers[i].name 
                currentUser['surname'] = this.allUsers[i].surname
                currentUser['birth_date'] = this.allUsers[i].birth_date 
                currentUser['email'] = this.allUsers[i].email 
                currentUser['password'] = this.allUsers[i].password 
                currentUser['user_type'] = this.allUsers[i].user_type 
                currentUser['occupation'] = this.allUsers[i].occupation
                currentUser['location'] = this.allUsers[i].location 
                currentUser['introduction'] = this.allUsers[i].introduction 
                currentUser['picture_location'] = this.allUsers[i].picture_location 
                currentUser['children'] = this.allUsers[i].children 
                //console.log(currentUser)
                let currentUserString = JSON.stringify(currentUser)
                localStorage.currentUser = currentUserString;
                break;
            }
        }

        //if there was a match, then return true and credentials
        if(matchingEmailAndPassword == true){
            if(admin != true){
                localStorage.loggedIn = true;
                localStorage.role = 'user';
                console.log("logged in");
                this.router.navigate(["/browse"]);
            }else{
                localStorage.loggedIn = true;
                localStorage.role = 'admin';
                console.log("logged in");
                this.router.navigate(["/admin-portal"]);
            }

        }else{
            localStorage.loggedIn = false
            localStorage.justFailed = true
            console.log('not logged in');
            this.router.navigate(["/unsuccessfulLogin"]);
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

  isLoggedIn() {
    /*
    this.userService.getAllUsers().subscribe((response: Response) => {
      for (let key in response) {
        let value = response[key];
        this.allUsers.push(value);
      }
    }); */
    if (localStorage.loggedIn == 'true'){
        return true
    }else{
        return false
    }
  }

  isLoggedInAdmin(){
    if (localStorage.role == 'admin') {
        return true
    } else {
        return false
    }
  }

  logUserOut() {
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('justFailed')
    localStorage.removeItem('loggedInAdmin')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('role')
    console.log('you haz been logged out :3')
    this.router.navigate(['/'])
  }
  /*
  getCurrentUser(){
    let loggedInUser = localStorage.getItem('currentUser');
    if(!loggedInUser){
        return null;
    }else{
        return JSON.parse(loggedInUser);
    }
  }*/
}