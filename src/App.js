import React, { useState } from 'react';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import InfoPopup from './components/InfoPopup';
import SalesLog from './components/SalesLog';

function App() {
  const [cart, setCart] = useState([]);
  const [sales, setSales] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if(existing){
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const handlePayment = () => {
    if(cart.length === 0){
      alert("Your cart is empty!");
      return;
    }
    setSales([...sales, ...cart]);
    setCart([]);
    alert("Payment successful via Cash App!");
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <InfoPopup />
      <h1>Traveling Star POS</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 2, marginRight: 20 }}>
          <Products addToCart={addToCart} />
        </div>
        <div style={{
          flex: 1,
          border: '1px solid #ccc',
          padding: 20,
          borderRadius: 10,
          height: 'fit-content'
        }}>
          <Checkout cart={cart} setCart={setCart} />
          <button
            onClick={handlePayment}
            style={{
              marginTop: 20,
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer'
            }}
          >
            Pay with Cash App
          </button>
        </div>
      </div>
      <SalesLog sales={sales} />
    </div>
  );
}

export default App;
