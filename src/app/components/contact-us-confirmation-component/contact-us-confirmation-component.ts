import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us-confirmation-component',
  imports: [RouterLink],
  templateUrl: './contact-us-confirmation-component.html',
  styleUrl: './contact-us-confirmation-component.css',
})
export class ContactUsConfirmationComponent implements OnInit {

  name: string | null = '';
  email: string | null = '';
  message: string | null = '';

  constructor() {}

  ngOnInit() {

  }
}
