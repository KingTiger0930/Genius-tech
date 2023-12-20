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

export default function BlogDetail3() {
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
        <Box sx={{mt: 12}}>
          <Box sx={{mx: "auto", maxWidth: "960px"}}>
            <Typography variant='h5' component='h5'>
              The Overlooked Costs of Cloud Migrations
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              sx={{width: "100%"}}
              src={bloglist[10].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              One of the biggest issues is that some IT leaders still do not fully understand the fundamental differences between Software as a Service, Infrastructure as a Service and Platform as a Service.<br/>

              There are also differences in pay-as-you-go and reserve models of Compute as a Service. In a reserve model, an agency would not save money by scaling up or scaling down computing resources.<br/>

              Cloud can be cheaper for agencies if there are services that can be run in a shared cloud environment as opposed to an on-premises data center. However, the more secure applications or data need to be, the more costly running a cloud service can become. Agencies need to comply with standards set out by the National Institute of Standards and Technology, or from the Defense Department and other governing bodies.<br/>

              It’s important to remember that a cloud service provider will provide a foundational level of security for its cloud environment, but the vast majority of cloud security falls on the agencies. IT leaders need secure their own apps and data.<br/>

              Even adopting managed services does not obviate all of the costs associated with a cloud migration, since agencies would still need to pay for a cloud service-level agreement, which can lead to other costs in the long term.<br/>

              There are other costs to consider as well. Does your agency need redundancy capabilities? How much caching will be needed? How many load balancers? Critically, IT leaders need to think about how much their use of cloud services will grow over the next five years. Leaders need to plan for that growth, since under provisioning at the start of a migration may end up costing the more in the end.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              How Cloud Migration Costs Can Be Analyzed
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              To get a better estimate of cloud migration costs, IT leaders need to draw out a proper picture or storyboard of their cloud growth, either internally or with trusted partners.<br/>

              The storyboarding needs to focus on an agency’s current cloud needs as well as the expected growth in cloud services. Typically, agencies upgrade most of their IT every three to five years, so IT leaders may be inclined to think about cloud costs being fixed during that three- to five-year window. However, cloud models do not work that way,<br/>

              Cloud is constantly changing. Software insurance costs may go up. New spikes in demand may come, as was the case when agencies shifted to massive telework deployments this spring.<br/>

              Digging into that scenario, let’s say agencies are deploying virtual desktop infrastructure for their users via the cloud. Should they deploy that VDI setup for eight or nine hours per day to avoid paying for 24 hours of costs? They can, but they will need to get users into the mindset that they do not have physical desktops that can be accessed at any time of day. Do they need the entire infrastructure or just access to one application?<br/>

              So, agencies need to define what they are going to do and how they are going to do it. Agencies also need to analyze the compliance costs associated with the mandates they need to meet and the risks they are willing to accept.<br/>

              If agencies do not accurately estimate their cloud costs and what they will need in terms of cloud resources, they will wind up sizing incorrectly and using the wrong capabilities. That could end up costing agencies two to three times what they might have paid for cloud services.<br/>

              Accurately determining cloud migration costs and the costs of maintaining a data center will help IT leaders persuade CIOs, CTOs and CFOs of the need for a cloud migration.<br/>

              The shift to remote work and the ability to increasingly access sensitive information via the cloud shows how quickly cloud environments can change. That’s why it is critical for cloud migration costs to be accurately estimated before a migration gets underway.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[11].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[13].url}>
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
