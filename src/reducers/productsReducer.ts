// reducers/productsReducer.ts
import { Product } from './cartReducer';

const initialState: Product[] = [
  { id: 1, name: 'Pizza', price: 30, img: 'src/images/pizza.jpg', stock: 10 },
  { id: 2, name: 'Hamburger', price: 15, img: 'src/images/Hamburger.jpg', stock: 20 },
  { id: 3, name: 'Bread', price: 20, img: 'src/images/bread.jpg', stock: 15 },
  { id: 4, name: 'Cake', price: 10, img: 'src/images/Cake.jpg', stock: 5 },
];

export const productsReducer = (state = initialState, action: any): Product[] => {
  switch (action.type) {
    default:
      return state;
  }
};
