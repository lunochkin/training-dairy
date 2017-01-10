import * as React from 'react';
import { connect } from 'react-redux';
import { removeRecord } from '../../../modules/diary';
import { Button, Row, Col } from 'react-bootstrap';


export default connect(
  state => ({}),
  (dispatch, ownProps) => ({
    remove() {
      dispatch(removeRecord(ownProps.record._id));
    }
  })
)(props => {
  return (
    <Row>
      <Col xs={4}>
        {props.record.exercise.name}
      </Col>
      <Col xs={6}>
        {props.record.reps &&
          props.record.reps.map((reps, index) => <span style={{marginLeft: 10}} key={index}>{reps}</span>)
        }
      </Col>
      <Col xs={2}>
        <Button onClick={props.remove} bsSize="xsmall">
          <i className="fa fa-trash-o"/>
        </Button>
      </Col>
    </Row>
  );
});
