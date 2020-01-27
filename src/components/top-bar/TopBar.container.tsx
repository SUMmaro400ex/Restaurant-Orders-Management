import React, { useContext } from 'react';
import TopBar from './TopBar.component';
import OrdersContext from '../../contexts/OrdersContext.container';

const TopBarContainer: React.FC = () => {
  const { orders } = useContext(OrdersContext.UseContext);
  const { Pending: pending, 'In Progress': inProgress, cancelled, fulfilled } = orders.reduce((acc, order) => {
    ++acc[order.status];
    return acc;
  }, {'Pending':  0, 'In Progress': 0, cancelled: 0, fulfilled: 0})
  return <TopBar pending={pending} inProgress={inProgress} cancelled={cancelled} fulfilled={fulfilled} />
};

export default TopBarContainer;
