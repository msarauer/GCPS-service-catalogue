import React from "react";
import "./src/scss/index.scss";
import { IntlProvider } from "react-intl";
import { Layout } from "./src/components/Layout";

const getLanguageFromPath = (path, languages) => {
  if (!path) {
    return languages[0];
  }
  const langPart = path.split("/")[1];

  return languages.includes(langPart) ? langPart : languages[0];
};

export const wrapPageElement = ({ element, props }) => {
  const languageKey = getLanguageFromPath(props.location.pathname, [
    "en",
    "fr",
  ]);

  return (
    <IntlProvider locale={languageKey}>
      <Layout location={props.location.pathname}>{element}</Layout>
    </IntlProvider>
  );
};
