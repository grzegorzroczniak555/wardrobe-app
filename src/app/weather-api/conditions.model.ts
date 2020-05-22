import {Summary} from './summary.model';

export interface Conditions {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: Summary[];
}
