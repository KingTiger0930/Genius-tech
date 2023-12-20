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

export default function BlogDetail20() {
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
            {bloglist[19].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[19].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Keeping cloud infrastructure manageable can be a challenging task, as complicated setups can topple over at scale without the right architecture. But of the many benefits offered by cloud computing and virtualization tools, one of the most important may be improvements in managing infrastructure in a consistent way that’s easy to replicate.<br/><br/>
            One way to do this is through Infrastructure as Code (IaC), which creates an abstraction layer for building out cloud environments through automated scripts. For those working with complex cloud builds, it could make for simpler management in the long run.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            What Is Infrastructure as Code?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            IaC is not a particularly new trend. According to author and consultant Stephen Nelson-Smith, the concept dates to the earliest days of Amazon Web Services’ Elastic Compute Cloud in 2006, as well as the release of version 1.0 of the Ruby on Rails application framework during the same period. Combined, these two events lowered the barrier of entry for scalable infrastructure, but they also added complexity that created a new need for configuration tools that could deploy new resources as needed.<br/><br/>
            In many ways, IaC is a philosophy of packaging and organizing cloud infrastructure to be built on demand based on an existing model rather than having to rebuild from scratch each time. This takes advantage of the instant resourcing capabilities offered by cloud computing and virtualization technology, using automated programming to complete tasks. This makes it possible to easily scale and redistribute
            Briana Frank, director of product management for IBM Cloud, says that in many ways, IaC breaks down the process of building a new infrastructure the same way developers might approach their toolkits when working on new applications.<br/><br/><br/><br/>
            “A developer wouldn’t write every line of code each time they had to run their application,” Frank says. “Similarly, an operations engineer shouldn’t have to click through every button in their cloud provider each time they want to deploy a new environment. They must be able to store everything that defines their Infrastructure as Code. This is generally stored in something like GitHub — the same place that developers maintain their app code.”<br/><br/><br/><br/>

            Thinking about infrastructure in the same way programmers think about toolkits opens up opportunities for scale. Chris Gardner, vice president, and research director at Forrester, says that beyond the ability to store tools in source code repositories like GitHub, this approach allows for a continuous delivery pipeline.<br/><br/><br/><br/>

            “Since you’re modeling infrastructure as software, you get all of the benefits typically afforded to application developers,” Gardner says.<br/><br/><br/><br/>

            As Gardner notes in a 2018 report, “‌Become a Unicorn with Infrastructure as Code,” nearly 90 percent of global enterprise infrastructure decision-makers emphasized the importance of having a comprehensive cloud strategy. IaC could be one element of building a strategic approach toward cloud.<br/><br/>
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            What Are the Benefits of IaC?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            From an automation standpoint, Infrastructure as Code can help ensure efficiency in the buildout of resources while offering consistent configuration and flexibility in deployment. Resources can be distributed via the cloud or on-premises as needed, which can come in handy during major crises — such as the start of the COVID-19 pandemic when some businesses found themselves suddenly needing to scale up.<br/><br/><br/><br/>
            Sometimes, organizations only need a specific piece of infrastructure for a few days or weeks rather than a few years. There’s also always the risk that something you expect to stay online might break. In these instances, IaC can help businesses stay flexible and ease the recovery process, notes Frank.<br/><br/><br/><br/>
            “Consider that there is a disaster and your infrastructure goes down or is otherwise in a corrupted state,” she explains. “If implemented correctly, you can automatically provision your entire infrastructure stack from scratch.”<br/><br/><br/><br/>
            With room for detailed customization, Frank says this can allow for the simple re-creation of test or production environments as needed.<br/><br/><br/><br/>
            There can be challenges in how IaC is managed, however. One example of this is configuration drift, which Frank says happens when changes are made to existing infrastructure without updating the code to match. This can create significant security issues and long-term compliance challenges, ITProPortal reports. Even a small divergence can create big problems down the line.<br/><br/><br/><br/>
            “In a perfect world, all infrastructure changes are done in the code, so this wouldn’t be a problem,” Frank adds.<br/><br/>
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            The Best Tools for IaC
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            A wide variety of offerings exist that can allow organizations to take advantage of IaC. For example, Amazon Web Services (AWS) natively offers two such tools for building infrastructure via a codebase: AWS CloudFormation, which is built out using templates in the JavaScript Object Notation (JSON) format, and Amazon Machine Image, which allows users to deploy services using the Amazon Elastic Compute Cloud. A variety of IaC use cases exist for AWS, along with other common cloud distribution platforms such as Microsoft Azure and Google Cloud Platform.<br/><br/><br/><br/>
            For its cloud offerings, IBM supports the open-source software offering Terraform, a tool developed by HashiCorp that allows users to provision infrastructure using either HashiCorp’s own configuration language or in JSON. Frank notes that this offers a lot of room for flexibility in building out your infrastructure.<br/><br/><br/><br/>
            “One of the greatest things about Terraform is that it is a declarative language rather than imperative,” she says. ”Would you rather tell your taxi driver every step of how to get to your destination, or simply call an Uber that automatically calculates the best route? A declarative language lets you declare the final state of your infrastructure and lets the tool handle the individual steps to get there. This is crucial in any IaC solution you look to adopt.”<br/><br/><br/><br/>
            Other well-known, open-source tools for IaC provisioning and configuration include Chef, Puppet and Ansible.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            How IaC Can Work with Existing Infrastructure
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            One of the potential challenges that organizations might face in trying to implement an Infrastructure as Code solution is integrating it with existing infrastructures, which could slow down efforts to introduce the technology.<br/><br/><br/><br/>
            In the case of Terraform, Frank says that there’s an open-source tool called Terraformer that can analyze existing infrastructure to find opportunities to convert it into something that can be automated through IaC.<br/><br/><br/><br/>
            “In absence of this tool, developer teams can manually replicate their existing stack by building out their IaC scripts,” she says.<br/><br/><br/><br/>
            There are also ways to extend the use of IaC offerings beyond the surface level, notes Gardner.
            “Most folks stop at the container level, but Infrastructure as Code goes all the way down to the bare metal,” he says. “I expect IaC developers to continue the trend of codifying downward via APIs while application developers increasingly leverage higher-level abstraction above it, such as PaaS and serverless.”
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[20].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[18].url}>
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
