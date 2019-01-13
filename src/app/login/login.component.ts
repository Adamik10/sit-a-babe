import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { userService } from '../common/user.service';
import { authService } from '../common/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: userService, private authServices: authService, private route: ActivatedRoute) {}

  lastLoginFailed = false;
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailLogin: ["", [Validators.required]],
      passwordLogin: ["", [Validators.required]]
    });

    //check whether there is a freshly failed login
    if (localStorage.loggedIn == 'false' && localStorage.justFailed == 'true'){
      this.lastLoginFailed = true
      localStorage.justFailed = false
    }

  }
  

  get lastLoginFailedFunction() {
    if (localStorage.loggedIn == 'false' && localStorage.justFailed == 'true') {
      this.lastLoginFailed = true
      localStorage.justFailed = false
      //enable the login button
      let loginButton = document.getElementById("loginButton");
      loginButton.removeAttribute("disabled");
      loginButton.style.opacity = "1";

      return true;

    } else {
      return false
    }
  }

  onLogin(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.emailLogin;
      const password = this.loginForm.value.passwordLogin;
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      
      this.authServices.logUserIn(email, password, returnUrl)
      let loginButton = document.getElementById("loginButton");
      loginButton.setAttribute('disabled', 'disabled');
      loginButton.style.opacity = '0.2';
    }  
  }


}
