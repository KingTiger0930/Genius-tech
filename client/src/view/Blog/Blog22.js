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

export default function BlogDetail22() {
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
          <Typography variant='h5' component='h5' align='center'>
            {bloglist[21].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[21].imageurl}
          />

          <Typography variant='p' component='p' fontWeight={600}>
            Challenges Tech Teams Might Face in Planning a Comeback
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            It’s one thing to simply discuss these ideas for reopening; it’s another to implement them. Small businesses face a number of pressure points in reviving an office or restarting a factory. Here are a few to keep in mind.<br/><br/>
            <b><u>Cost:</u></b> These are all new solutions, and if you have an unlimited budget, you can use such technology as artificial intelligence and thermal tracking cameras. Small businesses, however, may not have the resources to deploy such complex tools. For thermal scanning, for example, a kiosk that relies on handheld scanners may be more cost-effective than a camera system.<br/><br/>
            <b><u>Supply:</u></b> For organizations that do have the resources, there can still be challenges getting access to specialized equipment, which is high in demand. If your office can’t obtain the technology it needs for reopening, that can hold up your plan.<br/><br/>
            <b><u>Logistics:</u></b> The pandemic-era security needs of a business are different that those required pre-pandemic, and that may require some additional strategy. For example, setting up a thermal scanning station means that external doors that were once accessible need to be closed off to entry (but still allowing exit in case of a fire or other emergency).<br/><br/>
            <b><u>Technical considerations:</u></b> Some solutions that might prove valuable for small businesses, such as contact tracing, aren’t easy to implement. They may require new employee policies, such as limits to how many people can be in a room simultaneously. Giving employees radio frequency identification tags to track such behavior means a new piece of gear workers are responsible for, and while wireless networking-based solutions exist, they can be complicated to implement and may require additional investment.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[22].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[20].url}>
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
