import { Injectable } from '@angular/core';
import { User } from 'src/app/common/user.model';
import { HttpClient } from '@angular/common/http';
import { userService } from './user.service';


@Injectable()
export class dataService {

    constructor(private http: HttpClient, private userService: userService) { }

    storeUser() {
        this.http.put('https://sit-a-baby.firebaseio.com/users.json', this.userService.getUsers);
    } 
}
