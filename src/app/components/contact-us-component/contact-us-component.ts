import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us-component',
  imports: [FormsModule],
  templateUrl: './contact-us-component.html',
  styleUrl: './contact-us-component.css',
})
export class ContactUsComponent {
  isSubmitted = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  contactInfo = [
    { title: 'Email', value: 'support@example.com' },
    { title: 'Phone', value: '+1 234 567 890' },
    { title: 'Address', value: 'Toronto, Canada' }
  ];

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(this.formData);
      this.isSubmitted = true;

      form.resetForm();
    }
  }
}
