import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgFor, NgForOf, CommonModule  } from '@angular/common';

import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interfaces/Country';


@Component({
  selector: 'app-country',
  standalone: true,
  imports: [DatePipe, NgFor, NgForOf, CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

  // Variables declaration
  country?: Country;
  aditionalInfo?: any;

  paises = {
    "Brazil": "BRL",
    "United States": "USD",
    "France": "EUR"
  };

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {
    this.getCountry();
    //this.aditionalInfo = this.country?.aditionalInfo.map(aditionalInfo => Object.keys(aditionalInfo)[0]);

    //this.languages = this.country?.languages.map(languages => Object.keys(languages)[0]);
  }

  getCountry(): void {
    const countryCommonName: any = this.route.snapshot.paramMap.get("code"); // Retriving the country code from url
    this.countriesService.getCountryByCode(countryCommonName)
      .subscribe(
        (country) => this.country = {
          ccn3: country[0].ccn3,
          cca2: country[0].cca2,
          nameCommon: country[0].name.common,
          nameOfficial: country[0].name.official,
          svgFlag: country[0].flags.svg,
          svgCoatOfArms: country[0].coatOfArms.svg,
          flagDescription: country[0].flags.alt,
          capital: country[0].capital,
          region: country[0].region,
          subregion: country[0].subregion,
          languages: country[0].languages,
          aditionalInfo: { 
            "Independent": country[0].independent,
            "United Nations Member": country[0].unMember,
            "Currencie Code": Object.keys(country[0].currencies)[0],
            "Currencie Name": country[0].currencies[Object.keys(country[0].currencies)[0]].name,
            "Currencie Symbol": country[0].currencies[Object.keys(country[0].currencies)[0]].symbol,
            "Area": `${country[0].area.toLocaleString('en-US')} Km²`,
            "Population": country[0].population.toLocaleString('en-US'),
            "Timezones": country[0].timezones,
          },
        }
      );
  }
}
