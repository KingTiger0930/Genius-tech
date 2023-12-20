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

export default function BlogDetail24() {
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
            {bloglist[23].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[23].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            <b>Cybersecurity</b> by definition is the process of protecting your computer-based equipment and data from unauthorized access. This has been a prevalent issue for decades now, however, the need for IT security has become more important than ever. In today’s digital era, mostly every business has automated their organizational structure and have shifted important activities online. Although this does provide an array of different benefits, it does pave way for cyber-attacks. If you think about it, all of the business’ data is stored on servers and this includes confidential information regarding the business and their clients.<br/><br/>
            If a hacker manages to gain access to this information they can seriously deter the organization from every aspect. One successful hack can actually lead to the foreclosure of a business, especially if the hack is made public or if it is targeted towards client data. Put yourself in your client’s shoes, would you ever invest in a business which does not effectively employ cybersecurity? Would you share any personal information with a company if you know that they cannot protect your information? The answer is quite simple. Instilling IT security has now become a prerequisite in today’s digital era.<br/><br/>
            Even if your business has the best computers, top servers or cloud service solutions, one attack can make all of this meaningless. If a hacker manages to infiltrate a system, they will gain access to the entire network and your business will be at their disposal. Furthermore, the rate of cyber-crime is increasing at an exponential rate. According to a Government statistic, four out of ten businesses have experienced a cyber-attack in the past year. This number exonerates the fact that businesses need to take every possible step to protect their data from hackers. Before we discuss different reasons why businesses should improve the integrity of their cybersecurity, it is imperative that you understand the different modes hackers use to gain access to a network.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Different Forms Of Cyber Attacks:
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Most businesses have no idea how easy it is for hackers to infiltrate their system. Given below is just a glimpse into the plethora of different ways a hacker can infiltrate and take advantage of your network.
            <ul>
              <li>The attack on information stored on third-party systems such as the cloud.</li>
              <li>A remote attack on an IT system.</li>
              <li>Unauthorized access of laptops, computers or mobile devices.</li>
              <li>Disruption of service that limits access to a network.</li>
              <li>Remote attacks to corporate websites.</li>
              <li>Damage through malware.</li>
              <li>System infiltration.</li>
              <li>Different Cybersecurity Threats Your Business May Be Exposed to</li>
            </ul>
            If your business does not have effective cyber security protocols, there are many different threats that your business may be exposed to. Some of these threats are mentioned below,
            <ul>
              <li>Unpatched software</li>
              <li>Out of date software</li>
              <li>Password decryption</li>
              <li>DDoS attacks</li>
              <li>Drive-by downloads</li>
              <li>Ransomware attacks</li>
              <li>Malware attacks</li>
              <li>Cyber fraud</li>
            </ul>
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
             What Happens If Your Network Is Hacked?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            If a hacker manages to infiltrate your network, the consequences can be irreversible in most cases. As mentioned before one successful hack can actually result in the foreclosure of even the most successful business. To further enunciate the importance of protecting your commercial data, we have articulated a list of the top repercussions of a successful hack.<br/><br/>

            <u>1.   Staggering Reputation Damage</u><br/>

            The very first consequence a business will have to deal with is the inevitable nightmare of how the company’s reputation is tarnished due to a hack. In most cases, this is irreversible as a company can lose all of their clients because a hacker managed to gain access to their sensitive information. Clients have to trust businesses with their personal data and financial details, if they learn that their data is not safe they will never trust the company again. Furthermore, after a hack, it can be very difficult for an organization to integrate or collaborate with another commercial entity as they would never risk the reputation of their enterprise. In the commercial world, goodwill is one of the most powerful assets a business can have and if this is compromised, the results can be permanent.<br/><br/>



            <u>2.   Substantial Financial Damages</u><br/>

            Once a hacker gains access to a system, they can use this information to their own advantage. Hackers could sell a business’s personal information to interested parties and can also blackmail the company to pay substantial costs if they want their information back or to gain access to their system again. According to the Ponemon Institute, the mitigating costs for small businesses after a hack is approximately $69,0000 while for middle-sized businesses the costs can exceed $1 million. These figures prove how devastating the financial costs of a hack can be, especially if the business does not have the required resources to mitigate these costs.<br/><br/>



            <u>3.   Internal Damage Control</u><br/>

            After a hack, the management will have to hold someone responsible for the breach. Any party which contributed to the breach will have to be held responsible even if the breach wasn’t entirely their fault. The management will have to set an example to other employees and will have to let go of executives who were in charge of cybersecurity. If the breach occurred due to the negligence of an employee, they will also have to take strict action in order to make sure a breach of this nature never happens again. This internal damage control can be quite detrimental on the workforce as it will directly affect their motivation levels and they will also question their job security.<br/><br/>



            <u>4.   Foreclosure of the Business</u><br/>

            According to the U.S National Cyber Security Alliance, approximately 60% of small businesses do not have the resources to mitigate a cyber-attack and have to close down their operations within six months. Even if the business has the resources to mitigate the damage, the costs are so high that they are forced to change their current operational structure. These companies have to start cutting costs and have no choice but to reduce the quality of services provided to their clients.<br/><br/>



            These four consequences of a breach, clearly prove just how important it is for a business to take every necessary step to improve their cyber security network. It is important to remember that these hacks are not simple glitches, they are targeted attacks on the business and have the capacity of completely tarnishing the reputation and the operation of any business.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[24].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[22].url}>
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
