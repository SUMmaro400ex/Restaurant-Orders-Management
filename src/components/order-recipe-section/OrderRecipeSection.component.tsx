import React from 'react';
import { IRecipe } from '../../contexts/OrdersContext.container';
import Recipe from './recipe/Recipe.container';
import classes from './OrderRecipeSection.module.scss';

declare interface IOrderRecipeSectionProps {
  recipes: Array<IRecipe>;
}
const OrderRecipeSection: React.FC<IOrderRecipeSectionProps> = ({ recipes }) => (
  <div className={classes.wrapper}>
    { recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
  </div>
)

export default OrderRecipeSection;