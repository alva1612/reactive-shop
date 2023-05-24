import { PropsWithChildren, createContext, useState } from "react";
import { ProductData } from "../Pages/Home";
import { useFetch } from "../Hooks/common.hook";

interface CartContextValue {
  cartItems: ProductData[];
  cartTotal: number;
  handleAddToCart: (prod: ProductData) => void;
}

const defaultValue: CartContextValue = {
  cartItems: [],
  handleAddToCart: () => {
    throw new Error();
  },
  cartTotal: 0,
};

export const CartContext = createContext(defaultValue);

export const ShoppingCartProvider = (propsChildren: PropsWithChildren) => {
  const { children } = propsChildren;

  const [cartItems, setCartItems] = useState<ProductData[]>([]);
  const cartTotal = cartItems.length;

  const handleAddToCart = (product: ProductData) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        cartTotal,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
