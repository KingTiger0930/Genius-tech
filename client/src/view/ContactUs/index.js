import React from "react";

import Banner from "./Banner";
import RoadMap from "./RoadMap";
import ContactForm from "./ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ITsolution() {
	React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <HelmetProvider>
        <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - Contact Us" />
        </Helmet>
        <Banner />
          <RoadMap />
        <ContactForm />
      </HelmetProvider>
  );
}
