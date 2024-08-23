import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-principal',
  standalone: true,
  imports: [MatButtonModule,MatIconModule, CommonModule],
  templateUrl: './banner-principal.component.html',
  styleUrl: './banner-principal.component.css'
})
export class BannerPrincipalComponent implements OnInit{
  private readonly rifaSvc = inject(RifaService);
  private readonly router = inject(Router);

  rifa: any = [];
  
  ngOnInit():void {
    this.obtenerDatosRifa();
  }

  obtenerDatosRifa()
  {
    this.rifaSvc.obtenerListaRifaEstado(2).subscribe({
      next:(res: any) => {
        
        this.rifa = res;
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
