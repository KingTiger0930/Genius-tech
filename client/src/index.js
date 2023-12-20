import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

//Initialize GA4 (MEASUREMENT ID)
ReactGA.initialize("G-DM670YQHJY");

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics);
