import React from "react";
import CatalogueItem from "../components/CatalogueItem";
import { AiFillInteraction, AiFillApi, AiFillFileText } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useIntl } from "react-intl";

const icons = {
  AiFillInteraction: <AiFillInteraction />,
  AiFillApi: <AiFillApi />,
  AiFillFileText: <AiFillFileText />,
  BsFillBriefcaseFill: <BsFillBriefcaseFill />,
};

const Catalogue = ({ homeData }) => {
  const intl = useIntl();

  return (
    <div className="catalogue mb-5">
      {homeData.map((item) => (
        <CatalogueItem
          icon={icons[item.icon]}
          title={item.title}
          content={item.text}
          linkTo={`/${intl.locale}/${item.linkto}/`}
        />
      ))}
    </div>
  );
};

export default Catalogue;
