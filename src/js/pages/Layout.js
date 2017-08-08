import React from "react";

import Header from "../components/layout/Header";
import CategoryNav from "../components/CategoryNav";
import ContentArea from "../components/ContentArea";

export default class Layout extends React.Component {
  render() {
    return (
      <div class="mdl-layout mdl-layout--fixed-header">
        <Header />

        <div class="mdl-grid mdl-cell mdl-cell--12-col">
          <div class="mdl-cell mdl-cell--3-col">
            <CategoryNav />
          </div>
          <div class="mdl-cell mdl-cell--9-col">
            <ContentArea />
          </div>
        </div>
      </div>
    );
  }
}
