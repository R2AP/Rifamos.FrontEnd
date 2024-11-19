import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-rifa-ganadores-fechas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rifa-ganadores-fechas.component.html',
  styleUrl: './rifa-ganadores-fechas.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RifaGanadoresFechasComponent implements OnInit {

  ngOnInit(): void {
    this.swiperProperties();
  }

  swiperProperties()
  {
    const swiperEl = document.querySelector('#suiperFechas')
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    };

    Object.assign(swiperEl!, swiperOptions);
  };

}
