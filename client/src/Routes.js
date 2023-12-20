import React from "react";
import "./App.css";

import Dashboard from "./view/Dashboard";

import ITservice from "./view/ITservice";
import Desktopmanage from "./view/ITservice/Desktopmanage";
import ServerManage from "./view/ITservice/ServerManage";
import NetworkManage from "./view/ITservice/NetworkManage";

import Onsite from "./view/Onsite/Onsite";


import OurService from "./view/OurService";
import CloudWorkstation from "./view/OurService/CloudWorkstation";
import CloudServer from "./view/OurService/CloudServer";

import ITsolution from "./view/ITsolution/ITsolution/index.js";
import NetworkCabling from "./view/Networkcabling/Networkcabling/index.js";

import Aboutus from "./view/Aboutus";
import ContactUs from "./view/ContactUs";

import Cart from "./view/Checkout/cart";
import Checkout from "./view/Checkout/checkout";
import CheckoutOne from "./view/Checkout/checkoutone";

import Blog from "./view/Blog";
import Blog1 from "./view/Blog/Blog1";
import Blog2 from "./view/Blog/Blog2";
import Blog3 from "./view/Blog/Blog3";
import Blog4 from "./view/Blog/Blog4";
import Blog5 from "./view/Blog/Blog5";
import Blog6 from "./view/Blog/Blog6";
import Blog7 from "./view/Blog/Blog7";
import Blog8 from "./view/Blog/Blog8";
import Blog9 from "./view/Blog/Blog9";
import Blog10 from "./view/Blog/Blog10";
import Blog11 from "./view/Blog/Blog11";
import Blog12 from "./view/Blog/Blog12";
import Blog13 from "./view/Blog/Blog13";
import Blog14 from "./view/Blog/Blog14";
import Blog15 from "./view/Blog/Blog15";
import Blog16 from "./view/Blog/Blog16";
import Blog17 from "./view/Blog/Blog17";
import Blog18 from "./view/Blog/Blog18";
import Blog19 from "./view/Blog/Blog19";
import Blog20 from "./view/Blog/Blog20";
import Blog21 from "./view/Blog/Blog21";
import Blog22 from "./view/Blog/Blog22";
import Blog23 from "./view/Blog/Blog23";
import Blog24 from "./view/Blog/Blog24";
import Blog25 from "./view/Blog/Blog25";
import NoFound from "./view/NoFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Switch, Route } from "react-router";

const Routes = () => {
  
  return (
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/managed-it-services" component={ITservice} />
          <Route exact path="/desktop-management-and-remote-support-service" component={Desktopmanage} />
          <Route exact path="/server-management" component={ServerManage} />
          <Route exact path="/network-management" component={NetworkManage} />

          <Route exact path="/our-services" component={OurService} />
          <Route exact path="/cloud-backup-solution-workstation" component={CloudWorkstation} />
          <Route exact path="/cloud-backup-solution-server" component={CloudServer} />

          <Route exact path="/our-it-solutions" component={ITsolution} />
          <Route exact path="/onsite-it-support-services" component={Onsite} />
          <Route exact path="/network-cabling" component={NetworkCabling} />
          <Route exact path="/about-us" component={Aboutus} />
          <Route exact path="/subscribe" component={ContactUs} />

          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkoutone" component={CheckoutOne} />

          <Route exact path="/blog" component={Blog} />
          <Route exact path="/quality-of-experience-well-for-a-user-a-must-for-a-provider" component={Blog1} />
          <Route exact path="/managed-devops-best-practices-no-headache" component={Blog2} />
          <Route exact path="/backups-are-essential-to-defend-against-cybercrime" component={Blog3} />
          <Route exact path="/managed-services-an-asset-during-spring-break" component={Blog4} />
          <Route exact path="/how-cost-effective-is-your-it-support" component={Blog5} />
          <Route exact path="/managed-services-vs-traditional-it-support" component={Blog6} />
          <Route exact path="/what-are-managed-services-in-the-it-industry" component={Blog7} />
          <Route exact path="/why-is-it-disaster-recovery-important" component={Blog8} />
          <Route exact path="/converting-ecommerce-customer-experience-for-your-online-business-in-5-steps" component={Blog9} />
          <Route exact path="/trend-micro-reveals-biggest-cloud-challenges-for-healthcare-organisations" component={Blog10} />
          <Route exact path="/how-to-think-through-the-costs-associated-with-a-cloud-migration" component={Blog11} />
          <Route exact path="/reasons-and-best-practices-to-improve-interaction-with-customers" component={Blog12} />
          <Route exact path="/covid-19-a-call-for-digital-transformation" component={Blog13} />
          <Route exact path="/automation-for-better-or-worse-in-2021" component={Blog14} />
          <Route exact path="/how-covid-19-tilted-the-scale-in-favor-of-vpns" component={Blog15} />
          <Route exact path="/why-investment-in-magento-erp-integration-always-pays-off" component={Blog16} />
          <Route exact path="/3-options-for-marketing-automation-with-crm-choose-yours" component={Blog17} />
          <Route exact path="/network-operations-center-overview" component={Blog18} />
          <Route exact path="/business-it-alignment-challenges-and-rewards" component={Blog19} />
          <Route exact path="/infrastructure-as-a-code-a-developer-minded-approach-to-cloud-computing" component={Blog20} />
          <Route exact path="/could-sanitizing-tech-protect-workspace-of-the-future" component={Blog21} />
          <Route exact path="/how-small-businesses-can-prepare-to-return-to-the-office" component={Blog22} />
          <Route exact path="/it-strategy-how-to-find-out-is-your-strategy-good-bad-or-ugly" component={Blog23} />
          <Route exact path="/why-it-security-is-important-for-business-different-forms-of-it-attacks" component={Blog24} />
          <Route exact path="/cloud-migration" component={Blog25} />
          <Route path="*" component={NoFound} />

        </Switch>
  );
};

export default Routes;