import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  urlCountry = 'https://restcountries.com/v2/lang/es'

  constructor(private http:HttpClient) { }

  getCountry():Observable<any>{
    console.log("estoy aca")
    return this.http.get(this.urlCountry);
  }

}
