import React, { useContext } from 'react';
import OrdersContext, { IRecipe } from '../../../contexts/OrdersContext.container';
import Recipe from './Recipe.component';
import { status } from '../../../helpers/Order';

declare interface IRecipeProps {
  recipe: IRecipe;
}

const RecipeContainer: React.FC<IRecipeProps> = ({ recipe }) => {
  const { items, orders, orderRecipe } = useContext(OrdersContext.UseContext);
  const onClick = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    orderRecipe(recipe)
  }
  const total = orders.reduce((acc, item) => {
    if (item.recipe === recipe.id && item.status !== status.CANCELLED) {
      ++acc;
    }
    return acc;
  }, 0);
  const disabled = !recipe.items.every(recipeItem => {
    const item = items.find(item => item.id === recipeItem.id);
    return Number(item?.qty) >= recipeItem.quntity;
  });
  return <Recipe recipe={recipe} onClick={onClick} disabled={disabled} total={total} />
}

export default RecipeContainer;
