import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    //this.accessByQueryParams();
     this.accessByParamMap();
    // this.accessByState();
  }

  accessByQueryParams() {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
      this.email = params.get('email');
      this.message = params.get('message');
    });
  }

  accessByParamMap() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.email = params.get('email');
      this.message = params.get('message');
    });
  }

  accessByState() {
    const navigation = history.state;
    this.name = navigation.name;
    this.email = navigation.email;
    this.message = navigation.message;
  }
}
