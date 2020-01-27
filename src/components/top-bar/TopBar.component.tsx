import React from 'react';
import classes from './TopBar.module.scss';

declare interface ITopBarProps {
  pending: number;
  inProgress: number;
  cancelled: number;
  fulfilled: number;
}
const TopBar: React.FC<ITopBarProps> = ({ pending, inProgress, cancelled, fulfilled }) => (
  <div className={classes.wrapper}>
    <div>
      <h1>
        Restuarant Orders Management
      </h1>
    </div>
    <div className={classes.fulfilled}>
      <h5>Fulfilled</h5>
      <h4>{fulfilled}</h4>
    </div>
    <div className={classes.inProgress}>
      <h5>In Progress</h5>
      <h4>{inProgress}</h4>
    </div>
    <div className={classes.pending}>
      <h5>Pending</h5>
      <h4>{pending}</h4>
    </div>
    <div className={classes.cancelled}>
      <h5>Cancelled</h5>
      <h4>{cancelled}</h4>
    </div>
  </div>
)

export default TopBar;