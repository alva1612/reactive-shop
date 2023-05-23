import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import MyAccount from "./Pages/MyAccount";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/account", element: <MyAccount /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
