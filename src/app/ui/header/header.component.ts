import { Component } from '@angular/core';

@Component({
  selector: 'ui-header',
  template: `
    <header class="text-gray-700 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span class="text-xl">Formly Tailwind</span>
        </a>
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          <ng-container *ngFor="let link of links">
            <a class="ml-5 hover:text-gray-900" [routerLink]="link.path">
              {{ link.label }}
            </a>
          </ng-container>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  links: { label: string; path: string }[] = [
    { label: 'Home', path: 'home' },
    { label: 'Forms', path: 'forms' }
  ];
}
