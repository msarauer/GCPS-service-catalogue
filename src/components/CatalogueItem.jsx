import React from "react";

const CatalogueItem = ({ icon, title, content }) => {
  return (
    <div className="catalogue-item">
      <div className="catalogue-item-icon">{icon}</div>
      <div className="catalogue-item-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CatalogueItem;
