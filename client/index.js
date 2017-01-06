import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render(<App />, document.getElementById("app"));
