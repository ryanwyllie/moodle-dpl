import React from "react";

import CodeBlock from "./CodeBlock";
import MoodleExampleBlock from "./MoodleExampleBlock";
import NotesBlock from "./NotesBlock";

export default class PatternContent extends React.Component {
  render() {
    const { pattern } = this.props;
    const stringToHTML = (value) => {
      if (value) {
        return <div dangerouslySetInnerHTML={{ __html: value }} />;
      } else {
        return null;
      }
    };

    return (
      <div>
        <h3>{pattern.name}</h3>
        {stringToHTML(pattern.description)}
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <MoodleExampleBlock html={pattern.exampleHTML} />
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <CodeBlock code={pattern.exampleHTML} />
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <NotesBlock html={pattern.notesHTML} />
          </div>
        </div>
      </div>
    );
  }
}
