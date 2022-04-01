import React from "react";
import Persona from "./Persona";
import man from "../images/Picture1.png";
import woman1 from "../images/Picture2.png";
import woman2 from "../images/Picture3.png";

const personaArray = [man, woman1, woman2];

const PersonaGroup = ({ items }) => {
  return (
    <div className="persona-group align-items-end">
      <div className="col-3"></div>
      {items.map((item, index) => {
        return <Persona persona={personaArray[index]} text={item.quote} />;
      })}
    </div>
  );
};

export default PersonaGroup;
