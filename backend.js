const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const BOOKINGS_FILE = './bookings.json';

let bookings = [];
if (fs.existsSync(BOOKINGS_FILE)) {
  const data = fs.readFileSync(BOOKINGS_FILE);
  bookings = JSON.parse(data);
}

function saveBookings() {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

app.post('/book', (req, res) => {
  const { customerName, phone, amount } = req.body;
  const newBooking = {
    id: bookings.length + 1,
    customerName,
    phone,
    amount,
    paymentMethod: 'cashapp',
    status: 'PENDING_PAYMENT'
  };
  bookings.push(newBooking);
  saveBookings();
  res.json({ success: true, booking: newBooking });
});

app.post('/confirm-payment', (req, res) => {
  const { id } = req.body;
  const booking = bookings.find(b => b.id === id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  booking.status = 'PAID_CONFIRMED';
  saveBookings();
  res.json({ success: true, booking });
});

app.get('/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:3000`));

