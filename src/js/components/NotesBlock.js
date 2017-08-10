import React from "react";

export default class NotesBlock extends React.Component {
  render() {
    const { html } = this.props;
    const headerStyle = {
      marginTop: '0',
    };

    if (!html) {
      return null;
    }

    return (
      <div>
        <h4 style={headerStyle}>Notes</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
