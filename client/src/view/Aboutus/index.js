import React from "react";

import Banner from "../../components/Banner";
import OurMission from "./OurMission";
import RoadMap from "./RoadMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ITsolution() {
	React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
      <HelmetProvider>
        <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - About Us" />
        </Helmet>
        <Banner img='/about-us/banner.svg' />
          <RoadMap />
        <OurMission />
      </HelmetProvider>
  );
}
