import React from 'react';

function Checkout({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (idx) => {
    const newCart = [...cart];
    newCart.splice(idx, 1);
    setCart(newCart);
  };

  const handleQuantityChange = (idx, qty) => {
    const newCart = [...cart];
    newCart[idx].quantity = parseInt(qty) || 1;
    setCart(newCart);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - ${item.price} x 
              <input 
                type="number" 
                value={item.quantity} 
                min="1" 
                onChange={(e) => handleQuantityChange(idx, e.target.value)} 
                style={{ width: 50, marginLeft: 5, marginRight: 5 }}
              />
              = ${item.price * item.quantity}
              <button 
                onClick={() => handleRemove(idx)} 
                style={{ marginLeft: 10, color: 'red' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total: ${total}</strong></p>
    </div>
  );
}

export default Checkout;
