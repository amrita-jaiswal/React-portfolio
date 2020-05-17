import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            style={{
              background:
                "url(https://c4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-preview.jpg) center / cover",
            }}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume" style={{fontSize: '16px'}}>Resume</Link>
              <Link to="/aboutme" style={{fontSize: '16px'}}>About Me</Link>
              <Link to="/projects" style={{fontSize: '16px'}}>Projects</Link>
              <Link to="/contact" style={{fontSize: '16px'}}>Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            maxWidth="400px"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  paddingLeft: "33px",
                }}
                to="/"
              >
                My Portfolio
              </Link>
            }
          >
            <Navigation style={{ alignItems: "center" }}>
              <Link to="/resume">Resume</Link>
              <hr />
              <Link to="/aboutme">About Me</Link>
              <hr />
              <Link to="/projects">Projects</Link>
              <hr />
              <Link to="/contact">Contact</Link>
              <hr />
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
