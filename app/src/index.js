import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import ErrorBoundary from "./pages/ErrorPage/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App className="app" />
    </ErrorBoundary>
  </Provider>
);
