import React from "react";
import { connect } from "react-redux";

import { fetchPatternsForCategory } from "../actions/patternActions";
import PatternContent from "./PatternContent";

@connect((store) => {
    return {
      patterns: store.pattern.patterns,
    };
})
export default class CategoryContent extends React.Component {
  componentWillMount() {
    const { category } = this.props;
    this.props.dispatch(fetchPatternsForCategory(category.id));
  }

  render() {
    const { category, patterns } = this.props;
    const stringToHTML = (value) => {
      if (value) {
        return <div dangerouslySetInnerHTML={{ __html: value }} />;
      } else {
        return null;
      }
    };
    const patternContentComponents = patterns.map((pattern) => {
      return <PatternContent key={pattern.id} pattern={pattern} />;
    });

    return (
      <div>
        <h2>{category.name}</h2>
        {stringToHTML(category.description)}
        {patternContentComponents}
      </div>
    );
  }
}
