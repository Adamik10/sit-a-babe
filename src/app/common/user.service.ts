import { Injectable } from '@angular/core';
import { User } from 'src/app/common/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class userService {

  constructor(private http: HttpClient) {}
  
  getAllUsers(){
    return this.http.get("https://sit-a-baby.firebaseio.com//users.json");
  }

  storeNewUserParent(user: User){
    return this.http.post("https://sit-a-baby.firebaseio.com//users.json", user); 
    //this only creates an observable - that's why we RETURN this observable and we subscribe to it in the component
  }

  storeNewUserSitter(user: User) {
    return this.http.post("https://sit-a-baby.firebaseio.com//users.json", user);
    //this only creates an observable - that's why we RETURN this observable and we subscribe to it in the component
  }

}