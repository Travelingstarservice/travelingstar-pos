import { useState } from "react";
import { API_BASE } from "../config";

function Booking() {
  const [status, setStatus] = useState("");

  const submitBooking = async (event) => {
    event.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${API_BASE}/api/rides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        event.currentTarget.reset();
        setStatus("Your service request has been submitted.");
      } else {
        setStatus("Unable to submit your request. Please try again.");
      }
    } catch {
      setStatus("Unable to submit your request. Please try again.");
    }
  };

  return (

    <div>


      <section className="hero">

        <h1>
          📋 Book Your Service
        </h1>

        <p>
          Complete the form and Traveling Star
          Service will contact you.
        </p>

      </section>



      <section>


        <form onSubmit={submitBooking}>


          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />



          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="252-000-0000"
            name="phone"
            required
          />



          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
          />



          <label>
            Service Needed
          </label>


          <select name="service" required>

            <option>
              Transportation
            </option>

            <option>
              Pickup & Drop-Off
            </option>

            <option>
              Roadside Assistance
            </option>

            <option>
              Delivery
            </option>

            <option>
              Cleanout Service
            </option>

          </select>



          <label>
            Pickup Location
          </label>

          <input
            type="text"
            placeholder="Pickup address"
            name="pickupLocation"
            required
          />



          <label>
            Destination
          </label>

          <input
            type="text"
            placeholder="Destination address"
            name="destination"
          />



          <label>
            Date and Time
          </label>

          <input
            type="datetime-local"
            name="dateTime"
            required
          />



          <label>
            Notes
          </label>

          <textarea
            placeholder="Additional details"
            name="notes"
          ></textarea>



          <button type="submit">
            SUBMIT REQUEST
          </button>

          {status && <p role="status">{status}</p>}

        </form>


      </section>


    </div>

  );

}


export default Booking;