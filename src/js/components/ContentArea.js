import React from "react";
import { connect } from "react-redux";
import { Route, withRouter }  from "react-router-dom";

import CategoryContent from "./CategoryContent";

class ContentArea extends React.Component {
  render() {
    const { categories } = this.props;
    const CategoryContentComponents = categories.map((category) => {
      return (
        <Route exact path={`/category/${category.id}`} key={category.id} render={props => (
          <CategoryContent category={category} />
        )}/>
      );
    });

    return (
      <div>
        {CategoryContentComponents}
      </div>
    );
  }
}

export default withRouter(
  connect(
    (store) => {
      return {
        categories: store.category.categories,
      };
    }
  )(ContentArea)
);
