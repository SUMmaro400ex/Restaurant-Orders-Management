import React, { useContext, useState } from 'react';
import OrdersContext from '../../contexts/OrdersContext.container';
import ItemsGrid from './ItemsGrid.component';

const ItemsGridContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const { items: unfilteredItems } = useContext(OrdersContext.UseContext);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const items = unfilteredItems.filter(item => item.colors?.join().includes(search));
  return <ItemsGrid items={items} onChange={onChange} />
}

export default ItemsGridContainer;