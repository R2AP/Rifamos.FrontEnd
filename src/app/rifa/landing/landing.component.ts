import { Component } from '@angular/core';
import { BannerPrincipalComponent } from "../banner-principal/banner-principal.component";
//import { RifaComprimidaComponent } from "../rifa-comprimida/rifa-comprimida.component";
import { RifaPasosComponent } from "../rifa-pasos/rifa-pasos.component";
import { RifaComprimidaCarouselComponent } from "../rifa-comprimida-carousel/rifa-comprimida-carousel.component";
//import { RifaGanadoresFechasComponent } from "../ganadores/rifa-ganadores-fechas/rifa-ganadores-fechas.component";
import { RifaCalendarioGanadoresComponent } from "../ganadores/rifa-calendario-ganadores/rifa-calendario-ganadores.component";
import { RifaBannerProximoPremioComponent } from "../rifa-banner-proximo-premio/rifa-banner-proximo-premio.component";
import { RifaBannerQueEncontrarasComponent } from "../rifa-banner-que-encontraras/rifa-banner-que-encontraras.component";
import { RifaBannerContactanosComponent } from "../rifa-banner-contactanos/rifa-banner-contactanos.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BannerPrincipalComponent, RifaPasosComponent, RifaComprimidaCarouselComponent, RifaComprimidaCarouselComponent, RifaCalendarioGanadoresComponent, RifaBannerProximoPremioComponent, RifaBannerQueEncontrarasComponent, RifaBannerContactanosComponent, RifaBannerContactanosComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
