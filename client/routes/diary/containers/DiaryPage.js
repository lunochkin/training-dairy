import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../../components/Layout';
import Record from '../components/Record';
import RecordInput from '../components/RecordInput';
import { getRecordsByDay, isDairyAdding, getDraftDate } from '../../../selectors';
import { openAdding, setDraftDate } from '../../../modules/diary';
import { Col, Row, Button } from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';


export default connect(
  state => {
    let date = getDraftDate(state);
    return {
      records: getRecordsByDay(state, date),
      date,
      adding: isDairyAdding(state)
    };
  },
  dispatch => ({
    onDateSelect(mDate) {
      dispatch(setDraftDate(mDate.toDate()));
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
              selectedDate={this.props.date}
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
