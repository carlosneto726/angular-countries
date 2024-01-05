import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  search: string = "";

  constructor(private countriesService: CountriesService){
    this.showCountries();
  }

  countries: any[] = [];

  showCountries(): void{
    this.countriesService.getCountries().subscribe((countries) => (this.countries = countries));
  }

  filterCoutriesByName(){
    this.countriesService.getCountriesByName(this.search).subscribe((countries) => (this.countries = countries));
  }

}
