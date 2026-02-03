import { FoodItem } from "../model/food-item.type";

export function calculateTotalPrice(
  foodItems: FoodItem[],
  isMember: boolean,
): number {
  let total = foodItems.reduce((sum, item) => sum + item.price, 0);
  if (isMember) {
    total *= 0.9;
  }
  return total;
}
