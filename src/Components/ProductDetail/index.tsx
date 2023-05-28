import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { handleCloseDetail, productDetail } = useContext(ModalContext);

  return (
    <>
      {productDetail.display && (
        <aside
          className="w-[360px] flex flex-col fixed z-10 top-[68px] 
    rounded-lg right-[10px] border border-slate-200 bg-slate-100 ProductDetail-container py-2 px-5"
        >
          <button
            className="text-[2rem] absolute text-cyan-500 flex justify-end action-button rounded-full 
          bg-white transition hover:shadow right-[0.5rem] top-[1rem]"
            onClick={handleCloseDetail}
          >
            <AiFillCloseCircle />
          </button>
          <figure className="flex flex-col gap-3 mt-3">
            <h2 className="font-medium text-xl">
              {productDetail.product.title}
            </h2>
            <img
              className="rounded-lg border shadow-sm aspect-square object-cover"
              src={productDetail.product.image}
              alt={productDetail.product.title}
            />
          </figure>
          <div className="flex">
            <div className="flex flex-col">
              <p>{productDetail.product.category}</p>
              <div>{productDetail.product.rating.rate}</div>
            </div>
            <div>
              <p>{productDetail.product.price}</p>
            </div>
          </div>
          <p>{productDetail.product.description}</p>
        </aside>
      )}
    </>
  );
};

export default ProductDetail;
