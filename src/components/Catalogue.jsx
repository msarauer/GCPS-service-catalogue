import React from "react";
import CatalogueItem from "../components/CatalogueItem";
import { AiFillInteraction, AiFillApi, AiFillFileText } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Catalogue = () => {
  return (
    <div className="catalogue">
      <CatalogueItem
        icon={<AiFillInteraction />}
        title="M365 -GCdocs interoperability"
        content="This is the content"
      />
      <CatalogueItem
        icon={<BsFillBriefcaseFill />}
        title="Case/workflow management system"
        content="This is the content"
      />
      <CatalogueItem
        icon={<AiFillApi />}
        title="APIs for common enterprise solutions"
        content="This is the content"
      />
      <CatalogueItem
        icon={<AiFillFileText />}
        title="GC Electronic Document and Records Managment System"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
      <CatalogueItem
        icon={""}
        title="This is the title"
        content="This is the content"
      />
    </div>
  );
};

export default Catalogue;
