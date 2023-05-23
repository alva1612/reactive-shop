import { NavLink } from "react-router-dom";
import { NavMenu, shopRoutes, userRoutes } from "../../Routes/shop.routes";

interface NavMenuProps {
  menuItems: NavMenu[]
}
const NavMenu = (props: NavMenuProps) => {
  const { menuItems } = props
  return (
    <ul className="flex gap-5">
      {menuItems.map((item) => (
        <li className="min-w-fit" key={item.path}>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}


const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <NavMenu menuItems={shopRoutes} />
      <NavMenu menuItems={userRoutes} />
    </nav>
  );
};

export default NavBar;
