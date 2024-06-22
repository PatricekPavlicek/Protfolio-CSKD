import { Routes } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { KnihaListComponent } from './kniha-list/kniha-list.component';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorDetailsPageComponent } from './autor-details-page/autor-details-page.component';
import { KnihaDetailsPageComponent } from './kniha-details-page/kniha-details-page.component';
import { NewKnihaPageComponent } from './new-kniha-page/new-kniha-page.component';
import { NewAutorPageComponent } from './new-autor-page/new-autor-page.component';
import { NewZanrPageComponent } from './new-zanr-page/new-zanr-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainHeaderComponent,
        title: 'home'
    },
    {
        path: 'knihy/all',
        component: KnihaListComponent,
        title: "Seznam knih"
    },
    {
        path: 'autori/all',
        component: AutorListComponent,
        title: "Seznam autorů"
    },
    {
        path: 'autori/:autorId',
        component: AutorDetailsPageComponent,
        title: 'Detail autora'
    },
    {
        path: 'knihy/:knihaId',
        component: KnihaDetailsPageComponent,
        title: 'Detail knihy'
    },
    {
        path: 'new/kniha',
        component: NewKnihaPageComponent,
        title: 'Nová kniha'
    },
    {
        path: 'new/autor',
        component: NewAutorPageComponent,
        title: 'Nový autor'
    },
    {
        path: 'new/zanr',
        component: NewZanrPageComponent,
        title: 'Nový žánr'
    }
];
