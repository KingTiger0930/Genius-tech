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
            {bloglist[11].title}
          </Typography>
          <Box
            component='img'
            alt="blog image"
            title="blog image tooltip"
            src={bloglist[11].imageurl}
          />

          <Typography variant='p' component='p' sx={{mb: 5}}>
            Customer interaction management helps a company streamline its communications with customers, ensuring increased customer satisfaction with the brand. A CRM (Customer Relationship Management) solution serves as ample customer interaction software that allows businesses to interact with clients across multiple channels and enhance customer service.<br/><br/>

            Today, especially during the COVID-19 pandemic, customers’ expectations towards how a business interacts with them are changing. Clients expect to receive more personalized service and easily communicate with companies across different channels, including social media. According to the research, the quality, not the quantity, of customer interactions is the key factor that will contribute to gaining customers’ trust and making your business stand out among the competitors.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600} sx={{mb: 2}}>
            Why invest in building top-notch customer interactions
          </Typography>

          <Typography variant='p' component='p'>
            Here are key outcomes a thought-out customer interactions strategy supported by a suitable CRM solution can bring to a business:
          </Typography>

          <ul className="Blog12">
            <li>Increased customer loyalty. Every email, social media, or live chat message is your chance to earn more loyal customers. Naturally, when every interaction is easy and enjoyable, the customer will likely return to your brand.</li>
            <li>Better brand perception. Delivering a positive customer experience will increase the chances of customers referring your business to a friend. It is the fastest way to acquire new clients and grow your business.</li>
            <li>Improved training methods for your agents. After analyzing the effectiveness of interactions with your customers, you can spot the opportunities for interactions management improvement and tailor the training programs for your customer service agents accordingly.</li>
          </ul>

          <Typography variant='p' component='p' fontWeight={600}>
            Best practices of customer interaction management
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            If you are thinking of how to improve every interaction with a customer, I suggest paying attention to the following best practices.<br/><br/>

            Provide multichannel customer interactions. Today, customers want to reach out to a brand via their favorite channel, be it emails, social media, live chats, or other, and businesses need to provide customers with this opportunity. Customers may even expect to move from one channel to another during one interaction session and continue their communication where they left off.<br/>

            Personalize customer interactions. When developing a customer interactions strategy, companies tend to create guidelines for agents to follow. However, customers want to feel unique, so your agents need to be creative in adding a personal touch to every interaction (congratulating on a customer’s birthday, offering a special loyalty program as a reminder of the first-year purchase anniversary), etc.<br/>

            Implement fitting customer interaction management software. Customer interactions management software helps model an all-around customer view across various touchpoints. It enables your agents to communicate with customers across multiple channels, send automated personalized emails (follow-up emails, guides on how to make the most of their purchase, etc.). Moreover, such software will drive customer interaction optimization due to its analytics capabilities and facilitated feedback gathering from customers.<br/>

            I recommend considering Dynamics 365 Customer Service and Salesforce Service Cloud as platform solutions to enable profound customer interactions management, including such capabilities as a 360-degree customer view, omnichannel customer engagement, AI-powered customer interactions analytics, and more.
          </Typography>

          <Typography variant='p' component='p' fontWeight={600}>
            Next step in improving your customer interaction management
          </Typography>

          <Typography variant='p' component='p' sx={{mb: 5}}>
            With growing competition among companies, every interaction with a client can be turned into gaining a competitive advantage. The more satisfied your customers are, the more likely they will spread their positive feedback, the more customer base you will gain. If you want to develop a successful customer interaction strategy, feel free to reach out to ScienceSoft’s team.
          </Typography>
          <Stack direction="row" justifyContent='space-between' sx={{mb: 10}}>
            <Link rel="canonical" to={bloglist[12].url}>
              {"< Older Post"}
            </Link>
            <Link rel="canonical" to={bloglist[10].url}>
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
