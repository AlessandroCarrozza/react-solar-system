import planetsData from "./data.js";
import Box from "./components/Box/Box.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState();

  function handleClick(currentPlanet) {
    console.log(currentPlanet);
    setSelectedPlanet(currentPlanet);
  }

  // function to find the all object planet with that name
  function getPlanetByName(planetName) {
    const planet = planetsData.find((p) => p.name === planetName);
    return planet;
  }

  return (
    <div id="container">
      <div id="planets">
        <ul id="btnSide">
          {/* for each planetsData element, i create a Box component */}
          {planetsData.map((planet) => (
            <Box
              name={planet.name}
              isActive={selectedPlanet === planet.name ? true : false}
              onClick={() => handleClick(planet.name)}
              key={planet.name}
            />
          ))}
        </ul>
        <div id="contentSide">
          {!selectedPlanet ? (
            <h1 id="default">Select a planet</h1>
          ) : (
            // destructuring of the planet object
            <TabContent {...getPlanetByName(selectedPlanet)}></TabContent>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
