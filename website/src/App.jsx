import "./App.css";

function App() {
  return (
    <div className="app">

      <header>
        <h1>⭐ Traveling Star Service</h1>
        <h2>Transport & On-Demand Services</h2>
      </header>

      <section className="hero">
        <h2>Reliable Transportation When You Need It</h2>
        <p>
          Local transportation, deliveries, errands, roadside assistance,
          and professional on-demand services.
        </p>

        <button>BOOK SERVICE</button>
        <button>CONTACT US</button>
      </section>

      <section>
        <h2>Our Services</h2>

        <div className="services">

          <div>🚗 Transportation</div>
          <div>📦 Package Delivery</div>
          <div>🛒 Pickup & Delivery</div>
          <div>🛠 Road Assistance</div>
          <div>✈ Airport Service</div>
          <div>📅 Event Transportation</div>

        </div>

      </section>

      <footer>
        © Traveling Star Service
      </footer>

    </div>
  );
}

export default App;