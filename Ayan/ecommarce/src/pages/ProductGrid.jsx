/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard1 from './ProductCard1';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard1 key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
