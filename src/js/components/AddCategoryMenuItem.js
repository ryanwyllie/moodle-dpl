import React from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
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
        <FloatingActionButton mini={true} secondary={true} style={buttonStyle}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
