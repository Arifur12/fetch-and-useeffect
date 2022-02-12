import { useEffect, useState } from "react";
export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  console.log(trips);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTrips(json));
  }, [url]);

  return (
    <div className="trip-list">
      <h2>trip</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.index}>
            <h2>{trip.title}</h2>
            <span>{trip.price}</span>
          </li>
        ))}
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips?loc=Europe");
          }}
        >
          Europe Only
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips");
          }}
        >
          Za Warudo
        </button>
      </ul>
    </div>
  );
}
