import React from 'react';
import classes from './ItemsGrid.module.scss';
import { IItem } from '../../contexts/OrdersContext.container';

declare interface IItemsGridProps {
  items: Array<IItem>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemsGrid: React.FC<IItemsGridProps> = ({ items, onChange }) => (
  <div className={classes.wrapper}>
    <div className={classes.header}>
      <h4>Items Inventory</h4>
      <input type="text" onChange={onChange} placeholder="Filter"></input>
    </div>
  <div className={classes.grid}>
    <div>
      <h5>Name</h5>
      <h5>Quantity</h5>
      <h5>Colors</h5>
    </div>
    { items.map(item => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.qty}</p>
        <p>{item.colors?.join(', ')}</p>
      </div>
    ))}
  </div>
</div>
)

export default ItemsGrid;
