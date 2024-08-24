import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DomSanitizer } from '@angular/platform-browser';
// register Swiper custom elements
register();
@Component({
  selector: 'app-banner-principal',
  standalone: true,
  imports: [MatButtonModule,MatIconModule, CommonModule],
  templateUrl: './banner-principal.component.html',
  styleUrl: './banner-principal.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerPrincipalComponent implements OnInit{
  private readonly rifaSvc = inject(RifaService);
  private readonly router = inject(Router);

  rifas: any = [];
  
  constructor(private sanitizer:DomSanitizer){
  }

  ngOnInit():void {
    this.obtenerDatosRifa();
  }

  obtenerDatosRifa()
  {
    this.rifaSvc.obtenerListaRifaEstado(2).subscribe({
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

  transform(imagen:string){
    let base64Image:string = "";
    base64Image = 'data:image/png;base64, ' + imagen;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }
}
