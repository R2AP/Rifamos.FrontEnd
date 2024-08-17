import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-home-layout',
    standalone: true,
    template: `
  <header>
  <app-nav-bar></app-nav-bar>
</header>
  <router-outlet />
  <footer>
    <app-footer></app-footer>
  </footer>`,
    styles: [],
    imports: [NavBarComponent, RouterOutlet, FooterComponent]
})
export class HomeLayoutComponent {

}
