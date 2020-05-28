import {Conditions} from './conditions.model';
import {City} from './city.model';

export interface Weather {
  city: City;
  list: Conditions[];
}
