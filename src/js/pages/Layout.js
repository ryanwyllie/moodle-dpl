import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchCategories } from "../actions/categoryActions";
import Header from "../components/layout/Header";
import CategoryNav from "../components/CategoryNav";
import ContentArea from "../components/ContentArea";

class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    const { categories, loading } = this.props;

    return (
      <div class="mdl-layout mdl-layout--fixed-header">
        <Header />

        <div class="mdl-grid mdl-cell mdl-cell--12-col">
          <div class="mdl-cell mdl-cell--3-col">
            <CategoryNav categories={categories} loading={loading}/>
          </div>
          <div class="mdl-cell mdl-cell--9-col">
            <ContentArea />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (store) => {
      return {
        categories: store.category.categories,
        loading: store.category.loading,
      };
    }
  )(Layout)
);
