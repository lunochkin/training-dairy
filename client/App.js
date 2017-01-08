import * as React from 'react';
import { Router, browserHistory } from "react-router";
import routes from './routes';

export default () => {
  return (
    <div className="main-container">
      <Router history={browserHistory} routes={routes}/>
    </div>
  );
};
