import * as React from 'react';
import Navbar from './Navbar';
import { Well } from 'react-bootstrap';


export default props => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Well>
          {props.children}
        </Well>
      </div>
    </div>
  );
};
