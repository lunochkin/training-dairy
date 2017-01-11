import * as React from 'react';
import { Router, browserHistory } from "react-router";
import { connect, Provider } from 'react-redux';
import routes from './routes';
import store from './store';
import { getAuthToken } from './selectors';
import { saveAuthToken } from './modules/global';


store.dispatch(saveAuthToken(localStorage.getItem('authToken')));


const MainContainer = connect(
  state => ({
    token: getAuthToken(state)
  })
)(class extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Router history={browserHistory} routes={routes}/>
      </div>
    );
  }
});


export default () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
};
