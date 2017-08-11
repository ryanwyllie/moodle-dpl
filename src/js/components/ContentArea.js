import React from "react";
import { connect } from "react-redux";
import { Route, withRouter }  from "react-router-dom";

import AddMenu from "./AddMenu";
import AddNewPattern from "./AddNewPattern";
import CategoryContent from "./CategoryContent";

class ContentArea extends React.Component {
  render() {
    const { categories, location } = this.props;
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
        <AddMenu location={location} />
        <Route exact path="/category/:categoryId/add_pattern" component={AddNewPattern} />
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
