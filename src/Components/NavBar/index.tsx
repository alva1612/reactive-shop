import { NavLink } from "react-router-dom";
import { NavMenu, shopRoutes, userRoutes } from "../../Routes/shop.routes";

interface NavMenuProps {
  menuItems: NavMenu[]
}
const NavMenu = (props: NavMenuProps) => {
  const { menuItems } = props
  return (
    <ul className="flex gap-5 p-5 text-teal-700">
      {menuItems.map((item) => (
        <li className="min-w-fit hover:text-teal-500" key={item.path}>
          <NavLink
            className={({ isActive }) => (isActive ? 'underline text-teal-500' : '')}
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
    <nav className="flex justify-between fixed top-0 w-screen">
      <NavMenu menuItems={shopRoutes} />
      <NavMenu menuItems={userRoutes} />
    </nav>
  );
};

export default NavBar;