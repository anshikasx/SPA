import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";

export default function HouseCard({ houseKey, data }) {
  const { setSelectedHouse } = useContext(HouseContext);

  return (
    <div
      onClick={() => setSelectedHouse(houseKey)}
      style={{
        background: data.gradient,
        height: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "18px",
        color: "white",
        transition: "0.3s"
      }}
    >
      <img
        src={data.image}
        alt={data.name}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
          marginBottom: "10px"
        }}
      />

      <h2>{data.name}</h2>
    </div>
  );
}