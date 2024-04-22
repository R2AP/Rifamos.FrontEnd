import { Component, Inject, OnInit, inject } from '@angular/core';
import { RifaDetalleDatosComponent } from '../rifa-detalle-datos/rifa-detalle-datos.component';
import { RifaDetalleImagenComponent } from '../rifa-detalle-imagen/rifa-detalle-imagen.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rifa-detalle',
  standalone: true,
  imports: [FormsModule,MatButtonModule, MatDividerModule,MatFormFieldModule,MatInputModule,RifaDetalleDatosComponent, RifaDetalleImagenComponent],
  templateUrl: './rifa-detalle.component.html',
  styleUrl: './rifa-detalle.component.css'
})
export class RifaDetalleComponent implements OnInit {

  rifaId : number = 0;
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.rifaId = this.activeRoute.snapshot.params['rifaId'];
  }

  pagar(){
    this.router.navigate(['/pago']);
  }
}
