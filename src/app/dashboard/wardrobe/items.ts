import {ItemType, Items} from './item-group.model';

export const items = {
  categories: [
      {
          name: ItemType.FORMAL,
          children: [
              {name: Items.TROUSERS, maxPerTrip: 4},
              {name: Items.TSHIRT, maxPerTrip: 8},
              {name: Items.BLOUSE, maxPerTrip: 4},
              {name: Items.SHIRT, maxPerTrip: 2},
              {name: Items.SUIT, maxPerTrip: 1},
              {name: Items.JACKET, maxPerTrip: 2},
              {name: Items.WINTERJACKET, maxPerTrip: 1},
              {name: Items.WINTERCAP, maxPerTrip: 1},
              {name: Items.GLOVES, maxPerTrip: 1},
              {name: Items.WINTERBOOTS, maxPerTrip: 1},
              {name: Items.FORMALSHOES, maxPerTrip: 1}
          ]
      },
      {
          name: ItemType.CASUAL,
          children: [
              {name: Items.SPORTSHOES, maxPerTrip: 1},
              {name: Items.TRACKSUIT, maxPerTrip: 1},
              {name: Items.CASUALTSHIRT, maxPerTrip: 8},
              {name: Items.CASUALTROUSERS, maxPerTrip: 4},
              {name: Items.SHORTS, maxPerTrip: 4},
              {name: Items.SLIPPERS, maxPerTrip: 2}
          ]
      },
      {
          name: ItemType.ADDITIVES,
          children: [
              {name: Items.SUNGLASSES, maxPerTrip: 1},
              {name: Items.UMBRELLA, maxPerTrip: 1},
              {name: Items.RAINPROOF, maxPerTrip: 1},
              {name: Items.TOWEL, maxPerTrip: 4}
          ]
      }
  ]
};

export const getItemsSelectOptions = () => {
  const selectOptions = [];
  items.categories.forEach(category => {
      const selectGroup = {
          name: category.name,
          item: []
      };
      category.children.forEach(item => {
          selectGroup.item.push({
              name: item.name
          });
      });
      selectOptions.push(selectGroup);
  });
  return selectOptions;
};


// import { ItemGroup} from './item-group.model';

// export const itemsGroups: ItemGroup[] = [
//   {
//     name: 'Formal',
//     item: [
//       {name: 'Trousers'},
//       {name: 'T-shirt'},
//       {name: 'Blouse/Jersey'},
//       {name: 'Shirt'},
//       {name: 'Suit'},
//       {name: 'Jacket'},
//       {name: 'Winter Jacket/Coat'},
//       {name: 'Winter Cap'},
//       {name: 'Gloves'},
//       {name: 'Winter Boots'},
//       {name: 'Formal Shoes'}
//     ]
//   },
//   {
//     name: 'Casual',
//     item: [
//       {name: 'Sport Shoes'},
//       {name: 'Tracksuit'},
//       {name: 'Casual T-shirt'},
//       {name: 'Casual Trousers'},
//       {name: 'Shorts'},
//       {name: 'Slippers'},
//     ]
//   },
//   {
//     name: 'Additives',
//     item: [
//       {name: 'Sunglasses'},
//       {name: 'Umbrella'},
//       {name: 'Rainproof'},
//       {name: 'Towel'},
//     ]
//   }
// ];


