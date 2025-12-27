const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Booking route
app.post("/api/book", async (req, res) => {
  const { name, phone, service, date } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your business email
      subject: "New Booking Received",
      text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Booking request sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending booking request." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

