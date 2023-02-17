import React, { useState, useEffect } from "react";
import Filter from "./filters/filter.js";
import Card from "./Card.js";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [guests, setGuests] = useState(0);
  const [location, setLocation] = useState(null);
  const [locationsList, setLocationsList] = useState([]);

  function assignIds(arr) {
    return arr.map((item, index) => ({ id: index, ...item }));
  }

  function filterLocations(arr) {
    return arr
      .map((item, i) => ({ id: i, city: item.city, country: item.country }))
      .filter((b, i, arr) => i === arr.findIndex((c) => c.city === b.city));
  }

  useEffect(() => {
    fetch("stays.json")
      .then((data) => data.json())
      .then((response) => {
        setLocationsList(filterLocations(response));
        setData(
          assignIds(response.filter(filterByLocation).filter(filterByCapacity))
        );
      });
  }, [guests, location]);

  function filterByLocation(item) {
    if (!location) return true;
    else return item.city === location.city;
  }

  function filterByCapacity(item) {
    return item.maxGuests - guests >= 0;
  }

  return (
    <>
      <div className="header">
        
        <img className="logo" src={logo} alt="Windbnb logo" />
        
        <Filter
          guests={guests}
          location={location}
          locationsList={locationsList}
          onGuestsChange={setGuests}
          onLocationChange={setLocation}
        />

      </div>

      <div className="title">
        <span className="heading">Stays in Finland</span>
        <span className="stays">{data.length}+ stays</span>
      </div>

      <div className="grid">
        {data.map((a) => (
          <Card key={a.id} item={a} />
        ))}
      </div>

      <footer>
        <div>
          <a
            href="https://devchallenges.io/portfolio/KirilKaloyanov"
            target={"_blank"}
            rel="noreferrer"
          >
            created by <strong>KirilKaloyanov</strong> - devChallenges.io
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
