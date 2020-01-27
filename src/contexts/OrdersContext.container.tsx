import React, { useEffect, useState, createContext } from 'react';
import Order, { status } from '../helpers/Order';
import { getOrders, getItems, getRecipes } from '../queries/queries';

declare interface IOrdersContext {
  orders: Array<Order>;
  recipes: Array<IRecipe>
  items: Array<IItem>;
  updateOrder: (order: Order) => void;
  updateItem: (item: IItem) => void;
  orderRecipe: (recipe: IRecipe) => void;
}

export interface IItem {
  name: string;
  qty: string;
  colors?: Array<String>;
  id: number;
}

export interface IRecipe {
  id: number,
  name: string;
  items: Array<{ id: number, quntity: number }>;
}
const initialState: IOrdersContext = { recipes: [], orders: [], updateOrder: (_: Order) => {}, items: [], updateItem: (item: IItem) => {}, orderRecipe: ( recipe: IRecipe) => {} };

const OrdersContext = createContext<IOrdersContext>(initialState);

const Provider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [items, setItems] = useState<Array<IItem>>([]);
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);
  const [loading, setLoading] = useState(false);

  const updateOrder = (orderToUpdate: Order) => {
    setOrders(orders => {
      const filteredOrders = orders.filter(order => order.id !== orderToUpdate.id);
      filteredOrders.push(orderToUpdate);
      return filteredOrders;
    });
    // If the order was cancelled, upddate the items inventory
    if (orderToUpdate.status === status.CANCELLED) {
      const recipe = recipes.find(recipe => recipe.id === orderToUpdate.recipe);
      let updatedItems = [...items];
      recipe?.items.forEach(recipeItem => {
        updatedItems = updatedItems.reduce((acc, item) => {
          if (item.id === recipeItem.id) {
            item.qty = String(Number(item.qty) + recipeItem.quntity);
          }
          acc.push(item);
          return acc;
        },Array<IItem>())
      })
      setItems(updatedItems);
    }
  };

  const updateItem = (itemToUpdate: IItem) => {
    setItems(items => {
      const filteredItems = items.filter(item => item.id !== itemToUpdate.id);
      filteredItems.push(itemToUpdate);
      return filteredItems;
    })
  };

  const orderRecipe = (recipe: IRecipe) => {
    const order = new Order({ pending: true, recipe: recipe.id }, updateOrder);
    setOrders(orders => [...orders, order]);
    let updatedItems = [...items];
    recipe?.items.forEach(recipeItem => {
      updatedItems = updatedItems.reduce((acc, item) => {
        if (item.id === recipeItem.id) {
          item.qty = String(Number(item.qty) - recipeItem.quntity);
        }
        acc.push(item);
        return acc;
      },Array<IItem>())
    })
    setItems(updatedItems);
  };

  const loadData = async () => {
    try {
      const [{ data: ordersData }, { data: itemsData }, { data: recipesData }] = await Promise.all([getOrders(), getItems(), getRecipes()]);
      const orders = ordersData.orders.map(order => new Order(order, updateOrder));
      setRecipes(recipesData.recipes);
      setItems(itemsData.itens);
      setOrders(orders);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  return <OrdersContext.Provider value={{ recipes, orders, updateOrder, items, updateItem, orderRecipe }}>{loading ? 'Loading...' : children}</OrdersContext.Provider>;
}

export default {
  Provider,
  Consumer: OrdersContext.Consumer,
  UseContext: OrdersContext
}