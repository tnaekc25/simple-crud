import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ToastModule } from 'primeng/toast';
import { CrudComponent } from './crud.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonGroupModule} from "primeng/buttongroup";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {TableModule} from "primeng/table";
import {Dialog} from "primeng/dialog";
import {Ripple} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputNumber} from "primeng/inputnumber";
import {RadioButton} from "primeng/radiobutton";
import {Textarea} from "primeng/textarea";


@NgModule({
    imports: [CommonModule,
        ToastModule,
        InputTextModule,
        ButtonModule,
        ToolbarModule,
        InputGroupModule,
        InputGroupAddonModule,
        TableModule,
        ButtonGroupModule, Dialog, Ripple, DropdownModule, FormsModule, InputNumber, RadioButton, Textarea],

    declarations : [CrudComponent]
})
export class CrudModule {}