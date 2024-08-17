import React, { useState } from "react";
import "./App.css";
import Fooditm from "./components/Food-itm";
import Container from "./components/container";
import Errmsg from "./components/Errmsg";
import "bootstrap/dist/css/bootstrap.min.css";
import Foodinput from "./components/Foodinput";

function App() {
  let [foods, setfoods] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfoods = event.target.value;
      let newItems = [...foods, newfoods];
      setfoods(newItems);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="hj-h1">Foods</h1>
        <Foodinput handleKeyDown={onKeyDown} />
        <Fooditm foods={foods} />
        <Errmsg foods={foods} />
      </Container>
    </>
  );
}

export default App;
