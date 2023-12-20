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
            This is a subtitle for your new post
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[12].imageurl}
          />

          <Typography variant='p' component='p' fontWeight={600} sx={{mb: 2}}>
            The COVID-19 outbreak is a tragedy that will have widespread and long-lasting implications for humanity and our global economy. As COVID-19 continues to spread around the world, more and more enterprises will miss their financial targets because of supply chain disruptions and dampened customer demand. 
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            It’s clear that this pandemic will drastically impact most businesses for months, probably years. With this mindset, it’s imperative for enterprises to build in the necessary operational resiliency to survive this new reality. COVID-19 has showcased the value of IT and digital transformation and organizations should use this time to accelerate the transition.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            IDC recently surveyed 32 Chinese CXOs regarding the impact of the new coronavirus. Here’s what they found:<br/>The top 3 negative impacts of COVID-19 on enterprises are:
          </Typography>

          <ul>
            <li>Inability to visit customers</li>
            <li>Significant decline in sales performance</li>
            <li>Inability to resume production.</li>
          </ul>

          <Typography variant='p' component='p' fontWeight={600}>
            The top 3 positive impacts on enterprises are:
          </Typography>

          <ul>
            <li>Improved corporate ability of long-distance collaborative work</li>
            <li>Wide recognition of the value of digital transformation and information technology among all employees</li>
            <li>Gaining ability of online marketing and business development.</li>
          </ul>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            “The value of digital channels, products and operations is immediately obvious to companies everywhere right now,” says Sandy Shen, senior director analyst, Gartner. “This is a wake-up call for organizations that have placed too much focus on daily operational needs at the expense of investing in digital business and long-term resilience. Businesses that can shift technology capacity and investments to digital platforms will mitigate the impact of the outbreak and keep their companies running smoothly now, and over the long term.”<br/>

            As companies evolve to become more digital, more customer interactions will now occur on a screen rather than in person. These digital transformation efforts start with creating new accounts online. Digital identity verification is an unsung hero in an organization’s digital transformation strategy because companies must verify that a person’s digital identity matches their physical identity when conducting business online. <br/>

            Within Jumio’s customer base, volumes have increased 20% to 100%, with significant upticks in banking, financial services and online gaming over the last few weeks — further proof that black swan events can be a boon to businesses that are prepared to seize the opportunity.<br/>

            Sadly, many companies still require users to visit a store or branch office to create a new account or to perform routine transactions — increasingly, this is going to be a difficult mandate as many of us are now homebound and social distancing.<br/>

            Organizations that have web enabled their businesses are in much better position to weather this pandemic. Digital transformation covers a lot of territory, but starting with identity verification makes practical sense as it enables modern companies to streamline the customer onboarding journey. This enables their users to create new accounts and transact entirely from their smartphones and computers.<br/>

            For the past few years, digital account opening has been at the top of the list of technologies organizations intend to add or replace, but COVID-19 is pushing digital transformation to the front of the line. 
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[13].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[11].url}>
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
