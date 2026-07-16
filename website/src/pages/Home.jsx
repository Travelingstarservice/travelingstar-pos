import { Link } from "react-router-dom";

function Home() {

return (

<div className="home-page">

<section className="hero">

<p className="eyebrow">Reliable local help</p>

<h1>
Transportation and local services, on your schedule.
</h1>

<p>
Traveling Star Service provides dependable rides, deliveries, roadside assistance, and cleanout support across eastern North Carolina.
</p>

<div className="hero-actions">
<Link className="button button-primary" to="/booking">
Book a service
</Link>

<a className="button button-secondary" href="tel:2528865996">
Call 252-886-5996
</a>
</div>

</section>

<section className="service-summary" aria-labelledby="services-heading">

<div>
<p className="eyebrow">What we do</p>
<h2 id="services-heading">One trusted team for the errands that matter.</h2>
</div>

<ul>
<li>Transportation, airport trips, and local errands</li>
<li>Pickup, delivery, and package service</li>
<li>Roadside help, cleanouts, and removal</li>
</ul>

<Link className="text-link" to="/services">Explore all services</Link>

</section>

</div>

);

/*

return (

<div>

<h1>
⭐ Traveling Star Owner Dashboard
</h1>

<p>
Manage your business website from here.
</p>


<Link to="/owner-home">
<button>
Edit Homepage
</button>
</Link>


<Link to="/owner-services">
<button>
Manage Services
</button>
</Link>


<Link to="/owner-pricing">
<button>
Edit Pricing
</button>
</Link>


<Link to="/owner-bookings">
<button>
View Bookings
</button>
</Link>


<Link to="/owner-promotions">
<button>
Promotions & Coupons
</button>
</Link>


</div>

);
*/
}

export default Home;
