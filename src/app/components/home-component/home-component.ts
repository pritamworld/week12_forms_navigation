import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  topics = [
    {
      title: 'Angular Navigation',
      description: 'Learn how routing works using RouterModule, routerLink, and route configuration.',
      link: '/about'
    },
    {
      title: 'Template Driven Forms',
      description: 'Understand ngModel, ngForm, and validation using simple HTML templates.',
      link: '/template-form'
    },
    {
      title: 'Reactive Forms',
      description: 'Build scalable forms using FormGroup, FormControl, and Validators.',
      link: '/reactive-form'
    }
  ];
}
