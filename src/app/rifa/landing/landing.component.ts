import { Component } from '@angular/core';
import { BannerPrincipalComponent } from "../banner-principal/banner-principal.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BannerPrincipalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
