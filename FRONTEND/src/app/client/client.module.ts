import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdresseComponent } from './adresse/adresse.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'adresse', component: AdresseComponent},
        ]),
    ]
})
export class ClientModule { }
