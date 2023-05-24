import { PropsWithChildren, createContext } from "react";
import { ProductData } from "../Pages/Home";
import { useFetch } from "../Hooks/common.hook";

interface ShopContextValue {
  shopItems: ProductData[];
}

const defaultValue: ShopContextValue = {
  shopItems: [],
};

export const ShopContext = createContext(defaultValue);

export const ShopContextProvider = (propsChildren: PropsWithChildren) => {
  const { children } = propsChildren;
  const products = useFetch<ProductData[]>(
    "GET",
    "https://fakestoreapi.com/products?limit=2"
  );

  return (
    <ShopContext.Provider
      value={{
        shopItems: products ? products : [],
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
