import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [RouterOutlet],
  template:  `
    <div class="main-container">
      <div class="imagen-container">@defer {
        <img src="../../../assets/FrontPage.png" class="imagen">
      }
      @loading {
          <img class="skeleton">
      }</div>

  <div class="tarjeta-container">@defer {
      <router-outlet />
    }
  @loading {
      <img class="skeleton">
  }</div>

</div>
    `,
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {

}
