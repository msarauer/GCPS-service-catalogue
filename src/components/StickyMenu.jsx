import { RichText } from "prismic-reactjs";
import React, { useState } from "react";
import { useIntl } from "react-intl";
// import "../scss/sticky-menu.scss";

const StickyMenu = ({ sections, refsList }) => {
  const intl = useIntl();

  return (
    <nav className="sticky-menu">
      <h2 className="h5">
        {intl.locale === "en" ? "Browse by section" : "Naviguer par rubrique"}
      </h2>
      <ul className="pl-0">
        {sections.map((section, i) => (
          <>
            {section.primary.title1.richText.length > 0 && (
              <li>
                <h3>
                  <button
                    onClick={(e) => {
                      refsList.current[i].el.scrollIntoView({
                        behavior: "smooth",
                      });
                      refsList.current[i].el.focus({
                        preventScroll: true,
                      });
                    }}
                    className={`btn btn-link text-left  w-100 border-top`}
                  >
                    {section.primary.title1.richText[0].text}
                  </button>
                </h3>
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default StickyMenu;
