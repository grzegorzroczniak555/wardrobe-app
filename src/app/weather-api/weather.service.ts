import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Travel} from '../dashboard/travels/travel.model';
import {Weather} from './weather.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiKey = environment.weather.apiKey;
  private readonly apiUrl = environment.weather.apiUrl;

  constructor(private http: HttpClient) {
  }

  getWeather(travel: Travel): Observable<HttpResponse<Weather>> {
    return this.http.get<Weather>(`${this.apiUrl}${travel.destination}&units=metric&lang=pl&appid=${this.apiKey}`, {observe: 'response'});
  }


}
