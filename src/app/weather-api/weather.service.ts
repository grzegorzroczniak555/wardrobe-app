import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Krak%C3%B3w&units=metric&lang=pl&appid=' +
    'a08da062703bc4ce3b6fab0f359bfafa';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(this.weatherUrl);
  }
}
