import { Component, OnInit, inject } from '@angular/core';
import { RifaDetalleDatosComponent } from '../rifa-detalle-datos/rifa-detalle-datos.component';
import { RifaDetalleImagenComponent } from '../rifa-detalle-imagen/rifa-detalle-imagen.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rifa-detalle',
  standalone: true,
  imports: [RifaDetalleDatosComponent, RifaDetalleImagenComponent],
  templateUrl: './rifa-detalle.component.html',
  styleUrl: './rifa-detalle.component.css'
})
export class RifaDetalleComponent implements OnInit {

  rifaId : number = 0;

  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.rifaId = this.activeRoute.snapshot.params['rifaId'];
    console.log('this.rifaId: ' + this.rifaId)
  }
}
