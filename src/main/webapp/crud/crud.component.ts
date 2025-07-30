import { Component, OnInit } from '@angular/core';
import {CrudService} from "./crud.service";
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {Person} from './person'

@Component({
    templateUrl: './crud.component.html',
    standalone: false,
    providers: [MessageService, ConfirmationService],
    selector: 'crud-comp'
})
export class CrudComponent implements OnInit {

    person_list: Person[] = [];
    current_person: Person = {};
    colns: any[];
    btypes: any[];
    search_id: string;

    productDialog: boolean = false;
    deleteProductDialog: boolean = false;

    name_filter :string = "";

    constructor(private crudService: CrudService) {
    }

    ngOnInit() {
        this.crudService.readProducts().then(
            data => this.person_list = data).then(data => console.log(data));

        this.colns = [
            {field: "id", header: "Id"},
            {field: "name", header: "Name"},
            {field: "gender", header: "Gender"},
            {field: "age", header: "Age"},
            {field: "bloodType", header: "Blood Type"}
        ];

        this.btypes = [
            {label: 'A_POS', value: 'A_POS'},
            {label: 'A_NEG', value: 'A_NEG'},
            {label: 'B_POS', value: 'B_POS'},
            {label: 'B_NEG', value: 'B_NEG'}
        ];
    }

    preEdit(person: Person) {
        this.productDialog = true;
        this.current_person = {...person};
    }

    preDelete(person: Person) {
        this.deleteProductDialog = true;
        this.current_person = {...person};
    }

    cancelDelete() {
        this.current_person = {};
        this.deleteProductDialog = false;
    }

    confirmDelete() {
        this.crudService.deleteProduct(this.current_person.id).then(() => {
            this.getProducts()
        })

        this.current_person = {};
        this.deleteProductDialog = false;
    }

    addEvent() {
        this.current_person = {};
        this.productDialog = true;
    }

    cancelAdd() {
        this.productDialog = false;
    }

    realAdd() {
        this.productDialog = false;

        if (this.current_person.id)
            this.crudService.updateProduct({...this.current_person}).then(() => {

                this.getProducts()
            });
        else
            this.crudService.createProduct({id: this.createId(), ...this.current_person}).then(() => {
                this.getProducts()
            });
    }

    getProducts() {
        console.log(this.name_filter);
        return this.crudService.readProducts().then(
            data => this.person_list = data.filter(data =>
            !this.name_filter || data.name === this.name_filter)).then(data => console.log(data)
        )
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    search(name : string) {
        this.name_filter = name;
        this.getProducts();
    }

}
