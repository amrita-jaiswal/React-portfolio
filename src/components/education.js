import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ReactGA from "react-ga";


class Education extends Component {

  componentDidMount() {
    ReactGA.initialize("UA-166670153-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
