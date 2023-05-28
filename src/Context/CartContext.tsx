import {
  MouseEventHandler,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { ProductData } from "../Pages/Home";

interface CartItem extends ProductData {
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  cartTotal: number;
  handleAddToCart: <T>(
    e: React.MouseEvent<T, MouseEvent>,
    prod: ProductData
  ) => void;
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

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartTotal = cartItems.length;

  function handleAddToCart<T>(
    event: React.MouseEvent<T, MouseEvent>,
    product: ProductData
  ): void {
    event.stopPropagation();
    const indexOfProduct = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (indexOfProduct >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[indexOfProduct].quantity++;
      setCartItems(newCartItems);
      return;
    }

    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }

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
