import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { userService } from '../common/user.service';
import { User } from '../common/user.model';
import { customFormValidators } from '../common/formValidators';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  /*
  users = [
    {
      id: "rgsfsdfae5ef54ff",
      name: "Saska",
      surname: "Labusova",
      birth_date: "23/10/1994",
      email: "s.labus@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "student",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/saska.jpg"
    },
    {
      id: "wef1e51fw5e1fwe5f1",
      name: "Adam",
      surname: "Antal",
      birth_date: "10/10/1994",
      email: "a.antal@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "student",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/adam.jpg"
    },
    {
      id: "5ef5ef5sf4qw5dfwq5fd",
      name: "Katarina",
      surname: "Kukavica",
      birth_date: "30/6/1995",
      email: "k.kukavica@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "CEO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/katka.jpg"
    },
    {
      id: "5wef2awd6qwd4qw9fc4ffe",
      name: "Daddy",
      surname: "One",
      birth_date: "30/6/1995",
      email: "d.one@gmail.com",
      password: "Password123",
      user_type: "parent",
      occupation: "COO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/daddy1.jpg",
      children: [
        {
          id: "89ew5va15d1qw1fd4s2ce4f",
          name: "Autumn",
          birth_date: "20/9/2006",
          location: "Copemhagen",
          introduction: "Autumn is very nice and calm.",
          allergies: "almonds",
          picture_location: "src/assets/img/users/baby1.jpg",
          babysitting_time: [
            {
              from: "4/12/2018 8:00",
              to: "4/12/2018 15:30"
            }
          ]
        }
      ]
    }
  ];*/

  parentSignup: FormGroup;
  sitterSignup: FormGroup;

  //dependency injection
  constructor(
    private fb: FormBuilder,
    private userService: userService,
    private customValidators: customFormValidators
  ) {}

  ngOnInit() {
    this.parentSignup = this.fb.group({
      firstNameParent: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(22)]
      ],
      lastNameParent: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(22)]
      ],
      dateOfBirthParent: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(10)]
      ],

      emailParent: ["", [Validators.required, Validators.email]],
      passwordParent: [
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
      passwordParentRepeat: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          this.customValidators.forbiddenPasswordsValidator.bind(
            this.customValidators
          )
        ]
      ]
    });

    this.sitterSignup = this.fb.group({
      firstNameSitter: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(15)]
      ],
      lastNameSitter: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(22)]
      ],
      dateOfBirthSitter: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(10)]
      ],

      emailSitter: ["", [Validators.required, Validators.email]],
      passwordSitter: [
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
      passwordSitterRepeat: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          this.customValidators.forbiddenPasswordsValidator.bind(
            this.customValidators
          )
        ]
      ]
    });
  }

  get firstNameParent() {
    return this.parentSignup.get("firstNameParent");
  }
  get lastNameParent() {
    return this.parentSignup.get("lastNameParent");
  }
  get dateOfBirthParent() {
    return this.parentSignup.get("dateOfBirthParent");
  }
  get emailParent() {
    return this.parentSignup.get("emailParent");
  }
  get passwordParent() {
    return this.parentSignup.get("passwordParent");
  }
  get passwordParentRepeat() {
    return this.parentSignup.get("passwordParentRepeat");
  }

  get firstNameSitter() {
    return this.sitterSignup.get("firstNameSitter");
  }
  get lastNameSitter() {
    return this.sitterSignup.get("lastNameSitter");
  }
  get dateOfBirthSitter() {
    return this.sitterSignup.get("dateOfBirthSitter");
  }
  get emailSitter() {
    return this.sitterSignup.get("emailSitter");
  }
  get passwordSitter() {
    return this.sitterSignup.get("passwordSitter");
  }
  get passwordSitterRepeat() {
    return this.sitterSignup.get("passwordSitterRepeat");
  }

  onRegisterParent() {
    console.log(this.parentSignup);

    if (this.parentSignup.valid) {
      const newParent = new User();
      newParent.id = this.generateNewUniqueId();
      newParent.name = this.parentSignup.value.firstNameParent;
      newParent.surname = this.parentSignup.value.lastNameParent;
      newParent.birth_date = this.parentSignup.value.dateOfBirthParent;
      newParent.email = this.parentSignup.value.emailParent;
      newParent.password = this.parentSignup.value.passwordParent;
      newParent.user_type = "parent";
      newParent.occupation = "This user has not filled out this field yet.";
      newParent.location = "Copenhagen";
      newParent.introduction = "This user has not filled out this field yet.";
      newParent.picture_location = "src/assets/img/users/daddy_default.PNG";
      newParent.children = "not specified";
      //console.log(newParent)

      this.userService
        .storeNewUserParent(newParent)
        .subscribe(
          response =>
            console.log(response) /*,
          (error) => console.log(error)*/
        );
    }
  }

  onRegisterSitter() {
    console.log(this.sitterSignup);

    if (this.sitterSignup.valid) {
      const newSitter = new User();
      newSitter.id = this.generateNewUniqueId();
      newSitter.name = this.sitterSignup.value.firstNameSitter;
      newSitter.surname = this.sitterSignup.value.lastNameSitter;
      newSitter.birth_date = this.sitterSignup.value.dateOfBirthSitter;
      newSitter.email = this.sitterSignup.value.emailSitter;
      newSitter.password = this.sitterSignup.value.passwordSitter;
      newSitter.user_type = "sitter";
      newSitter.occupation = "This user has not filled out this field yet.";
      newSitter.location = "Copenhagen";
      newSitter.introduction = "This user has not filled out this field yet.";
      newSitter.picture_location = "src/assets/img/users/sitter_default.PNG";
      newSitter.children = "none";
      //console.log(newSitter)

      this.userService
        .storeNewUserSitter(newSitter)
        .subscribe(
          response =>
            console.log(response) /*,
          (error) => console.log(error)*/
        );
    }
  }

  generateNewUniqueId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}
