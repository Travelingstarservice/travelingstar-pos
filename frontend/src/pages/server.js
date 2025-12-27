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

