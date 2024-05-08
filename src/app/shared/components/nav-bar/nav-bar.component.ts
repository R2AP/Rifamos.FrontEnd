import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { SesionService } from '../../../core/services/sesion.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  private readonly sesionSvc = inject(SesionService);
  private router = inject(Router);
  sesionIniciada:Boolean = false;
  correoElectronico:string = '';

  ngOnInit(): void {
    this.obtenerSesionIniciada();
  }
  obtenerSesionIniciada(){
    this.sesionIniciada = this.sesionSvc.sesionIniciada();
    this.correoElectronico = sessionStorage.getItem('email') || '';
  }

  cerrarSesion(){
    this.sesionSvc.cerrarSesion();
    this.router.navigateByUrl('/sesion/iniciar');
  }
}
