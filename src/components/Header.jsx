import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import GOClogoEn from "../images/sig-blk-en.svg";
import GOClogoFr from "../images/sig-blk-fr.svg";
import { useIntl } from "react-intl";
import LanguageSelect from "./LanguageSelect";

const Header = ({ layoutData, location }) => {
  const intl = useIntl();
  let homeLink = `/${intl.locale}/`;

  //TODO Prismic
  const locationObj = {
    "/en/":
      "Government of Canada Programs and solutions (GCPS) service catalogue",
    "/fr/":
      "Gouvernement de Canada programmes et solutions (GCPS) catalogue de services",
    "/en/m365gcdocs-interop/": "M365-GCdocs interoperability",
    "/fr/m365gcdocs-interop/": "M365-GCdocs interopérabilité",
  };

  return (
    <header className="mb-0">
      <div className="container">
        <div className="row my-3 mx-2">
          <nav className="skiphold" id="header-skiplink">
            <a
              className="sr-only sr-only-focusable aurora-skip skiplink"
              aria-label="main skiplink"
              href="#main-content"
            >
              {layoutData.skip_link_text}
            </a>
          </nav>
          <div
            className="align-self-center"
            property="publisher"
            typeof="GovernmentOrganization"
          >
            <div
              className="align-self-center"
              property="publisher"
              typeof="GovernmentOrganization"
            >
              <img
                src={homeLink === "/fr/" ? GOClogoFr : GOClogoEn}
                className="goc-logo"
                alt={
                  homeLink === "/fr/"
                    ? "Services publics et Approvisionnement Canada"
                    : "Public Services and Procurement Canada"
                }
                //TODO: Get alt text from CMS
              />
            </div>
          </div>
          <section className="text-right align-self-center ml-auto">
            <h2 className="sr-only sr-only-focusable aurora-skip">
              {layoutData.header_language_select}
            </h2>
            <LanguageSelect layoutData={layoutData} />
          </section>
        </div>
      </div>
      <Breadcrumbs
        layoutData={layoutData}
        location={location}
        locationObj={locationObj}
      />
      <div className="py-4 header-background mb-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-light">{locationObj[location]}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
