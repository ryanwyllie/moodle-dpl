import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/styles';

export default class CodeBlock extends React.Component {
  render() {
    const { code } = this.props;
    const highlighterStyle = {
      margin: 0,
      paddingLeft: '0',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
    };
    const lineNumberStyle = {
      float: 'left',
      marginTop: '-0.5em',
      marginBottom: '-0.5em',
      marginRight: '0.5em',
      padding: '0.5em',
      paddingRight: '10px',
      backgroundColor: '#f7f7f7',
      borderRight: '1px solid #e0e0e0',
    };

    return (
      <SyntaxHighlighter
        language='html'
        style={docco}
        customStyle={highlighterStyle}
        lineNumberContainerStyle={lineNumberStyle}
        showLineNumbers="true"
      >{code}</SyntaxHighlighter>
    );
  }
}
