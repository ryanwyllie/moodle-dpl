import React from "react";

export default class AddCategoryMenuItem extends React.Component {
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
    const { collapsed } = this.state;
    const containerStyle = {
      display: 'block',
      textAlign: 'right',
      marginBottom: '10px',
    };
    const buttonStyle = {
      marginRight: '8px',
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
          Add new category
        </div>}
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style={buttonStyle}>
          <i class="material-icons">add</i>
        </button>
      </div>
    );
  }
}
