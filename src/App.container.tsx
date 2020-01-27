import React from 'react';
import App from './App.component';
import OrdersContext from './contexts/OrdersContext.container';

const AppContainer: React.FC = () => {
  return (
    <OrdersContext.Provider>
      <App />
    </OrdersContext.Provider>
  );
}

export default AppContainer;
