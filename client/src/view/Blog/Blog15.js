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

export default function BlogDetail15() {
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
          <Typography variant='h3' component='h3'>
            {bloglist[14].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[14].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            While one situation can be catastrophic for a group, it can also be a blessing for another. Before the COVID-19 pandemic, a lot of people believed that VPNs were doomed but, the reverse has happened. VPNs have become a must-have for remote workers to do their jobs during the pandemic, and what’s more, we expect that this will become the norm in the post-COVID-19 world.<br/><br/>
            Though COVID-19 was reported to have started in 2019, early 2020 was when it gained ground, and that was also when the turn around for VPNs began. Without mincing words, the COVID-19 pandemic caused massive digital transformation for many businesses and office workers.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            The traditional VPN connectivity
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Before the pandemic, relatively few numbers of people worked from home, but now the case has changed. It has become imperative that organizations must seek ways to support workers who will have to use computers and mobile devices from home to access corporate resources.<br/><br/>

            The traditional VPN makes use of a thick client model to build a secure tunnel from the client device to the corporate network. This is the tunnel that all network communications use.<br/><br/>

            There is, however, this cost implication you must think about because of hair pinning. The model works on the basis that access to public cloud resources must go through the VPN tunnel to the corporate site, which then forwards access back out to the internet-based cloud provider.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Expected innovations in VPN technology
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Advancements in technology transcend all fields, and VPN technology is not left out. While what we have seems to suffice, we must bear in mind that there is the possibility for end systems to increase power, and that will facilitate the migration of more software-based VPN technology into endpoints.<br/><br/>

            This scenario calls for innovation in VPN technologies to take advantage of local process capabilities, hence, making VPNs easier for both users and network administrators. There will then be central systems through which network admins can control VPN administration.<br/><br/>

            Indeed, we don’t need hardware in a software world but, we will still need the physical connections and that means we can’t do without some form of hardware. One way out, however, is to deploy x86 compute systems to replace some dedicated devices and carry out functions we were using hardware for.<br/><br/>

            This may have to be at the network edge, where we have distributed computational resources. For now, we don’t have anything in sight to replace hardware yet, as the speeds the network core requires can only be possible with dedicated hardware.<br/><br/>

            Another possible transformation is for VPNs to function like software-defined WAN products. This will ensure that connectivity does not depend on the underlying physical network that can be wired, wireless, or cellular, as well as its addressing.<br/><br/>

            The workings of the evolving VPN systems must focus on the ability to use the advantages of multiple paths and transparently switch between them.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Expected innovations in VPN security
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            While we must commend efforts put into VPNs to thwart cyberattacks, it’s obvious that they have not been outrightly efficient, as cyber-attacks have increased tremendously. It’s pertinent, therefore to expect more instances of AI and machine learning being applied to these security functions to increase their effectiveness without corresponding increases in-network or security administrator support.<br/><br/>

            There must be concerted efforts by IT professionals to ensure that VPN paths are not rendered inefficient when an endpoint communicates with internet-based resources such as SaaS systems. The workings of a VPN deem it necessary that the endpoint must first send data to the VPN concentrator, which then forwards the data to the cloud-based SaaS application. This leads to an increase in network latency. Apart from that, the network overhead also increases within the VPN since the SaaS application also uses encryption.<br/><br/>

            You can, however, use split-tunneling to correct this anomaly but, it’s essential for IT teams to carefully select the VPN termination point to avoid creating a security hole. This can be achieved by integrating with smart DNS servers that enable split-tunneling to specific sites under the control of network or security administrators.<br/><br/>

            To ensure that your VPN system is highly secure, you need to employ the zero-trust model. Since you will have to assume that endpoints are compromised regardless of their location, you won’t leave any detail to chance.<br/><br/>

            Since the introduction of the zero trust model with security components that include allow listing and micro-segmentation by Forrester Research in 2010, it has become the yardstick to measure quality performance by networks. For sound cybersecurity practices, VPNs must deploy automated methods to create and maintain these security functions.<br/><br/>

            Expectations are rife that the VPN technology will have to upgrade in the nearest future to provide a better cybersecurity environment while reducing the effort needed to implement and maintain that security.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[15].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[13].url}>
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
