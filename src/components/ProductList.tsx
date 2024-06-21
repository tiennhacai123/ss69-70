// components/ProductList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Product, addToCart } from '../reducers/cartReducer';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    const currentCartItem = cart.items.find(item => item.id === product.id);
    const quantityInCart = currentCartItem ? currentCartItem.quantity : 0;

    if (quantityInCart >= product.stock) {
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Số lượng sản phẩm vượt quá số lượng trong kho' });
    } else {
      dispatch(addToCart(product));
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Add to cart successfully' });
    }

    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, 3000);
  };

  return (
    <div>
      <h1>Danh Sách Sản Phẩm</h1>
      {products.map((product) => (
        <div key={product.id} className="media product">
          <div className="media-left">
            <img className="media-object" src={product.img} alt={product.name} />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{product.name}</h4>
            <p>{product.price} USD</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
