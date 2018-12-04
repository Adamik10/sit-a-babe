import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  parentSignup: FormGroup;
  sitterSignup: FormGroup;

  //dependency injection
  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    this.parentSignup = this.fb.group({
      firstNameParent: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(22)
      ]],
      lastNameParent: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(22)
      ]],
      dateOfBirthParent: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]],

      emailParent: ['', [
        Validators.required,
        Validators.email
      ]],
      passwordParent: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      passwordParentRepeat: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })


    this.sitterSignup = this.fb.group({
      firstNameSitter: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]],
      lastNameSitter: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(22)
      ]],
      dateOfBirthSitter: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]],

      emailSitter: ['', [
        Validators.required,
        Validators.email
      ]],
      passwordSitter: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      passwordSitterRepeat: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })
  }

  get firstNameParent() {
    return this.parentSignup.get('firstNameParent')
  }
  get lastNameParent() {
    return this.parentSignup.get('lastNameParent')
  }
  get dateOfBirthParent() {
    return this.parentSignup.get('dateOfBirthParent')
  }
  get emailParent() {
    return this.parentSignup.get('emailParent')
  }
  get passwordParent() {
    return this.parentSignup.get('passwordParent')
  }
  get passwordParentRepeat() {
    return this.parentSignup.get('passwordParentRepeat')
  }

  get firstNameSitter() {
    return this.sitterSignup.get('firstNameSitter')
  }
  get lastNameSitter() {
    return this.sitterSignup.get('lastNameSitter')
  }
  get dateOfBirthSitter() {
    return this.sitterSignup.get('dateOfBirthSitter')
  }
  get emailSitter() {
    return this.sitterSignup.get('emailSitter')
  }
  get passwordSitter() {
    return this.sitterSignup.get('passwordSitter')
  }
  get passwordSitterRepeat() {
    return this.sitterSignup.get('passwordSitterRepeat')
  }
}
