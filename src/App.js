import React, { useState, useEffect } from "react";
import Filter from "./filters/filter.js";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [guests, setGuests] = useState(0);
  const [location, setLocation] = useState("");
  const [locationsList, setLocationsList] = useState([]);

  function getData() {
    fetch("stays.json")
      .then((data) => data.json())
      .then((response) => {
        setData(response.map((item, i) => ({ id: i, ...item })));
        setLocationsList(response
          .map((item, i) => ({ id: i, city: item.city, country: item.country }))
          .filter((b, i, arr) => i === arr.findIndex((c) => c.city === b.city)))
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Filter
        guests={guests}
        location={location}
        locationsList={locationsList}
        onGuestsChange={setGuests}
        onLocationChange={setLocation}
      />
      <img src={logo} alt="Windbnb logo" />
      {data
        .filter(a => a.city === location)
        .filter((a) => a.maxGuests - guests >= 0)
        .map((a) => (
          <div key={a.id}>{a.maxGuests} {a.city}</div>
        ))}
    </>
  );
}

export default App;
