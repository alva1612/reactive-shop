import { CartItem } from "../Context/CartContext";

const getTotalPrice = <T extends CartItem>(cartItems: T[]): number => {
  return cartItems.reduce(
    (acc, curr) => (acc += curr.quantity * curr.price),
    0
  );
};

export const Calcs = {
  getTotalPrice,
};

const toDecimal = (number: number): string => {
  return number.toFixed(2);
};

export const Transform = {
  toDecimal,
};
