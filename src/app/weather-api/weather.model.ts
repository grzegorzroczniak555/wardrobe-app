export interface Config {
  city: {
    name: string;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: List[];
}

export interface List {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: Weather[];
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
}
