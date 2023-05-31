import { useContext } from "react";
import Layout from "../../Components/Layout";
import { OrderContext } from "../../Context/OrderContext";
import { CartItemCard } from "../../Components/Cart";

function MyOrder() {
  const { order } = useContext(OrderContext);

  const last = order[order.length - 1];

  return (
    <Layout>
      <ul className="flex flex-col gap-5 my-5">
        {last?.orderItems.length <= 0 ? <p>Vacío</p> : <></>}
        {last?.orderItems.map((product) => (
          <CartItemCard product={product} key={product.id} />
        ))}
      </ul>
    </Layout>
  );
}

export default MyOrder;
