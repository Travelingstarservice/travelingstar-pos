import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DriverPortal from "./pages/DriverPortal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/driver" element={<DriverPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
