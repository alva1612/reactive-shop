import { PropsWithChildren, useContext } from "react";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import { ModalContext } from "../../Context/ModalContext";
import { CartContext, CartItem } from "../../Context/CartContext";
import "./Cart.css";
import { Transform } from "../../Utils";

interface CartItemProps {
  product: CartItem;
}

const CartItem = (props: PropsWithChildren<CartItemProps>) => {
  const { handlePurgeFromCart } = useContext(CartContext);
  const { product } = props;

  return (
    <div className="flex relative" key={product.id}>
      <img
        className="rounded-lg border shadow-sm h-[5rem] aspect-square object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="flex flex-col">
        <h2 className="font-medium text-lg titleClamp">{product.title}</h2>
        <div>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </div>
      </div>
      <button
        className="absolute right-0 bottom-0"
        onClick={(event) => handlePurgeFromCart(event, product)}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

const Cart = () => {
  const { handleCloseCart, cart } = useContext(ModalContext);
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return cart.display ? (
    <aside
      className="w-[360px] flex flex-col fixed z-10 top-[68px] 
    rounded-lg right-[10px] border border-slate-200 bg-slate-100 py-2 px-5"
    >
      <button
        className="text-[2rem] absolute text-cyan-500 flex justify-end action-button rounded-full 
          bg-white transition hover:shadow right-[0.5rem] top-[1rem]"
        onClick={handleCloseCart}
      >
        <AiFillCloseCircle />
      </button>
      <h2 className="mt-5">Carrito</h2>
      <ul className="flex flex-col gap-5 my-5">
        {cartItems.length <= 0 ? <p>Vacío</p> : <></>}
        {cartItems.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </ul>
      {cartTotalPrice > 0 ? (
        <>
          <hr />
          <h2>Total {Transform.toDecimal(cartTotalPrice)}</h2>
        </>
      ) : (
        <></>
      )}
    </aside>
  ) : (
    <></>
  );
};

export default Cart;
