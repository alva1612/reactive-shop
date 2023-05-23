import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes, userRoutes } from "./Routes/shop.routes";
import "./App.css";
import NavBar from "./Components/NavBar";

const AppRoutes = () => {
  const routes = useRoutes([...shopRoutes, ...userRoutes] as RouteObject[]);
  console.log(routes)
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
