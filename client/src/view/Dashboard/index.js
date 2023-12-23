import React from "react";

import Banner from "../../components/Banner";
import Callus from "../../components/Callus";
import OurMission from "./OurMission";
import RoadMap from "./RoadMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Dashboard() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Genius Tech Inc</title>
        <meta name="description" content="Genius Tech – more than just the traditional break-fix IT service, is offering a wide range of customized IT solutions to support your business's IT infrastructure. From applications to hardware to networking, our team of highly dedicated IT experts will help manage, monitor and maintain your IT environment as well as detect issues and areas that required optimization to ensure long term business resilience." />
      </Helmet>
      <Banner img='/home/background-banner.svg'/>
      <Callus
      title='Do you own a business and need dedicated IT support?'
      content="Genius Tech Inc. provides a plethora of exceptional IT services to help you resolve your IT challenges and grow seamlessly."
      content2="Every business owner wants to save money and time ensuring the optimum success of the business. whether you are a startup or a medium scale enterprise, Genius Tech provides all-in-one managed IT services, network solutions, professional technical support, IT support consulting and services to help you achieve your business goals endlessly."
      />
      <OurMission />
      <RoadMap />
    </HelmetProvider>
  );
}
