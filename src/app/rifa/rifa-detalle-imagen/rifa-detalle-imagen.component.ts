import { Component, Input, OnInit, inject } from '@angular/core';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-rifa-detalle-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rifa-detalle-imagen.component.html',
  styleUrl: './rifa-detalle-imagen.component.css'
})
export class RifaDetalleImagenComponent implements OnInit {
  @Input() rifaIdInput: number = 0;
  private readonly rifaSvc = inject(RifaService)
  rifa: any = [];
  ImageDataUrl64: string = "";

  rifaId: number = 0;
  // rifa$ = this.rifaSvc.obtenerRifaDetalle();

  ngOnInit(): void {
    this.rifaId = this.rifaIdInput;
    console.log ('ngOnInit this.rifaId rifa-detalle-imagen: ' + this.rifaId);
    //this.obtenerRifaDetalle(this.rifaId);
  }

  obtenerRifaDetalle(rifaId:number)
  {
    this.rifaSvc.obtenerRifaDetalle(rifaId).subscribe({
      next:(res: any) => {
        console.log ('this.rifa 1');
        this.rifa = res;
        console.log ('this.rifa 2');
        console.log ( res );
        this.ImageDataUrl64 = "data:image/png;base64," + Base64.extendString()
        console.log ('this.rifa 3');

      },
      error:(error) => console.log('Error consultando la rifa', error)
    })
  }

}
