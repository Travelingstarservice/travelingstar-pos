import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
      <h1>⭐ Traveling Star Service</h1>
      <p>Transport & On-Demand Services</p>
      <p>Book your service today.</p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Transportation, delivery, roadside assistance, cleanouts, and more.</p>
    </div>
  );
}

function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <p>Affordable rates. Custom quotes available.</p>
    </div>
  );
}

function Booking() {
  return (
    <div>
      <h1>Book Service</h1>
      <p>Online booking form coming next.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Customer Dashboard</h1>
      <p>View your service requests here.</p>
    </div>
  );
}

function OwnerLogin() {
  return (
    <div>
      <h1>Owner Login</h1>
      <p>Owner management area.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/owner" element={<OwnerLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;