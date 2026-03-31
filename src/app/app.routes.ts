import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';
import { HomeComponent } from './components/home-component/home-component';
import { ReactiveFormComponent } from './components/reactive-form-component/reactive-form-component';
import { TemplateDrivenFormComponent } from './components/template-driven-form-component/template-driven-form-component';
import { AboutUsComponent } from './components/about-us-component/about-us-component';
import { ContactUsComponent } from './components/contact-us-component/contact-us-component';
import { ContactUsConfirmationComponent } from './components/contact-us-confirmation-component/contact-us-confirmation-component';

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
  {
    path: 'reactive-form',
    title: "Reactive Form Example",
    component: ReactiveFormComponent
    //loadComponent: () => import('./components/reactive-form-component/reactive-form-component').then(m => m.ReactiveFormComponent)
  },
  {
    path: 'template-form',
    title: "Template Driven Form Example",
    component: TemplateDrivenFormComponent
    //loadComponent: () => import('./components/template-driven-form-component/template-driven-form-component').then(m => m.TemplateDrivenFormComponent)
  },
  {
    path: 'about',
    title: "About Page",
    component: AboutUsComponent
  },
  {
    path: 'contact',
    title: "Contact Page",
    component: ContactUsComponent
  },
  {
    // Using query parameters or state to pass data
    path: 'contact-confirmation/:name/:email/:message',
    title: "Contact Confirmation",
    component: ContactUsConfirmationComponent
  },
  // {
  //   // Using query parameters or state to pass data
  //   path: 'contact-confirmation',
  //   title: "Contact Confirmatio",
  //   component: ContactUsConfirmationComponent
  // },
  // Wildcard route for a 404 page
  { path: '**',
    title: "Page Not Found",
    component: PageNotFoundComponent
  }
];
