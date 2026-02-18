import { houses } from "../context/HouseContext";
import HouseCard from "../components/HouseCard";

export default function SelectHouse() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",   // BLACK BACKGROUND
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "20px",               // space between boxes
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      {Object.entries(houses).map(([key, value]) => (
        <HouseCard key={key} houseKey={key} data={value} />
      ))}
    </div>
  );
}