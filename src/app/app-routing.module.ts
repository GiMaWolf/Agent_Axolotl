import {APP_BASE_HREF} from '@angular/common';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectViewComponent } from './select-view/select-view.component';

const routes: Routes = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'selectView',
        component: SelectViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
