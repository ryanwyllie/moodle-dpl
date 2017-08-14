import React from "react";
import { IndexLink, Link } from "react-router";
import AppBar from "material-ui/AppBar";

export default class Header extends React.Component {
  render() {
    const headerImageStyle = {
      width: "45px"
    };

    return (
      <header class="mdl-layout__header">
        <AppBar
          title='Design Pattern Library'
          iconElementLeft={<img src="assets/images/moodle-icon-orange.png" style={headerImageStyle} />}
        />
      </header>
    );
  }
}
