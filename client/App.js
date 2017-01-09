import * as React from 'react';
import { Router, browserHistory } from "react-router";
import { connect, Provider } from 'react-redux';
import routes from './routes';
import store from './store';
import { getAuthToken } from './selectors';
import { saveAuthToken } from './modules/global';


const MainContainer = connect(
  state => ({
    token: getAuthToken(state)
  }),
  dispatch => ({
    saveAuthToken(token) {
      dispatch(saveAuthToken(token));
    }
  })
)(class extends React.Component {
  componentDidMount() {
    this.props.saveAuthToken(localStorage.getItem('authToken'));
  }

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
