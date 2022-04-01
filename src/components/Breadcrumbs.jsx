import React from "react";

const Breadcrumbs = ({ layoutData, location }) => {
  if (location.length > 4) {
    console.log("yes");
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
          <li className="breadcrumb-item active" aria-current="page">
            {layoutData.page_title}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
