// components/Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateCartItem, removeFromCart } from '../reducers/cartReducer';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateCart = (id: number, quantity: string) => {
    dispatch(updateCartItem({ id, quantity: parseInt(quantity, 10) }));
  };

  const handleRemoveFromCart = (id: number, price: number, quantity: number) => {
    dispatch(removeFromCart({ id, price, quantity }));
    dispatch({ type: 'SET_NOTIFICATION', payload: 'Delete cart successfully' });
    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, 3000);
  };

  return (
    <div>
      <h1>Giỏ Hàng Của Bạn</h1>
      {cart.items.length === 0 ? (
        <p>Empty product in your cart</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price} USD</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateCart(item.id, e.target.value)}
                    min="1"
                  />
                </td>
                <td>
                  <button onClick={() => handleRemoveFromCart(item.id, item.price, item.quantity)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Tổng số sản phẩm: {cart.items.length}</td>
              <td>Tổng tiền: {cart.total} USD</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
