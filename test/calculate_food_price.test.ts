import { FoodItem } from "../src/model/food-item.type";
import { calculateTotalPrice } from "../src/service/food_price_calculate";
import { FOOD_MENU_ITEMS, FoodMenu } from "../src/model/enum/index";
const sumPrice = (items: FoodItem[]) =>
  items.reduce((sum, item) => sum + item.price, 0);

describe("calculateTotalPrice", () => {
  it("shouldCalculateTotalPriceForNonMember", () => {
    const items: FoodItem[] = [
      FOOD_MENU_ITEMS[FoodMenu.Red],
      FOOD_MENU_ITEMS[FoodMenu.Green],
    ];

    const result = calculateTotalPrice(items, false);

    expect(result).toBe(sumPrice(items));
    expect(result).not.toBe(result * 0.9);
  });

  it("shouldApply10PercentMemberDiscount", () => {
    const items: FoodItem[] = [
      FOOD_MENU_ITEMS[FoodMenu.Yellow],
      FOOD_MENU_ITEMS[FoodMenu.Pink],
    ];
    const result = calculateTotalPrice(items, true);

    expect(result).toBe(sumPrice(items) * 0.9);
    expect(result).not.toBe(sumPrice(items));
  });

  it("shouldReturnZeroWhenFoodItemsIsEmpty", () => {
    const result = calculateTotalPrice([], false);

    expect(result).toBe(0);
  });
});
