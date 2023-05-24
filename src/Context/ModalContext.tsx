import { PropsWithChildren, createContext, useState } from "react";
import { ProductData } from "../Pages/Home";

type ProductDetail =
  | { display: true; product: ProductData }
  | { display: false };

interface ModalContextValue {
  productDetail: ProductDetail;
  handleDisplayDetail: (prod: ProductData) => void;
  handleCloseDetail: () => void;
}

const defaultValue: ModalContextValue = {
  productDetail: { display: false },
  handleCloseDetail: () => {
    throw new Error();
  },
  handleDisplayDetail: () => {
    throw new Error();
  },
};

export const ModalContext = createContext(defaultValue);

export const ModalProvider = (propsChildren: PropsWithChildren) => {
  const [displayDetail, setDisplayDetail] = useState<ProductDetail>({
    display: false,
  });

  const handleDisplayDetail = (product: ProductData) => {
    setDisplayDetail({ display: true, product });
  };

  const handleCloseDetail = () => {
    setDisplayDetail({ display: false });
  };

  return (
    <ModalContext.Provider
      value={{
        handleCloseDetail,
        handleDisplayDetail,
        productDetail: displayDetail,
      }}
    >
      {propsChildren.children}
    </ModalContext.Provider>
  );
};
