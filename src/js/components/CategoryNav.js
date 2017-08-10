import React from "react";

import CategoryNavItem from "./CategoryNavItem";

export default class CategoryNav extends React.Component {
  render() {
    const { categories } = this.props;
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
