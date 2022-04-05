import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "react-intl";

import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children, location }) => {
  const intl = useIntl();
  let locale = `${intl.locale}-ca`;
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

  const data = layoutData.nodes.find((node) => node.lang === locale).data;

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
