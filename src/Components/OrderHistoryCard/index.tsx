import { PropsWithChildren } from "react";
import { Order } from "../../Context/OrderContext";

interface OrderAsProp {
  order: Order;
}

export const OrderHistoryCard = (props: PropsWithChildren<OrderAsProp>) => {
  const { order } = props;
  const { orderItems, id, orderTotal, orderTotalPrice } = order;

  return (
    <div className="flex relative" key={id}>
      <img
        className="rounded-lg border shadow-sm h-[5rem] aspect-square object-cover"
        src={orderItems[0].image}
        alt={orderItems[0].title}
      />
      <div className="flex flex-col">
        <h2 className="font-medium text-lg titleClamp">Orden #{id}</h2>
        <div>
          <p>{orderTotalPrice}</p>
          <p>{orderTotal}</p>
        </div>
      </div>
    </div>
  );
};
