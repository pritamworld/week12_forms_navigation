import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-component',
  imports: [],
  templateUrl: './about-us-component.html',
  styleUrl: './about-us-component.css',
})
export class AboutUsComponent {
   values = [
    {
      title: 'Innovation',
      description: 'We embrace modern technologies and creative solutions to solve real-world problems.'
    },
    {
      title: 'Quality Education',
      description: 'We focus on delivering industry-relevant knowledge with hands-on practice.'
    },
    {
      title: 'Community',
      description: 'We believe in building a strong developer community and collaborative learning.'
    }
  ];
}
