import React from "react";
import CanadaLogo from "../images/footer-tag.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="bg-light py-3">
        <div className="container">
          <div className="row h-100">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 canada-logo text-right my-auto">
              <img className="" src={CanadaLogo} alt="Canada Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
