import {APP_BASE_HREF} from '@angular/common';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { PartViewComponent } from './part-view/part-view.component';
import { MainViewComponent } from './main-view/main-view.component'
import { CompareViewComponent } from './compare-view/compare-view.component';

const routes: Routes = [
    {
        path: '',
        component: MainViewComponent
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'selectView',
        component: SelectViewComponent
    },
    {
        path: 'partView',
        component: PartViewComponent
    },
    {
        path: 'mainView',
        component: MainViewComponent
    },
    {
        path: 'compareView',
        component: CompareViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
