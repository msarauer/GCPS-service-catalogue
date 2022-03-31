import React from "react";

const Persona = ({ persona, text, altText }) => {
  return (
    <div className="col-3 d-flex flex-column">
      <div className="bubble bubble-bottom-left align-self-end" contenteditable>
        {text}
      </div>
      <div className="persona">
        <img src={persona} className="ml-3" alt="Man Persona" />
      </div>
    </div>
  );
};

export default Persona;
