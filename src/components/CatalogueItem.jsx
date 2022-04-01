import React from "react";
import { Link } from "gatsby";

const CatalogueItem = ({ icon, title, content, linkTo }) => {
  return (
    <Link to={linkTo} className="catalogue-item ">
      <span className="catalogue-item-icon">{icon}</span>
      <span className="catalogue-item-content d-flex flex-column text-decoration-none">
        <span className="catalogue-title">{title}</span>
        {/* <span>{content}</span> */}
      </span>
    </Link>
  );
};

export default CatalogueItem;
