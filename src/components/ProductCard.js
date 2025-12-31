import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: 20,
      margin: 10,
      borderRadius: 10,
      width: 180
    }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
