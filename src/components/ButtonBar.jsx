import React from "react";
import { PrismicRichText } from "@prismicio/react";
import gcdocsintegration from "../assets/M365GCdocsIntegrationSolutionsVideo.mp4";

const ButtonBar = ({ slice }) => {
  const videos = {
    gcdocsintegration: gcdocsintegration,
  };
  return (
    <div className="button-bar d-flex flex-column justify-content-around align-items-center py-5">
      <div>
        <PrismicRichText field={slice.primary.section_title.richText} />
        <PrismicRichText field={slice.primary.section_text.richText} />
        <div className="row">
          <div className={`${slice.primary.video_title ? "col-lg-4" : "col"}`}>
            <a
              href={slice.primary.button_link}
              className="btn btn-primary text-white mt-3"
              role="button"
              target="_blank"
            >
              {slice.primary.button_text}
            </a>
          </div>
          {slice.primary.video_title && (
            <div className="col-lg-8 mt-5 mt-lg-0">
              <video
                aria-label={slice.primary.video_aria_label}
                className="embed-responsive"
                controls
              >
                <source
                  className="embed-responsive-item"
                  type="video/mp4"
                  src={videos[slice.primary.video_title]}
                />
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
