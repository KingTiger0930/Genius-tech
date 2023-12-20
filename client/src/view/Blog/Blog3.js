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
              {bloglist[2].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[2].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              With all the recent talk about cybersecurity and how the pandemic has affected the capacity of businesses to protect themselves against attacks, one thing has been made very clear: backups are not only important, but they are also essential.<br/>
              While cryptolocker attacks become more and more common, backups are often the only recourse to recover your data. And whether your backup strategy is on-premise or in the cloud, it is vital for your company to consider how you would restore your data in case of a loss.<br/><br/>
              Cloud backups have many advantages, one of which is constant access from anywhere and data assurance, your data being of course backed up remotely. On top of that, redundancy can bring you more peace of mind, allowing your data to be spread across multiple servers in the event of a failure. Security is another benefit, everything being encrypted with strict security protocols. Besides, avoiding a capital expenditure by moving your existing and new backups to the cloud will turn your capex into a more predictable operating expense, making budgeting easier. 
            </Typography>

            <Link rel="canonical" to='/cloud-backup-solution-workstation'>
              <Typography variant='h5' component='h5'>
                Automated Backups
              </Typography>
            </Link>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Automated backups mean more peace of mind for your IT team. No more forgotten schedules, no more disrupting the users every single day to back up data. Cloud backups are largely automated, freeing your employees to focus on more important tasks, and ensuring your data is secure and properly backed up according to the best industry guidelines. This is actually one of the main differences between simple cloud storage and cloud backup: with cloud storage, files to store in the cloud must be manually selected, while cloud backup automatically syncs and saves your files.<br/><br/>
              As we all know, downtime may well be the difference between losing a weeks worth of work because your users can’t access key files, and simply apologizing for a less than an hour delay. The recovery process is testable and known in advance, which means no more running around trying to gather physical copies of your data. Downtime is the plague of every business, and during stressful moments like a loss of data, cloud backups can help your productivity in a huge way.<br/><br/>
              Despite all of these advantages, a very small amount of enterprises have a data backup protocol in place. Many see the cost as a deterrent, but the truth is these costs are quickly offset by the many benefits of cloud computing, among which the possibility of making your data grow with you, enable you to scale up and down at will, leaving you free to worry about the core of your business instead of storage solutions.<br/><br/>
              <Link rel="canonical" to='/cloud-backup-solution-workstation'>Azure Backup</Link> is a cost effective and secure centralized one-click solution that can be scaled to your backup storage needs. Backing up Azure VM, SQL or SAP HANA workloads, as well as on-prem VMware machines is possible with no additional infrastructure costs, and it is possible to instantly restore your assets (individual files, folders, databases) with no downtime.<br/><br/>
              With more certifications than any other cloud provider, <Link rel="canonical" to='/cloud-backup-solution-workstation'>Azure is a trustworthy</Link> solution against the ever increasing threats businesses face nowadays. It is also a solution we have implemented for many of our clients and they are happy with it.
            </Typography>

            <ul>
              <li>Corporate sites. In-house developers, especially in Internet retail, may not be in pace with growing business demands. Own IT team expansion is, ultimately, the dead end, as it keeps bringing additional non-core expenses. One more risk is that in-house HR, being not too keen about IT technicalities, may hire improperly qualified specialists. Experienced side DevOps team does not only suggest the best solutions for today – it may predict business demands and arrange future infrastructure and processes in a timely manner.</li>
              <li>Mobile apps development. This branch is probably the fastest on the market – in terms of reacting to and adopting new trends. Here Managed DevOps are the helper in two separate ways. For the companies having several non-related mobile development projects at the same time the technique is the strategy management tool. For applications itself it is the faster and smoother route to app stores.</li>
              <li>GameDev. At a certain stage of GameDev company growth concepts, design and marketing become more important than support and maintenance of already released games. Managed DevOps helps to eliminate such non-balance. Faster and smoother road to games’ release is also applicable here.</li>
              <li>One-time and custom projects. Managed DevOps expertise prompts for the most suitable solutions even in heavily tailored assignments. If the actual implementation of the technique is not required, ongoing analysis and consulting will keep clients in their best shape.</li>
            </ul>

            <Typography variant='h5' component='h5'>
              It’s a matter of when, not if, a ransomware attack will strike your business.
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              To conclude, with the rise of cybersecurity concerns, it is now more than ever important to discuss data recovery strategies with your IT specialists. Business continuity should be a concern if you haven’t already found a solution to tackle these threats. Most specialists say it’s a matter of when, not if, a ransomware attack will strike your business. With data losses averaging a $3.9M cost per attack, and 96% of businesses having encountered an outage in the last three years, a cloud backup strategy will help you protect your data, your customers and your business thanks to these five simple points:
            </Typography>

            <ul className="Blog3">
              <li>Zero infrastructure investment</li>
              <li>Automatic backup routines (set it and forget it!)</li>
              <li>Reduced downtime in the event of data loss</li>
              <li>Tiered cost value</li>
              <li>Better reliability (and less headaches) than physical backups</li>
            </ul>

            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[3].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[1].url}>
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
