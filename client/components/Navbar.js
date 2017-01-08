import * as React from 'react';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router';

export default () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <IndexLink to="/">TD</IndexLink>
      </Navbar.Brand>
      <Nav>
        <LinkContainer to="/diary">
          <NavItem>Diary</NavItem>
        </LinkContainer>
      </Nav>
      <Nav className="pull-right">
        <LinkContainer to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};
