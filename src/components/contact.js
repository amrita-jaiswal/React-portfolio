import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ReactGA from "react-ga";
import "./index.css";

class Contact extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-166670153-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src={require("../assets/img1.jpg")}
              alt="avatar"
              style={{
                height: "250px",
                borderRadius: "6%",
                maxWidth: "100%",
                marginTop: "9vh",
              }}
            />
            <h2 style={{ paddingTop: 15 }}>Amrita</h2>
            <p style={{ width: "75%", margin: "auto", 
                        // paddingTop: "2em" 
                        }}>
              If you have any vacancy that suits my technical skill set, you can
              contact me by using any of the links.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr
              style={{
                borderTop: "2px solid black",
                //  marginRight: '46%'
              }}
            />

            <div className="contact-list">
              <List style={{ display: "table" }}>
                <ListItem>
                  <ListItemContent
                    id="span"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "#124566",
                    }}
                  >
                    <i
                      className="fa fa-phone-square"
                      aria-hidden="true"
                      style={{ color: "#124566" }}
                    />
                    +91 9608307717
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <a
                      href="https://github.com/amrita-jaiswal"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "#124566" }}
                    >
                      <i
                        className="fa fa-github"
                        aria-hidden="true"
                        style={{ color: "#124566" }}
                      />
                      amrita-jaiswal
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "#124566",
                    }}
                  >
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ color: "#124566" }}
                    />
                    amritajais10@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <a
                      href="skype:live:.cid.25afb8fa3ad25f06?userinfo"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "#124566" }}
                    >
                      <i
                        className="fa fa-skype"
                        aria-hidden="true"
                        style={{ color: "#124566" }}
                      />
                      live:.cid.25afb8fa3ad25f06
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
