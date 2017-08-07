import React from "react";
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {
  render() {
    const headerImageStyle = {
      top: "0px",
      left: "10px",
      height: "45px",
      width: "50px"
    };

    return (
      <header class="mdl-layout__header">
        <img class="mdl-layout-icon" src="assets/images/moodle-icon.png" style={headerImageStyle} />
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Design Pattern Library</span>
        </div>
      </header>
    );
  }
}
