import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewService } from '../view.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {




weather;
temperature;
humidity;
condition;
wind;
_city;

constructor(private _viewService: ViewService) {

}


onSubmit(f) {
  console.log(f.value.city);
  console.log(f.value.country);
  console.log(f);
  
  this._viewService.getWeather(f.value.city, f.value.country).subscribe((response => {
    console.log(response);
    this.weather = response;
    console.log('temperature: ' + this.weather.main.temp);
    this.temperature = this.weather.main.temp - 273.15;
    this.humidity = this.weather.main.humidity;
    this.condition = this.weather.weather;
    this.wind = this.weather.wind.speed;
    this._city = this.weather.name;
  }));

}




ngOnInit() {

}

}