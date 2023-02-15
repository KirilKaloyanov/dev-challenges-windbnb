import React, { useState, useEffect } from "react";
import Filter from "./filters/filter.js";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [guests, setGuests] = useState(0);

  function getData() {
    fetch("stays.json")
      .then((data) => data.json())
      .then((response) => console.log(response));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Filter 
        guests={guests}
        onGuestsChange={setGuests}
      />
      <img src={logo} alt="Windbnb logo" />
      {/* <button onClick={() => onGuestsChange({adults: 1, children: 0})}>Calc</button> */}
    </>
  );
}

export default App;
