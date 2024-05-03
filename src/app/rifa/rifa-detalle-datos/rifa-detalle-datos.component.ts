import { Component, Input, OnInit, inject } from '@angular/core';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rifa-detalle-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rifa-detalle-datos.component.html',
  styleUrl: './rifa-detalle-datos.component.css'
})
export class RifaDetalleDatosComponent implements OnInit {
  @Input() rifaIdInput: number = 0;
  private readonly rifaSvc = inject(RifaService)
  rifa: any = [];
  premios = new Array<any>();
  // precios = new Array<any>();
  precio: any = [];

  rifaId: number = 0;
  // rifa$ = this.rifaSvc.obtenerRifaDetalle();

  ngOnInit(): void {
    this.rifaId = this.rifaIdInput;
    console.log ('ngOnInit this.rifaId rifa-detalle-datos: ' + this.rifaIdInput);
    this.obtenerRifaDetalle(this.rifaId);
    this.obtenerPremios(this.rifaId);
    this.obtenerPrecios(this.rifaId);
  }

  obtenerRifaDetalle(rifaId:number)
  {
    this.rifaSvc.obtenerRifaDetalle(rifaId).subscribe({
      next:(res: any) => {
        
        this.rifa = res;
        //console.log ( res );

      },
      error:(error) => console.log('Error consultando la rifa', error)
    })
  }

  obtenerPremios(rifaId:number)
  {
    this.rifaSvc.obtenerPremios(rifaId).subscribe({
      next:(res:any) => {
        this.premios = res;
      },
      error:(error) => console.log('Error consultando los premios', error)
    })
  }

  obtenerPrecios(rifaId:number)
  {
    this.rifaSvc.obtenerPrecios(rifaId).subscribe({
      next:(res:any) => {
        this.precio = res;
      },
      error:(error) => console.log('Error consultando los precios', error)
    })
  }
}
