import React from "react";
import { NavLink } from "react-router-dom";
import CircularProgress from 'material-ui/CircularProgress';

export default class CategoryNavItem extends React.Component {
  render() {
    const { category, loading } = this.props;
    const linkStyle = {
      flexShrink: '0',
      padding: '10px 40px',
      margin: '0',
      display: 'block',
    };
    const activeLinkStyle = {
      backgroundColor: '#e0e0e0',
    };
    const spinnerStyle = {
      float: 'right',
    };

    let loadingElement = null;

    if (loading) {
      loadingElement = <CircularProgress size={24} style={spinnerStyle} />
    }

    return (
      <NavLink
        class="mdl-navigation__link"
        to={`/category/${category.id}`}
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >
        {category.name}
        {loadingElement}
      </NavLink>
    );
  }
}
