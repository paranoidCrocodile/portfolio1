import React, { Component } from "react";
import { StyleProvider } from "./components/context/context";
import { $, replaceClass } from "./components/util";
import "./scss/global.scss";

//components
import Header from "./components/header/header";
import Front from "./components/front/front";
import Card from "./components/card";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import { faBoxTissue } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      scrollY: 50
    };
  }

  menuScroll = (e) => {
    //hide/show menu menu scroll
    replaceClass({
      elem: this.state.header,
      trueClass: "hide",
      falseClass: "show",
      condFunc: () => window.scrollY > this.state.scrollY
    });
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });

    //hide/show menu when scrolled
    window.addEventListener("scroll", (e) => this.menuScroll(e));
    //store .header into state
    this.setState({ header: $(".header") });
  }

  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : "white-mode"}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Front />
          <Education />
          <Projects />
          <Card />
        </StyleProvider>
      </div>
    );
  }
}
