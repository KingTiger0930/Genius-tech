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

export default function BlogDetail24() {
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
          <Typography variant='h3' component='h3' fontWeight={600}>
            Infrastructure to the Cloud .
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[24].imageurl}
          />

          <Typography variant='h5' component='h5' fontWeight={600} sx={{mb: 2}}>
            IaaS, PaaS, SaaS, FaaS: What are they for?
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600} sx={{mb: 2}}>
            IaaS
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Infrastructure as a Service (IaaS) provides companies with an infrastructure to develop their applications in the cloud. This type of cloud computing services offers you such resources as virtual machines, storage, and network services.<br/>
            With IaaS, companies avoid huge capital expenditures as they pay only for the resources they use. Another strong advantage is that you can get any resources needed in just a few clicks by purchasing a required infrastructure element. Thus, by choosing IaaS, you can launch your cloud app fast.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600} sx={{mb: 2}}>
            PaaS
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            By choosing Platform as a Service (PaaS), besides cloud storage and other resources, like operating systems, you get ready-to-use tools for developing, configuring, customizing, testing, and managing your applications. Such tools can be, for instance, database, application integration, or AI services.<br/>
            The PaaS model is popular with companies as it cuts the coding time, reduces time to market, and the overall software development expenses.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600} sx={{mb: 2}}>
            Serverless
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            The serverless model allows for quick development and easy scaling as, naturally, there is no reliance on virtual machines since the cloud executes application code without the need to install anything.<br/>
            Serverless deployment is financially efficient as a cloud provider charges for the exact compute resources needed to execute your code, not for the number of the virtual machines. Maintenance costs are also pretty low.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600} sx={{mb: 2}}>
            SaaS
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            In the SaaS (Software as a Service) model, software is used on a subscription basis and centrally hosted in the public cloud. The companies don’t need to build anything from scratch but can find a pre-built solution that can be configured and customized to meet their needs fully.<br/>
            SaaS solutions cover a wide variety of business needs, such as marketing, accounting, sales, HR, and etc. Popular examples of SaaS products are Salesforce, Microsoft Dynamics 365 Online, and Office 365.<br/><br/><br/>
            Migrations are only the beginning when it comes to your business taking advantage of the cloud. Whatever your business case may be, we’ll help define your cloud roadmap, plan and execute your migration to the cloud, then work with you to take advantage of your new cloud-based solutions.<br/>

            Your business-critical applications and databases may need operational support, re-platforming or re-architecting. Or you may be working with difficult data and analytics use cases, with massive data volumes, many data pipelines, or complex environments. Regardless of your reason to migrating to the cloud, our wide range of expertise means you have access to support before, during and after your cloud migration.<br/>

            Cloud migrations take many paths. You may migrate line-of-business applications such as moving QuickBooks from a server-based version to the cloud version. The most popular migration businesses are taking advantage of is Microsoft 365. Businesses are moving their on-premises Microsoft environment including email, Office, SharePoint, and all its data, to a new cloud model known as the Modern Desktop.
          </Typography>

          <Stack direction="row" justifyContent='end' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[23].url}>
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
