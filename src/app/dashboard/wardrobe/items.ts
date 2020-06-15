import {ItemGroup} from './item-group.model';

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

enum ItemType {
  FORMAL = 'formal',
  CASUAL = 'casual',
  ADDITIVES = 'additives'
}

export const items = {
  categories: [
    {
      name: ItemType.FORMAL,
      children: [
        {name: 'Trousers', maxPerTrip: 4, amount: 0},
        {name: 'T-shirt', maxPerTrip: 8, amount: 0},
        {name: 'Blouse/Jersey', maxPerTrip: 4, amount: 0},
        {name: 'Shirt', maxPerTrip: 2, amount: 0},
        {name: 'Suit', maxPerTrip: 1, amount: 0},
        {name: 'Jacket', maxPerTrip: 2, amount: 0},
        {name: 'Winter Jacket/Coat', maxPerTrip: 1, amount: 0},
        {name: 'Winter Cap', maxPerTrip: 1, amount: 0},
        {name: 'Gloves', maxPerTrip: 1, amount: 0},
        {name: 'Winter Boots', maxPerTrip: 1, amount: 0},
        {name: 'Formal Shoes', maxPerTrip: 1, amount: 0}
      ]
    },
    {
      name: ItemType.CASUAL,
      children: [
        {name: 'Sport Shoes', maxPerTrip: 1, amount: 0},
        {name: 'Tracksuit', maxPerTrip: 1, amount: 0},
        {name: 'Casual T-shirt', maxPerTrip: 8, amount: 0},
        {name: 'Casual Trousers', maxPerTrip: 4, amount: 0},
        {name: 'Shorts', maxPerTrip: 4, amount: 0},
        {name: 'Slippers', maxPerTrip: 2, amount: 0}
      ]
    },
    {
      name: ItemType.ADDITIVES,
      children: [
        {name: 'Sunglasses', maxPerTrip: 1, amount: 0},
        {name: 'Umbrella', maxPerTrip: 1, amount: 0},
        {name: 'Rainproof', maxPerTrip: 1, amount: 0},
        {name: 'Towel', maxPerTrip: 4, amount: 0}
      ]
    }
  ]
};


