import React, { Component } from "react";
import { Grid } from "react-mdl";
import PropTypes from "prop-types";

class About extends Component {
  render() {
    return (
      <div
        style={{
          background:
            "url(https://wallpapercave.com/wp/XiCvTnp.jpg) center / cover",
          height: "100%",
        }}
      >
        <div
          id="about-container"
          className="content-containers container text-center mt-5"
          style={{ display: "grid" }}
        >
          <h3
            id="about"
            className={this.props.bounceLeft}
            style={{
              marginLeft: 30,
              //   fontWeight: "bolder",
              textDecoration: "underline",
              color: "white",
            }}
          >
            <em>About Me</em>
          </h3>

          <Grid
            style={{
              margin: "24px 50px 24px 100px",
              color: "white",
              fontSize: "40px",
            }}
          >
            <h3>
              Hi! I am software Developer. I am open to Great and Innovative
              offers
            </h3>
            <h4 style={{ padding: "3% 22%" }}>
              <em>
                Good technology and good relationships come from collaboration.
                I'm excited to create a new future, learn about you, and make
                something beautiful together.
              </em>
            </h4>
            <h3>
              Here's a few technologies I've been working with recently:
              <ul style={{ fontSize: "30px" }}>
                <li>JavaScript (ES6+)</li>
                <br />
                <li>React (incl Hooks, React Router, Redux) </li>
                <br />
                <li>HTML/CSS</li>
                <br />
                <li>Bootstrap</li>
                <br />
              </ul>
            </h3>

            <h3>
              Apart from that I also know some latest tools like
              <ol style={{ fontSize: "30px" }}>
                <li>Google Analytics</li>
                <br />
                <li>Heroku</li>
                <br />
                <li>Amazon AWS (EC2, S3 )</li>
              </ol>
            </h3>
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
