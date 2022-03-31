import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, lang, meta = [] }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: lang }}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    ></Helmet>
  );
};

export default SEO;
