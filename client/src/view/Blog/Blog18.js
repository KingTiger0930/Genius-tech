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

export default function BlogDetail18() {
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
            {bloglist[17].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[17].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            A Network Operations Center (NOC) is a centralized location, either placed on-premises or outsourced to a third-party provider, where NOC engineers exercise 24x7x365 network monitoring, respond to incidents, and prevent potential network malfunctioning. NOC activities include but are not limited to traffic analysis, network configuration control, fault detection and response, diagnosis and maintenance.<br/><br/>
            Below, we share the top 4 best practices that may help you effectively organize and manage the work of your Network Operations Center.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            1. Clearly define the NOC team’s responsibilities
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            Ineffective division of roles and duties among NOC team members cause disjointed work of the whole network operations center. Typically, there are two roles in a NOC team structure: NOC engineers and NOC managers. A NOC engineer’s responsibilities include continuous network monitoring, troubleshooting, resolution and escalation of issues related to the network, interaction with customers, documentation and creating reports. A NOC manager, in turn, is in charge of prioritizing and assigning tasks to engineers based on their skills and expertise, making sure staff is informed about significant IT infrastructure incidents, as well as overseeing the high-level NOC functioning.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            2. Encourage collaboration among NOC team members
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Well-coordinated teamwork of your NOC team members is a key to the effective and quick resolution of emerging issues. Today, the market offers a number of powerful online collaboration tools with such capabilities as the automation of incident management and the escalation process, collaboration on documents, reporting, and analytics for NOC managers and departments concerned.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            3. Create a knowledge base for NOC engineers
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Document all the incidents to make a centralized source of information for your NOC staff. The knowledge base should be accessible to all your team members and contain structured information about the previously resolved issues, featuring the most common ones. It will help your NOC engineers quickly and more efficiently resolve incidents relying on the documented experience.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            4. Continuously monitor NOC performance
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Reports should be created on a daily basis and contain the information about all the major incidents of the past 24 hours, the number of successfully resolved incidents, time-to-response, time-to-resolution, the number of incidents resolved before escalation, and other KPIs. All the resolved issues should have the root causes listed.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            Enable smooth network operations
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Properly managed network operations back up the uninterrupted work of your organization’s IT infrastructure. Applying the practices I described above will help you run your network operations more efficiently and increase network uptime. If you consider outsourcing your NOC to a reliable service provider to reduce your expenses and stay focused on business projects, feel free to contact us.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[18].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[16].url}>
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
