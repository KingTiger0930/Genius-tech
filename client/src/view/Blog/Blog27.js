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

export default function BlogDetail26() {
  const [number, setNumber] = React.useState(10);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openFacebookModal = () => {
    window.open(
      "http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.genius-tech.ca%2Fquality-of-experience-well-for-a-user-a-must-for-a-provider",
      "name",
      "width=600, height=600"
    );
  };

  const openTwitterModal = () => {
    window.open(
      "http://twitter.com/intent/tweet?text=I wanted to share this great website with you&url=https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider",
      "name",
      "width=600, height=600"
    );
  };

  const openLinkedInModal = () => {
    window.open(
      "http://www.linkedin.com/shareArticle?mini=true&url=https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider&title=I wanted to share this great website with you",
      "name",
      "width=600, height=600"
    );
  };

  return (
    <>
      <BlogBanner img="/blog/blogbanner.svg" />
      <Box sx={{ mt: 13 }}>
        <Box sx={{ mx: "auto", maxWidth: "960px" }}>
          <Typography variant="h3" component="h3" fontWeight={600} sx={{ mb: 5 }}>
            {bloglist[26].title}
          </Typography>
          <Box
            component="img"
            src={bloglist[26].imageurl}
            sx={{ display: "flex", margin: "auto", width: "100%" }}
          />
          <Typography
            variant="h5"
            component="h5"
            fontWeight={600}
            sx={{ mb: 3, mt: 5 }}
          >
            Introduction
          </Typography>

          <Typography variant="p" component="p" sx={{ mb: 3 }}>
            If you are a Canadian business owner , you know that starting a
            business can be daunting task.There are so many thing things to
            think about :
            <br />
            <br />
            Choosing business structure , licenses , and permits .And that’s
            before you even start thinking about the day-to-day of actually
            running your business !
            <br />
            <br />
            It can be tough to keep track of everything , which is why many
            business owners choose to work with a
            <a
              href="https://www.genius-tech.ca/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              IT managed services .
            </a>
            <br />
            <br />
            MSPs are businesses that provide various services to help manage
            your business , include IT , marketing , amd HR . There are a lot of
            benefits to working with an MSP , but its important to choose the
            right one for your business .
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            fontWeight={600}
            sx={{ mb: 3 }}
          >
            Start problems of startups in Canada.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 3 }}>
            As a new business owner , you may be considering hiring a managed
            service provider (MSP) to help with the day-to-day IT tasks of your
            company .MSPs can br great asset to small and medium , providing
            cost-effective and reliable IT support .
            <br />
            <br />
            However , before you start working with an MSP , its important to
            understand the unique challenges that MSPs face when starting up in
            Canada .
            <br />
            <br />
            <b>Here’s what we think</b>
            <br />
            <br />
            <b>1-Finding the right niche .</b>
            <br />
            <br />
            MSPs tht serve businesses in specific industries or niches are more
            likely to be successful than those who try to serve everyone . In
            Canada , there are many different industries and niches that MSPs
            can target , so it’s important to do your research and find the
            right fit for your business.
            <br />
            <br />
            <b>2-Dealing with Canadian regulations .</b>
            <br />
            <br />
            MSPs must comply with a variety of different regulations in Canada ,
            including the Personal Information Protection and Electronic
            Documents Act (PIPEDA) and the Canadian Anti-Spam Legislation (CASL)
            . These regulations can be complex and confusing , so its important
            to work with an experienced lawyer or consultant to ensure you are
            in compliance.
            <br />
            <br />
            <b>3-Building a strong sales pipeline .</b>
            <br />
            <br />
            One of the most common mistakes that new MSPs make is failing to
            build a strong sales pipeline . its important to have a consistent
            stream of new sales leads coming in, otherwise you’ll quickly run
            out of business .
            <br />
            <br />
            There are a number of ways to generate new sales leads . including
            online marketing , networking , and the lead generation services .
            <br />
            <br />
            <b>4-Creating a differentiated service offering .</b>
            <br />
            <br />
            With so many MSPs to choose from , its important to create a service
            offering that is nique and differentiates you from the competition .
            This can be done by offering unique features or services . or by
            targeting a specific niche market .
            <br />
            <br />
            <b>5-Hiring the right team .</b>
            <br />
            <br /> Creating a successful MSP requires a team of highly skilled
            and experienced IT professionals .In order to offer competitive
            salaries and benefits.
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            fontWeight={600}
            sx={{ mb: 3 }}
          >
            5 tips to overcome all of your canadian challenges
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 3 }}>
            <b>1-Do your research .</b>
            <br />
            <br />
            Not all MSPs are created equal . its important to do your research
            to find an MSP that is good fit for your business . Start by reading
            reviews and looking at their website.
            <br />
            <br />
            <b>2-Ask for referrals .</b>
            <br />
            <br />
            If you know other businesses that use an MSP , ask them for
            referrals . This can be a great way to get first -hand information
            about an MSP.{" "}
            <a
              href="https://www.genius-tech.ca/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              Genius-Tech.ca
            </a>{" "}
            is one of the leading MSP that that we are nominate it for you
            because of their accuracy and lower prices in Ontario .
            <br />
            <br />
            <b>3-Consider your needs .</b>
            <br />
            <br />
            Think about what services you need and make sure that the MSP you’re
            considering offers those services . For example , if you need help
            with IT , make sure that the MSP has experience with IT male sure
            that the MSP has experience with IT support.
            <br />
            <br />
            <b>4-Get a contract .</b>
            <br />
            <br />
            When you’ve found an MSP that you’re ready to work with , be sure to
            get a contract in place . This will help protect you and your
            business .
            <br />
            <br />
            <b>5-Stay organised .</b>
            <br />
            <br />
            Working with an MSP can be a big help when it comes to keeping your
            business organised .
            <br />
            <br />
            Make sure to keep track of deadlines and communication with your MSP
            so that you can stay on top of things .
            <br />
            <br />
            By following these tips , you can find a great MSP that will help
            you start your business off on the right foot.
            <br />
            <br />
            In a nutshell , an MSP is a company that provides IT services to
            businesses . This can include anything from setting up and data
            backup and security . The benefits of working with an MSP are many .
            For one , you can offload a lot of the day-to-day IT tasks that can
            take up valuable time that could be spent on running your business .
            <br />
            <br />
            Another benefit is that an MSP can help you in saving money in the
            long run . By having someone else handle your IT needs , you can
            avoid the costs of hiring in-house IT staff or paying for expensive
            equipment ,
            <br />
            <br />
            However , there are also some challenges that com along with working
            with an MSP . One of the biggest challenges is finding a reputable
            and reliable MSP .
            <br />
            <br />
            With so many MSPs & IT managed services developing companies out
            there , it can be tough to know to trust . That’s why we’ve put
            together a list of the top 5 developing IT managed services in
            Canada .
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 3 }}>
            <a
              href="https://www.genius-tech.ca/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <b>1. Genius Tech</b>
            </a>
            <br />
            <br />
            Genius Tech is leading IT managed services in Canada . They have a
            team of experienced IT professionals who can help you with of all IT
            needs .
            <br />
            <br />
            <a
              href="https://clutchsolutions.com/canada/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <b>2. Clutch</b>
            </a>
            <br />
            <br />
            Clutch is another great option for businesses in Canada . They offer
            a wide range of IT services , including data backup , security , and
            network setuo and maintenance .
            <br />
            <br />
            <a
              href="https://manifest-company.ca/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <b>3. Manifest </b>
            </a>
            <br />
            <br />
            Manifest is a popular MSP in Canada . They offer a variety of IT
            services , including data backup , network setup and maintenance ,
            and website design and development .
            <br />
            <br />
            <a
              href="https://www.webfx.com/about/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <b>4. Webfx</b>
            </a>
            <br />
            <br />
            Webfx is a well known retailer in Canada . They also offer a variety
            of IT services , including data backup , network setup and
            maintenance , and website design and development .
            <br />
            <br />
            <a
              href="https://craft.co/liaison-technologies/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <b>5. Liaison technologies</b>
            </a>
            <br />
            <br />
            Laison technologies is another leading MSP in Canada . They also
            offer a variety of IT services , including data backup , network
            setup and maintenance , and website design and development .
            <br />
            <br />
          </Typography>

          <Stack direction="row" justifyContent="start" sx={{ mb: 10 }}>
            <Link to={bloglist[25].url}>{"< Older Post"}</Link>
          </Stack>
          <Stack
            direction="row"
            sx={{ display: { xs: "none", xl: "flex" }, my: 10 }}
            justifyContent="center"
          >
            <p
              onClick={openFacebookModal}
              style={{ margin: "0 10px", height: "20px", cursor: "pointer" }}
            >
              <FacebookIcon fontSize="large" sx={{ color: "#4b68a2" }} />
            </p>
            <p
              onClick={openTwitterModal}
              style={{ margin: "0 10px", height: "20px", cursor: "pointer" }}
            >
              <TwitterIcon fontSize="large" sx={{ color: "#00abf3" }} />
            </p>
            <p
              onClick={openLinkedInModal}
              target="popup"
              style={{ margin: "0 10px", height: "20px", cursor: "pointer" }}
            >
              <LinkedInIcon fontSize="large" sx={{ color: "#0079b4" }} />
            </p>
            <a
              href="https://api.whatsapp.com/send?text=I wanted to share this great website with you https://www.genius-tech.ca/quality-of-experience-well-for-a-user-a-must-for-a-provider"
              style={{ margin: "0 10px", height: "20px" }}
            >
              <WhatsAppIcon fontSize="large" sx={{ color: "#01e675" }} />
            </a>
            <a
              href="mailto:support@genius-tech.ca"
              style={{ margin: "0 10px", height: "20px" }}
            >
              <MailOutlineIcon fontSize="large" sx={{ color: "#707070" }} />
            </a>
          </Stack>
          <Stack sx={{ my: 3 }}>
            <Grid container sx={{ maxWidth: "1000px", mx: "auto", my: 4 }}>
              {bloglist.slice(0, number).map((item, i) => (
                <Grid item xs={6} md={4} sx={{ px: 1, mb: 3 }} key={i}>
                  <BlogItem item={item} key={i} />
                </Grid>
              ))}
            </Grid>
            <Box display="flex">
              <Button
                variant="contained"
                sx={{ px: 5, py: 1 }}
                onClick={() => setNumber(number + 5)}
              >
                Road More
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
