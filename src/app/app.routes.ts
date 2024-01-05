import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'country/:code', component: CountryComponent}
];
