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
            {bloglist[6].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[6].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Nowadays, all businesses – regardless of size – depend on their IT infrastructure to not only remain competitive but also handle day-to-day tasks. Technology has automated a plethora of tasks, from payroll administration to stocktaking. But it’s also enabled businesses to streamline their marketing and sales operations, open up new revenue streams, and make communication with new and old customers seamless.<br/><br/>

            Almost all companies store sensitive information and data pertaining to their accounts and customers. And that data is lucrative. Even if you operate a small business, you can’t afford to assume you won’t be targeted by opportunistic cyber criminals that exploit vulnerabilities. You also can’t assume no other problems will affect your network – power outages and brown-outs, for example.<br/><br/>

            If you don’t think you have the time or resources to keep your IT infrastructure updated and secure, you need to learn more about managed IT services. Essentially, you can outsource all your IT maintenance and security needs to a team of experts, enabling them to deal with technical issues, cyber threats, updates and data backups remotely, whether you’re sitting at your computer or not.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600} sx={{mb: 2}}>
            What’s included in managed IT services? 
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            At First Solution, we’re one of the UK’s leading managed IT service providers, offering services ranging from software installations to remote monitoring and everything in between. Some of our most sought-after managed IT services include:
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            <li>Managed web security </li>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Cyber crime is on the rise, and the pandemic has only made matters worse now that people rely on their devices more than ever before. Criminals often target small enterprises with weak security systems in place. Fortunately, you can achieve the same level of protection as the world’s largest corporations with our managed web security and managed antivirus services.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            <li>Remote access</li>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            If you ever experience technical issues with your network, one of our IT specialists can address the problem without fuss. We can remotely access your systems to diagnose and fix the problem quickly to minimise downtime to your business. As a result, we could help you save a small fortune in losses.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            <li>Data backup and recovery</li>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Your data is vital to the day-to-day running of your business. It’s essential for forecasting, calculating your ROI, reaching customers with targeted communications, record-keeping, and much more. For that reason, you need to back up your data frequently and make sure you can recover it quickly in the event of a breach. Or, you could let our experts do everything for you.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            <li>Cloud services</li>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            CThanks to cloud solutions offered by the likes of Microsoft, Adobe and Google, you don’t need to install software on onsite servers to keep your business running. You can simply pay an affordable monthly fee to access the services you need, which are stored in the cloud. If you need help migrating to the cloud, we’re the company to call.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600} color='#299ec6'>
            Let us handle your digital transformation !
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            At Genius Tech, we can oversee, manage and secure your entire IT infrastructure and network, saving you time, money and effort while mitigating risks to your business. If you want to learn more about managed IT services and how they can benefit you, don’t hesitate to call us.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[7].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[5].url}>
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
