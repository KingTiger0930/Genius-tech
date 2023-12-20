import React from "react";

import { Switch, Route } from "react-router";

export default function Router() {
  return (
        <Switch>
          <Route exact path="/" />

          <Route exact path="/managed-it-services" />
          <Route exact path="/desktop-management-and-remote-support-service" />
          <Route exact path="/server-management" />
          <Route exact path="/network-management" />

          <Route exact path="/our-services" />
          <Route exact path="/cloud-backup-solution-workstation" />
          <Route exact path="/cloud-backup-solution-server" />

          <Route exact path="/our-it-solutions" />
          <Route exact path="/onsite-it-support-services" />
          <Route exact path="/network-cabling" />
          <Route exact path="/about-us" />
          <Route exact path="/subscribe" />

          <Route exact path="/cart" />
          <Route exact path="/checkout" />
          <Route exact path="/checkoutone" />

          <Route exact path="/blog" />
          <Route exact path="/quality-of-experience-well-for-a-user-a-must-for-a-provider" />
          <Route exact path="/managed-devops-best-practices-no-headache" />
          <Route exact path="/backups-are-essential-to-defend-against-cybercrime" />
          <Route exact path="/managed-services-an-asset-during-spring-break" />
          <Route exact path="/how-cost-effective-is-your-it-support" />
          <Route exact path="/managed-services-vs-traditional-it-support" />
          <Route exact path="/what-are-managed-services-in-the-it-industry" />
          <Route exact path="/why-is-it-disaster-recovery-important" />
          <Route exact path="/converting-ecommerce-customer-experience-for-your-online-business-in-5-steps" />
          <Route exact path="/trend-micro-reveals-biggest-cloud-challenges-for-healthcare-organisations" />
          <Route exact path="/how-to-think-through-the-costs-associated-with-a-cloud-migration" />
          <Route exact path="/reasons-and-best-practices-to-improve-interaction-with-customers" />
          <Route exact path="/covid-19-a-call-for-digital-transformation" />
          <Route exact path="/automation-for-better-or-worse-in-2021" />
          <Route exact path="/how-covid-19-tilted-the-scale-in-favor-of-vpns" />
          <Route exact path="/why-investment-in-magento-erp-integration-always-pays-off" />
          <Route exact path="/3-options-for-marketing-automation-with-crm-choose-yours" />
          <Route exact path="/network-operations-center-overview" />
          <Route exact path="/business-it-alignment-challenges-and-rewards" />
          <Route exact path="/infrastructure-as-a-code-a-developer-minded-approach-to-cloud-computing" />
          <Route exact path="/could-sanitizing-tech-protect-workspace-of-the-future" />
          <Route exact path="/how-small-businesses-can-prepare-to-return-to-the-office" />
          <Route exact path="/it-strategy-how-to-find-out-is-your-strategy-good-bad-or-ugly" />
          <Route exact path="/why-it-security-is-important-for-business-different-forms-of-it-attacks" />
          <Route exact path="/cloud-migration" />

        </Switch>
  );
}
