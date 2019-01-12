import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { customFormValidators } from "../common/formValidators";
import { NavbarComponent } from "../navbar/navbar.component"

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private customValidators: customFormValidators,
    @Inject(NavbarComponent) private navComponent
  ) {}

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
  }

  @ViewChild("profileSidebar") sidenav: MatSidenav;

  close() {
    this.navComponent.sidenav.close();
  }
}
