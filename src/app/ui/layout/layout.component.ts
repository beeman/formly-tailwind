import { Component } from '@angular/core';

@Component({
  template: `
    <ui-header></ui-header>

    <div class="container mx-auto flex flex-wrap p-5">
      <router-outlet></router-outlet>
    </div>
    <ui-footer></ui-footer>
  `
})
export class LayoutComponent {}
