import React from "react";
import { Link } from "gatsby";

const Breadcrumbs = ({ layoutData, location, locationObj }) => {
  // setting the breadcrumb list based on the current location
  let breadcrumbList;
  if (location.length > 4) {
    breadcrumbList = (
      <>
        <li className="breadcrumb-item">
          <Link to={location.substring(0, 4)}>
            {locationObj[location.substring(0, 4)]}
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {locationObj[location]}
        </li>
      </>
    );
  } else {
    breadcrumbList = (
      <li className="breadcrumb-item active" aria-current="page">
        {locationObj[location]}
      </li>
    );
  }

  return (
    <div className="container pl-0">
      <nav aria-label="breadcrumb">
        <h2 className="sr-only">{layoutData.breadcrumb_you_are_here}</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href={layoutData.breadcrumb_link.url}>
              {layoutData.breadcrumbs}
            </a>
          </li>
          {breadcrumbList}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
