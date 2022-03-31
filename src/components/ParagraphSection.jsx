import { RichText } from "prismic-reactjs";
import React from "react";

const ParagraphSection = ({ title, content }) => {
  return (
    <div>
      <RichText render={title} />
      <RichText render={content} />
    </div>
  );
};

export default ParagraphSection;
