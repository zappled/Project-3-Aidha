import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import banner from ".././assets/homepage/homepage_banner.png";
import Navbar from "../common/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="page_container">
        <div className="page_header">
          <span>Shows which page you are currently on</span>
        </div>
        <CCarousel
          indicators
          className="banner_container"
          transition="crossfade"
        >
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={banner}
              alt="slide 1"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={banner}
              alt="slide 2"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>Second slide caption</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={banner}
              alt="slide 3"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>Third slide caption</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
        <div className="content_container">{/* insert content here */}</div>
      </div>
    </>
  );
};

export default Homepage;
