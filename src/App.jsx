import planetsData from "./data.js";
import Box from "./Box/Box.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState();

  function handleClick(currentPlanet) {
    console.log("Clicked planet:", currentPlanet);
    setSelectedPlanet(currentPlanet);
  }

  function getTitleByName(planetName) {
    const planet = planetsData.find((p) => p.name === planetName);
    return planet;
  }

  return (
    <div>
      <ul>
        {planetsData.map((planet) => (
          <Box onClick={() => handleClick(planet.name)} key={planet.name}>
            {planet.name}
          </Box>
        ))}
      </ul>
      <div>
        {!selectedPlanet ? (
          <h1>Select a planet</h1>
        ) : (
          <div>
            <h1>{getTitleByName(selectedPlanet).name}</h1>
            <h2>{getTitleByName(selectedPlanet).title}</h2>
            <p>{getTitleByName(selectedPlanet).description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
