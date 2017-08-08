import React from "react";

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


    if (category.description) {
      category.description
    }

    return (
      <div>
        <h2>{category.name}</h2>
        {stringToHTML(category.description)}
      </div>
    );
  }
}
