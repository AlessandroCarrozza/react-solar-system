import planetsData from "./data.js";
import mercImg from "./assets/mercury.png";
import "./App.css";

function App() {
  return <img src={planetsData[0].image} alt="" />;
}

export default App;
