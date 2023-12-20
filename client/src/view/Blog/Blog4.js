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
              {bloglist[3].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[3].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Spring break is approaching, and many IT departments find themselves preparing to be short-staffed as employees take time off. Especially this year, as childcare options are not readily available, many enterprises are wondering if they will be able to maintain the same level of support and security to the business.<br/><br/><br/>
              With the explosion of remote working and the forced relocation of offices due to Covid-19 restrictions, comes a set of previously minimized issues. Management of the corporate network, security, continuous monitoring to avoid falling victim to ransomware attacks, support for users, not to mention the management of remote stations and their connections... This equals an increased workload and not necessarily obvious solutions to respond to a changing infrastructural landscape.
            </Typography>

            <Typography variant='h5' component='h5'>
              Security does not take a holiday
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              IT environments need some form of monitoring at all times, or they risk potential downtime. If you are a SMB, you are operating with a small team or in some cases, just one or two IT resources. When these resources go on vacation, it is very difficult to maintain coverage and companies are opening themselves up to risk.<br/><br/><br/>
              Managed services allows your IT environment will be closely monitored at all times, while allowing your IT employees to enjoy time with their families. Whether it’s partially or completely outsourcing your IT department to give you access to a specialized team on demand, Present provides an assortment of services plans to meet your needs. 
            </Typography>

            <Typography variant='h5' component='h5'>
              Save Money with Present Managed Services
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              It’s an important step to do the math yourself. Hiring an additional resource, like a system administrator or an advanced technician is a huge annual expense for your business. On the other hand, choosing managed services can represent a significant saving, while allowing your current team to expand their knowledge through a multidisciplinary outsourced team. Not to mention eliminating the difficulty of finding and an employee who meets your expectations and then retaining them.<br/><br/>
              Our NOC can provide 24x7 monitoring of your IT infrastructure, with a 24x7 user support center. From managing the security of your network to managing your backup copies, our team will support you in the management of and offer best practices advice on technologies such as servers, storage, networking, cloud, AWS, Azure, Nutanix, Power system i, AIX, linux, windows, VMware, active directory, IP telephony and mobility.<br/><br/>
              You will keep full visibility and control over your infrastructure thanks to our management console, your users will be satisfied and operational at all times, your workstations will be optimized, your data protected and your systems available, all for a fixed and predictable monthly cost .<br/><br/>
              Whether a significant part of your IT team needs to take more time off this year, your IT is overwhelmed by the amount of work to keep operations running smoothly, or your team needs to focus more on strategic initiatives for the business, our IT managed services may be the answer!
            </Typography>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[4].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[2].url}>
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
