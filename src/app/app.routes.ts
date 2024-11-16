// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  {
    path: 'mantenimiento',
    component: MaintenanceComponent,
  },
  { path: 'contacto', component: ContactComponent }
];
