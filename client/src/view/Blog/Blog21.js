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

export default function BlogDetail21() {
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
            {bloglist[20].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[20].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            As states move through various stages of reopening, many workers are facing a prospect they haven’t considered in months: Returning to the office.<br/><br/>
            Organizations are looking more seriously at how to bring workers back to the office in a safe, productive way. But one big challenge that they face is that workers don’t want to return to offices for five days per week. A recent survey from PwC found that a whopping 72 percent of workers want to be able to work remotely at least twice a week in a post-COVID-19 world, and nearly one-third (32 percent) would like to remain remote permanently.<br/><br/>
            Businesses have incentives to accommodate their preferences. Having fewer workers in the office can mean big savings on space if organizations can come up with schedules to allow employees to share desks and monitors. But sharing equipment also increases the risk of spreading germs, and with the pandemic ongoing, businesses have to take extra measures to ensure workers are healthy and safe.<br/><br/>
            Fortunately, new sanitizing technologies are emerging to help businesses protect their employees. From ultraviolet light devices to trusty hand sanitizer, here are some of the tools that organizations can use to help keep employees healthy at the office.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Ultraviolet Sanitizing for Large-Scale Disinfecting
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            A critical factor in keeping disease from spreading through the office is keeping surfaces disinfected. Employees will have to touch desks, chairs, computer equipment and phones to do their jobs, and businesses can’t afford to assume that workers’ own cleaning efforts will suffice.<br/><br/>
            One option for businesses will be to deploy ultraviolet light sanitizing devices. UVC technology, which uses a specific type of ultraviolet light, has been used to keep viruses out of drinking water and off of surfaces, and it can be a useful tool to disinfect large offices. 
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            New drones that drape surfaces in UVC light,
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            such as the Digital Aerolus Aertos 120 UVC Drone, can deliver results over large areas quickly. For a more targeted approach, businesses can try UVC wands, such as the Hamilton Buhl HygenX Vray wand, to sanitize specific spots.<br/><br/>
            If employees are going to be sharing work spaces, they’ll also need to be able to safely share equipment. Some companies, like UV Angel, provide devices that shine UVC light directly on items like monitors and keyboards. There are also disinfecting cabinets that can sanitize dozens of devices at once using UVC where employees can place their notebooks or tablets at the end of the day. 
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Keep Sanitizing Products Easily Available in the Office
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            While emerging technologies can help keep employees healthy, that doesn’t mean that traditional hygiene goes out the window. It’s as important as ever for workers to have ready access to hand sanitizer to keep infection from spreading in between office cleanings.<br/><br/>
            In addition to the traditional sanitizer dispenser, there are new options that provide a more interactive, educational and contactless experience. ViewSonic, for example, has a product that shows a digital display as employees take sanitizer. The dispenser can be filled with either liquid or gel products, and there are both wall-mounted and standing options. <br/><br/>
            Samsung makes a dispenser that can activate a display once it detects someone is close, changing what appears on the screen. This offering includes standing, wall-mounted and desktop models. <br/><br/>
            As businesses form their return-to-office plans, they need to craft strategies that put the health of employees first. Emerging technologies can help keep workers safe as they navigate the new workplace dynamic.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[21].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[19].url}>
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
