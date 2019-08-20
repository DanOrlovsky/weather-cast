import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;
  constructor(private _weatherService: WeatherService) {  }

  ngOnInit() {
    this._weatherService.getCurrentWeather('Charlotte', 'US')
      .subscribe((data) => this.current = data);
  }

}
