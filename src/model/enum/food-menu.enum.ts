import { FoodItem } from "../food-item.type";

export enum FoodMenu {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Yellow = "Yellow",
  Pink = "Pink",
  Purple = "Purple",
  Orange = "Orange",
}

export const FOOD_MENU_ITEMS: Record<FoodMenu, FoodItem> = {
  [FoodMenu.Red]: { name: FoodMenu.Red, price: 50 },
  [FoodMenu.Green]: { name: FoodMenu.Green, price: 40 },
  [FoodMenu.Blue]: { name: FoodMenu.Blue, price: 30 },
  [FoodMenu.Yellow]: { name: FoodMenu.Yellow, price: 50 },
  [FoodMenu.Pink]: { name: FoodMenu.Pink, price: 80 },
  [FoodMenu.Purple]: { name: FoodMenu.Purple, price: 90 },
  [FoodMenu.Orange]: { name: FoodMenu.Orange, price: 120 },
};

export function getPrice(item: FoodMenu): number {
  return FOOD_MENU_ITEMS[item].price;
}

export function getItem(item: FoodMenu): FoodItem {
  return FOOD_MENU_ITEMS[item];
}
