import { RichText } from "prismic-reactjs";
import React, { useState } from "react";
// import "../scss/sticky-menu.scss";

const StickyMenu = ({ sections, refsList }) => {
  console.log(sections);
  return (
    <nav className="sticky-menu">
      <h3 className="h5">Browse by Section</h3>
      <ul className="pl-0">
        {sections.map((section, i) => (
          <>
            {section.primary.title1.richText.length > 0 && (
              <li>
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
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default StickyMenu;
