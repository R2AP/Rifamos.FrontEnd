import { inject } from "@angular/core"
import { SpinnerService } from "../services/spinner.service"
import { HttpInterceptorFn } from "@angular/common/http";
import { finalize } from "rxjs";

export const SpinnerInterceptor: HttpInterceptorFn = (req, next) => {
    const spinnerSvc = inject(SpinnerService);
    console.log("si entra");
    spinnerSvc.show();
    return next(req).pipe(finalize(() => spinnerSvc.hide()));
}