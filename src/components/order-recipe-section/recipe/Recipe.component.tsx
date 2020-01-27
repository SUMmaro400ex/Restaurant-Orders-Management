import React from 'react';
import { IRecipe } from '../../../contexts/OrdersContext.container';
import classes from './Recipe.module.scss';

declare interface IRecipeProps {
  recipe: IRecipe;
  total: number;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Recipe: React.FC<IRecipeProps> = ({ recipe, disabled, total, onClick }) => (
  <div className={classes.wrapper}>
    <div>{recipe.name}</div>
    <div>Total Ordered: {total}</div>
    <button disabled={disabled} onClick={onClick}>Order</button>
  </div>
)
export default Recipe;