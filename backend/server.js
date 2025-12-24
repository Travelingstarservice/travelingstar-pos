const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('Backend is live!');
});

// Offers API (example)
app.get('/api/offers', (req, res) => {
  res.json({
    offers: [
      { title: 'Ad 1', description: 'Special Service Available' },
      { title: 'Ad 2', description: 'Limited Time Offer' }
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

