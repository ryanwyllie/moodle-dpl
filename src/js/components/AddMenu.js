import React from "react";

import AddCategoryMenuItem from "./AddCategoryMenuItem";
import AddPatternMenuItem from "./AddPatternMenuItem";

export default class AddMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  collapse() {
    this.setState({collapsed: true});
  }

  expand() {
    this.setState({collapsed: false});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const menuStyle = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    };

    return (
      <div style={menuStyle}
        onMouseEnter={this.expand.bind(this)}
        onMouseLeave={this.collapse.bind(this)}>

        { !collapsed && <AddCategoryMenuItem /> }
        <AddPatternMenuItem to={`${location.pathname}/add_pattern`} />
      </div>
    );
  }
}
