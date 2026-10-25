import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

if (localStorage.getItem('token')){
//baadel ala elrequest b نسخة mno, w abaat elrequest nafso
    req = req.clone({
      setHeaders :{ token :localStorage.getItem('token')!}
    })
}

  return next(req);
};
