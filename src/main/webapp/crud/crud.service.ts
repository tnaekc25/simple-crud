import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Person} from "./person";


@Injectable({
    providedIn : "root"
})

export class CrudService {
    constructor(private http: HttpClient) {}

    hdrurl : string = "http://localhost:8080/api";

    createProduct(product : Person) {
        return this.http.post<any>(this.hdrurl + "/create", product).toPromise();
    }

    readProducts() {
        return this.http.get<any>(this.hdrurl + "/reads").toPromise(
        ).then(res => res as Person[]);
    }

    updateProduct(product : Person) {
        return this.http.put<any>(this.hdrurl + "/update", product).toPromise();
    }

    deleteProduct(id: string) {
        return this.http.delete<any>(this.hdrurl + "/delete/" + id).toPromise();
    }
}