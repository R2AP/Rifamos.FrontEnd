import { Component, Input, OnInit, inject } from '@angular/core';
import { RifaService } from '../../core/services/rifa.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
  base64Image: string = "";

  rifaId: number = 0;

  constructor(private sanitizer:DomSanitizer){
  }

  ngOnInit(): void {
    this.rifaId = this.rifaIdInput;
    this.obtenerRifaDetalle(this.rifaIdInput);
  }

  obtenerRifaDetalle(rifaId:number)
  {
    this.rifaSvc.obtenerRifaDetalle(rifaId).subscribe({
      next:(res: any) => {
        this.rifa = res;
        console.log ( res );
        this.base64Image = 'data:image/png;base64, ' + res.imagen;
        this.transform()
      },
      error:(error) => console.log('Error consultando la rifa', error)
    })
  }

  transform(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);
}

}
