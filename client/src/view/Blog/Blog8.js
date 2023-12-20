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
              {bloglist[7].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[7].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Many business owners are starting to realise that cybercrime is a very real threat that can affect just about anybody. Stealing data from a large corporation might be extremely lucrative but hacking into vulnerable systems put in place by small enterprises is more straightforward for hackers. That’s why all companies face the risk of falling victim to cybercrime. But it’s not just criminals that pose a threat to your IT infrastructure.<br/><br/>

              Natural and man-made disasters as well as issues like power outages and brownouts can all result in the loss of data and business downtime, both of which can be costly. In fact, recent studies suggest that around 93% of businesses that experience downtime for more than 10 days go bankrupt within a year. That eerie statistic makes the fact that around 75% of small businesses have no disaster recovery plan in place especially worrying. <br/><br/>

              In some cases, small businesses neglect to implement a robust IT disaster recovery strategy because they think they lack the time and resources. Or, they assume they’ll never fall victim to cybercrime, but that’s an assumption you can’t afford to make.<br/>

              So, why is implementing an IT disaster recovery plan so crucial? And how can you protect your network?
            </Typography>

            <Typography variant='h5' component='h5' fontWeight={600} color='#299ec6' sx={{mb: 2}}>
              Why you need an IT disaster recovery plan
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              Just some reasons why you need an IT disaster recovery plan include:
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Approximately half of online shoppers use their mobile devices to surf the internet.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              <li>Hardware can fail</li>
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Modern IT hardware may be admirably resistant to technical issues and failures, but nothing in this world is perfect. Power outages, overheating, brownouts and even natural disasters can all cause hardware problems, leading to lost data. This is why you need to back up your data frequently and be able to recover it quickly in the event of a hardware failure.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              <li>Humans make mistakes</li>
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Forgetting to save documents, data-entry issues and incorrect hardware shutdowns can all lead to data loss, and even the most cautious of us can make mistakes. With a disaster recovery plan that includes incremental online data backups, you can easily restore your files to an error-free state.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              <li>Customers expect perfection</li>
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              The World Wide Web has forced businesses to be more accountable and transparent, which has increased competition in just about all industries. You don’t want to lose customers to competitors due to a problem such as a power outage that leads to data loss.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600}>
              <li>Cybercrime is on the rise</li>
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Cybercrime has been on the rise for years, and the pandemic has accelerated the trend. Many hackers want to get their hands on your lucrative data, sabotaging your business in the process. You need to make sure you can get that data back as well as implement measures to minimise the risk of a cyberattack in the first place.
            </Typography>

            <Typography variant='p' component='p' fontWeight={600} color='#299ec6'>
              How our managed IT services can help
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              At Genius Tech, we offer a fully-managed and remote data backup and recovery service so that you can concentrate on your core business without having to worry about criminals, hardware failures or human error causing costly downtime. From automatic security updates to frequent virtual backups and data archiving, we can do it all. Call us, and we’ll let you know how we can secure your business for an affordable monthly fee, freeing up your time and resources in the process.
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[8].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[6].url}>
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
