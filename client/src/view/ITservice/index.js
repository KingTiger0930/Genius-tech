import React from "react";

import Banner from "../../components/Banner";
import Callus from "../../components/Callus";
import OurMission from "./OurMission";
import RoadMap from "./RoadMap";
import Bottom from "./Bottom";
import Benefits from "./Benefits";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Dashboard() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
      <HelmetProvider>
        <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - IT Service" />
        </Helmet>
        <Banner img='/itservice/banner.svg'/>
        <Callus
          title='Full Service Managed IT Solutions'
          content="Get Ready for an Exceptional IT Support Experience."
        />
        <OurMission />
          <RoadMap />
          <Bottom />
          <Benefits />
      </HelmetProvider>
  );
}
