import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {Reducer} from "./reducer";
import {App} from "./componens/App";

import "./styles.css";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
const store = createStore(Reducer);
const appElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(appElement, rootElement);
