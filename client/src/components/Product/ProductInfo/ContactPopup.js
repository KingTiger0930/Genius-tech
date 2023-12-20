import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { TextareaAutosize } from "@mui/material";

import "./../../../assets/style.css";

export default function ContactPopup() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "contact-popover" : undefined;

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const { name, email, phone, message } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="ContactPopup_1">
            <Button className="ContactPopup_2" aria-describedby={id} variant="contained" onClick={handleClick}>
                <b>Request Quote</b>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <div className="ContactPopup_3">
                    <form method="post" to="sales@genius-tech.ca">
                        <Stack sx={{ mt: 2, borderBottom: "1px solid #313131" }}>
                            <Typography variant="p" component="p" color="#313131">
                                Name
                            </Typography>
                            <Input
                                className="outlined-name"
                                label="Name"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
                        </Stack>
                        <Stack sx={{ mt: 1, borderBottom: "1px solid #313131" }}>
                            <Typography variant="p" component="p" color="#313131">
                                Phone
                            </Typography>
                            <Input
                                className="outlined-name"
                                label="Name"
                                name="phone"
                                value={phone}
                                onChange={onChange}
                            />
                        </Stack>
                        <Stack sx={{ mt: 1, borderBottom: "1px solid #313131" }}>
                            <Typography variant="p" component="p" color="#313131">
                                Email
                            </Typography>
                            <Input
                                className="outlined-name"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </Stack>
                        <Stack sx={{ mt: 1, borderBottom: "1px solid #313131" }}>
                            <Typography variant="p" component="p" color="#313131">
                                Message
                            </Typography>
                            <TextareaAutosize
                                label="Name"
                                name="message"
                                value={message}
                                onChange={onChange}
                                className="ContactPopup_4 outlined-name"
                            />
                        </Stack>
                        <Box display='flex' justifyContent='space-around' sx={{ mt: 2 }}>
                            <Button variant="contained" type='submit' sx={{ px: 5, py: 1 }}>Request Quote</Button>
                        </Box>
                    </form>
                </div>
            </Popover>
        </div>
    );
}