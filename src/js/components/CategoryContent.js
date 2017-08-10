import React from "react";
import { connect } from "react-redux";

import { fetchPatternsForCategory } from "../actions/patternActions";
import PatternContent from "./PatternContent";

@connect((store, ownProps) => {
    return {
      patterns: store.pattern.patterns.filter((pattern) => {
        return pattern.categoryId == ownProps.category.id;
      }),
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
