import React, { useContext } from 'react';
import TopBar from './TopBar.component';
import OrdersContext from '../../contexts/OrdersContext.container';

const TopBarContainer: React.FC = () => {
  const { orders } = useContext(OrdersContext.UseContext);
  const { pending, inProgress, cancelled, fulfilled } = orders.reduce((acc, order) => {
    ++acc[order.status];
    return acc;
  }, {pending:  0, inProgress: 0, cancelled: 0, fulfilled: 0})
  return <TopBar pending={pending} inProgress={inProgress} cancelled={cancelled} fulfilled={fulfilled} />
};

export default TopBarContainer;
