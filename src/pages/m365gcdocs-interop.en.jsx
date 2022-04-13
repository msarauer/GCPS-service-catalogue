import React, { useRef } from "react";
import Page from "../components/Page";
import { useStaticQuery, graphql } from "gatsby";
import StickyMenu from "../components/StickyMenu";

const M365GCdocsInterop = () => {
  const pageData = useStaticQuery(graphql`
    query M365GCdocsInteropPageQuery {
      prismicPage(uid: { eq: "m365-gcdocs-interop" }, lang: { eq: "en-ca" }) {
        lang
        uid
        data {
          body {
            ... on PrismicSliceType {
              slice_type
            }
            ... on PrismicPageDataBodyTable {
              primary {
                table_caption
              }
              items {
                table_row_link {
                  document {
                    ... on PrismicTableRow {
                      id
                      data {
                        row {
                          cell_item {
                            richText
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on PrismicPageDataBodyPersonaText {
              id
              items {
                quote
              }
            }
            ... on PrismicPageDataBodyButtonBar {
              id
              primary {
                video_title
                video_aria_label
                button_link
                button_text
                section_title {
                  richText
                }
                section_text {
                  richText
                }
              }
              slice_type
            }
            ... on PrismicPageDataBodyParagraphSection {
              id
              primary {
                content {
                  richText
                }
                title1 {
                  richText
                }
              }
              slice_label
              slice_type
            }
          }
          title
        }
      }
    }
  `).prismicPage.data;

  const sections = pageData.body.filter(
    (slice) => slice.slice_type === "paragraph_section"
  );

  const refsList = useRef([]);

  return (
    <main id="main-content">
      <div className="row">
        <div className="col-md-9 col-12 order-2 order-md-1">
          <Page pageData={pageData} refsList={refsList} />
        </div>
        <div className="col-md-3 col-12 order-1 order-md-2">
          <StickyMenu sections={sections} refsList={refsList} />
        </div>
      </div>
    </main>
  );
};

export default M365GCdocsInterop;
