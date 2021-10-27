import React from "react";

import ReactDOM from "react-dom";

import App from "~/App";
import TmDbAttribution from "~/components/TmDbAttribution";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TmDbAttribution />
  </React.StrictMode>,
  document.getElementById("root")
);
