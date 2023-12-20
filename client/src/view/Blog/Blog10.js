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
            <Typography variant='h3' component='h3' fontWeight={800}>
              {bloglist[9].title}
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              A Trend Micro study has revealed skills shortages, increased costs and security to be among the biggest cloud migration challenges for healthcare organisations<br/><br/>

              According to the Trend Micro report, 88% of global healthcare organisations accelerated spending on cloud migration due to the Covid-19 pandemic, but many may be over-estimating their ability to protect these environments.<br/><br/>

              While the cloud has been leveraged to facilitate remote working, cost saving and improved IT agility, 43% of healthcare organisations have spent more on capital expenses and paying for contracted out services, and 39% have spent more on operational and training costs since migrating.<br/><br/>

              Along with costs increasing, contrary to the goal of saving money, day-to-day operations have proved difficult within the healthcare sector, with cited workload challenges including setting and maintaining policies (34%), patching and vulnerability management (32%), and misconfigurations (32%).<br/><br/>

              In addition, 43% of surveyed companies said that skills gaps have been a persistent barrier to migrating to cloud security solutions, while only 40% are confident that they secure their part of the Shared Responsibility Model.<br/><br/>

              While digital transformation using the cloud has made positive impacts on productivity and patient care during the Covid-19 crisis, it’s vital that the wider attack surface of an expanded digital infrastructure is given due consideration.<br/><br/>

              With operational and security challenges in mind, cloud-ready solutions can be put in place to spot misconfigurations, automate patching and policy management, and integrate security into DevOps, narrowing skills gaps in the process without putting patient data at risk.<br/><br/>

              “Security is another aspect of building well, not a separate function. And security controls help teams build better in the cloud,” said Mark Nunnikhoven, vice-president of cloud research at Trend Micro.<br/><br/>

              “Security can be an accelerator for building in the cloud. Using the right tools and understanding the platforms you’re using is key to making that happen.”<br/><br/>

              2,500 IT decision makers in 28 countries and across several industry sectors, including healthcare, were surveyed by Trend Micro in collaboration with Sapio Research.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[10].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[12].url}>
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
