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

export default function BlogDetail2() {
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
              {bloglist[1].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[1].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              It may seem complicated by the name. The abbreviation of already two complex phenomena, development and operations, added with the organizational adjective. May look quite a riddle for some people.<br/>

              It is not complicated at all by nature. (Well, one will rather go through complications to get things right, but it is a one-time journey). Let’s recall: DevOps is probably the most comprehensive software implementation & maintenance technique. It shortens development lifecycles, allows changes (in a code or wherever) to be made faster, ensures bugs are detected and dealt with on earliest possible stages, eliminates unnecessary competition and bad attitudes between the departments, provides palpable team building tool, and makes both development and operations well-efficient in terms of productivity and cost.<br/>

              Although DevOps is not exactly a rocket science, it requires some substantial efforts: to set the processes up, to establish internal communication and cooperation on at least a suitable level, to provide adequate technical tools for every team member’s seamless use. Initial introduction of DevOps principles to a software development/maintenance entity takes a lot of human capital – time, endeavours, and plain availability of properly trained personnel – first of all. If set right, DevOps practices will pay back quite soon. But its launch is certainly a challenge; sometimes pain.<br/>

              Here that organizational adjective, the “Managed” part, steps in.
            </Typography>

            <Typography variant='h5' component='h5'>
              We’d better talk to a manager
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              For many businesses, either full-online or mostly offline but having their own IT departments, infrastructural support and multiple setups (we’re talking networks here) are unwelcome and unwilling jobs. Developers prefer to code and release, retailers – to sell and replenish, etc. Any activity that goes beyond routine network availability support guzzles down time and money; this is even more true regarding new methods to unfold. Add the overall high demand (read – serious deficiency) of properly skilled DevOps specialists, and you’ll find businesses begging to pass those “extra” activities to a trusted IT partner – economy-wise, but not only.<br/>

              So, a mentioned partner, in most cases cloud services provider, takes responsibility for a side DevOps processes, manages them. It is somewhat different from plain outsourcing. DevOps people of a provider and IT specialists of a client maintain closest cooperation; it is no exaggeration to say that the client’s IT department receives a valuable extension. The exact ways of cooperation – there are two – differ a little. Either provider initiates and guides the processes, leaving daily chores to a client; or the entire DevOps goes under provider’s wing, allowing a client to fully focus on its core activities. Like we said before – not at all complicated, isn’t it?<br/><br/>
              Managed DevOps works best for:
            </Typography>

            <ul>
              <li>Corporate sites. In-house developers, especially in Internet retail, may not be in pace with growing business demands. Own IT team expansion is, ultimately, the dead end, as it keeps bringing additional non-core expenses. One more risk is that in-house HR, being not too keen about IT technicalities, may hire improperly qualified specialists. Experienced side DevOps team does not only suggest the best solutions for today – it may predict business demands and arrange future infrastructure and processes in a timely manner.</li>
              <li>Mobile apps development. This branch is probably the fastest on the market – in terms of reacting to and adopting new trends. Here Managed DevOps are the helper in two separate ways. For the companies having several non-related mobile development projects at the same time the technique is the strategy management tool. For applications itself it is the faster and smoother route to app stores.</li>
              <li>GameDev. At a certain stage of GameDev company growth concepts, design and marketing become more important than support and maintenance of already released games. Managed DevOps helps to eliminate such non-balance. Faster and smoother road to games’ release is also applicable here.</li>
              <li>One-time and custom projects. Managed DevOps expertise prompts for the most suitable solutions even in heavily tailored assignments. If the actual implementation of the technique is not required, ongoing analysis and consulting will keep clients in their best shape.</li>
            </ul>

            <Typography variant='h5' component='h5'>
              How they do it
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Exact wording may vary, but these are the stages of Managed DevOps.<br/>

              Audit of inefficiencies. Please note that tight cooperation has already started: a provider scrutinies all possible tight spots, listens to a client (and to client’s clients, if applicable) and actively helps in-house specialists to uncover every obstacle.<br/>

              From blueprint to roadmap. DevOps manager draws the entire structure, then breaks it down to infrastructural setup(s), scripts writing, synchronicity matters, tooling – and, of course, the project cost.<br/>

              Contract signing and execution. Hardly anything to add here, really. Expect maybe to mention that all involved people are (NOT just SHOULD BE – consider this as the done deed!) at any given moment aware what is in progress now, what is already done and what they are up to next.<br/>

              Monitor, revise, reach the finish line. The probability of even the most thorough roadmap not being amended with the course of events tends to zero endlessly. With changes introduced and lessons learned the finished project looks even more refined.<br/>

              Repeat. Next step or completely new project: everything allows for more expertise. And don’t forget that practice makes perfect.
            </Typography>

            <Typography variant='h5' component='h5'>
              Pros
            </Typography>

            <ul>
              <li>Sound efficiency in terms of time, costs, and performance/labour. Not being distracted by non-core tasks, client’s specialists can better focus on their direct responsibilities. Unnecessity to create additional workspaces on-premises and to train extra personnel makes Managed DevOps even more economically-savvy.</li>
              <li>Faster and fault-free product assembly and delivery.</li>
              <li>Great deal of processes’ automation – yet with the great deal of flexibility, if custom solutions are considered.</li>
              <li>Harmless testing methods: canary deployment (for a small and well-defined group of users); one-click rollback feature.</li>
            </ul>

            <Typography variant='h5' component='h5'>
              Cons
            </Typography>

            <ul>
              <li>DevOps as a phenomenon suggests significant changes in company’s culture. Initial acceptance of new relations’ type(s) should come from the top brass and impregnate every level of business. It is unacceptable (and hardly possible, as per life’s lessons) that only developers have embraced DevOps principles, while others have not.</li>
              <li>Security should never be sacrificed for the sake of speed. A client having concerns about a provider’s information protection practices should consider another Managed DevOps contractor.</li>
            </ul>

            <Typography variant='h5' component='h5'>
              How we are doing it
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              At ITGLOBAL.COM we are proud to have the team of DevOps experts – with proven performance records and appreciative feedback from our customers. We are well familiar with possible pitfalls of the DevOps culture and have tools to avoid the obstacles ready. In particular, security of our cloud services is recognized and properly certified. <br/>Our experience includes managed projects of varying complexity in both public and private enterprise clouds, on-premises and inside the hyperscalers. We offer Managed DevOps (and all other composite solutions) as complete services in a “single window” mode.
            </Typography>
            <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[2].url}>
                {"< Older Post"}
              </Link>
              <Link rel="canonical" to={bloglist[0].url}>
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
