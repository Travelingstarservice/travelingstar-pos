import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Products({ addToCart }) {
  const initialProducts = [
    { id: 1, name: 'Product A', price: 10, stock: 5 },
    { id: 2, name: 'Product B', price: 20, stock: 3 },
    { id: 3, name: 'Product C', price: 30, stock: 8 }
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleAdd = (product) => {
    if(product.stock <= 0){
      alert(`${product.name} is out of stock!`);
      return;
    }
    addToCart(product);
    setProducts(products.map(p => 
      p.id === product.id ? {...p, stock: p.stock - 1} : p
    ));
  };

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={handleAdd} />
        ))}
      </div>
    </div>
  );
}

export default Products;
