import { Component } from '@angular/core';

@Component({
  template: `
    <ui-header></ui-header>
    <router-outlet></router-outlet>
    <ui-footer></ui-footer>
  `
})
export class LayoutComponent {}
