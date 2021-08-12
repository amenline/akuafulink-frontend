import { WholeFoods } from './FoodProducts';

export type cartContextType = {
  cart: WholeFoods[] | [];
  addItem: (item: WholeFoods) => void;
  removeItem: (id: string) => void;
};
