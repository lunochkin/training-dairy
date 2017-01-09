import * as React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Form, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import Layout from '../../../components/Layout';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { saveAuthToken } from '../../../modules/global';

export default connect(
  state => ({}),
  dispatch => ({
    saveAuthToken(token) {
      dispatch(saveAuthToken(token));
    }
  })
)(class extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    axios.post('/api/register', this.state).then(response => {
      this.props.saveAuthToken(response.data);
      browserHistory.push('/');
    });
  }

  render() {
    return (
      <Layout>
        <div style={{width: 400, margin: '0 auto'}}>
          <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={3}>
                Email
              </Col>
              <Col sm={9}>
                <FormControl type="text" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={9}>
                <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={9}>
                <Button type="submit">
                  Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </Layout>
    );
  }
});
