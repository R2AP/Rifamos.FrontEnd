import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";

@Component({
    selector: 'app-home-layout',
    standalone: true,
    template: `
  <header>
  <app-nav-bar></app-nav-bar>
</header>
  <router-outlet />`,
    styles: [],
    imports: [NavBarComponent,RouterOutlet]
})
export class HomeLayoutComponent {

}
