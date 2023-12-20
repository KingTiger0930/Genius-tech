import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { bloglist } from "./blogdata.js";

import BlogBanner from "../../components/BlogBanner";
import BlogItem from "./BlogItem";

import { Link } from "react-router-dom";

import "./../../assets/style.css";

export default function BlogDetail16() {
  const [number, setNumber] = React.useState(10);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openFacebookModal = () => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.genius-tech.ca%2Fquality-of-experience-well-for-a-user-a-must-for-a-provider", "name", "width=600, height=600");
  };

  const openTwitterModal = () => {
    window.open("http://twitter.com/intent/tweet?text=I wanted to share this great website with you&url=https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider", "name", "width=600, height=600");
  };

  const openLinkedInModal = () => {
    window.open("http://www.linkedin.com/shareArticle?mini=true&url=https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider&title=I wanted to share this great website with you", "name", "width=600, height=600");
  };

  return (
    <>
      <BlogBanner img='/blog/blogbanner.svg'/>
      <Box sx={{mt: 13}}>
        <Box sx={{mx: "auto", maxWidth: "960px"}}>
          <Typography variant='h5' component='h5' fontWeight={600} align='center'>
            {bloglist[15].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[15].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Running an ecommerce business, you need an online presence powered by an ecommerce system, such as Magento, and effective management of back-office processes including inventory, supply chain, procurement and finances, powered by enterprise resource planning (ERP) software. The success of ERP implementation depends largely on the integration between the two systems. Poorly integrated, they will return mismatched and duplicate data, and, as a result, mess in all business processes. Quality integration, however, brings tangible gains.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            1. Time saved on automated data flowing
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            The integration of Magento and ERP ensures that business data does not need to be entered twice in both systems but flows seamlessly according to established rules. The flow is bidirectional: ERP draws customer data, payments and orders from Magento and sends back information about inventory levels, prices, order status and returns.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            2. Improved customer experience
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            An integrated Magento-ERP ecosystem allows to maintain data accuracy and visibility. This helps to organize daily activities of your team effectively. What’s more, it ensures thorough inventory control, timely procurement and prompt order shipment – all three processes directly affect customer experience and, most importantly, customer loyalty. Customers won’t put up with frequent stockouts of their favorite products while a single case of delivery disappointment may undermine all your effort and cause customers leave for competitors.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            3. Effective handling of demand fluctuations
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Visibility into sales and inventory has one more advantage to offer – it helps you ease the control over consumer demand and respond to its ups and downs timely. For example, you can set price discounts for stale stock and thus prevent potential financial losses from expired products.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            4. Prompt customer support
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            ERP provides an up-to-date status of customers’ orders to Magento so that customers can always track them in their personal accounts in a webstore. However, even if the need arises to contact customer support, they can count on prompt resolution of their issues as centralized customer data provides your customer support agents with all-round information regarding orders.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            Top 3 ERP systems to use with Magento
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            The ERP market is vast so I will focus on reliable and widely used solutions that have already earned trust of numerous businesses worldwide.<br/>

            Microsoft Dynamics 365<br/>

            Microsoft Dynamics 365 provides resource planning functionality with a set of business applications for the management of finances, human resources and supply chain operations. Each app is built with integration in mind, so it’s convenient to connect them with a Magento-based webstore.<br/>

            Dynamics offers several pricing plans depending on what functionality your business needs and you get a discount with each subsequent app you purchase.<br/>

            Learn more about the Microsoft Dynamics 365 and its ERP ecosystem<br/>

            Oracle<br/>

            Oracle ERP Cloud is a cloud-based suite of ERP software for finance, human resources, supply chain management, and more. The deployment and integration with other apps within your ecommerce technology stack is quite easy.<br/>

            Learn more about Oracle Cloud ERP<br/>

            SAP<br/>

            SAP offers a range of ERP tools featuring process automation, machine learning, and AI capabilities. It provides a number of integration endpoints out of the box.<br/>

            Learn more about SAP S/4HANA
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            How to integrate Magento with ERP
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            The easiest way to integrate Magento with ERP is to use ready-made connectors available on Magento Marketplace. Though the extensions are ready-to-install, you will need assistance of expert developers to integrate them and thus customize the Magento behavior correctly.<br/><br/>
            If you don’t find a connector for the ERP of use, Magento developers can custom-code the integration with any ERP system of your choice. Keep in mind that the more customized your ERP system is, the larger work volume and the higher cost the integration entails.
          </Typography>
          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[16].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[14].url}>
              {"Newer Post >"}
            </Link>
          </Stack>
          <Stack direction="row" sx={{ display: {xs: "none", xl: "flex"}, my: 10 }} justifyContent='center'>
            <p onClick={openFacebookModal} className="Blog_1">
              <FacebookIcon fontSize='large' sx={{color: "#4b68a2"}}/>
            </p>
            <p onClick={openTwitterModal} className="Blog_1">
              <TwitterIcon fontSize='large' sx={{color: "#00abf3"}}/>
            </p>
            <p onClick={openLinkedInModal} target='popup' className="Blog_1">
              <LinkedInIcon fontSize='large' sx={{color: "#0079b4"}}/>
            </p>
            <a href='https://api.whatsapp.com/send?text=I wanted to share this great website with you https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider' className="Blog_2">
              <WhatsAppIcon fontSize='large' sx={{color: "#01e675"}}/>
            </a>
            <a href='mailto:support@genius-tech.ca' className="Blog_2">
              <MailOutlineIcon fontSize='large' sx={{color: "#707070"}}/>
            </a>
          </Stack>
          <Stack sx={{my: 3}}>
            <Grid container sx={{maxWidth: "1000px", mx: "auto", my: 4}}>
              {
                bloglist.slice(0, number).map((item, i) => (
                  <Grid item xs={6} md={4} sx={{px: 1, mb: 2}} key={i}>
                    <BlogItem item={item} key={i} />
                  </Grid>
                ))
              }
            </Grid>
            <Box display='flex'>
              <Button variant="contained" sx={{px: 5, py: 1}} onClick={() => setNumber(number+5)}>Road More</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
