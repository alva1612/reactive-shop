import { AiFillPlusCircle } from "react-icons/ai";
import "./Card.css";
import { PropsWithChildren, useContext } from "react";
import { ProductData } from "../../Pages/Home";
import { CartContext } from "../../Context/CartContext";
import { ModalContext } from "../../Context/ModalContext";
const ProductCard = (props: PropsWithChildren<ProductData>) => {
  const { handleDisplayDetail } = useContext(ModalContext);
  const { handleAddToCart } = useContext(CartContext);
  const { children, ...product } = props;

  return (
    <div
      className="flex flex-col gap-3 align-items-between 
        w-full h-80 rounded-lg transition ease-in-out hover:bg-cyan-200/20 
          border border-slate-200 cursor-pointer Card-Container"
      onClick={() => handleDisplayDetail(product)}
    >
      <figure className="relative mb-2 w-full rounded-t-lg h-1/2 overflow-hidden">
        <img
          alt="headphones"
          className="z-0 h-full w-full object-center object-cover"
          src={props.image}
        />
      </figure>
      <div className="flex flex-col flex-grow px-4 justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-medium">{props.title}</p>
          <small className="text-base text-slate-500">{props.category}</small>
        </div>
        <div className="flex justify-between pb-2">
          <div className="flex">
            <p className="text-lg font-semibold leading-8">{props.price}</p>
            {children ? <span></span> : null}
          </div>
          <button
            className="flex justify-center items-center text-[2rem] text-cyan-500 cursor-pointer"
            onClick={() => handleAddToCart(product)}
          >
            <AiFillPlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
