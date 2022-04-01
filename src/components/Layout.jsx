import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children, location }) => {
  // const current = location.pathname.substring(3);

  const layoutData = useStaticQuery(graphql`
    query LayoutQuery {
      allPrismicLayout {
        nodes {
          data {
            breadcrumb_link {
              url
            }
            breadcrumb_you_are_here
            breadcrumbs
            canada_logo_alt_text

            header_language_select
            header_logo_alt_text
            other_language
            page_title
            skip_link_text
          }
        }
      }
    }
  `).allPrismicLayout.nodes[0].data;

  return (
    <div>
      <Header layoutData={layoutData} location={location} />
      <div>
        <div className="container-xl mt-4 ">{children}</div>
      </div>
      <Footer layoutData={layoutData} />
    </div>
  );
};
