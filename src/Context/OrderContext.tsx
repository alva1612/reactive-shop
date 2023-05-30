import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartContext, CartItem } from "./CartContext";
import { ERROR } from "../Constants/ErrorMessages";

interface Order {
  cartItems: CartItem[];
  createDate: Date;
}

interface OrderContextValue {
  order: Order[];
  handleNewOrder: (cI: CartItem[]) => void;
}

const defaultValue: OrderContextValue = {
  order: [{ cartItems: [], createDate: new Date() }],
  handleNewOrder: () => {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
};

export const OrderContext = createContext(defaultValue);

export const OrderProvider = (propsChildren: PropsWithChildren) => {
  const { handleClearCart } = useContext(CartContext);
  const { children } = propsChildren;

  const [order, setOrder] = useState<Order[]>([]);

  const handleNewOrder = (cartItems: CartItem[]) => {
    const orderToAdd: Order = {
      createDate: new Date(),
      cartItems,
    };
    setOrder([...order, orderToAdd]);
    handleClearCart();
  };

  return (
    <OrderContext.Provider
      value={{
        handleNewOrder,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
