import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form-component',
  imports: [FormsModule],
  templateUrl: './template-driven-form-component.html',
  styleUrl: './template-driven-form-component.css',
})
export class TemplateDrivenFormComponent {
  // Model bound to form fields
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  // Used for @for loop in dropdown
  genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  // Form submit handler
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', this.userDetails);

      // Optional: reset form after submit
      form.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }
}
