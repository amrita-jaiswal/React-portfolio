import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover",
              }}
            >
              Html
            </CardTitle>
            <CardText>
              This is the practice work i did when learning HTML and CSS.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/amrita-jaiswal/HTML-CSS-practice">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover",
              }}
            >
              Login Page
            </CardTitle>
            <CardText>Single Login Page Design</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/amrita-jaiswal/Login-page">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover",
              }}
            >
              JavaScript Projects
            </CardTitle>
            <CardText>
              This is the practice work i did when learning JavaScript.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/amrita-jaiswal/Javascript-practice">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover",
              }}
            >
              Vanilla JS
            </CardTitle>
            <CardText>
              This is the Custom Google Map with different markers and my
              favorite places.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/amrita-jaiswal/Custom-Google-Map">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover",
                // marginTop:'6%',
                backgroundColor: "black",
              }}
            >
              Portfolio
            </CardTitle>
            <CardText>I made this portfolio in ReactJS.</CardText>
            {/* <CardActions border>
              <Button colored>
                <a href="https://gitlab.com/amritajaiswal/my-portfolio">
                  Gitlab
                </a>
              </Button>
            </CardActions> */}
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    // else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    // }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
