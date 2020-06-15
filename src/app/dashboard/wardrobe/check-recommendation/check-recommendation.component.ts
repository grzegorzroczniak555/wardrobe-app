import {Component, OnInit} from '@angular/core';
import {Travel} from '../../travels/travel.model';
import {TravelService} from '../../travels/travel.service';
import {WeatherService} from '../../../weather-api/weather.service';
import {Weather} from '../../../weather-api/weather.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {items} from '../items';

@Component({
  selector: 'app-check-recommendation',
  templateUrl: './check-recommendation.component.html',
  styleUrls: ['./check-recommendation.component.scss']
})
export class CheckRecommendationComponent implements OnInit {

  travels: Travel[] = [];
  recommendedItems = items;
  private onePerDayWeather = [];
  private weather: Weather;
  private today = new Date();

  constructor(private travelService: TravelService,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getTravels();
  }

  // [0] Formal
  // 0: {name: "Trousers"}
  // 1: {name: "T-shirt"}
  // 2: {name: "Blouse/Jersey"}
  // 3: {name: "Shirt"}
  // 4: {name: "Suit"}
  // 5: {name: "Jacket"}
  // 6: {name: "Winter Jacket/Coat"}
  // 7: {name: "Winter Cap"}
  // 8: {name: "Gloves"}
  // 9: {name: "Winter Boots"}
  // 10: {name: "Formal Shoes"}

  // [1] Casual
  // 0: {name: "Sport Shoes"}
  // 1: {name: "Tracksuit"}
  // 2: {name: "Casual T-shirt"}
  // 3: {name: "Casual Trousers"}
  // 4: {name: "Shorts"}
  // 5: {name: "Slippers"}

  // [2] Additives
  // 0: {name: "Sunglasses"}
  // 1: {name: "Umbrella"}
  // 2: {name: "Rainproof"}
  // 3: {name: "Towel"}

  checkRecommendation(weather: Weather) {
    if (this.recommendedItems.categories[0].children[0].amount < this.recommendedItems.categories[0].children[0].maxPerTrip) {
      this.recommendedItems.categories[0].children[0].amount++; // Trousers
    }
    if (this.recommendedItems.categories[0].children[1].amount < this.recommendedItems.categories[0].children[1].maxPerTrip) {
      this.recommendedItems.categories[0].children[1].amount++; // T-shirt
    }
    if (this.recommendedItems.categories[0].children[2].amount < this.recommendedItems.categories[0].children[2].maxPerTrip) {
      this.recommendedItems.categories[0].children[2].amount++; // Blouse
    }
    if (this.recommendedItems.categories[1].children[0].amount < this.recommendedItems.categories[1].children[0].maxPerTrip) {
      this.recommendedItems.categories[1].children[0].amount++; // Sport Shoes
    }
    if (this.recommendedItems.categories[1].children[2].amount < this.recommendedItems.categories[1].children[2].maxPerTrip) {
      this.recommendedItems.categories[1].children[2].amount++; // Casual T-shirt
    }
    if (this.recommendedItems.categories[1].children[3].amount < this.recommendedItems.categories[1].children[3].maxPerTrip) {
      this.recommendedItems.categories[1].children[3].amount++; // Casual Trousers
    }
    if (this.recommendedItems.categories[1].children[5].amount < this.recommendedItems.categories[1].children[5].maxPerTrip) {
      this.recommendedItems.categories[1].children[5].amount++; // Slippers
    }

    if (weather.list[1].main.temp < 15) {
      if (this.recommendedItems.categories[0].children[2].amount < this.recommendedItems.categories[0].children[2].maxPerTrip) {
        this.recommendedItems.categories[0].children[2].amount++; // Blouse
      }
    }
    if (weather.list[1].main.temp < 8) {
      if (this.recommendedItems.categories[0].children[5].amount < this.recommendedItems.categories[0].children[5].maxPerTrip) {
        this.recommendedItems.categories[0].children[5].amount++; // Jacket
      }
    }
    if (weather.list[1].main.temp < 0) {
      if (this.recommendedItems.categories[0].children[6].amount < this.recommendedItems.categories[0].children[6].maxPerTrip) {
        this.recommendedItems.categories[0].children[6].amount++; // Winter Jacket
      }
      if (this.recommendedItems.categories[0].children[8].amount < this.recommendedItems.categories[0].children[8].maxPerTrip) {
        this.recommendedItems.categories[0].children[8].amount++; // Gloves
      }
      if (this.recommendedItems.categories[0].children[9].amount < this.recommendedItems.categories[0].children[9].maxPerTrip) {
        this.recommendedItems.categories[0].children[9].amount++; // Winter Boots
      }
    }
    if (weather.list[1].main.temp < 5) {
      if (this.recommendedItems.categories[0].children[7].amount < this.recommendedItems.categories[0].children[7].maxPerTrip) {
        this.recommendedItems.categories[0].children[7].amount++; // Winter Cap
      }
    }
    if (weather.list[1].main.temp > 15) {
      if (this.recommendedItems.categories[0].children[1].amount < this.recommendedItems.categories[0].children[1].maxPerTrip) {
        this.recommendedItems.categories[0].children[1].amount++; // T-shirt
      }
      if (this.recommendedItems.categories[1].children[4].amount < this.recommendedItems.categories[1].children[4].maxPerTrip) {
        this.recommendedItems.categories[1].children[4].amount++; // Shorts
      }
      if (this.recommendedItems.categories[1].children[5].amount < this.recommendedItems.categories[1].children[5].maxPerTrip) {
        this.recommendedItems.categories[1].children[5].amount++; // Slippers
      }
    }
    console.log(weather.list[1]);
    console.log(this.recommendedItems);
  }

  getTravels() {
    console.log(this.recommendedItems);
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels.filter(travel =>
        (((travel.startDate.seconds * 1000) - this.today.getTime() < 86400)
          && ((travel.startDate.seconds * 1000) - this.today.getTime() > -172800000)));
    });
  }

  getWeather(travel: Travel) {
    this.weatherService.getWeather(travel).subscribe((res: HttpResponse<Weather>) => {
        this.weather = res.body as Weather;
        console.log(this.weather);
        for (const i of this.weather.list) {
          if (i.dt_txt.includes('15:00:00')) {
            this.onePerDayWeather.push(i);
          }
        }
        console.log(this.onePerDayWeather);
        this.checkRecommendation(this.weather);
      },
      error => {
        this.errorHandler(error);
      });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}

