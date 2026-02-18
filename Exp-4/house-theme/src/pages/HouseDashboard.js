import { useContext } from "react";
import { HouseContext, houses } from "../context/HouseContext";

export default function HouseDashboard() {
  const { selectedHouse, setSelectedHouse } = useContext(HouseContext);
  const house = houses[selectedHouse];

  return (
    <div style={{
      background: house.gradient,
      minHeight: "100vh",
      color: "white",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1>Welcome to {house.name}</h1>

      <img src={house.image} width="200" />

      <h3>Founder: {house.founder}</h3>
      <p>{house.traits}</p>

      <button onClick={() => setSelectedHouse(null)}>
        Back to Selection
      </button>
    </div>
  );
}