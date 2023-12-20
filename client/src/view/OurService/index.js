import React from "react";

import Banner from "../../components/Banner";
// import Callus from './Callus';
import FindOut from "./FindOut";
import OurMission from "./OurMission";
import RoadMap from "./RoadMap";
import Bottom from "./Bottom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Dashboard() {
	React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - Our Service" />
      </Helmet>
      <Banner img='/ourservice/banner.svg'/>
      <FindOut />
      <OurMission />
      <RoadMap />
      <Bottom />
    </HelmetProvider>
  );
}
