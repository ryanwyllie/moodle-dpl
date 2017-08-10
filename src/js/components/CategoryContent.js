import React from "react";

import PatternContent from "./PatternContent";
import PatternStore from "../stores/PatternStore";

export default class CategoryContent extends React.Component {
  render() {
    const { category } = this.props;
    const stringToHTML = (value) => {
      if (value) {
        return <div dangerouslySetInnerHTML={{ __html: value }} />;
      } else {
        return null;
      }
    };
    const patternContentComponents = PatternStore.getForCategory(category.id).map((pattern) => {
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
