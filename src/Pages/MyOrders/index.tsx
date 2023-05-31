import { useContext } from "react";
import Layout from "../../Components/Layout";
import { OrderContext } from "../../Context/OrderContext";
import { OrderHistoryCard } from "../../Components/OrderHistoryCard";

function MyOrders() {
  const { order } = useContext(OrderContext);

  const lastOrder = order[order.length - 1];
  return (
    <Layout>
      <ul className="flex flex-col gap-5 my-5">
        {lastOrder?.orderItems.length <= 0 ? <p>Vacío</p> : <></>}
        {lastOrder?.orderItems.map((product) => (
          <OrderHistoryCard order={lastOrder} key={product.id} />
        ))}
      </ul>
    </Layout>
  );
}

export default MyOrders;
