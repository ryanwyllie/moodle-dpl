import React from "react";
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {
  render() {
    const headerImageStyle = {
      top: "10px",
      left: "15px",
      height: "35px",
      width: "45px"
    };

    return (
      <header class="mdl-layout__header">
        <img class="mdl-layout-icon" src="assets/images/moodle-icon-orange.png" style={headerImageStyle} />
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Design Pattern Library</span>
        </div>
      </header>
    );
  }
}
