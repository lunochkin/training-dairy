import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reactTapEventPlugin from 'react-tap-event-plugin';

reactTapEventPlugin();

ReactDOM.render(<App />, document.getElementById("app"));
