import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DomSanitizer } from '@angular/platform-browser';
import { RifaComprimidaComponent } from '../rifa-comprimida/rifa-comprimida.component';
import Swiper from 'swiper';
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
  swiperEl = document.querySelector('.mySwiper')

  constructor(private sanitizer:DomSanitizer){
  }
  ngOnInit(): void {
    this.obtenerDatosRifa();
    //this.swiperProperties();
  }

  swiperProperties()
  {  
    const swiper = new Swiper('.swiper', {
      //modules: [Navigation],
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const swiperOptions: SwiperOptions = {
      slidesPerView: 3,
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
    Object.assign(swiper, swiperOptions);
  }

  obtenerDatosRifa()
  {
    this.rifaSvc.obtenerListaRifaEstado(2, 'N').subscribe({
      next:(res: any) => {
        this.rifas = res;
      },
      error:(error) => {
        if (error.status === 404) {
          this.router.navigate(['/404']);
        }
        console.log('Error consultando la rifa', error)
      }
    })
  }

  botonPrevio(){
    //this.swiperEl.slidePrev();
    
    
  }
}
