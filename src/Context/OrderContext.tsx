import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartContext, CartItem } from "./CartContext";
import { ERROR } from "../Constants/ErrorMessages";
import { ModalContext } from "./ModalContext";

export interface Order {
  id: number;
  orderItems: CartItem[];
  createDate: Date;
  orderTotalPrice: number;
  orderTotal: number;
}

interface OrderContextValue {
  order: Order[];
  handleNewOrder: (cI: CartItem[]) => void;
}

const defaultValue: OrderContextValue = {
  order: [
    {
      id: -1,
      orderItems: [],
      createDate: new Date(),
      orderTotal: 0,
      orderTotalPrice: 0,
    },
  ],
  handleNewOrder: () => {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
};

export const OrderContext = createContext(defaultValue);

export const OrderProvider = (propsChildren: PropsWithChildren) => {
  const { handleClearCart, cartTotalPrice, cartTotal } =
    useContext(CartContext);
  const { handleCloseAll } = useContext(ModalContext);

  const { children } = propsChildren;

  const [order, setOrder] = useState<Order[]>([]);

  const lastOrder = order[order.length - 1];
  const handleNewOrder = (orderItems: CartItem[]) => {
    console.trace("execute");
    const orderToAdd: Order = {
      orderTotal: cartTotal,
      orderTotalPrice: cartTotalPrice,
      id: lastOrder ? lastOrder.id++ : 1,
      createDate: new Date(),
      orderItems,
    };
    setOrder([...order, orderToAdd]);
    handleClearCart();
    handleCloseAll();
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
