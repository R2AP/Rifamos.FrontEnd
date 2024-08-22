import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-banner-principal',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './banner-principal.component.html',
  styleUrl: './banner-principal.component.css'
})
export class BannerPrincipalComponent {

}
