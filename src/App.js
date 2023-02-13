import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  function getData() {
    fetch('stays.json')
      .then(data => data.json())
      .then(response => console.log(response));
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div>

    </div>
  );
}

export default App;
