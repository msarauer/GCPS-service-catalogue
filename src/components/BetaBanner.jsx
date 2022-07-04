import React from "react";

const BetaBanner = ({ lang }) => {
  return (
    <div className="alert alert-info" role="alert">
      <div className="container">
        {lang === "en" ? (
          <span style={{ fontSize: "15px" }}>
            <strong>
              Development on this prototype has stopped and the content found on
              this page is no longer being maintained as of June 29, 2022. If
              you require more information regarding topics found on this page,
              please send an email to{" "}
              <a href="mailto: Joseph.Moubayed@tpsgc-pwgsc.gc.ca">
                Joseph.Moubayed@tpsgc-pwgsc.gc.ca
              </a>
            </strong>
          </span>
        ) : (
          <span style={{ fontSize: "15px" }}>
            <strong>
              Le développement de ce prototype a été interrompu, et le contenu
              qui se trouve sur cette page n’est plus entretenu depuis le 29
              juin 2022. Pour toute demande d’information concernant les sujets
              figurant sur cette page, veuillez communiquer avec{" "}
              <a href="mailto: Joseph.Moubayed@tpsgc-pwgsc.gc.ca">
                Joseph.Moubayed@tpsgc-pwgsc.gc.ca
              </a>
            </strong>
          </span>
        )}
      </div>
    </div>
  );
};

export default BetaBanner;
