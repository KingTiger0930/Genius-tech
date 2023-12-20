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
            <Typography variant='h5' component='h5' fontWeight={600} color='#299ec6' sx={{mb: 2}}>
              How to manage ecommerce customer experience
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              The best way to master ecommerce customer experience is to imagine you are a customer yourself. Ask yourself whether you’d want to be required to register to make a purchase, what navigation and filtering would make the most sense for the goods you sell, and so on.<br/>

              It is important to show customers you care about making online shopping easier for them. For example, one of the things you can arrange is pre-filling the necessary fields at the checkout with the info from their previous orders. It will save customers a bunch of time and make their journeys more personalized.
            </Typography>

            <Typography variant='h5' component='h5' fontWeight={600} color='#299ec6'>
              5 tactics for a converting customer experience
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Take care of smartphone users
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Approximately half of online shoppers use their mobile devices to surf the internet.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Offer free shipping
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Setting a specific threshold for free shipping is a good idea not to break the conversion path and prevent customers from dropping the shopping cart.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Provide customer support
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Ample customer support is important both before and after the purchase is done. Even if you rely on a chatbot, you should also give customers an opportunity to contact a real person if required. It comes especially handy while dealing with situations when something goes wrong after customers receive items. Solving such problems fast is crucial to leave customers happy.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Simplify the checkout process
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              The fewer steps customers have to take to order something, the less time they will hesitate. Ask people only for the necessary information and don’t bother them with filling in too many fields not to create an additional obstacle on their way to buy goods.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Post-purchase interaction
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Ecommerce customer experience doesn’t end with receiving purchased goods. Make sure your customers are satisfied by sending them a short email with a thank you note and ask them to rate the service of your e-store.<br/>You can also inspire customers to post the products they bought and give their feedback on social media.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Get a value-driving customer experience now!
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Ecommerce customer experience involves every detail of an online store, from landing page design to payment methods. If you are looking for professional help in creating an online store that drives customers into buying, contact ScienceSoft’s ecommerce team.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[9].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[7].url}>
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
