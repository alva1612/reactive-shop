import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { handleCloseDetail, productDetail } = useContext(ModalContext);

  return (
    productDetail.display && (
      <aside
        className="w-[360px] flex flex-col fixed top-[68px] 
    rounded-lg right-[10px] border border-slate-200 ProductDetail-container py-2 px-2"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl">{productDetail.product.title}</h2>
          <button
            className="text-[2rem] text-cyan-500"
            onClick={handleCloseDetail}
          >
            <AiFillCloseCircle />
          </button>
        </div>
      </aside>
    )
  );
};

export default ProductDetail;
