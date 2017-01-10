import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout';
import Record from '../components/Record';
import RecordInput from '../components/RecordInput';
import { getRecords, isDairyAdding } from '../../../selectors';
import { openAdding } from '../../../modules/diary';
import { Col, Row, Button } from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

export default connect(
  state => ({
    records: getRecords(state),
    adding: isDairyAdding(state)
  }),
  dispatch => ({
    onDateSelect(date) {
      console.log({date});
    },
    openAdding() {
      dispatch(openAdding());
    }
  })
)(class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Diary</h1>

        <Row>
          <Col xs={6}>
            <InfiniteCalendar
              width={400}
              height={400}
              selectedDate={Date.now()}
              disabledDays={[0, 6]}
              keyboardSupport={true}
              onSelect={this.props.onDateSelect}
            />
          </Col>
          <Col xs={6}>
            <h3>Records</h3>

            <Button onClick={this.props.openAdding}>Add</Button>

            {this.props.adding &&
              <RecordInput/>
            }

            {this.props.records.map((one, index) => <Record key={index} record={one}/>)}
          </Col>
        </Row>
      </Layout>
    );
  }
});
