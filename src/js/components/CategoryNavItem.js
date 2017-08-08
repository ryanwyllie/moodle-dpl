import React from "react";
import { NavLink } from "react-router-dom";

export default class CategoryNavItem extends React.Component {
  render() {
    const { name, link } = this.props;
    const linkStyle = {
      flexShrink: '0',
      padding: '10px 40px',
      margin: '0',
      display: 'block',
    };
    const activeLinkStyle = {
      backgroundColor: '#e0e0e0',
    };

    return (
      <NavLink
        class="mdl-navigation__link"
        to={link}
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >
        {name}
      </NavLink>
    );
  }
}
