import { useContext } from "react";
import { HouseContext } from "./context/HouseContext";
import SelectHouse from "./pages/SelectHouse";
import HouseDashboard from "./pages/HouseDashboard";

function App() {
  const { selectedHouse } = useContext(HouseContext);

  return selectedHouse
    ? <HouseDashboard />
    : <SelectHouse />;
}

export default App;