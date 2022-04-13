import React from "react";

const BetaBanner = ({ lang }) => {
  return (
    <div className="alert alert-info" role="alert">
      <div className="container">
        {lang === "en" ? (
          <span style={{ fontSize: "15px" }}>
            This is the{" "}
            <strong className="underline">
              <u>Beta</u>
            </strong>{" "}
            version of the website.
          </span>
        ) : (
          <span style={{ fontSize: "15px" }}>
            Il s'agit de la version{" "}
            <strong className="underline">
              <u>Bêta</u>
            </strong>{" "}
            du site web.
          </span>
        )}
      </div>
    </div>
  );
};

export default BetaBanner;
