import "./App.css";
import "./index.css";

import React, { useState } from "react";

import Card from "./components/card";
import Data from "./components/data";

export default function App() {
  const [active, setActive] = useState("FirstCard");

  return (
    <div className="App">
      <nav>
        <button className = "border border-black rounded-lg m-2 p-2" onClick={() => setActive("FirstCard")}>One</button>
        <button className = "border border-black rounded-lg m-2 p-2" onClick={() => setActive("SecondCard")}>Two</button>
        <button className = "border border-black rounded-lg m-2 p-2" onClick={() => setActive("ThirdCard")}>Three</button>
      </nav>
     
    </div>
  );
}
 <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>