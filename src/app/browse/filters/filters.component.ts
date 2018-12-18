import { Component, OnInit } from '@angular/core';

export interface Genders {
  value: string;
  viewValue: string;
}
export interface Occupations {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  
  selected = 'all';

  genders: Genders[] = [
    { value: 'all', viewValue: 'Gender (All)' },
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'other', viewValue: 'Other' }
  ];

  occupations: Occupations[] = [
    { value: 'all', viewValue: 'Occupation (All)' },
    { value: 'student', viewValue: 'Student' },
    { value: 'employee', viewValue: 'Employee' },
    { value: 'unemployed', viewValue: 'Unemployed' }
  ];

  constructor() { }

  ngOnInit() {
  }

}