import React from "react";
import { RichText } from "prismic-reactjs";
// import CustomCard from "./CustomCard";
import ParagraphSection from "./ParagraphSection";
import Table from "./Table";
import PersonaGroup from "./PersonaGroup";
// import FAQ from "./Faq";
// import FaqAside from "./FaqAside";
// import NumberCard from "./NumberCard";
// import ButtonBar from "./ButtonBar";
// import { Accordion } from "react-bootstrap";
// import CollapsableListItem from "./CollapsableListItem";
// import ListItem from "./ListItem";
// import SideTabs from "./SideTabs";
// import Instructions from "./Instructions";

const Page = ({ pageData, refsList }) => {
  const slices = pageData.body;

  console.log(pageData.title);

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
          console.log(slice);
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
        // if (slice.slice_type === "link_cards") {
        //   return (
        //     <div key={innerIndex}>
        //       {slice.primary.section_title && (
        //         <div className="mb-5">
        //           <RichText render={slice.primary.section_title.richText} />
        //           <RichText
        //             render={slice.primary.section_description.richText}
        //           />
        //         </div>
        //       )}
        //       <div className="d-grid mb-5">
        //         <div className="row">
        //           {slice.items.map((item, index) => (
        //             <div className="col" key={index}>
        //               <CustomCard
        //                 title={item.card_title.richText}
        //                 linkTo={item.link}
        //                 text={item.card_text.richText}
        //                 tag={item.card_tag}
        //                 tag_color={item.card_tag_color}
        //                 icon={item.icon_name}
        //                 functions={item.function}
        //                 setFormType={setFormType}
        //                 setShowForm={setShowForm}
        //                 setEmailStatus={setEmailStatus}
        //               />
        //             </div>
        //           ))}
        //         </div>
        //       </div>
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "instructions") {
        //   return (
        //     <div key={innerIndex} className="mb-5">
        //       <Instructions
        //         slice={slice}
        //         activeUseCase={activeUseCase}
        //         expanded={expanded}
        //         refsList={refsList}
        //       />
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "side_tab") {
        //   return (
        //     <div key={innerIndex} className="mb-5">
        //       <div className="my-5">
        //         <RichText render={slice.primary.section_title.richText} />
        //         <RichText render={slice.primary.section_description.richText} />
        //       </div>
        //       <SideTabs slice={slice} />
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "faq") {
        //   return (
        //     <div className="row" key={innerIndex}>
        //       <div className="col-8">
        //         {slice.items.map((item, index) => (
        //           <FAQ
        //             question={item.question.richText}
        //             answer={item.answer.richText}
        //             id={index}
        //           />
        //         ))}
        //       </div>
        //       <nav className="col-4">
        //         <h3>What's on this page?</h3>
        //         {slice.items.map((item, index) => (
        //           <FaqAside
        //             question={item.question.richText}
        //             key={item.question.richText.text}
        //             id={index}
        //           />
        //         ))}
        //       </nav>
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "number_cards") {
        //   return (
        //     <div key={innerIndex}>
        //       <div className="mb-5">
        //         <RichText render={slice.primary.section_title.richText} />
        //         <RichText render={slice.primary.section_description.richText} />
        //       </div>
        //       <div className="d-grid mb-5">
        //         <div className="row">
        //           {slice.items.map((item, index) => (
        //             <NumberCard
        //               key={index}
        //               icon={item.icon_name}
        //               title={item.card_title.richText}
        //               text={item.card_text.richText}
        //             />
        //           ))}
        //         </div>
        //       </div>
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "button-bar") {
        //   return (
        //     <div key={innerIndex} className="mb-5">
        //       <ButtonBar slice={slice} />
        //     </div>
        //   );
        // }
        // if (slice.slice_type === "list") {
        //   return (
        //     <div key={innerIndex} className="mb-5">
        //       <div>
        //         <RichText render={slice.primary.title1.richText} />
        //         <RichText render={slice.primary.description.richText} />
        //       </div>
        //       {slice.primary.collapsable ? (
        //         <Accordion>
        //           {slice.items.map((item, index) => {
        //             return (
        //               <CollapsableListItem
        //                 item={item.list_item.richText}
        //                 description={item.list_item_description.richText}
        //                 eventKey={index + 1}
        //                 key={index}
        //               />
        //             );
        //           })}
        //         </Accordion>
        //       ) : (
        //         <ul className="colored-list">
        //           {slice.items.map((item, index) => (
        //             <ListItem key={index} item={item} />
        //           ))}
        //         </ul>
        //       )}
        //     </div>
        //   );
        // }
      })}
    </div>
  );
};

export default Page;
