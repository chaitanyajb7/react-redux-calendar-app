import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container } from 'semantic-ui-react';
import HeaderView from './HeaderView';
import MonthView from './MonthView';
import CellsView from './CellsView';
import ReminderContainer from '../reminder/ReminderContainer';
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
  eventMap: state.calenderReducer.eventMap
});

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  onDateClick = day => {};


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
        <ReminderContainer
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
            eventMap={this.props.eventMap}
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
