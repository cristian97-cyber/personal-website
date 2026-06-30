import { Routes } from '@angular/router';
import { AppUrlEnum } from './enum/app-url.enum';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills),
  },
  {
    path: AppUrlEnum.Experience,
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
  },
];
