import { RouteObject } from "react-router-dom";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import SignIn from "../Pages/SignIn";

interface NavBarProps {
  label: string;
  order: number;
  path: string;
}

type NavBar = {
  [K in keyof RouteObject]: RouteObject[K];
} & NavBarProps;

export const shopRoutes: NavBar[] = [
  { path: "/", element: <Home />, label: "Home", order: 0 },
  { path: "/account", element: <MyAccount />, label: "My Account", order: 99 },
  { path: "/order", element: <MyOrder />, label: "My Order", order: 98 },
  { path: "/history", label: "My History", order: 97 },
  { path: "/sign-in", element: <SignIn />, label: "Sign In", order: 96 },
  { path: "/furniture", label: "Furniture", order: 1 },
  { path: "/electronics", label: "Electronics", order: 2 },
  { path: "/toys", label: "Toys", order: 3 },
  { path: "/others", label: "Others", order: 4 },
];
