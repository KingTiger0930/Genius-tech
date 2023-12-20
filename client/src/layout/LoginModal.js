import React, { useState } from "react";
import Box from "@mui/material/Box";

import { connect } from "react-redux";

import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";
import PropTypes from "prop-types";

import "./styles.css";

import { toast, Toaster } from "react-hot-toast";

import {
  emailValidator,
  loginPasswordValidator,
} from "./validator";

function LoginModal({ isAuthenticated, login, closeModal }) {

  const [email, setEmail] = useState("");
  const [errorEmailText, serErrorEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [errorPasswordText, serErrorPassword] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
    serErrorEmail(emailValidator(e.target.value));
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    serErrorPassword(loginPasswordValidator(e.target.value));
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (errorEmailText || errorPasswordText) {
      return;
    }
    if (email == "") {
      toast.error("Please input email address", {
        duration: 1500,
        position: "top-right",
        style: {
          width: "300px",
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
    }
    else if (password == "") {
      toast.error("Please input password", {
        duration: 1500,
        position: "top-right",
        style: {
          width: "300px",
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
    } else {
      const res = await login(email, password);

      if (isAuthenticated) {
        window.location.href = "/";
      }
      if (res == "LOGIN_SUCCESS") {
        toast.success("Login Success", {
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
        toast.error("Some of your info is not correct", {
          duration: 1500,
          position: "top-right",
          style: {
            width: "300px",
            height: "60px",
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
      <form onSubmit={onSubmit}>
        <h1 rel="canonical"  className="headerTitle">Sign in</h1>
        <div className="row">
          <div className="errorMessageStyle" ><div>{errorEmailText}</div></div>
          <label htmlFor="uname">Username</label>
          <input type="text" name="email" id="uname" value={email} onChange={onChangeEmail} autoComplete="username" placeholder="Enter username" />
          <div className="errorMessageStyle" ><div>{errorPasswordText}</div></div>
          <label htmlFor="pwd">Password</label>
          <input type="password" name="password" id="pwd" value={password} onChange={onChangePassword} autoComplete="current-password" placeholder="Enter password" />
        </div>
        <div id="button" className="row">
          <button type='button' onClick={onSubmit}>Sign in</button>
          <Toaster />
        </div>
      </form>
    </Box>
  );
}

LoginModal.propTypes = {
  isAuthenticated: PropTypes.any,
  setAlert: PropTypes.any,
  login: PropTypes.any,
  closeModal: PropTypes.any
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { setAlert, login }
)(LoginModal);