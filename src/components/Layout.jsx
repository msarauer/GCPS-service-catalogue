import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children, location }) => {
  const layoutData = useStaticQuery(graphql`
    query LayoutQuery {
      allPrismicLayout {
        nodes {
          lang
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
  `).allPrismicLayout;

  const data = layoutData.nodes.find(
    (node) => node.lang.substring(0, 2) === location.substring(1, 3)
  ).data;

  return (
    <div>
      <Header layoutData={data} location={location} />
      <div>
        <div className="container-xl mt-4 ">{children}</div>
      </div>
      <Footer layoutData={data} />
    </div>
  );
};
