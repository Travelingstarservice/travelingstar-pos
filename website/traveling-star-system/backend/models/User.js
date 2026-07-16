import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Traveling Star Transportation</h1>
      <p>Safe, reliable, and professional transportation services.</p>

      <h2>Today's Weather</h2>
      <WeatherWidget />

      <h2>Latest News</h2>
      <NewsWidget />
    </div>
  );
}
