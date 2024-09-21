import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DomSanitizer } from '@angular/platform-browser';
import { RifaComprimidaComponent } from '../rifa-comprimida/rifa-comprimida.component';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-rifa-comprimida-carousel',
  standalone: true,
  imports: [CommonModule,RifaComprimidaComponent],
  templateUrl: './rifa-comprimida-carousel.component.html',
  styleUrl: './rifa-comprimida-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RifaComprimidaCarouselComponent implements OnInit{
  private readonly rifaSvc = inject(RifaService);
  private readonly router = inject(Router);
  rifas: any = [];

  constructor(private sanitizer:DomSanitizer){
  }
  ngOnInit(): void {
    this.obtenerDatosRifa();
    this.swiperProperties();
  }

  swiperProperties()
  {
    const swiperEl = document.querySelector('#suiper')
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: true,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    };
    Object.assign(swiperEl!, swiperOptions);
  }

  obtenerDatosRifa()
  {
    this.rifaSvc.obtenerListaRifaEstado(2, 'N').subscribe({
      next:(res: any) => {
        
        this.rifas = res;
        console.log ( res );

      },
      error:(error) => {
        if (error.status === 404) {
          this.router.navigate(['/404']);
        }
        console.log('Error consultando la rifa', error)
      }
    })
  }
}
