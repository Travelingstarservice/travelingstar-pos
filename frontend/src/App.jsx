import { useEffect, useState } from "react";

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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Products / Services</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} — ${p.price}</li>
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
