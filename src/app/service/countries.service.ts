import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://restcountries.com/v3.1";

  getCountries(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/?fields=name,flags,ccn3,region`);
  }

  getCountryByCode(code: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/alpha/${code}`);
  }

  getCountriesByName(name: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/name/${name}/?fields=name,flags,ccn3,region`);
  }


}
