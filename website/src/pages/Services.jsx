import { Link } from "react-router-dom";

function Services() {

  const services = [
    "Transportation",
    "Pickup & Drop-Off",
    "Rubbish Removal & Cleanouts",
    "Roadside Assistance",
    "Free Air within 15 miles",
    "Car Jump Start",
    "Airport Pickup/Drop-Off",
    "Food Pickup & Delivery",
    "Medical & Non-Emergency Transport",
    "Package Delivery",
    "Local Errands",
    "Hourly Charters & Events"
  ];


  return (

    <div>

      <section className="hero">

        <h1>
          🚗 Our Services
        </h1>

        <p>
          Choose a service and request your appointment.
        </p>

      </section>


      <section>

        {services.map((service, index) => (

          <div key={index}>

            <h2>
              {service}
            </h2>

            <Link to="/booking">

              <button>
                Request {service}
              </button>

            </Link>

          </div>

        ))}

      </section>


    </div>

  );

}

export default Services;