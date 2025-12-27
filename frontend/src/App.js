import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Book from "./pages/Book";
import Products from "./pages/Products";
import About from "./pages/About";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/pay" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

