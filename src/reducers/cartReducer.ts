// reducers/cartReducer.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
};

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: Product;
}

interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART';
  payload: { id: number; price: number; quantity: number };
}

interface UpdateCartItemAction {
  type: 'UPDATE_CART_ITEM';
  payload: { id: number; quantity: number };
}

type CartActionTypes = AddToCartAction | RemoveFromCartAction | UpdateCartItemAction;

export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + product.price
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
          total: state.total + product.price
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.quantity
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
        total: state.items.reduce(
          (total, item) =>
            total + item.price * (item.id === action.payload.id ? action.payload.quantity : item.quantity),
          0
        )
      };
    default:
      return state;
  }
};

export const addToCart = (product: Product): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const removeFromCart = ({ id, price, quantity }: { id: number; price: number; quantity: number }): RemoveFromCartAction => ({
  type: 'REMOVE_FROM_CART',
  payload: { id, price, quantity }
});

export const updateCartItem = ({ id, quantity }: { id: number; quantity: number }): UpdateCartItemAction => ({
  type: 'UPDATE_CART_ITEM',
  payload: { id, quantity }
});
