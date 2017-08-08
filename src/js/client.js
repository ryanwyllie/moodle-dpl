import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <Layout />
  </HashRouter>,
app);
