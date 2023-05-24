import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes, userRoutes } from "./Routes/shop.routes";
import NavBar from "./Components/NavBar";
import { ShoppingCartProvider } from "./Context/CartContext";
import { ShopContextProvider } from "./Context/ShopContext";

const AppRoutes = () => {
  const routes = useRoutes([...shopRoutes, ...userRoutes] as RouteObject[]);
  console.log(routes);
  return routes;
};

function App() {
  return (
    <ShopContextProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
        </BrowserRouter>
      </ShoppingCartProvider>
    </ShopContextProvider>
  );
}

export default App;
