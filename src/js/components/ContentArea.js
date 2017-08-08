import React from "react";
import { Route }  from "react-router-dom";

import CategoryContent from "./CategoryContent";
import CategoryStore from "../stores/CategoryStore";

export default class ContentArea extends React.Component {
  constructor() {
    super();
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      categories: CategoryStore.getAll(),
    };
  }

  componentWillMount() {
    CategoryStore.on("change", this.getCategories);
  }

  componentWillUnmount() {
    CategoryStore.removeListener("change", this.getCategories);
  }

  getCategories() {
    this.setState({
      categories: CategoryStore.getAll(),
    });
  }

  render() {
    const { categories } = this.state;
    const CategoryContentComponents = categories.map((category) => {
      return (
        <Route exact path={category.route} key={category.id} render={props => (
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
