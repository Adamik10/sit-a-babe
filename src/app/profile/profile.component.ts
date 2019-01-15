import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { customFormValidators } from "../common/formValidators";
// import { NavbarComponent } from "../navbar/navbar.component"
import { authService } from "../common/auth.service";
import { userService } from "../common/user.service";
import { User } from "../common/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private customValidators: customFormValidators,
    private authService: authService,
    private userService: userService,
    // @Inject(NavbarComponent) private navComponent
  ) {}

  currentUser;
  editProfileForm: FormGroup;
  loadedAllUsers = [];

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      profilePicLink: ["", [Validators.minLength(5)]],
      currentPass: [
        "",
        [
          Validators.minLength(8),
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          this.customValidators.forbiddenPasswordsValidator.bind(
            this.customValidators
          )
        ]
      ],
      newPass: [""],
      occupation: ["", [Validators.minLength(4), Validators.maxLength(50)]],
      introduction: ["", [Validators.minLength(20), Validators.maxLength(500)]],
      location: [
        "",
        [Validators.minLength(2), Validators.maxLength(20)]
      ],
      Mondays: [""],
      Tuesdays: [""],
      Wednesdays: [""],
      Thursdays: [""],
      Fridays: [""],
      Saturdays: [""],
      Sundays: [""]
    });

    this.currentUser = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(this.currentUser);
  }

  // @ViewChild("profileSidebar") sidenav: MatSidenav;

  

  close() {
    /*this.navComponent.sidenav.close();
    var body = document.getElementById("bodyMain");
    body.style.overflow = "visible"; */
    localStorage.currentUser = JSON.stringify(this.currentUser);
    this.currentUser = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(this.currentUser);
    console.log(JSON.stringify(this.currentUser));
  }

  updateToCurrentUser(){
    this.currentUser = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(this.currentUser);
    console.log('I am trying to update the DOM');
    console.log(JSON.stringify(this.currentUser))
    
    // change the user data to the new data in the DOM
    document.getElementById("inputName").innerHTML = this.currentUser.userName;
    document.getElementById("inputSurname").innerHTML = this.currentUser.surname;
    let numberOfDate = this.getCurrentAge(this.currentUser.birth_date);
    document.getElementById("inputAge").innerHTML = numberOfDate.toString();
    document.getElementById("profilePicture").setAttribute('src', this.currentUser.picture_location);
    document.getElementById("profileFormPicture").setAttribute('value', this.currentUser.picture_location);
    document.getElementById("profileFormOldPassword").setAttribute('value', this.currentUser.password);
    document.getElementById("profileFormOccupation").setAttribute('value', this.currentUser.occupation);
    document.getElementById("profileFormIntroduction").setAttribute('value', this.currentUser.introduction);
    document.getElementById("profileFormOccupation").setAttribute('value', this.currentUser.profileFormLocation);
  }


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

  onSaveEditProfile(deleteToo) {
    //disable the save button until the action is done

    //get all users
    this.userService.getAllUsers().subscribe((response: Response) => {
      // what is our users email
      this.currentUser = localStorage.getItem("currentUser");
      this.currentUser = JSON.parse(this.currentUser);
      let currentUserEmail = this.currentUser.email;

      var keyOfOurUser;

      //add all the users to an array
      for (let key in response) {
        let value = response[key];
        this.loadedAllUsers.push(value);
        if (value.email == currentUserEmail) {
          keyOfOurUser = key;
        }
      }

      //find the one that is our logged in user
      for (var i = 0; i < this.loadedAllUsers.length; i++) {
        if (this.loadedAllUsers[i].email == currentUserEmail) {
          //now rewrite all this information with the one from the form
          if (
            this.editProfileForm.value.newPass &&
            this.currentUser.password &&
            this.editProfileForm.value.newPass != "" &&
            deleteToo != true
          ) {
            if (
              this.editProfileForm.value.currentPass ==
              this.currentUser.password
            ) {
              this.loadedAllUsers[
                i
              ].password = this.editProfileForm.value.newPass;
            }
          }
          if (this.editProfileForm.value.occupation != this.currentUser.occupation && deleteToo != true && this.editProfileForm.value.occupation != '') {
            this.loadedAllUsers[i].occupation = this.editProfileForm.value.occupation;
          }
          if (this.editProfileForm.value.location != this.currentUser.location && deleteToo != true && this.editProfileForm.value.location != '') {
            this.loadedAllUsers[i].location = this.editProfileForm.value.location;
          }
          if (this.editProfileForm.value.introduction != this.currentUser.introduction && deleteToo != true && this.editProfileForm.value.introduction != "") {
            this.loadedAllUsers[i].introduction = this.editProfileForm.value.introduction;
          }
          if (this.editProfileForm.value.profilePicLink != this.currentUser.profilePicLink && deleteToo != true && this.editProfileForm.value.profilePicLink != "") {
            this.loadedAllUsers[i].picture_location = this.editProfileForm.value.picture_location;
          }
          console.log(JSON.stringify(this.loadedAllUsers[i]));

          //make a new user User
          const rewriteOldUser = new User();
          rewriteOldUser.id = this.loadedAllUsers[i].id;
          rewriteOldUser.name = this.loadedAllUsers[i].name;
          rewriteOldUser.surname = this.loadedAllUsers[i].surname;
          rewriteOldUser.birth_date = this.loadedAllUsers[i].birth_date;
          rewriteOldUser.email = this.loadedAllUsers[i].email;
          rewriteOldUser.password = this.loadedAllUsers[i].password;
          rewriteOldUser.user_type = this.loadedAllUsers[i].user_type;
          rewriteOldUser.occupation = this.loadedAllUsers[i].occupation;
          rewriteOldUser.location = this.loadedAllUsers[i].location;
          rewriteOldUser.introduction = this.loadedAllUsers[i].introduction;
          rewriteOldUser.picture_location = this.loadedAllUsers[i].picture_location;
          rewriteOldUser.children = this.loadedAllUsers[i].children;
          if(deleteToo == true){
            rewriteOldUser.deleted = true;
          }else{
            rewriteOldUser.deleted = this.loadedAllUsers[i].deleted;
          }

          //update the edited user in the database
          this.userService
            .editUser(keyOfOurUser, rewriteOldUser)
            .subscribe(
              response => console.log(response),
              error => console.log(error)
          );
          
          this.close();

          if(deleteToo == true){
            this.authService.logUserOut();
          }
          break;
        }
      }
    });
  }


  deleteProfile(){
    this.onSaveEditProfile(true)
  }


}
