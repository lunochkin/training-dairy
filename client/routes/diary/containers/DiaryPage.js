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
  constructor(props) {
    super(props);

    this.toggleCalendar = this.toggleCalendar.bind(this);

    this.state = {
      calendarVisible: true
    };
  }

  toggleCalendar() {
    this.setState({
      calendarVisible: !this.state.calendarVisible
    });
  }

  render() {
    return (
      <Layout>
        <h1>Diary</h1>

        <div className="visible-xs-block">
          <Button onClick={this.toggleCalendar}>{this.state.calendarVisible ? 'Close calendar' : 'Show calendar'}</Button>
        </div>

        <Row>
          {this.state.calendarVisible &&
          <Col sm={6} xs={12}>
            <InfiniteCalendar
              showHeader={false}
              selectedDate={this.props.date}
              width={290}
              disabledDays={[0, 6]}
              keyboardSupport={true}
              onSelect={this.props.onDateSelect}
            />
          </Col>
          }
          <Col sm={6} xs={12}>
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
