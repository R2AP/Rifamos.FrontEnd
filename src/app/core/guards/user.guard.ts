import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const userGuard: CanActivateFn = (route, state) => {
  const tokenSaved = inject(CookieService).get('token');
  const router = inject(Router);

  if (tokenSaved.length > 0){
    return true;  
  } else {
    const redirect = router.createUrlTree(['/iniciar-sesion']);
    return redirect
  }
};
