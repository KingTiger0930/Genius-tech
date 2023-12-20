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
              {bloglist[4].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[4].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Every business owner is always searching for ways to reduce their expenditure. A tight budget doesn’t only restrict growth plans, but it can also cause a company to fall into trouble if they hit a rough financial patch.<br/><br/><br/>
              At the same time, most businesses will also realise a reliable IT system, one that doesn’t compromise on features, is essential. It ensures they can remain competitive, efficient, and productive. Yet maintaining this system is far from straightforward – this is why strong IT support is crucial.<br/><br/><br/>
              However, are you spending too much on your IT support? Maybe you’re not spending enough? To figure out the central question posed by this article, let’s take a closer look at the two leading IT support methods available for a small to mid-size business.
            </Typography>

            <Typography variant='h5' component='h5'>
              In-house support
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              The first option is to hire an IT support team to work in-house for your business. This is an attractive scenario for two main reasons. First of all, you can receive instant support and know your IT system is running smoothly. There’s also the level of flexibility it affords. Along with IT-related tasks, you can also get them to help out with project work and support other areas of your business.<br/>
              There are significant drawbacks, however. For example, your business can be left vulnerable if your IT support engineer is on holiday or absent due to illness. Plus, with the way IT is ever-evolving, even experienced IT engineers can struggle to stay up-to-date with every area of IT.<br/>
              Most importantly, in this case, is the expensive nature of employing a team in-house. With a set wage, pension, potential bonuses, etc. for each employee, hiring an IT team can be exceptionally pricey for even a mid-sized business.
            </Typography>

            <Typography variant='h5' component='h5'>
              Outsource the work
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Outsourcing to a specialist IT provider makes a lot of sense for both small and large businesses. A small company, for instance, can receive ad hoc support. What this means is that they only pay for IT support when needed, which is particularly cost-effective as there’s no need to commit to a set contract. You also have the ability to scale up and down when required effortlessly.<br/><br/>

              If you have a complex IT system to manage, unlimited support is also available. Your business is provided with dedicated assistance at all times. No holidays or unsociable hours get in the way. Along with 24/7 support, you also benefit from IT experts and their specialist services – the type you’d typically have to splash a considerable amount of money on.<br/><br/>

              Perhaps most importantly is the expert skillset you receive right from the start with outsourcing. It’s a different story when trying to assemble an in-house IT team with all the skills you require. You need an IT director to plot a strategy, an IT manager for supervising networks, and an IT engineer ready to assist on the help desk. Attempting to find this level of expertise from a local talent pool is difficult.<br/><br/>

              Just remember the old saying, “You get what you pay for.” This is undoubtedly true when outsourcing. If you simply base your IT support on picking the cheapest option, this could come back to haunt you later on. This is why you should always place your trust – and money – into a respected and experienced provider like First Solution.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[5].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[3].url}>
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
