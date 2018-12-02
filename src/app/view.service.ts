import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ViewService {

  API_KEY = '6fae8ea635c6a798d8edc478aecac494';
  url;
  

  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
   }
  
  
getWeather(city, country) {

      if (country.length < 2) {
        return this.http.get(this.url + city + '&appid=' + this.API_KEY);
      } else {
        return this.http.get(this.url + city + ',' + country + '&appid=' + this.API_KEY);
      }

      
        
  }
  
}
