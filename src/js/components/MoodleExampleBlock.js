import React from "react";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

export default class MoodleExampleBlock extends React.Component {
  render() {
    const { html } = this.props;
    const paperStyle = {
      padding: '10px'
    };
    const headerStyle = {
      margin: 0
    };
    const dividerStyle = {
      marginBottom: '10px'
    };

    return (
      <Paper style={paperStyle}>
        <h4 style={headerStyle}>Example</h4>
        <Divider style={dividerStyle} />
        <div class="moodle">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Paper>
    );
  }
}
