import { Component, inject } from "@angular/core";
import { SpinnerService } from "../../../core/services/spinner.service";

@Component({
    selector: 'app-spinner',
    standalone: true,
    imports: [],
    template: `
        <div class="spinner-container"> 
            <div class="lds-dual-ring"></div>
        </div>
    `,
    styleUrl: './spinner.component.css'
})
export default class SpinnerComponent {
    private readonly spinnerSvc = inject(SpinnerService);
    isLoading = this.spinnerSvc.isLoading;
}