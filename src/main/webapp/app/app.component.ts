import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNG) {}

    ngOnInit(): void {
        this.primengConfig.ripple.set(true);
    }
}
