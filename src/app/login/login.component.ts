import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { userService } from '../common/user.service';
import { authService } from '../common/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: userService, private authServices: authService) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailLogin: ["", [Validators.required]],
      passwordLogin: ["", [Validators.required]]
    });
  }

  onLogin(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.emailLogin;
      const password = this.loginForm.value.passwordLogin;

      this.authServices.logUserIn(this.loginForm.value.emailLogin, this.loginForm.value.passwordLogin)
    }  
  }


}
