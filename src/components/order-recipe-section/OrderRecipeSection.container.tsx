import React, { useContext } from 'react';
import OrdersContext from '../../contexts/OrdersContext.container';
import OrderRecipeSection from './OrderRecipeSection.component';

const OrderRecipeSectionContainer: React.FC = () => {
  const { recipes } = useContext(OrdersContext.UseContext);
  return <OrderRecipeSection recipes={recipes} />
}

export default OrderRecipeSectionContainer;
