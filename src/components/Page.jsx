import React from "react";
import { RichText } from "prismic-reactjs";
// import CustomCard from "./CustomCard";
import ParagraphSection from "./ParagraphSection";
import Table from "./Table";
import PersonaGroup from "./PersonaGroup";
// import FAQ from "./Faq";
// import FaqAside from "./FaqAside";
// import NumberCard from "./NumberCard";
import ButtonBar from "./ButtonBar";
// import { Accordion } from "react-bootstrap";
// import CollapsableListItem from "./CollapsableListItem";
// import ListItem from "./ListItem";
// import SideTabs from "./SideTabs";
// import Instructions from "./Instructions";

const Page = ({ pageData, refsList }) => {
  const slices = pageData.body;

  console.log(slices);

  return (
    <div>
      {/* {pageData.title.richText[0].text && (
        <div className="mb-5">
          <RichText render={pageData.title.richText} />
          <RichText render={pageData.page_description.richText} />
        </div>
      )} */}
      {slices.map((slice, innerIndex) => {
        if (slice.slice_type === "paragraph_section") {
          return (
            <div key={innerIndex} className="mb-5">
              <ParagraphSection
                title={slice.primary.title1.richText}
                content={slice.primary.content.richText}
                refsList={refsList}
                index={innerIndex}
              />
            </div>
          );
        }
        if (slice.slice_type === "persona_text") {
          return <PersonaGroup items={slice.items} />;
        }
        if (slice.slice_type === "table") {
          return (
            <div className="mb-5">
              <Table
                items={slice.items}
                caption={slice.primary.table_caption}
              />
            </div>
          );
        }
        if (slice.slice_type === "button-bar") {
          return (
            <div key={innerIndex} className="mb-5">
              <ButtonBar slice={slice} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Page;
