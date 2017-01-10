import React from 'react';
import { connect } from 'react-redux';
import { FormControl, Button, Row, Col } from 'react-bootstrap';
import { cancelAdding, addReps, setReps, saveRecordDraft, setDraftExercise } from '../../../modules/diary';
import { getExercises, getRepsArray } from '../../../selectors';


export default connect(
  state => ({
    exercises: getExercises(state),
    repsArray: getRepsArray(state)
  }),
  dispatch => ({
    cancel() {
      dispatch(cancelAdding());
    },
    addReps() {
      dispatch(addReps(''));
    },
    setReps(index, reps) {
      dispatch(setReps(index, reps));
    },
    setExercise(exercise) {
      dispatch(setDraftExercise(exercise));
    },
    save() {
      dispatch(saveRecordDraft());
    }
  })
)(class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <Row>
          <Col xs={3}>
            <FormControl componentClass="select" placeholder="exercise" onChange={e => this.props.setExercise(e.target.value)}>
              <option>-- Select Exercise --</option>
              {this.props.exercises.map((one, index) => <option key={index} value={one._id}>{one.name}</option>)}
            </FormControl>
          </Col>
          <Col xs={6}>
            {this.props.repsArray.map((reps, index) =>
              <FormControl
                key={index}
                type="text"
                value={reps}
                onChange={e => this.props.setReps(index, e.target.value)}
                style={{width: 50, display: 'inline', marginRight: 5}}
              />
            )}

            <Button onClick={this.props.addReps}>+</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={this.props.save} bsSize="small">Save</Button>
            <Button onClick={this.props.cancel} bsSize="small">Cancel</Button>
          </Col>
        </Row>
      </div>
    );
  }
});
