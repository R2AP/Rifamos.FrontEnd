import { Component, Input } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rifa-comprimida',
  standalone: true,
  imports: [/*MatButtonModule, MatIconModule,*/ CommonModule],
  templateUrl: './rifa-comprimida.component.html',
  styleUrl: './rifa-comprimida.component.css'
})
export class RifaComprimidaComponent{
  @Input() rifa: any;

  constructor(private sanitizer:DomSanitizer){
  }
  
  transform(imagen:string){
    let base64Image:string = "";
    base64Image = 'data:image/png;base64, ' + imagen;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }
}