import React from 'react';
import moment from 'moment';
import Order, { status } from '../../helpers/Order';
import classes from './OrdersGrid.module.scss';

declare interface IOrdersGridProps {
  orders: Array<Order>
  cancelOrder: (order: Order) => () => void;
  fulfillOrder: (order: Order) => () => void;
}
const OrdersGrid: React.FC<IOrdersGridProps> = ({ orders, cancelOrder, fulfillOrder }) => (
  <div className={classes.wrapper}>
    <h4>Orders</h4>
    <div className={classes.grid}>
      <div>
        <h5>Recipe</h5>
        <h5>Time</h5>
        <h5>Status</h5>
        <h5>Action</h5>
      </div>
      { orders.map(order => (
        <div key={order.id}>
          <p>{order.recipe}</p>
          <p>{moment(order.createdAt).format('h:mm:ss a')}</p>
          <p>{order.status}</p>
          { order.status === status.PENDING
            ? <i className={`material-icons ${classes.cancel}`} onClick={cancelOrder(order)}>cancel</i>
            : <i className={`material-icons ${classes.fulfill}`} onClick={fulfillOrder(order)}>check_circle</i>
          }
        </div>
      ))}
    </div>
  </div>
)

export default OrdersGrid;
