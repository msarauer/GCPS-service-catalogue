import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Catalogue from "../components/Catalogue";
import SideMenu from "../components/SideMenu";

const IndexPage = () => {
  const homeData = useStaticQuery(graphql`
    query homeQuery {
      prismicHomepage(lang: { eq: "en-ca" }) {
        data {
          catalogue_title
          catalogue_items {
            icon
            linkto
            text
            title
          }
          side_menu {
            item
          }
        }
        uid
      }
    }
  `).prismicHomepage.data;

  return (
    <main id="main-content" aria-labelledby="h2-label">
      <div className="bg-light px-5 py-4 mb-5">
        <h2>{homeData.catalogue_title}</h2>
        <div className="catalogue-page">
          <Catalogue homeData={homeData.catalogue_items} />
          <SideMenu
            listItems={homeData.side_menu.sort((a, b) => {
              const nameA = a.item.toUpperCase();
              const nameB = b.item.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })}
          />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
