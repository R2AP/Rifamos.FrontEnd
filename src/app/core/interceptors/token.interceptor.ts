import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenSaved = inject(CookieService).get('token');
  const request = req.clone({
    setHeaders:{
      Authorization:`Bearer ${tokenSaved}`
    }
  })
  return next(req);
};
