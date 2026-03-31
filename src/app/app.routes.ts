import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: "Home Page",
    component: HomeComponent
  },
  // Wildcard route for a 404 page
  { path: '**',
    title: "Page Not Found",
    component: PageNotFoundComponent
  }
];
