import {Component, OnInit} from '@angular/core';
import {Travel} from '../../travels/travel.model';
import {TravelService} from '../../travels/travel.service';
import {WeatherService} from '../../../weather-api/weather.service';
import {Weather} from '../../../weather-api/weather.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-recommendation',
  templateUrl: './check-recommendation.component.html',
  styleUrls: ['./check-recommendation.component.scss']
})
export class CheckRecommendationComponent implements OnInit {

  travels: Travel[] = [];
  private weather: Weather;
  private today = new Date();

  constructor(private travelService: TravelService,
              private weatherService: WeatherService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels.filter(travel =>
        (((travel.startDate.seconds * 1000) - this.today.getTime() < 86400)
          && ((travel.startDate.seconds * 1000) - this.today.getTime() > -172800000)));
    });
  }

  getWeather(travel: Travel) {
    this.weatherService.getWeather(travel).subscribe((res: HttpResponse<Weather>) => {
        this.weather = res.body as Weather;
      },
      error => {
        this.errorHandler(error);
      });
  }

  errorHandler(error: HttpErrorResponse) {
    this.router.navigate(['/connection-failed']);
    return throwError(error.message || 'server Error');
  }
}
