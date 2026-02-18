import { createContext, useState } from "react";
import gryffindor from "../images/gryffindor.png";
import ravenclaw from "../images/ravenclaw.png";
import hufflepuff from "../images/hufflepuff.png";
import slytherin from "../images/slytherin.png";

export const HouseContext = createContext();

export const houses = {
  gryffindor: {
    name: "Gryffindor",
    gradient: "linear-gradient(135deg,#7f0909,#ffc500)",
    image: gryffindor,
    traits: "Bravery, Courage, Determination",
    founder: "Godric Gryffindor"
  },
  ravenclaw: {
    name: "Ravenclaw",
    gradient: "linear-gradient(135deg,#0e1a40,#946b2d)",
    image: ravenclaw,
    traits: "Intelligence, Wisdom, Creativity",
    founder: "Rowena Ravenclaw"
  },
  hufflepuff: {
    name: "Hufflepuff",
    gradient: "linear-gradient(135deg,#ecb939,#000000)",
    image: hufflepuff,
    traits: "Loyalty, Patience, Hard Work",
    founder: "Helga Hufflepuff"
  },
  slytherin: {
    name: "Slytherin",
    gradient: "linear-gradient(135deg,#1a472a,#aaaaaa)",
    image: slytherin,
    traits: "Ambition, Leadership, Cunning",
    founder: "Salazar Slytherin"
  }
};

export const HouseProvider = ({ children }) => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <HouseContext.Provider
      value={{ selectedHouse, setSelectedHouse }}
    >
      {children}
    </HouseContext.Provider>
  );
};