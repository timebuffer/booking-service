import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { submitRequest } from '../services/api';

const products = [
  { id: 1, name: 'Lipstick' },
  { id: 2, name: 'Foundation' },
  { id: 3, name: 'Mascara' },
  { id: 4, name: 'Eyeliner' },
];

const UserPage = () => {
  const handleRequestSubmit = (selectedProducts, address) => {
    submitRequest(selectedProducts, address);
    alert('Request submitted!');
  };

  return (
    <div>
      <h1>User Page</h1>
      <ProductList products={products} onRequestSubmit={handleRequestSubmit} />
    </div>
  );
};

export default UserPage;
