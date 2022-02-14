import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>trip</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            // only when trips exists so that data is not null
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
