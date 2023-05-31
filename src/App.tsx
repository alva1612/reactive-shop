import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes, userRoutes } from "./Routes/shop.routes";
import NavBar from "./Components/NavBar";
import { ShoppingCartProvider } from "./Context/CartContext";
import { ShopContextProvider } from "./Context/ShopContext";
import { ModalProvider } from "./Context/ModalContext";
import Cart from "./Components/Cart";
import { OrderProvider } from "./Context/OrderContext";
import React from "react";

const AppRoutes = () => {
  const routes = useRoutes([...shopRoutes, ...userRoutes] as RouteObject[]);
  return routes;
};

function App() {
  return (
    <React.StrictMode>
      <ModalProvider>
        <ShopContextProvider>
          <ShoppingCartProvider>
            <OrderProvider>
              <BrowserRouter>
                <NavBar />
                <AppRoutes />
                <Cart />
              </BrowserRouter>
            </OrderProvider>
          </ShoppingCartProvider>
        </ShopContextProvider>
      </ModalProvider>
    </React.StrictMode>
  );
}

export default App;
