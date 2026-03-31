import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form-component',
  imports: [],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {

  genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  constructor() { }

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted');
  }
}
