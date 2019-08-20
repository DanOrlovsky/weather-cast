import { ICurrentWeather } from "../interfaces";
import { IWeatherService } from "./weather.service";
import { Observable, of } from "rxjs";


export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Charlotte',
        country: 'US',
        date: 1485789600,
        image: '../../assets/img/sunny.svg',
        temperature: 280.32,
        description: 'light intensity drizzle'
    };

    getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(this.fakeWeather)
    }
    
}