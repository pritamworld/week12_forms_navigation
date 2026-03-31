import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-component',
  imports: [FormsModule],
  templateUrl: './contact-us-component.html',
  styleUrl: './contact-us-component.css',
})
export class ContactUsComponent {
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

  constructor(private readonly router: Router) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(this.userDetails);
      this.isSubmitted = true;
      // Navigate to the confirmation page with query parameters
      //this.sendByQueryParams();

      // Navigate to the confirmation page with route parameters
      this.sendByParamMap();

      // Navigate to the confirmation page with state
      //this.sendByState();

      form.resetForm();
    }
  }

  sendByQueryParams() {
    this.router.navigate(['/contact-confirmation'], {
      queryParams: {
        name: this.userDetails.name,
        email: this.userDetails.email,
        message: this.userDetails.message
      }
    });
  }

  sendByParamMap() {
    this.router.navigate(['/contact-confirmation', this.userDetails.name, this.userDetails.email, this.userDetails.message]);
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
}
