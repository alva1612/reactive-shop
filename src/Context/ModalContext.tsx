import { PropsWithChildren, createContext, useState } from "react";
import { ProductData } from "../Pages/Home";
import { ERROR, throwDefaultContext } from "../Constants/ErrorMessages";

type ProductDetail =
  | { display: true; product: ProductData }
  | { display: false };

type Cart = { display: boolean };

interface ModalContextValue {
  productDetail: ProductDetail;
  handleDisplayDetail: (prod: ProductData) => void;
  handleCloseDetail: () => void;
  cart: Cart;
  handleDisplayCart: () => void;
  handleCloseCart: () => void;

  handleCloseAll: () => void;
}

const defaultValue: ModalContextValue = {
  productDetail: { display: false },
  handleCloseDetail: () => {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
  handleDisplayDetail: () => {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
  cart: { display: false },
  handleCloseCart() {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
  handleDisplayCart() {
    throw new Error(ERROR.CONTEXT_DEFAULT);
  },
  handleCloseAll: throwDefaultContext,
};

export const ModalContext = createContext(defaultValue);

export const ModalProvider = (propsChildren: PropsWithChildren) => {
  const [displayDetail, setDisplayDetail] = useState<ProductDetail>({
    display: false,
  });
  const [displayCart, setDisplayCart] = useState<Cart>({
    display: false,
  });

  const handleDisplayDetail = (product: ProductData) => {
    handleCloseAll();
    setDisplayDetail({ display: true, product });
  };

  const handleCloseDetail = () => {
    setDisplayDetail({ display: false });
  };

  const handleDisplayCart = () => {
    handleCloseAll();
    setDisplayCart({ display: true });
  };
  const handleCloseCart = () => {
    setDisplayCart({ display: false });
  };

  const handleCloseAll = () => {
    handleCloseCart();
    handleCloseDetail();
  };

  return (
    <ModalContext.Provider
      value={{
        handleCloseDetail,
        handleDisplayDetail,
        productDetail: displayDetail,
        handleCloseAll,
        handleCloseCart,
        handleDisplayCart,
        cart: displayCart,
      }}
    >
      {propsChildren.children}
    </ModalContext.Provider>
  );
};
