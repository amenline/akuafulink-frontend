import { createContext, ReactNode, useContext, useState } from 'react';
import { cartContextType } from '../Types/Context';
import { WholeFoods } from './../Types/FoodProducts';

const cartContextDefaultValues: cartContextType = {
  cart: [],
  addItem: () => {},
  removeItem: () => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export const useCart = () => {
  return useContext(CartContext);
};

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, setcart] = useState<WholeFoods[]>([]);

  const addItem = (newItem: WholeFoods) => {
    if (!cart.some((item) => item.id === newItem.id)) {
      let newArray = [...cart, newItem];
      setcart(newArray);
    }
  };

  const removeItem = (id: string) => {
    let filtered = cart.filter((item) => item.id != id);
    setcart(filtered);
  };

  const value = {
    cart,
    addItem,
    removeItem,
  };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
