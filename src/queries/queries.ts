import axios from 'axios';
import { IItem, IRecipe } from '../contexts/OrdersContext.container';

const baseURL = 'https://demo5544737.mockable.io';

export interface IAPIOrder {
  pending: boolean;
  recipe: number;
}

declare interface IGetOrders {
  orders: Array<IAPIOrder>;
}

export const getOrders = () => {
  // return axios.get<IGetOrders>(`${baseURL}/orders`)
  return new Promise<{ data: IGetOrders }>((resolve) => resolve({
    data: {
      "orders": [
        {
          "pending": true,
          "recipe": 1
        },
        {
          "pending": true,
          "recipe": 1
        }
      ]
    }
  }))
}

declare interface IGetItems {
  itens: Array<IItem>;
}
export const getItems = () => {
  // return axios.get<IGetItems>(`${baseURL}/items`);
  return new Promise<{data: IGetItems}>((resolve) => resolve({
    data: {
      "itens": [
        {
          "name": "item1",
          "qty": "10",
          "colors": [
            "red",
            "blue"
          ],
          "id": 1
        },
        {
          "name": "item2",
          "qty": "10",
          "colors": [
            "green",
            "purple"
          ],
          "id": 2
        },
        {
          "name": "item3",
          "qty": "10",
          "colors": [
            "red",
            "yellow"
          ],
          "id": 3
        },
        {
          "name": "item4",
          "qty": "10",
          "colors": [
            "white",
            "cyan"
          ],
          "id": 4
        },
        {
          "name": "item5",
          "qty": "10",
          "id": 5
        }
      ]
    }
  }))
}

declare interface IGetRecipes {
  recipes: Array<IRecipe>;
}
export const getRecipes = () => {
  // return axios.get<IGetRecipes>(`${baseURL}/recipes`);
  return new Promise<{ data: IGetRecipes }>((resolve) => resolve({
    data: {
      "recipes": [
        {
          "id": 1,
          "name": "odd items",
          "items": [
            {
              "id": 1,
              "quntity": 2
            },
            {
              "id": 3,
              "quntity": 3
            },
            {
              "id": 5,
              "quntity": 1
            }
          ]
        },
        {
          "id": 2,
          "name": "even items",
          "items": [
            {
              "id": 2,
              "quntity": 4
            },
            {
              "id": 4,
              "quntity": 3
            }
          ]
        }
      ]
    }
  }))
}


