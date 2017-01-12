import * as React from 'react';
import Navbar from './Navbar';
import { Well } from 'react-bootstrap';


export default props => {
  return (
    <div>
      <Navbar fluid={true}/>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};
