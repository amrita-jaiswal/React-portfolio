import React, { Component } from "react";
import { Grid, Tooltip } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid
          className="landing-grid"
          style={{
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
            <h1>Front End Developer</h1>

            <hr style={{ borderTop: "2px solid white" }} />

            <p> HTML/CSS | Bootstrap | JavaScript | ReactJS | Git </p>

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

              {/* Freecodecamp */}
              <Tooltip label="Skype" large>
                <a
                  href="skype:live:.cid.25afb8fa3ad25f06?userinfo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* Youtube */}
              <Tooltip label="Angelist Account" large>
                <a
                  href="https://angel.co/u/amritajaiswal"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-angellist" aria-hidden="true" />
                </a>
              </Tooltip>
            </div>
          </div>
          {/* </Cell> */}
        </Grid>
      </div>
    );
  }
}

export default Landing;
