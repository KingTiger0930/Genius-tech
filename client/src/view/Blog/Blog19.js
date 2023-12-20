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

export default function BlogDetail19() {
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
            {bloglist[18].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[18].imageurl}
          />

          <Typography variant='p' component='p' fontWeight={600}>
            Why your IT strategy must align with your business strategy?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Until recently, informational technology has been seen as a secondary role player on the business scene. Today, IT solutions are more than just supporting tools to automate routine tasks and collect data they influence every step of a company`s activities: optimize workflow and resource management, enable better integration and collaboration between departments, improve customer experience and supply chain management.
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            <u>Reasonable deployment of first-class solutions in tune with corporate objectives (also known as IT and business alignment) brings substantial advantages:</u>
          </Typography>

          <ul>
            <li>New effective approaches to managing risk and compliance issues.</li>
            <li>Better products and services delivery.</li>
            <li>Improved decision-making based on advanced analytics.</li>
            <li>Optimized work of the whole team.</li>
            <li>Cost reduction.</li>
          </ul>

          <Typography variant='p' component='p' fontWeight={600}>
            Why IT and business strategies become misaligned?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 2}}>
            Technological novelties often look like universal solutions to painful problems, and some enterprises invest in hype-driven development without a proper understanding of risks and rewards of these cutting-edge technologies. The market inspires businesspeople to be open to new initiatives, but it`s also essential to stay reasonable. When top-managers don`t have clear ideas of what they want from IT, they get nothing but budget blowing.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Lack of technical literacy
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Well-coordinated teamwork of your NOC team members is a key to the effective and quick resolution of emerging issues. Today, the market offers a number of powerful online collaboration tools with such capabilities as the automation of incident management and the escalation process, collaboration on documents, reporting, and analytics for NOC managers and departments concerned.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Blurred business strategy
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            An ill-defined vision of a business strategy generates serious strategic blunders. Without a firm corporate plan, technologies can support only individual actions, but not the whole strategy, and IT and business strategies fall out of touch.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Lack of strategical agility
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            As an organization develops, even a successful growth plan runs out of steam. When a company shifts its priorities, its IT strategy also requires immediate revision and updates. However, some executives get into the trap of doing things in a well-known way and leave the IT strategy out of consideration. An outdated IT agenda does a poor job of supporting business. What is more, it may cause a detrimental effect on a company`s operational capacity and lead to significant financial losses.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            How business leaders can use IT to the fullest?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            IT solutions that support business purposes can become guiding lights at the crossings of business directions. The problem is that business leaders mainly focus on business strategies, and they may skip some important benefits provided by IT solutions. So what can be done to use IT potential to the fullest?
          </Typography>

          <Typography variant='p' component='p'>
            <u>Assess your business strategy:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Use the data collected and processed by IT tools for advanced analytics, charts and metrics to estimate the performance of employees, departments and the whole enterprise. A stable growth of key performance indicators is the best sign that you`ve chosen the right direction.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Discover new benefits:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Even if the IT solutions selected by your IT team work fine, don`t get stuck in the status quo. Take into account that better technologies can appear, allowing you to achieve a higher level of customer service, sales and cost optimization.rowth of key performance indicators is the best sign that you`ve chosen the right direction.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Gather best ideas:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Joint efforts produce the best results. Collaborate with your IT team on key strategic issues concerning technology. Steady exchange of information between the IT department and top management not only serves as a source of new insights but also improves the overall corporate climate.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Get an opinion from outside:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            It`s a daunting task to work out a sustainable IT strategy, and even technologically savvy business leaders resort to external IT consulting services. Third-party experts can give objective estimates of your current business and IT strategy, advise on the IT tools to support business, calculate costs and demonstrate how new solutions can enhance internal operations and increase profit.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            What technology leaders can do for business and IT alignment?
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            As technologies have become an essential component of corporate strategy, the traditional role of technology leaders is expanding. Now it is not limited to the internal IT processes management. Following the points below IT leaders can make a tangible contribution to expanding the business strategy with right digital components.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Know your business:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Get a better understanding of your business goals and its driving forces to choose supportive IT tools. The deeper you see in your business strategy, the better you predict how IT can influence it. Sort out priorities and focus on the IT projects based on business impact.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Know IT trends:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Keep a wary eye on relevant changes in the software industry and systematically inform your business about what IT can do today. The IT market is developing rapidly, and one gets easily confused in the variety of available options. Get new knowledge and experience to conclude which technologies are worth exploring and discuss new available options with top management.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Educate your IT team:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Be sure that your team gives full play to the IT element of the corporate strategy. Explain to your people how new technologies work, set up training sessions and get their feedback. When employees understand which goal they pursue, they become more motivated and set the bar higher.<br/><br/>
            The IT industry is a complex and ever-changing field, and its twists and turns may confuse. IT leaders have the power to use technological literacy as a beacon that will lead a company to ever-growing success.
          </Typography>

          <Typography variant='p' component='p'>
            <u>Pay attention to early signs of misalignment:</u>
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Keep a check on IT and business alignment within your enterprise. A disagreement between your IT and business strategies is dangerous: if you fail to notice it in time, the damage will be unpredictable. Early detection of a problem saves time, money and reputation.<br/><br/>

            A few last words:<br/>

            IT solutions have a strong potential to influence business: to increase the speed of business operations, make them more effective, prompt at new opportunities and more. With business-IT alignment, you focus on the benefits IT can give to your current and future business goals, make reasonable investments and increase the productivity of your business, while randomly implemented innovations that do not work together for business targets cannot ensure business-boosting results and the return on investment.<br/><br/>

            A good strategy backed up with solid technology aid is a great pool over the rivals. With our all-around experience in customized software development and IT consulting services we are always happy to give fresh ideas on how to get the most from your business with IT.
          </Typography>

          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[19].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[17].url}>
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
