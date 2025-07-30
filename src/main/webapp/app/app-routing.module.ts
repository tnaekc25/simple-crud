import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {CrudComponent} from "../crud/crud.component";
import {CrudModule} from "../crud/crud.module";

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: CrudComponent,
        children: [
            { path: 'crud', data: { breadcrumb: 'Crud' },
             loadChildren: () => import('../crud/crud.module').then(m => m.CrudModule) },
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
