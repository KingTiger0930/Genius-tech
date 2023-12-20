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

export default function BlogDetail17() {
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
            {bloglist[16].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[16].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Let’s take a closer look at the three popular ways to revamp marketing processes in a company, depending on its size and marketing maturity level – CRM with marketing automation features, sales CRM and marketing automation tools.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            Option 1. Sales CRM
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            Sales CRMs, like Zendesk and Pipedrive, are unlikely to serve the marketing automation goals, since their goal is to increase an opportunity win-rate and sales revenue. And they do just that with such capabilities as:<br/>
            <ul>
              <li>Aggregating all customer data in one place and creating an all-round customer view.</li>
              <li>Maintaining efficient customer communication via multiple channels.</li>
              <li>Making more targeted offers using the history of customer interactions.</li>
              <li>Creating a well-structured sales process.</li>
              <li>Tracking sales progress and spotting the improvement areas in the sales process.</li>
            </ul>

            The functionality of more advanced sales CRMs, like Salesforce Sales Cloud, goes beyond pure sales activities and has basic marketing automation features, like:<br/>

            <ul>
              <li>Tracking and qualifying new prospects.</li>
              <li>Web-to-lead capture for generating leads from website visitors.</li>
              <li>Mass email for creating targeted email lists.</li>
            </ul>
            Such functionality may be enough for basic prospect management, mass emailing to prospects, and tracking the degree of prospect engagement with your company. Remember, such CRM is a sales-focused solution anyway, and not a dedicated tool to bring outstanding lead generation and conversion results.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            Option 2. Sales CRM and a marketing automation tool
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 10}}>
            If your marketing processes are yet not mature enough (e.g., there are no elaborated customers’ personas, or prospect segments for targeted communication), but your needs go beyond basic automation, I suggest opting for separate marketing tools (e.g., Mailchimp for email marketing, Audiense for audience segmentation).<br/>
            Still, to make this approach winning, you need to ensure the transfer of the lead-related information between marketing and sales departments by integrating a marketing automation tool and sales CRM. However, as my practice shows, such an approach may be insufficient for а full-fledged marketing campaign that involves creating a multichannel experience at every stage of the prospect life cycle.
          </Typography>

          <Typography variant='h5' component='h5' fontWeight={600}>
            Option 3. Full-fledged CRM with marketing automation
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            If your marketing automation needs are ampler than described above, and you already use sales CRM, which can be complemented with a marketing automation product (e.g., Salesforce Marketing Cloud and Microsoft Dynamics 365 Marketing), opting for a full-fledged solution is justified. You’ll attract more leads and increase their conversion due to:<br/>

            <ul>
              <li>Analyzing prospects’ online behavior.</li>
              <li>Prospect segmentation.</li>
              <li>Carrying out targeted marketing campaigns via multiple communication channels (e.g., email, social networks, mobile).</li>
              <li>Automating social media advertising.</li>
              <li>Monitoring company mentions in social media and adjusting your offering according to them.</li>
            </ul>
            The comprehensive functionality of such solutions allows coordinating sales and marketing efforts, build lead-generating multichannel marketing activities, and ensure every lead is tracked, nurtured, and passed to a sales team in a sales-ready state.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[17].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[15].url}>
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
