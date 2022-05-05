import React from "react";
import Page from "../components/Page";
import { useStaticQuery, graphql } from "gatsby";

const ApisCommonEnterpriseSolutions = () => {
  // const pageData = useStaticQuery(graphql`
  //   query ApisCommonEnterpriseSolutionsPageQuery {
  //     prismicPage(uid: { eq: "m365-gcdocs-interop" }, lang: { eq: "en-ca" }) {
  //       lang
  //       uid
  //       data {
  //         body {
  //           ... on PrismicSliceType {
  //             slice_type
  //           }
  //           ... on PrismicPageDataBodyTable {
  //             primary {
  //               table_caption
  //             }
  //             items {
  //               table_row_link {
  //                 document {
  //                   ... on PrismicTableRow {
  //                     id
  //                     data {
  //                       row {
  //                         cell_item {
  //                           richText
  //                         }
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //           ... on PrismicPageDataBodyPersonaText {
  //             id
  //             items {
  //               quote
  //             }
  //           }
  //           ... on PrismicPageDataBodyParagraphSection {
  //             id
  //             primary {
  //               content {
  //                 richText
  //               }
  //               title1 {
  //                 richText
  //               }
  //             }
  //             slice_label
  //             slice_type
  //           }
  //         }
  //         title
  //       }
  //     }
  //   }
  // `).prismicPage.data;

  return (
    <main id="main-content">
      {" "}
      No content here yet. / Pas encore de contenu ici.{" "}
    </main>
  );
};

export default ApisCommonEnterpriseSolutions;
