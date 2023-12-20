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
              {bloglist[5].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[5].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              In this day and age, technology plays an integral role for businesses attempting to reach their goals. While the dependence on technology varies for each company, the situation is simple: each business needs to ensure their IT system is functioning at its best.<br/><br/>

              If you or your employees are competent with computers, you will have the know-how to complete standard IT-related tasks. This can include everything from managing updates to installing antivirus software.<br/>
              Yet if you want your IT to be at the top of its game, you will typically have to search for outside help supplied by an expert provider. When doing this, there are two common choices: managed services and traditional IT support.<br/>
              What’s the difference between the two? Which one will work best for your business? Read on for the answer to these questions – and more.
            </Typography>

            <Typography variant='h5' component='h5'>
              Traditional IT support
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Traditional IT support is commonly referred to as “break-fix” support. This is due to the reactive nature of this support channel.<br/>

              When working with a traditional IT support provider, you’re going to gain access to a team of IT experts who are on standby to solve any problems you come across. When you do have an issue that needs resolving, you notify the provider’s help desk and wait for the fix to be done.<br/>

              When it comes to traditional IT support, this can be done in-house. Although if you want a professional IT engineer to do the work, hiring them could be especially expensive. This is why outsourcing is recommended for small-to-medium businesses. Payments for outsourced IT support are usually either done by purchasing a block of operational hours or paying a one-off annual subscription fee.
            </Typography>

            <Typography variant='h5' component='h5'>
              Managed services
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Compared to the previous option, managed IT services take on a much different form. This starts with managed services being proactive rather than reactive. What does this mean exactly? Essentially, it highlights how your third-party provider is “always-on” and monitoring the situation. Instead of waiting for an aspect of your IT system to break – like with traditional IT support – the MS team is continuously doing work in the background.<br/>

              Round-the-clock monitoring assists with preventing IT issues from causing your business problems. As a result, your business won’t suddenly go offline – it will continue to run 24/7. Along with this, you also get to benefit from the expertise provided by managed services providers. Based on our features, you can enjoy everything from the latest antivirus software to a sophisticated backup and recovery system. Via the help desk, experts are also available at all times to supply support when needed.<br/>

              Another advantage of managed services is the payment structure. You typically pay a fixed monthly rate, which means there are no hidden expenses.
            </Typography>

            <Typography variant='h5' component='h5'>
              In summary
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Traditional IT support is a suitable choice for businesses that don’t rely too much on technological developments. They can step in and deliver help when needed. If you operate a sophisticated IT system, however, managed services are essentially mandatory. This will keep your business online at all times, protect from malicious threats, and refine your entire IT system.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[6].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[4].url}>
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
