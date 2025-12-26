const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample products/services
const products = [
  { id: 1, name: "Star Necklace", price: 25 },
  { id: 2, name: "Galaxy Bracelet", price: 15 },
  { id: 3, name: "Cosmic Ring", price: 40 }
];

// Sample customers
const customers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// Routes
app.get("/", (req, res) => res.send("Backend is running"));
app.get("/products", (req, res) => res.json(products));
app.get("/customers", (req, res) => res.json(customers));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Backend running on port \${PORT}\`);
});
