import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout';
import { getRecords } from '../../../selectors';
import { Col, Row } from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

export default connect(
  state => ({
    records: getRecords(state)
  }),
  dispatch => ({
    onDateSelect(date) {
      console.log({date});
    }
  })
)(props => {
  return (
    <Layout>
      <h2>Diary</h2>

      <Row>
        <Col xs={6}>
          <InfiniteCalendar
            width={400}
            height={400}
            selectedDate={Date.now()}
            disabledDays={[0, 6]}
            keyboardSupport={true}
            onSelect={props.onDateSelect}
          />
        </Col>
        <Col xs={6}>
          <h3>Records</h3>
          <ul>
            {props.records.map((one, index) => <li key={index}>{one.exercise.name}</li>)}
          </ul>
        </Col>
      </Row>
    </Layout>
  );
});
