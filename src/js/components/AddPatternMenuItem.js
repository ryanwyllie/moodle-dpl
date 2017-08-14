import React from "react";
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
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
        <FloatingActionButton secondary={true}>
          <Link to={to}>
            <ContentAdd />
          </Link>
        </FloatingActionButton>
      </div>
    );
  }
}
