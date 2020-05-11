import {Component, OnInit} from '@angular/core';
import {Travel} from '../../travels/travel.model';
import {TravelService} from '../../travels/travel.service';
import {WeatherService} from '../../../weather-api/weather.service';
import {Config} from '../../../weather-api/weather.model';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-recommendation',
  templateUrl: './check-recommendation.component.html',
  styleUrls: ['./check-recommendation.component.css']
})
export class CheckRecommendationComponent implements OnInit {

  travels: Travel[] = [];
  weather: Config;
  today = new Date();

  constructor(private travelService: TravelService,
              private weatherService: WeatherService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels.filter(travel => ((travel.startDate.seconds * 1000) - this.today.getTime() < 86400));
    });
  }

  getWeather(travel: Travel) {
    this.weatherService.getWeather(travel).subscribe((value: Config) => {
       console.log(value);
       // this.weather = {} as Config;
       // value = {} as Config;
       this.weather = value;
       console.log(this.weather);
    },
      error => {
      this.errorHandler(error);
      });
  }

  errorHandler(error: HttpErrorResponse) {
    this.router.navigateByUrl('/404');
    return throwError(error.message || 'server Error');
  }
}
