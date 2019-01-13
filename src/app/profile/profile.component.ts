import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { customFormValidators } from "../common/formValidators";
import { NavbarComponent } from "../navbar/navbar.component"
import { authService } from "../common/auth.service";

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
    @Inject(NavbarComponent) private navComponent
  ) {}

  currentUser
  editProfileForm: FormGroup;

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      profilePicLink: ["", [Validators.required, Validators.minLength(5)]],
      currentPass: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          this.customValidators.forbiddenPasswordsValidator.bind(
            this.customValidators
          )
        ]
      ],
      newPass: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          this.customValidators.forbiddenPasswordsValidator.bind(
            this.customValidators
          )
        ]
      ],
      occupation: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      introduction: [
        "",
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(500)
        ]
      ],
      location: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
      ],
      Mondays: ["", [Validators.required]],
      Tuesdays: ["", [Validators.required]],
      Wednesdays: ["", [Validators.required]],
      Thursdays: ["", [Validators.required]],
      Fridays: ["", [Validators.required]],
      Saturdays: ["", [Validators.required]],
      Sundays: ["", [Validators.required]]
    });

    this.currentUser = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(this.currentUser)

  }

  @ViewChild("profileSidebar") sidenav: MatSidenav;

  close() {
    this.navComponent.sidenav.close();
    var body = document.getElementById("bodyMain");
    body.style.overflow = "visible";
  }

  getCurrentAge(birthdate){
    const dateOFBirth = new Date(birthdate)
    const today = new Date()
    let age = today.getFullYear() - dateOFBirth.getFullYear();
    const m = today.getMonth() - dateOFBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateOFBirth.getDate())) {
      age --
    }
    return age;
  }
}
