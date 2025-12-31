const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const db = new sqlite3.Database('./rides.db', (err) => {
  if(err) console.error(err.message);
  else console.log('Connected to rides database.');
});

db.run(`CREATE TABLE IF NOT EXISTS rides (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  phone TEXT,
  pickup TEXT,
  dropoff TEXT,
  rideType TEXT,
  paymentStatus TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.post('/add-ride', (req, res) => {
  const { name, phone, pickup, dropoff, rideType, paymentStatus } = req.body;
  db.run(`INSERT INTO rides (name, phone, pickup, dropoff, rideType, paymentStatus) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, phone, pickup, dropoff, rideType, paymentStatus || 'Unpaid'],
    function(err){
      if(err) res.status(500).json({ error: err.message });
      else res.json({ success: true, rideId: this.lastID });
    });
});

app.get('/rides', (req, res) => {
  db.all(`SELECT * FROM rides ORDER BY timestamp DESC`, [], (err, rows) => {
    if(err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

app.post('/update-payment', (req, res) => {
  const { rideId, status } = req.body;
  db.run(`UPDATE rides SET paymentStatus = ? WHERE id = ?`, [status, rideId], function(err){
    if(err) res.status(500).json({ error: err.message });
    else res.json({ success: true });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
