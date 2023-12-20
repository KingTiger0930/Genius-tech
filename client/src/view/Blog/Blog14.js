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

export default function BlogDetail14() {
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
          <Typography variant='h3' component='h3' fontWeight={800}>
            {bloglist[13].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[13].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Technology always has a good side and a dark side, particularly when it comes to cybersecurity. You just have to look at the debate on encryption and backdoors to see how advanced technology can be used by the ‘bad guys’ as effectively as it is by those trying to protect our privacy and security.<br/><br/>

            Automation is another technology that works for better or worse, and will play a major role in shaping cybersecurity attack and defense activities in the next 12 months as it becomes faster and more sophisticated.<br/><br/>

            For example, spear phishing is traditionally a high-investment, high-return targeted attack activity. As automation tools replace manual techniques, cyber-criminals can launch spear phishing campaigns at record volumes by harvesting victim-specific data from social media sites and company web pages. As society continues to grapple with the impact of COVID-19, it is likely that these automated spear phishing attacks will prey on fears around the pandemic, politics and the economy.<br/><br/>

            Conversely, as more businesses migrate to the cloud, automation will also help cloud-hosting providers such as Amazon, Microsoft and Google to crack down on cyber-criminal groups abusing their reputation and services to launch malicious attacks. Threat actors commonly host website HTML files designed to mimic a legitimate website like Microsoft365 or Google Drive to steal credentials submitted by unsuspecting victims. In 2021, we will see these companies deploying automated tools and file validation technologies that will spot spoofed authentication portals.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            SaaS risks
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            As Software as a Service (SaaS) continues to grow in popularity, especially as more employees work from home, authentication and credentials will pose the weakest link. With the wealth of corporate data held in SaaS solutions, cyber-criminals can use bulk stolen credentials to target authentication portals.<br/><br/>

            So, we can expect to see an increase in password spraying or credential stuffing attacks against popular SaaS offerings, in the hope that employees use the same password from another site that suffered a data leak.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            VPNs and endpoints
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            So, what else can we expect in the next 12 months and beyond? Certainly, the tumultuous events of 2020 will impact the threat landscape for years to come. In particular, as more companies adopt or grow VPNs and Remote Desktop Protocol (RDP) solutions to provide secure connections to employees working from home, we think that attacks against VPNs and RDPs will double in 2021. If an attacker can compromise VPN, RDP or remote connection servers, they have an unobstructed path into the corporate network.<br/><br/>

            Security gaps in endpoints have also become a high priority target for attackers during the global pandemic and many personal home computers still running legacy software that is difficult to patch or update.<br/><br/>

            For example, as Microsoft has just ended its extended support program for Windows 7, organizations should expect at least one major new Windows 7 vulnerability to make the headlines next year.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Credential crisis
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Authentication is the cornerstone of strong security; but with billions of usernames and passwords available on the dark web and the prevalence of automated authentication attacks, no internet-exposed service is safe from cyber intrusion if it isn’t using strong multi-factor authentication (MFA). Companies are waking up to the fact that they can no longer rely on simple credentials for logins and any service that is not protected by MFA, is highly likely to be compromised in 2021.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Whose data is it anyway?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Back in the home, the last few years have seen a rapid increase in the use of digital assistants such as Alexa, Google Assistant and Siri, along with smart home systems to automatically control lights, room temperatures and access, while wearable devices track and sense critical health parameters. Behind the scenes, machine learning algorithms harness and correlate data to document user activities, behaviors, connections and interests.<br/><br/>
            This means that a lot of our data is getting into other peoples’ hands and we think that 2021 will mark a tipping point when consumers will begin to fully-understand and revolt against the privacy concerns associated with smart and connected devices. We will see users start to push back against vendors of IoT devices that collect personal data and will pressure governments to regulate the capabilities of these devices to protect their privacy.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Will it, won’t it?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            As we have learnt in 2020, it is very difficult to predict what is going to happen in the future but our Threat Lab team along with other researchers around the world have an increasing level of analytics and insight to make well-informed guesses.<br/><br/>
            Cyber-criminals always look for the weak links, so the growing ranks of home workers are an obvious target and when it comes to new technologies such as automation and AI. What can work for good, can also be exploited for malicious activity. It’s just a case of trying to stay one step ahead.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[14].url}>
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
