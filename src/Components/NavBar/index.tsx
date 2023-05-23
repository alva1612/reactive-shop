import { NavLink } from "react-router-dom";
import { shopRoutes } from "../../Routes/shop.routes";

const NavBar = () => {
  return (
    <nav>
      <ul>
        {shopRoutes.map((route) => (
          <li>
            <NavLink to={route.path}>{route.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
