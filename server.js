import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let visitors = [];

app.post("/visitor", (req, res) => {
  const visitor = {
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    timestamp: new Date(),
  };
  visitors.push(visitor);
  res.json({ message: "Visitor logged", visitorCount: visitors.length });
});

app.get("/visitors", (req, res) => {
  res.json(visitors);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

