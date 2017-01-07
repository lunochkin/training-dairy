import * as React from 'react';
import { Well, Navbar, NavItem, Nav } from 'react-bootstrap';

export default () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <a href="#">TD</a>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Diary</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Sign Up</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Well>
          Hello, world!
        </Well>
      </div>
    </div>
  );
};
