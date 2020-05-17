import React, { Component } from "react";
import { Grid, Tooltip } from "react-mdl";
import ReactGA from "react-ga";
import "./index.css";

class Landing extends Component {
  async componentDidMount() {
    ReactGA.initialize("UA-166670153-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid
          className="landing-grid"
          style={{
            overflow: "auto",
            background:
              "url(https://c4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-preview.jpg) center / cover",
          }}
        >
          <div
            className="banner-text"
            style={{ backgroundColor: "transparent" }}
          >
            <h2
              style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}
            >
              Amrita
            </h2>
            {/* <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              /> */}

            {/* <div className="banner-text" style={{backgroundColor: "transparent"}}> */}
            <h1 style={{ paddingTop: 5 }}>Front End Developer</h1>

            <hr style={{ borderTop: "2px solid white" }} />

            <p> HTML/CSS | Bootstrap | JavaScript | ReactJS | React Native | Git</p>

            <div className="social-links">
              {/* LinkedIn */}
              <Tooltip label="LinkdIn Link" large>
                <a
                  href="https://www.linkedin.com/in/amritajais"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* Github */}
              <Tooltip label="Github" large>
                <a
                  href="https://github.com/amrita-jaiswal"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* Skype */}
              <Tooltip label="Skype" large>
                <a
                  href="skype:live:.cid.25afb8fa3ad25f06?userinfo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* Twitter */}
              <Tooltip label="Twitter" large>
                <a
                  href="https://twitter.com/Amritajaiswall"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </Tooltip>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Landing;
