import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const API_URL = "https://travelingstar-pos.onrender.com";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));

    fetch(`${API_URL}/customers`)
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);

  const handleBuy = (product) => {
    alert(`Buy Now clicked for ${product.name} — $${product.price}`);
    // Here you can later integrate CashApp/Stripe payment link
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Products / Services</h1>
      <ul>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: "20px" }}>
            {p.name} — ${p.price}
            <button onClick={() => handleBuy(p)} style={{ marginLeft: "10px" }}>
              Buy Now
            </button>
            <div style={{ marginTop: "10px" }}>
              <QRCode value={`Buy ${p.name} for $${p.price}`} size={128} />
            </div>
          </li>
        ))}
      </ul>

      <h1>Customers</h1>
      <ul>
        {customers.map(c => (
          <li key={c.id}>{c.name} — {c.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
