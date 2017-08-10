import React from "react";

import CategoryNavItem from "./CategoryNavItem";

export default class CategoryNav extends React.Component {
  render() {
    const { categories, loading } = this.props;
    const navStyle = {
      marginTop: '24px',
      flexDirection: 'column',
      alignItems: 'stretch'
    };

    const CategoryNavItemComponents = categories.map((category) => {
      const isLoading = loading.includes(category.id);
      return <CategoryNavItem key={category.id} category={category} loading={isLoading} />;
    });

    return (
      <nav class="mdl-navigation" style={navStyle}>
        {CategoryNavItemComponents}
      </nav>
    );
  }
}
