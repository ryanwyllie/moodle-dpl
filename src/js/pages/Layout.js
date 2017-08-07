import React from "react";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div class="mdl-layout mdl-layout--fixed-header">
        <Header />

        <div>
          <Footer/>
        </div>
      </div>

    );
  }
}
