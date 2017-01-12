import * as React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router';

import { getAuthToken } from '../selectors';

export default connect(
  state => ({
    token: getAuthToken(state)
  })
)(props => {
  return (
    <Navbar fluid={true}>
      <Navbar.Brand>
        <IndexLink to="/">TD</IndexLink>
      </Navbar.Brand>
      <Nav>
        <LinkContainer to="/diary">
          <NavItem>Diary</NavItem>
        </LinkContainer>
      </Nav>
      <Nav className="pull-right">
        {!props.token &&
          <LinkContainer to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>
        }
        {!props.token &&
          <LinkContainer to="/login">
            <NavItem>Log In</NavItem>
          </LinkContainer>
        }
        {props.token &&
          <LinkContainer to="/logout">
            <NavItem>Log Out</NavItem>
          </LinkContainer>
        }
      </Nav>
    </Navbar>
  );
});
