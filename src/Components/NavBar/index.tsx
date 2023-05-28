import { NavLink } from "react-router-dom";
import { NavMenu, shopRoutes, userRoutes } from "../../Routes/shop.routes";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BsFillCartFill } from "react-icons/bs";
import { ModalContext } from "../../Context/ModalContext";

interface NavMenuProps {
  menuItems: NavMenu[];
}
const NavMenu = (props: NavMenuProps) => {
  const { menuItems } = props;

  return (
    <ul className="flex gap-5 p-5">
      {menuItems.map((item) => (
        <li className="min-w-fit" key={item.path}>
          <NavLink
            className={({ isActive }) => (isActive ? "text-cyan-500" : "")}
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const { cartTotal } = useContext(CartContext);
  const { handleDisplayCart } = useContext(ModalContext);
  return (
    <nav className="flex justify-between fixed top-0 w-screen">
      <NavMenu menuItems={shopRoutes} />
      <NavMenu menuItems={userRoutes} />
      <div onClick={handleDisplayCart}>
        <BsFillCartFill />
        <span>{cartTotal}</span>
      </div>
    </nav>
  );
};

export default NavBar;
