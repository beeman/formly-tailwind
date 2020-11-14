import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: []
  }
];
