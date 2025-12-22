const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

const BOOKINGS_FILE = 'bookings.json';

let bookings = [];
if (fs.existsSync(BOOKINGS_FILE)) {
  bookings = JSON.parse(fs.readFileSync(BOOKINGS_FILE));
}

function saveBookings() {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

app.post('/book', (req, res) => {
  const { customerName, phone, amount } = req.body;
  const id = bookings.length + 1;
  const booking = { id, customerName, phone, amount, status: 'PENDING_PAYMENT', assignment: '' };
  bookings.push(booking);
  saveBookings();
  res.json({ success: true, booking });
});

app.post('/confirm-payment', (req, res) => {
  const { id } = req.body;
  const booking = bookings.find(b => b.id === id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  booking.status = 'PAID';
  saveBookings();
  res.json({ success: true, booking });
});

app.get('/bookings', (req, res) => res.json(bookings));

app.post('/update-assignment', (req, res) => {
  const { id, assignment } = req.body;
  const booking = bookings.find(b => b.id === id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  booking.assignment = assignment;
  saveBookings();
  res.json({ success: true, booking });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

