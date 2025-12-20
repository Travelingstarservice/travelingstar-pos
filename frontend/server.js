// Simple Node.js backend for bookings
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let bookings = []; // In-memory store

// Add a booking
app.post('/bookings', (req, res) => {
  bookings.push(req.body);
  res.json({ success: true });
});

// Get all bookings (for admin POS)
app.get('/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

app.post('/bookings', (req, res) => {
  bookings.push(req.body);
  res.json({ success: true });
});
app.get('/bookings', (req, res) => {
  res.json(bookings);
});
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});


