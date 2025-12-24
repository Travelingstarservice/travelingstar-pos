const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../frontend')));

// Log services in memory + file
let logs = [];
const logFile = path.join(__dirname,'service-log.json');

if(fs.existsSync(logFile)){
  logs = JSON.parse(fs.readFileSync(logFile));
}

// Endpoint to log service
app.post('/log-service',(req,res)=>{
  const { service } = req.body;
  const entry = new Date().toLocaleString() + ' → ' + service;
  logs.push(entry);
  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
  res.json({status:'ok', entry});
});

// Endpoint to fetch logs
app.get('/get-log',(req,res)=>{
  res.json(logs);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

// At the top of server.js
const bookings = [];
app.post("/create-booking", express.json(), (req, res) => {
  const { name, phone, service, amount } = req.body;
  if (!name || !phone || !service || !amount) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const datetime = new Date().toISOString().replace("T", " ").substring(0, 16);
  const booking = { name, phone, service, amount: Number(amount), datetime };
  
  bookings.push(booking);
  res.json({ success: true, booking });
});
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

