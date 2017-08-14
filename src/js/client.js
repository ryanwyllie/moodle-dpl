import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter, Route } from "react-router-dom";
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./pages/Layout";
import store from "./store";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const app = document.getElementById('app');
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
app);
