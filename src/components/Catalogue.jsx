import React from "react";
import CatalogueItem from "../components/CatalogueItem";
import { AiFillInteraction, AiFillApi, AiFillFileText } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Catalogue = () => {
  return (
    <div className="catalogue mb-5">
      <CatalogueItem
        icon={<AiFillInteraction />}
        title="M365 - GCdocs interoperability"
        content="This is the content"
        linkTo="/en/M365-GCdocs-interop/"
      />
      <CatalogueItem
        icon={<BsFillBriefcaseFill />}
        title="Case/workflow management system"
        content="This is the content"
        linkTo="/en/case-workflow-mgmt-system"
      />
      <CatalogueItem
        icon={<AiFillApi />}
        title="APIs for common enterprise solutions"
        content="This is the content"
        linkTo="/en/apis-common-enterprise-solutions"
      />
      <CatalogueItem
        icon={<AiFillFileText />}
        title="GC Electronic Document and Records Managment System"
        content="This is the content"
        linkTo="/en/gc-electronic-document-and-records-managment-system"
      />
    </div>
  );
};

export default Catalogue;
