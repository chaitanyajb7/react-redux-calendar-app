import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container } from 'semantic-ui-react';
import HeaderView from './HeaderView';
import MonthView from './MonthView';
import CellsView from './CellsView';
import ReminderForm from './ReminderForm';
import { setCurrentMonth, setCurrentDate } from '../../actions/calenderActions';

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setCurrentMonth,
      setCurrentDate
    },
    dispatch
  )
});

/*
 * mapStateToProps
 */

const mapStateToProps = state => ({
  currentMonth: state.calenderReducer.currentMonth,
  selectedDate: state.calenderReducer.selectedDate,
  calenderMap: state.calenderReducer.calenderMap
});

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
      color: ''
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.submitReminder = this.submitReminder.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onDateClick = day => {};

  submitReminder = () => {};

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      start: '',
      end: '',
      color: ''
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  nextMonth = e => {
    this.props.actions.setCurrentMonth(
      moment(this.props.currentMonth)
        .clone()
        .add(1, 'month')
    );
  };

  prevMonth = e => {
    this.props.actions.setCurrentMonth(
      moment(this.props.currentMonth)
        .clone()
        .subtract(1, 'month')
    );
  };

  render() {
    return (
      <Container>
        <ReminderForm
          submitReminder={this.submitReminder}
          value={this.state}
          handleInputChange={this.handleInputChange}
        />
        <div className="calendar">
          <HeaderView
            currentMonth={this.props.currentMonth}
            prevMonth={this.prevMonth}
            nextMonth={this.nextMonth}
          />
          <MonthView currentMonth={this.props.currentMonth} />
          <CellsView
            currentMonth={this.props.currentMonth}
            selectedDate={this.props.selectedDate}
            calenderMap={this.calenderMap}
          />
        </div>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarContainer);
