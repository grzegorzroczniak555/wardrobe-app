import { items } from './items';
import { Items } from './item-group.model';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export class Item {
  constructor(
    public name: string,
    public amount?: number) {}
}

export class ItemRecommendation {
  name: Items;
  recommendedAmount: number;
}

export class Recommendation {
  recommendations: ItemRecommendation[] = [];
  public recommendationDate?: Timestamp;
}

export const checkRecommendationForItem = (item: Items, recommendation: Recommendation) => {
  let itemRecommendation = recommendation.recommendations.filter(ir => ir.name === item).pop();
  const itemConfig = items.categories.flatMap(c => c.children)
      .filter(ic => ic.name === item).pop();
  if (!itemRecommendation) {
      itemRecommendation = new ItemRecommendation();
      itemRecommendation.name = item;
      itemRecommendation.recommendedAmount = 1;
      recommendation.recommendations.push(itemRecommendation);
  } else {
      if (itemConfig && itemRecommendation.recommendedAmount < itemConfig.maxPerTrip) {
          itemRecommendation.recommendedAmount++;
      }
  }
};
