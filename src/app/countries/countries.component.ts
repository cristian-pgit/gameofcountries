import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  country:any;

  constructor(private conty: CountriesService){}

  ngOnInit(): void {
    this.getLaCountry();
  }

  getLaCountry(){
    this.conty.getCountry().subscribe(resp =>{
      this.country = resp;
      console.log(this.conty)
      
    })
  }


}
