import * as React from "react";
import Catalogue from "../components/Catalogue";
import SideMenu from "../components/SideMenu";

const testItems = ["GCcase", "GCdocs", "EDRMS", "GCshare"];

const IndexPage = () => {
  return (
    <main id="main-content" aria-labelledby="h2-label">
      <div className="bg-light px-5 py-4 mb-5">
        <h2>I need help with...</h2>
        <div className="catalogue-page">
          <Catalogue />
          <SideMenu listItems={testItems.sort()} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
