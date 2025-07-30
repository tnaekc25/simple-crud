import { NgModule } from '@angular/core';
import {PathLocationStrategy, LocationStrategy, CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {providePrimeNG} from "primeng/config";
import Lara from '@primeng/themes/lara';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StyleClassModule} from "primeng/styleclass";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StyleClassModule,
        RouterModule],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },
    providePrimeNG({
        theme: {
            preset: Lara
        }
    })],

    bootstrap: [AppComponent]
})
export class AppModule {}
