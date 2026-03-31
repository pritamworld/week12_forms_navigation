import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found-component',
  imports: [],
  templateUrl: './page-not-found-component.html',
  styleUrl: './page-not-found-component.css',
})
export class PageNotFoundComponent {
  private readonly location = inject(Location);
  showTip = true;

  constructor() {}

  goBack() {
    this.location.back();
  }
}
