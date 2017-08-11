import React from "react";
import { Link } from 'react-router-dom'

export default class AddPatternMenuItem extends React.Component {
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
    const { to } = this.props;
    const { collapsed } = this.state;
    const containerStyle = {
      display: 'block',
      textAlign: 'right',
    };
    const tooltipStyle = {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      marginRight: '10px',
    };

    return (
      <div style={containerStyle}
        onMouseEnter={this.expand.bind(this)}
        onMouseLeave={this.collapse.bind(this)}>

        {!collapsed && <div class="mdl-tooltip is-active" style={tooltipStyle}>
          Add new pattern
        </div>}
        <Link to={to} class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">add</i>
        </Link>
      </div>
    );
  }
}
