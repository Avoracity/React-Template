import ReactDOM from "react-dom";
import React from "react";

import App from "./components/app";

import testData from "./testData.json";

const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App />);