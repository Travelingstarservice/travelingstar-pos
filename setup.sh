#!/bin/bash
# ================================================
# Traveling Star Transport Setup Script
# Creates backend + frontend, multi-page React site,
# Products with pricing, builds and prepares for Render
# ================================================

echo "=== Starting setup script ==="

# ---------------- Backend Setup ----------------
echo "Setting up backend..."
cd backend || exit

# Clean unwanted files
git rm -r --cached node_modules 2>/dev/null
git rm --cached .DS_Store 2>/dev/null
rm -f server.js.bak package.json.bak 2>/dev/null

# .gitignore
echo -e "node_modules/\n.DS_Store" > .gitignore

# .env for backend
cat > .env <<EOL
PORT=10000
NODE_ENV=production
DATABASE_URL=postgres://username:password@hostname:5432/dbname
JWT_SECRET=SuperSecretKey123!
EOL

# server.js
cat > server.js <<'EOL'
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is running!'));
app.get('/api/test', (req, res) => res.json({ message: 'API works!' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
EOL

npm install
git add server.js package.json package-lock.json .env .gitignore
git commit -m "Backend ready for deployment" || echo "No changes to commit"
git push origin main

echo "Backend setup complete."

# ---------------- Frontend Setup ----------------
echo "Setting up frontend..."
cd ../frontend || exit

mkdir -p src/components src/pages

# Navbar
cat > src/components/Navbar.jsx <<'EOL'
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#003366", padding: "1em", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "1em" }}>Home</Link>
      <Link to="/book" style={{ color: "white", marginRight: "1em" }}>Book</Link>
      <Link to="/about" style={{ color: "white", marginRight: "1em" }}>About</Link>
      <Link to="/products" style={{ color: "white" }}>Products</Link>
    </nav>
  );
}
EOL

# Footer
cat > src/components/Footer.jsx <<'EOL'
import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#003366", color: "white", textAlign: "center", padding: "1em 0", marginTop: "2em" }}>
      © Traveling Star Transport — Call: (252) 969-2444
    </footer>
  );
}
EOL

# Home
cat > src/pages/Home.jsx <<'EOL'
import React from "react";

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>Welcome to Traveling Star Transport</h1>
      <p>Fast, safe, and dependable transportation in your area. Airport pickups, hourly rides, and special event transport.</p>
      <h2>Our Services</h2>
      <ul>
        <li>Airport pickups & drop-offs</li>
        <li>Hourly charters & events</li>
        <li>Medical & non-emergency transport</li>
        <li>Package & small cargo deliveries</li>
      </ul>
    </div>
  );
}
EOL

# Book
cat > src/pages/Book.jsx <<'EOL'
import React from "react";

export default function Book() {
  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>Book a Ride</h1>
      <p>Call <strong>(252) 969-2444</strong> or email <a href="mailto:info@travelingstartransport.com">info@travelingstartransport.com</a> to book your ride.</p>
      <p>We handle airport pickups, hourly events, and special transportation requests.</p>
    </div>
  );
}
EOL

# About
cat > src/pages/About.jsx <<'EOL'
import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>About Us</h1>
      <p>Traveling Star Transport is a local company committed to safe and reliable transportation. Our drivers are experienced and our vehicles are clean and well-maintained.</p>
    </div>
  );
}
EOL

# Products with pricing
cat > src/pages/Products.jsx <<'EOL'
import React from "react";

export default function Products() {
  const services = [
    { name: "Airport Pickup / Drop-off", price: "$50" },
    { name: "Hourly Charter / Events", price: "$40 per hour" },
    { name: "Medical / Non-emergency Transport", price: "$60" },
    { name: "Package / Small Cargo Delivery", price: "$25" },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "2em auto", padding: "0 1em" }}>
      <h1 style={{ color: "#003366" }}>Products / Services</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #003366", padding: "0.5em" }}>Service</th>
            <th style={{ border: "1px solid #003366", padding: "0.5em" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #003366", padding: "0.5em" }}>{service.name}</td>
              <td style={{ border: "1px solid #003366", padding: "0.5em" }}>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
EOL

# App.jsx
cat > src/App.jsx <<'EOL'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
EOL

# Frontend .env
cat > .env <<EOL
REACT_APP_API_URL=https://travelingstar-pos-9.onrender.com
EOL

# Install frontend dependencies and build
npm install
npm run build

git add .
git commit -m "Frontend React multi-page build with pricing" || echo "No changes to commit"
git push origin main

echo "=== Setup complete! Backend and frontend ready for Render deployment ==="

