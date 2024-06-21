// reducers/index.ts
import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  notification: notificationReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
