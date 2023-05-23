import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes } from "./Routes/shop.routes";
import "./App.css";
import NavBar from "./Components/NavBar";

const AppRoutes = () => {
  const routes = useRoutes(shopRoutes as RouteObject[]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
