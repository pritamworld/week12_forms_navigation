import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found-component',
  imports: [],
  templateUrl: './page-not-found-component.html',
  styleUrl: './page-not-found-component.css',
})
export class PageNotFoundComponent {
  showTip = true;

  constructor(private readonly location: Location) {}

  goBack() {
    this.location.back();
  }
}
