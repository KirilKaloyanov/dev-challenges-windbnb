import React, { useState, useEffect } from "react";
import Filter from "./filters/filter.js";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

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
      <Filter />
      <img src={logo} alt="Windbnb logo" />
    </>
  );
}

export default App;
