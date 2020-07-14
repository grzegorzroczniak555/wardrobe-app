import { Recommendation, checkRecommendationForItem } from './../item.model';
import { Component, OnInit } from '@angular/core';
import { Travel } from '../../travels/travel.model';
import { TravelService } from '../../travels/travel.service';
import { WeatherService } from '../../../weather-api/weather.service';
import { Weather } from '../../../weather-api/weather.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { items } from '../items';
import { Items } from '../item-group.model';

@Component({
  selector: 'app-check-recommendation',
  templateUrl: './check-recommendation.component.html',
  styleUrls: ['./check-recommendation.component.scss']
})
export class CheckRecommendationComponent implements OnInit {

  travels: Travel[] = [];
  recommendedItems = items;
  public onePerDayWeather = [];
  private weather: Weather;
  private today = new Date();

  constructor(private travelService: TravelService,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getTravels();
  }

  checkRecommendation = (onePerDayWeather) => {
    const recommendation = new Recommendation();

    checkRecommendationForItem(Items.TROUSERS, recommendation);
    checkRecommendationForItem(Items.TSHIRT, recommendation);
    checkRecommendationForItem(Items.BLOUSE, recommendation);
    checkRecommendationForItem(Items.SPORTSHOES, recommendation); // question?
    checkRecommendationForItem(Items.CASUALTSHIRT, recommendation);
    checkRecommendationForItem(Items.CASUALTROUSERS, recommendation);
    checkRecommendationForItem(Items.SLIPPERS, recommendation);

    for (const weather of onePerDayWeather) {

      checkRecommendationForItem(Items.TROUSERS, recommendation);
      checkRecommendationForItem(Items.TSHIRT, recommendation);
      checkRecommendationForItem(Items.CASUALTSHIRT, recommendation);
      checkRecommendationForItem(Items.CASUALTROUSERS, recommendation);
      // shirt,suit,formal shoes,towel, tracksuit?

      if (weather.main.temp < 15) {
        checkRecommendationForItem(Items.BLOUSE, recommendation);
      }
      if (weather.main.temp < 8) {
        checkRecommendationForItem(Items.JACKET, recommendation);
      }
      if (weather.main.temp < 0) {
        checkRecommendationForItem(Items.WINTERJACKET, recommendation);
        checkRecommendationForItem(Items.GLOVES, recommendation);
        checkRecommendationForItem(Items.WINTERBOOTS, recommendation);
      }
      if (weather.main.temp < 5) {
        checkRecommendationForItem(Items.WINTERCAP, recommendation);
      }
      if (weather.main.temp > 15) {
        checkRecommendationForItem(Items.TSHIRT, recommendation);
        checkRecommendationForItem(Items.CASUALTSHIRT, recommendation);
        checkRecommendationForItem(Items.SHORTS, recommendation);
        if (weather.weather[0].main === 'Clear') {
          checkRecommendationForItem(Items.SUNGLASSES, recommendation);
        }
      }
      if (weather.weather[0].main === 'Thunderstorm') {
        checkRecommendationForItem(Items.BLOUSE, recommendation);
        checkRecommendationForItem(Items.JACKET, recommendation);
        checkRecommendationForItem(Items.WINTERCAP, recommendation);
        checkRecommendationForItem(Items.GLOVES, recommendation);
        checkRecommendationForItem(Items.UMBRELLA, recommendation);
        checkRecommendationForItem(Items.RAINPROOF, recommendation);
      }
      if (weather.weather[0].main === 'Rain') {
        checkRecommendationForItem(Items.BLOUSE, recommendation);
        checkRecommendationForItem(Items.JACKET, recommendation);
        checkRecommendationForItem(Items.UMBRELLA, recommendation);
        checkRecommendationForItem(Items.RAINPROOF, recommendation);
      }
      if (weather.weather[0].main === 'Snow') {
        checkRecommendationForItem(Items.BLOUSE, recommendation);
        checkRecommendationForItem(Items.JACKET, recommendation);
        checkRecommendationForItem(Items.WINTERCAP, recommendation);
        checkRecommendationForItem(Items.GLOVES, recommendation);
        checkRecommendationForItem(Items.WINTERJACKET, recommendation);
        checkRecommendationForItem(Items.WINTERBOOTS, recommendation);
      }
    }
    console.log(recommendation);
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
      for (const time of this.weather.list) {
        if (time.dt_txt.includes('15:00:00')) {
          this.onePerDayWeather.push(time);
        }
      }
      this.checkRecommendation(this.onePerDayWeather);
    },
      error => {
        this.errorHandler(error);
      });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}



