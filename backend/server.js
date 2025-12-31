const express = require('express');   // 1. Import express
const app = express();                 // 2. Create app instance
const PORT = process.env.PORT || 3000; // 3. Set port

app.use(express.json()); // Middleware to parse JSON

// Root test route
app.get('/', (req, res) => {
  res.send('Hello from TravelingStar POS backend!');
});

// POST route for rides
app.post('/api/rides', (req, res) => {
  const ride = req.body;
  console.log('New ride submitted:', ride);
  res.json({
    success: true,
    message: 'Ride submitted successfully',
    ride
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

