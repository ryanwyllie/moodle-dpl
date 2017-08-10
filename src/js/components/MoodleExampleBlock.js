import React from "react";

export default class MoodleExampleBlock extends React.Component {
  render() {
    const { html } = this.props;

    return (
      <div class="moodle">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
