import React, { useState } from "react";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import "./styles.css";

import { toast, Toaster } from "react-hot-toast";

import {
    loginUsernameValidator,
    emailValidator,
    loginPasswordValidator,
} from "./validator";

function RegisterModal({ register, closeModal }) {
    const [name, setName] = useState("");
    const [errorNameText, setErrorName] = useState("");

    const [email, setEmail] = useState("");
    const [errorEmailText, setErrorEmail] = useState("");

    const [password, setPassword] = useState("");
    const [errorPasswordText, setErrorPassword] = useState("");

    const [password2, setConfirmPassword] = useState("");
    const [errorConfirmPasswordText, setErrorConfirmPassword] = useState("");

    const onChangeName = e => {
        setName(e.target.value);
        setErrorName(loginUsernameValidator(e.target.value));
    };

    const onChangeEmail = e => {
        setEmail(e.target.value);
        setErrorEmail(emailValidator(e.target.value));
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
        setErrorPassword(loginPasswordValidator(e.target.value));
    };

    const onChangeConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value);
        console.log("before password : ", password);
        if (e.target.value != password) {
            setErrorConfirmPassword("Please confirm password");
        } else {
            setErrorConfirmPassword("");
        }
    };

    const onSubmit = async () => {
        if (errorNameText || errorEmailText || errorPasswordText || errorConfirmPasswordText) {
            return;
        }

        if (name == "" || email == "" || password == "" || password2 == "") {
            toast.error("Please input all infos", {
                duration: 1500,
                position: "top-right",
                style: {
                    width: "250px",
                    height: "60px",
                    color: "black",
                    backgroundColor: "#ebcc34"
                },
                className: "",
                iconTheme: {
                    primary: "#fff",
                    secondary: "red",
                },
            });
        } else  if (password.length < 6) {
                    toast.error("Please enter a password with 6 or more characters.", {
                        duration: 2500,
                        position: "top-right",
                        style: {
                            width: "600px",
                            height: "120px",
                            color: "white",
                            backgroundColor: "red"
                        },
                        className: "",
                        iconTheme: {
                            primary: "#fff",
                            secondary: "red",
                        },
                    });
            } else {
                const res = await register({ name, email, password });
                if (res == "REGISTER_SUCCESS") {
                    toast.success("Register Success", {
                        duration: 1500,
                        position: "top-right",
                        style: {
                            width: "200px",
                            height: "60px",
                            backgroundColor: "#00FFC7"
                        },
                        className: "",
                        iconTheme: {
                            primary: "green",
                            secondary: "#fff",
                        },
                    });

                    setTimeout(() => {
                        closeModal();
                    }, 1500);

                } else {
                    toast.error("Already Exist", {
                        duration: 2500,
                        position: "top-right",
                        style: {
                            width: "600px",
                            height: "100px",
                            color: "white",
                            backgroundColor: "red"
                        },
                        className: "",
                        iconTheme: {
                            primary: "#fff",
                            secondary: "red",
                        },
                    });
                } 
            }
    };

    return (
        <Box>
            {/* <form onSubmit={onSubmit}>
                <Typography variant="h5" component="h5" fontSize={20} color="#003187">
                    Name
                </Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="text"
                    name="name"
                    sx={{ mb: 1 }}
                    value={name}
                    onChange={onChange}
                />

                <Typography variant="h5" component="h5" fontSize={20} color="#003187">
                    Email
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="email"
                    name="email"
                    sx={{ mb: 1 }}
                    value={email}
                    onChange={onChange}
                />

                <Typography variant="h5" component="h5" fontSize={20} color="#003187">
                    Password
                </Typography>
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="password"
                    name="password"
                    sx={{ mb: 1 }}
                    value={password}
                    onChange={onChange}
                />

                <Typography variant="h5" component="h5" fontSize={20} color="#003187">
                    Confirm Password
                </Typography>
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="password"
                    name="password2"
                    sx={{ mb: 1 }}
                    value={password2}
                    onChange={onChange}
                />

                <Button type='submit' variant="contained">Register</Button>
            </form> */}
            <form onSubmit={onSubmit}>
                <h1 rel="canonical"  className="headerTitle">Sign Up</h1>
                <div className="row">
                    <div className="errorMessageStyle" ><div>{errorNameText}</div></div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="name" id="username" value={name} onChange={onChangeName} autoComplete="username" placeholder="Enter username" />
                    <div className="errorMessageStyle" ><div>{errorEmailText}</div></div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={onChangeEmail} autoComplete="email" placeholder="Enter email" />
                    <div className="errorMessageStyle" ><div>{errorPasswordText}</div></div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={onChangePassword} autoComplete="new-password" placeholder="Enter password" />
                    <div className="errorMessageStyle" ><div>{errorConfirmPasswordText}</div></div>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="password2" id="confirm" value={password2} onChange={onChangeConfirmPassword} autoComplete="off" placeholder="Enter confirm password" />
                </div>
                <div id="button" className="row">
                    <button type='button' onClick={onSubmit}>Sign up</button>
                    <Toaster />
                </div>
            </form>
        </Box>
    );
}

RegisterModal.propTypes = {
  setAlert: PropTypes.any,
  register: PropTypes.any,
  closeModal: PropTypes.any
};

export default connect(
    null,
    { setAlert, register }
)(RegisterModal);