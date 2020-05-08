import {Component, OnInit} from '@angular/core';
import {Travel} from '../../travels/travel.model';
import {TravelService} from '../../travels/travel.service';
import {WeatherService} from '../../../weather-api/weather.service';

@Component({
  selector: 'app-check-recommendation',
  templateUrl: './check-recommendation.component.html',
  styleUrls: ['./check-recommendation.component.css']
})
export class CheckRecommendationComponent implements OnInit {

  travels: Travel[] = [];

  constructor(private travelService: TravelService,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels;
    });
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(value => {
      console.log(value);
    });
  }
}
