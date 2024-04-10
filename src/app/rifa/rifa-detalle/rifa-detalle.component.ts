import { Component } from '@angular/core';
import { RifaDetalleImagenComponent } from '../rifa-detalle-imagen/rifa-detalle-imagen.component';
import { RifaDetalleDatosComponent } from '../rifa-detalle-datos/rifa-detalle-datos.component';

@Component({
  selector: 'app-rifa-detalle',
  standalone: true,
  imports: [RifaDetalleImagenComponent, RifaDetalleDatosComponent],
  templateUrl: './rifa-detalle.component.html',
  styleUrl: './rifa-detalle.component.css'
})
export class RifaDetalleComponent {

}
