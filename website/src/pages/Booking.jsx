function Booking() {

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


        <form>


          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
          />



          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="252-000-0000"
          />



          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Email address"
          />



          <label>
            Service Needed
          </label>


          <select>

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
          />



          <label>
            Destination
          </label>

          <input
            type="text"
            placeholder="Destination address"
          />



          <label>
            Date and Time
          </label>

          <input
            type="datetime-local"
          />



          <label>
            Notes
          </label>

          <textarea
            placeholder="Additional details"
          ></textarea>



          <button>
            SUBMIT REQUEST
          </button>


        </form>


      </section>


    </div>

  );

}


export default Booking;