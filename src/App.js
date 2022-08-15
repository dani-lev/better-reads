import "./App.css";
import React from "react";
import Home from "./Home";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // refactor to Axios
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function(response) {
      // console.log(response);
      return response.json().then(function(myJson) {
        console.log(myJson);
      });
      // add error
      // .catch();
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
      <Home />
    </div>
  );
}

export default App;
