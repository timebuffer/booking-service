import React, { useState } from 'react';

const ProductList = ({ products, onRequestSubmit }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [address, setAddress] = useState('');

  const handleSelect = (product) => {
    if (!selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSubmit = () => {
    if (selectedProducts.length > 0 && address) {
      onRequestSubmit(selectedProducts, address);
      setSelectedProducts([]);
      setAddress('');
    }
  };

  return (
    <div>
      <h2>Select Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleSelect(product)}>Select</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  );
};

export default ProductList;
