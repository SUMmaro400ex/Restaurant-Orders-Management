import React, { useContext } from 'react';
import OrdersContext from '../../contexts/OrdersContext.container';
import Order, { status } from '../../helpers/Order';
import OrdersGrid from './OrdersGrid.component';

const OrdersGridContainer: React.FC = () => {
  const { orders, updateOrder } = useContext(OrdersContext.UseContext)
  const pendingOrders = orders.filter(order => [status.PENDING, status.IN_PROGRESS].includes(order.status));
  const cancelOrder = (order: Order) => () => {
    order.cancel();
    updateOrder(order);
  }
  const fulfillOrder = (order: Order) => () => {
    order.fulfill();
    updateOrder(order);
  }
  return <OrdersGrid orders={pendingOrders} cancelOrder={cancelOrder} fulfillOrder={fulfillOrder} />
}

export default OrdersGridContainer;
