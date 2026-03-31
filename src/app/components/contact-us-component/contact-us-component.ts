import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-component',
  imports: [FormsModule],
  templateUrl: './contact-us-component.html',
  styleUrl: './contact-us-component.css',
})
export class ContactUsComponent {
  private readonly router = inject(Router);

  isSubmitted = false;

  userDetails = {
    name: '',
    email: '',
    message: ''
  };

  contactInfo = [
    { title: 'Email', value: 'support@example.com' },
    { title: 'Phone', value: '+1 234 567 890' },
    { title: 'Address', value: 'Toronto, Canada' }
  ];

  constructor() {}

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(this.userDetails);
      this.isSubmitted = true;

      // this.sendByQueryParams()
      // this.sendByState();
      this.sendByParamMap();

      form.resetForm();
    }
  }

  sendByQueryParams() {
    this.router.navigate(['/contact-confirmation'], {
      queryParams: {
        ...this.userDetails
      }
    });
  }

  sendByState() {
    this.router.navigate(['/contact-confirmation'], {
      state: {
        name: this.userDetails.name,
        email: this.userDetails.email,
        message: this.userDetails.message
      }
    });
  }

  sendByParamMap() {
    //contact-confirmation/:name/:email/:message
    this.router.navigate(['/contact-confirmation',
      this.userDetails.name,
      this.userDetails.email,
      this.userDetails.message]);
  }
}
