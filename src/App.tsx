import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { shopRoutes, userRoutes } from "./Routes/shop.routes";
import "./App.css";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";

const AppRoutes = () => {
  const routes = useRoutes([...shopRoutes, ...userRoutes] as RouteObject[]);
  console.log(routes)
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
