import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
// import img1 from "../assets/img1.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Amrita</h2>
            <img
              src={require("../assets/img1.jpg")}
              alt="avatar"
              style={{ height: "250px", borderRadius: "6%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "3em" }}>
              If you have any vacancy that suits my technical skill set,
              you can contact me by using any of the links.
              
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr style={{ borderTop: "2px solid black" }} />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
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
                    +91 987654321
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
