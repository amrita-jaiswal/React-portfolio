import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import { Link } from "react-router-dom";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import ReactGA from "react-ga";
// import amrita from "../assets/amrita.jpg";
import Pdf from '../assets/Resume.pdf';

class Resume extends Component {

  componentDidMount() {
    ReactGA.initialize("UA-166670153-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img
                src={require("../assets/IMG_1029.jpg")}
                alt="mypic"
                style={{ maxHeight: "200px" }}
              />
            </div>

            <h2>Amrita</h2>
            <h4 style={{ color: "grey" }}>Front End Developer</h4>
            <p>
              <a href={Pdf} target='_blank' className='nav-link' style={{ color: "blue" }}>
                {/* <a
                className="btn btn-primary btn-learn"
                href="https://docs.google.com/document/d/1NvswUdSTEgdvKDIFshPNJS0MxSTddGrX7H8Vyy3VZHQ/edit?usp=sharing/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              > */}
                View Resume
                <i className="icon-download4" />
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
            <p>
              Hello! I'm Amrita, a software engineer based in Bengaluru <br />
              I am a Front End Developer and aspiring Full Stack Developer.
              <br />
            </p>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
            <h5>Address</h5>
            <p>Old Airport Road, Bengaluru</p>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
            <h5>Phone</h5>
            <p> +91 9608307717 </p>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
            <h5>Email</h5>
            <p>amritajais10@gmail.com</p>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
            <h5>Web Site</h5>
            <a
              href="https://amritajaiswal.herokuapp.com"
              style={{ color: "blue" }}
            >
              <em> https://amritajaiswal.herokuapp.com </em>
            </a>
            <hr style={{ borderTop: "3px solid #103e66", width: "50%" }} />
          </Cell>
          <Cell
            className="resume-right-col"
            col={8}
            style={{
              background:
                "url(https://c4.wallpaperflare.com/wallpaper/988/889/137/simple-gradient-minimalism-wallpaper-preview.jpg) center / cover",
            }}
          >
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2017}
              schoolName="Engineering"
              schoolDescription="I completed my Degree in Computer Science and Engineering branch with 7.80 DGPA from the City of Joy Kolkata."
            />

            <Education
              startYear={2010}
              endYear={2013}
              schoolName="Diploma in Engineering"
              schoolDescription="I had completed my Diploma in Computer Science and Engineering branch with 82%."
            />

            <Education
              startYear={2009}
              endYear={2010}
              schoolName="10th"
              schoolDescription="I had completed my Schooling with 8.0 CGPA from my hometown in Jharkhand "
            />
            <hr style={{ borderTop: "3px solid #7a1515" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobProfile="Front End Developer Intern"
              jobName="Internship"
              companyName="Company Name - Airprobe (14Weeks Technology)"
              jobDescription="I have completed my 4.5 months Internship as a Front End Developer Intern in their Web Development Team.
                              I had worked on these technologies in the company i.e- ReactJS, JavaScipt and HTML/CSS, REST API's.
                              I have also worked on making Responsive Webapp for Mobile, Tablet."
            />

            <hr style={{ borderTop: "3px solid #7a1515" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript&nbsp;&nbsp;" progress={80} />
            <Skills skill="HTML/CSS" progress={95} />
            <Skills skill="ReactJS&nbsp;&nbsp;&nbsp;" progress={75} />
            <Skills skill="Bootstrap&nbsp;" progress={90} />
            <Skills skill="React Native" progress={50} />
            <Skills skill="Git Version" progress={90} />


          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
