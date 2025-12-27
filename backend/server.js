const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Product 1", description: "Description 1" },
  { id: 2, name: "Product 2", description: "Description 2" },
];

const customers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

app.get("/api/products", (req, res) => res.json(products));
app.get("/api/customers", (req, res) => res.json(customers));

app.post("/api/square-payment", (req, res) => {
  const { amount, customerId } = req.body;
  res.json({ status: "success", amount, customerId });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

