require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is running!'));
app.get('/api/test', (req, res) => res.json({ message: 'API works!' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
const nodemailer = require("nodemailer");

app.post("/api/book", async (req, res) => {
  const { name, phone, service } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "info@travelingstartransport.com",
    subject: "New Booking",
    text: `Name: ${name}\nPhone: ${phone}\nService: ${service}`,
  });

  res.json({ message: "Booking request sent!" });
});

