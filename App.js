import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  return (
    <div className="container">
      <h1>🛒 Redux Shopping Cart</h1>
      <div className="grid">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}