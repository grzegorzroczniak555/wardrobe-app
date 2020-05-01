import {Item} from './item.model';

export interface ItemGroup {
  disabled?: boolean;
  name: string;
  item: Item[];
}
