import { Component } from '@angular/core';
import { BannerPrincipalComponent } from "../banner-principal/banner-principal.component";
import { RifaComprimidaComponent } from "../rifa-comprimida/rifa-comprimida.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BannerPrincipalComponent, RifaComprimidaComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
