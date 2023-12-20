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

export default function BlogDetail1() {
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
              {bloglist[0].title}
            </Typography>
            <Box
              component='img'
              alt="blog image"
              title="blog image tooltip"
              src={bloglist[0].imageurl}
            />

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Popular and actually not so funny joke: wanna know the darker side of a certain person? Like, how rich is the obscene vocabulary of this individual? How this person behaves while intensively stressed, etc.? It’s easy. Put this unfortunate human in front of a computer and provide slow Internet connection. Results might be stunning.
            </Typography>

            <Typography variant='h5' component='h5'>
              Worship thy customers – by knowing them
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              There is the peculiar transfer of meaning in the very name of Quality of Experience (QoE). If we are thinking “quality experience”, then it has to be an end-user thing. Something similar to User Experience: very trendy lately. And let’s be honest, User Experience is the purely marketing (social-marketing, to be precise) concept. Well-known UX – the one the shopper gets in stores, no matter online or offline for our case, and which can be extracted from that individual by questionnaires, feedbacks and other very subjective, human-factor-involved ways.<br/>

              As such, that “end-user side” Quality of Experience is widely perceived as a brand/customer interaction, as loyalty in progress, so to speak. A complicated kind of communication with a good chunk of psychology – to where exact measurement application is, again, quite complicated. Even at the very end of definitions and functionalities it is hardly seen as a tool. Neither an ingenious technical solution that produces tangible, manageable and conclusive data.<br/><br/><br/>

              Our contemporary digital world shifts everything related to QoE to the “provider side”. It is not a user anymore who monitors available Internet services and either enjoys technicalities or complains to the provider. (We mean, customers can still watch their connection and give feedback – but their words cease to be important). It is already a provider who attempts to see its connection end to end: being confident “Thy Customers” always receive an agreed level of service, monitoring service quality in real time and taking steps to prevent possible deterioration.<br/>

              So it is both: Quality of Experience technical stuff is on a provider; and the meaning, the burden, the obligation to have an experience is taken from a customer too. And it’s more than just a peculiar game of senses. With QoE enabled provider gets a powerful tool to examine its entire network, to pinpoint the weakest links and in some cases to forecast the upcoming issues. All to furnish clients the best possible services – as well as to care for provider’s own ability to compete on a market.<br/>

              Note: in this review we refer to as “services” various telecommunication offers exclusively, as the entire QoE topic is within the telecom framework.
            </Typography>

            <Typography variant='h5' component='h5'>
              Coming close. On tiptoes
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              It is usually extremely hard to elaborate a working definition of anything that involves – in our cases rather “embraces” – the human factor. Network capacities, bandwidth use, computing powers submit their data almost willingly. But what about an end user who rarely notices anything more than possible downtime or jittery sound or video? No complaints – then considered satisfied. Complaints present – dissatisfied, and it is very much like pure 0 or 100, either black or white, no grey zones or satisfaction expressed in percents.<br/><br/>
                We came with the following working definition for Quality of Experience. On a technical side it is a set of sensors gathering data as close to an end user as possible. On a social side it is the tool of interaction between a user and a provider.<br/>

                On a social side also comes the most amusing part. Ideal QoE should act like a government of a Western democratic country – being as unobtrusive as possible, working almost stealthy. Emerging issues have to be addressed in no time, with proper Support Desk interventions, etc. But non-mandatory information should reach customers only when relevant, and in small portions. An example: a customer will be pleased if informed beforehand that some services will be down due to maintenance and will resume operation at indicated time. While some notifications on better tariffs will only get an individual annoyed, since the existing offer fits this person flawlessly.<br/>

                So, there’s another game of meanings. An end user gets the best Quality of Experience when it comes unnoticed. “The less we mark our presence, the better we look in the customer’s eyes”; the same delicate matter when the act of observation itself changes particles’ behavior.
            </Typography>

            <Typography variant='h5' component='h5'>
              Side effects. Benign ones
            </Typography>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Properly set QoE module helps you, a provider: a) to save money, b) to earn money.<br/>

              Since Quality of Experience is able to scrutinize the network, you will have handy the complete map of your possible issue triggers. With this map the need for total overhaul of your wiring is over – unless, of course, you were planning such overhaul for long time. So, patching only the most vulnerable spots will lower you CapEx: average indicator is 15-20%, while the absolute numbers are stunning – a wireless operator with about 30.000 cells may annually save USD 20M to 30M (!) just on cells upgrade.<br/>

              Then, with your network optimized, come OpEx savings. And, if things done right, customers are about to start bringing you more revenue. The logic is simple: if the network proves to be fault-proof, then a customer can intensify the use, consuming more content and services – and getting very own positive Quality of Experience.<br/>

              One more important matter: QoE monitoring close to an end user is legal, since the observing party watches not the client’s exact traffic, with site names, etc., but the NetFlow statistics – provider’s billing sees the same thing.
            </Typography>

            <Typography variant='h5' component='h5'>
              Experience the best
            </Typography>

            <Typography variant='p' component='p'>
              Stingray Service Gateway primary design is Deep Packet Inspection. Yet, with its multifaceted solutions, this software is capable to control traffic and analyze system components in wide variety of telecom services.<br/>

              Stingray’s QoE module collects data and compares them to the preset metrics. Based on this evaluation the module can initiate improvements in quality of service. Here is to name only several capabilities of Stingray’s QoE module:
            </Typography>

            <ul>
              <li>Traffic prioritization with customizable triggers and filters; black list filtering installed.</li>
              <li>Integration with BRAS and various billing systems; possibility to use integration API.</li>
              <li>Automated tickets in Support.</li>
            </ul>

            <Typography variant='p' component='p' sx={{mb: 5}}>
              Stingray’s QoE module is called to carry out the selection of tasks, from detailed network monitoring to various Marketing & Sales activities, all the way up to customer profiling and advertising insertions.
            </Typography>

            <Stack direction="row" justifyContent='start' sx={{mb: 10}}>
              <Link rel="canonical" to={bloglist[1].url}>
                {"< Older Post"}
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
