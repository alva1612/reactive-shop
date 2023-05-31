import { RouteObject } from "react-router-dom";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import SignIn from "../Pages/SignIn";
import MyOrders from "../Pages/MyOrders";

interface NavMenuProps {
  label: string;
  order: number;
}

export type NavMenu = {
  [K in keyof RouteObject]: RouteObject[K];
} & NavMenuProps & { path: string };

export const shopRoutes: NavMenu[] = [
  { path: "/", element: <Home />, label: "Home", order: 0 },
  { path: "/furniture", label: "Furniture", order: 1 },
  { path: "/electronics", label: "Electronics", order: 2 },
  { path: "/toys", label: "Toys", order: 3 },
  { path: "/others", label: "Others", order: 4 },
];

export const userRoutes: NavMenu[] = [
  { path: "/account", element: <MyAccount />, label: "My Account", order: 99 },
  { path: "/order", element: <MyOrder />, label: "My Order", order: 98 },
  {
    path: "/my-orders/last",
    element: <MyOrders />,
    label: "My Orders",
    order: 97,
  },
  { path: "/sign-in", element: <SignIn />, label: "Sign In", order: 96 },
];
