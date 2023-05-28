import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes, userRoutes } from "./Routes/shop.routes";
import NavBar from "./Components/NavBar";
import { ShoppingCartProvider } from "./Context/CartContext";
import { ShopContextProvider } from "./Context/ShopContext";
import { ModalProvider } from "./Context/ModalContext";
import Cart from "./Components/Cart";

const AppRoutes = () => {
  const routes = useRoutes([...shopRoutes, ...userRoutes] as RouteObject[]);
  console.log(routes);
  return routes;
};

function App() {
  return (
    <ModalProvider>
      <ShopContextProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar />
            <AppRoutes />
            <Cart />
          </BrowserRouter>
        </ShoppingCartProvider>
      </ShopContextProvider>
    </ModalProvider>
  );
}

export default App;
