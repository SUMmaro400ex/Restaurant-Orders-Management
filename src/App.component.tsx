import React from 'react';
import classes from './App.module.scss';
import { TopBar, PendingOrdersGrid, ItemsGrid, OrderRecipeSection } from './components';
const App: React.FC = () => (
  <div className={classes.wrapper}>
    <TopBar />
    <PendingOrdersGrid />
    <ItemsGrid />
    <OrderRecipeSection />
  </div>
)

export default App;
