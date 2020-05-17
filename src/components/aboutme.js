import React, { Component } from "react";
import { Grid } from "react-mdl";
import PropTypes from "prop-types";
import ReactGA from "react-ga";
import "./index.css";

class About extends Component {

  componentDidMount() {
    ReactGA.initialize("UA-166670153-1");
    ReactGA.pageview(window.location.pathname);
  }
  
  render() {
    return (
      <div
        className="background"
        style={{
          background:
            "url(https://c4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-preview.jpg) center / cover",
          height: "100%",
          overflow: "auto",
        }}
      >
        <div
          id="about-container"
          className="content-containers container text-center mt-5"
          style={{ display: "grid" }}
        >
          {/* <h3
            id="about"
            className={this.props.bounceLeft}
            style={{
              marginLeft: 30,
              textDecoration: "underline",
              color: "white",
              fontFamily: "monospace",
            }}
          >
            <em id="about1">About Me</em>
          </h3> */}

          <Grid
            style={{
              margin: "24px 50px 24px 100px",
              color: "white",
              fontSize: "40px",
            }}
          >
            <h3 style={{ fontFamily: "initial" }}>
              Hi! My Name is Amrita and I am a Software Developer.&nbsp;
              {/* <br/> */}
              {/* I have been coding from 8 months now. */}I am open to Great
              and Innovative offers
            </h3>
            <h4 style={{ padding: "3% 22%", fontFamily: "initial" }}>
              <em>
                Good technology and good relationships come from collaboration.
                I'm excited to create a new future, learn about you, and make
                something beautiful together.
              </em>
            </h4>
            <Grid style={{ display: "grid" }}>
              <h3 style={{ fontFamily: "initial" }}>
                Here's a few technologies I've been working with recently:
                <ul style={{ fontSize: "30px" }}>
                  <li style={{ lineHeight: 1.3 }}>JavaScript (ES6+)</li>
                  <br />
                  <li style={{ lineHeight: 1.3 }}>
                    React (incl Hooks, React Router, Redux){" "}
                  </li>
                  <br />
                  <li>HTML/CSS</li>
                  <br />
                  <li>Bootstrap</li>
                  <br />
                  <li>React Native</li>
                  <br/>
                  <li>REST API</li>

                </ul>
              </h3>

              <h3 style={{ fontFamily: "initial" }}>
                Apart from that I know some latest tools like:
                <ol style={{ fontSize: "30px" }}>
                  <li style={{ lineHeight: 1.5 }}>Google Analytics</li>
                  <br />
                  <li>Heroku</li>
                  <br />
                  <li style={{ lineHeight: 1.3 }}>Amazon AWS (EC2, S3 )</li>
                </ol>
              </h3>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};

export default About;
