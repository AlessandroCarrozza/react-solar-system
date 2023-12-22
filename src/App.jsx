import planetsData from "./data.js";
import Box from "./Box/Box.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState();
  return (
    <div>
      <ul>
        {planetsData.map((planet, index) => (
          <Box key={index}>{planet.name}</Box>
        ))}
      </ul>
      <h2>Select a planet</h2>
    </div>
  );
}

export default App;
