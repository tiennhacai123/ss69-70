// App.tsx
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const notification = useSelector((state: RootState) => state.notification);

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      {notification && <div className="alert alert-success">{notification}</div>}
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ProductList />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
