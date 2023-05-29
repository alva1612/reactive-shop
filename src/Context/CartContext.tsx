import { PropsWithChildren, createContext, useState } from "react";
import { ProductData } from "../Pages/Home";
import { throwDefaultContext } from "../Constants/ErrorMessages";

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
  handleRemoveFromCart: <T>(
    e: React.MouseEvent<T, MouseEvent>,
    prod: ProductData
  ) => void;
}

const defaultValue: CartContextValue = {
  cartItems: [],
  handleAddToCart: () => {
    throw new Error();
  },
  handleRemoveFromCart: throwDefaultContext,
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

  function handleRemoveFromCart<T>(
    event: React.MouseEvent<T, MouseEvent>,
    product: ProductData
  ): void {
    console.log("Product a reducir", product);

    event.stopPropagation();
    const cartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    const cartItem = cartItems[cartItemIndex];
    console.log("CartItem encontrado", cartItem);

    if (!cartItem) return;

    cartItem.quantity--;

    let newCartItems: CartItem[];
    if (cartItem.quantity <= 0)
      newCartItems = cartItems.filter((item) => item.id !== product.id);
    else newCartItems = cartItems;
    console.log("NUEVO CART", newCartItems);

    setCartItems([...newCartItems]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        cartTotal,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
