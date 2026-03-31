import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {

  private readonly fb = inject(FormBuilder);
  userForm: FormGroup

  genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  constructor() {
    this.userForm = this.fb.group({
      name: new FormControl('Pritesh', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: ['', Validators.required],
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      age: new FormControl('', [Validators.required, Validators.min(20), Validators.max(60)]),
      gender: ['', Validators.required]
    });
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.userForm.controls;
  }

  submitForm() {
    // Handle form submission logic here
    if(this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      console.log('Form submitted');
    } else {
      console.log('Form is invalid');
    }
  }
}
