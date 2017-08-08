import React from "react";

import CategoryNavItem from "./CategoryNavItem";
import CategoryStore from "../stores/CategoryStore";

export default class CategoryNav extends React.Component {
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
    const navStyle = {
      marginTop: '24px',
      flexDirection: 'column',
      alignItems: 'stretch'
    };

    const CategoryNavItemComponents = categories.map((category) => {
      return <CategoryNavItem key={category.id} name={category.name} link={category.route} />;
    });

    return (
      <nav class="mdl-navigation" style={navStyle}>
        {CategoryNavItemComponents}
      </nav>
    );
  }
}
