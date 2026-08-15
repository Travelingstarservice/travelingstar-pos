import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerDashboard from "./pages/OwnerDashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import OwnerLogin from "./pages/OwnerLogin";

function App() {
  return (
    <BrowserRouter basename="/travelingstar-pos">
      <div className="site-shell">
        <Navbar />
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/owner-login" element={<OwnerLogin />} />
            <Route path="/admin" element={<OwnerDashboard />} />
            <Route path="/dashboard" element={<OwnerDashboard />} />
            <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
