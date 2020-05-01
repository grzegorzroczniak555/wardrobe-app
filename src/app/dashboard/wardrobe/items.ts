import { ItemGroup} from './item-group.model';

export const itemsGroups: ItemGroup[] = [
  {
    name: 'Formal',
    item: [
      {name: 'Trousers'},
      {name: 'T-shirt'},
      {name: 'Blouse/Jersey'},
      {name: 'Shirt'},
      {name: 'Suit'},
      {name: 'Jacket'},
      {name: 'Winter Jacket/Coat'},
      {name: 'Winter Cap'},
      {name: 'Gloves'},
      {name: 'Winter Boots'},
      {name: 'Formal Shoes'}
    ]
  },
  {
    name: 'Casual',
    item: [
      {name: 'Sport Shoes'},
      {name: 'Tracksuit'},
      {name: 'Casual T-shirt'},
      {name: 'Casual Trousers'},
      {name: 'Shorts'},
      {name: 'Slippers'},
    ]
  },
  {
    name: 'Additives',
    item: [
      {name: 'Sunglasses'},
      {name: 'Umbrella'},
      {name: 'Rainproof'},
      {name: 'Towel'},
    ]
  }
];
