import { RichText } from "prismic-reactjs";
import React from "react";

const ParagraphSection = ({ title, content, refsList, index }) => {
  return (
    <>
      {title.length > 0 ? (
        <div
          tabIndex={-1}
          ref={(el) =>
            (refsList.current[index] = {
              el,
              title: title[0].text,
            })
          }
        >
          <div className="mb-4">
            <RichText render={title} />
          </div>
          <RichText render={content} />
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <RichText render={title} />
          </div>
          <RichText render={content} />
        </div>
      )}
    </>
  );
};

export default ParagraphSection;
