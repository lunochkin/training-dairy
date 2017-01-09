import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout';
import { getAuthToken } from '../../../selectors';


export default connect(
  state => ({
    token: getAuthToken(state)
  })
)(props => {
  return (
    <Layout>
      Hello, world!

      <div>
        {props.token ? 'user' : 'guest'}
      </div>
    </Layout>
  );
});
