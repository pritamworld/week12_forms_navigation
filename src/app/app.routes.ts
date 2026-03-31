import { Routes } from '@angular/router';
import { App } from './app';
import { AboutUsComponent } from './components/about-us-component/about-us-component';
import { ContactUsComponent } from './components/contact-us-component/contact-us-component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';
import { ReactiveFormComponent } from './components/reactive-form-component/reactive-form-component';
import { TemplateDrivenFormComponent } from './components/template-driven-form-component/template-driven-form-component';
import { HomeComponent } from './components/home-component/home-component';
import { ContactUsConfirmationComponent } from './components/contact-us-confirmation-component/contact-us-confirmation-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent },
  // query params route for contact confirmation
  //{ path: 'contact-confirmation', component: ContactUsConfirmationComponent },
  // route with route parameters for contact confirmation
  { path: 'contact-confirmation/:name/:email/:message', component: ContactUsConfirmationComponent },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent }
];
