import {Component, OnInit} from '@angular/core';
import {Travel} from '../../travels/travel.model';
import {TravelService} from '../../travels/travel.service';
import {WeatherService} from '../../../weather-api/weather.service';
import {Config, List, Weather} from '../../../weather-api/weather.model';

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
              private weatherService: WeatherService) {
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
       // this.weather.city.name = value.city.name;
       this.weather = value;
       console.log(this.weather.list[3].weather);
       console.log(this.weather);
    });
  }
}
