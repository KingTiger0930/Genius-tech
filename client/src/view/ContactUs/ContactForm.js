import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// import ReCAPTCHA from "react-google-recaptcha";
import ReCaptchaV2 from "react-google-recaptcha";
export default function ContactForm() {

  const SITE_KEY = "6LdzBj0gAAAAADzmGckhQC7Fn_FDjRM1jCps850D";
  // const recaptchaRef = React.createRef();


  // const onSubmit = () => {
  //   const recaptchaValue = recaptchaRef.current.getValue();
  //   this.props.onSubmit(recaptchaValue);
  // }

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { name, email, phone, message } = formData;

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // console.log("formData: ", formData);

  return (
    <Box>
      <Grid container sx={{ maxWidth: "1100px", px: 5, mx: "auto", my: 10 }}>
        <Grid item xs={12} sm={5} sx={{ p: 2 }}>
          <Box sx={{ p: 2, backgroundColor: "#f4f4f4", height: "100%" }}>
            <Typography variant="h5" component="h5" fontWeight={600}>
              Get in Touch with Us and We Will Help You Grow Extraordinarily.
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              We will take care of your IT matters, so you can focus on your business efficiently.
            </Typography>

            <Typography variant="p" component="p" fontWeight={600} sx={{ mt: 6 }}>
              +1 647 951 8664
            </Typography>
            {/*<Typography variant="p" component="p" fontWeight={600}>
              sales@genius-tech.ca
            </Typography>*/}

            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              209 Fort York Blvd Toronto, ON M5V 4A1
            </Typography>

            <Stack direction='row' sx={{ mt: 3 }}>
              <Stack sx={{ mr: 4 }}>
                <Typography variant="p" component="p" >
                  Mon - Fri
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 2 }}>
                  Sat - Sun
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="p" component="p" align='right'>
                  9:00 am - 5:00 pm
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 2 }} align='right'>
                  Closed
                </Typography>
              </Stack>
            </Stack>

            <Stack direction='row' sx={{ mt: 3 }}>
              <a href='https://facebook.com' target="_blank" rel="noreferrer" className="ContactForm">
                <FacebookIcon />
              </a>
              <a href='https://twitter.com' target="_blank" rel="noreferrer" className="ContactForm">
                <TwitterIcon />
              </a>
              <a href='https://youtube.com' target="_blank" rel="noreferrer" className="ContactForm-color">
                <YouTubeIcon />
              </a>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} sx={{ p: 2 }}>
          <form method="post" to="sales@genius-tech.ca">
            <Stack sx={{ mt: 2, borderBottom: "1px solid #313131" }}>
              <Typography variant="h5" component="h5" color="#313131">
                Name
              </Typography>
              <input
                label="Name"
                name="name"
                value={name}
                onChange={onChange}
                className="ContactForm-input outlined-name"
              />
            </Stack>
            <Stack sx={{ mt: 4, borderBottom: "1px solid #313131" }}>
              <Typography variant="h5" component="h5" color="#313131">
                Phone
              </Typography>
              <input
                label="Name"
                name="phone"
                value={phone}
                onChange={onChange}
                className="ContactForm-input outlined-name"
              />
            </Stack>
            <Stack sx={{ mt: 4, borderBottom: "1px solid #313131" }}>
              <Typography variant="h5" component="h5" color="#313131">
                Email
              </Typography>
              <input
                label="Email"
                name="email"
                value={email}
                onChange={onChange}
                className="ContactForm-input outlined-name"
              />
            </Stack>
            <Stack sx={{ mt: 4, borderBottom: "1px solid #313131" }}>
              <Typography variant="h5" component="h5" color="#313131">
                Message
              </Typography>
              <textarea
                label="Name"
                name="message"
                value={message}
                onChange={onChange}
                className="ContactForm-input"
              />
            </Stack>
            <Stack sx={{ mt: 4 }}>
              <Typography variant="h5" component="h5" color="#313131">
                Please select the services you are interested in:
              </Typography>
              <FormGroup sx={{ mt: 2 }}>
                <FormControlLabel control={<Checkbox />} label="Desktop Management" />
                <FormControlLabel control={<Checkbox />} label="Server Management" />
                <FormControlLabel control={<Checkbox />} label="Network Management" />
                <FormControlLabel control={<Checkbox />} label="Backup Solutions" />
              </FormGroup>
              {/* <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf26zwgAAAAAAhyZ0dFprr1qyiLsFeprw9dmx2M"
              /> */}
              <ReCaptchaV2
                sitekey={SITE_KEY}
                onChange={onChange}
              />
            </Stack>
            <Box display='flex' justifyContent='space-around' sx={{ mt: 5 }}>
              <Button variant="contained" type='submit' sx={{ px: 5, py: 1 }}>Submit</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
