import moment from 'moment';
import {reset} from 'redux-form';
import {
  SET_CURRENT_DATE,
  SET_CURRENT_MONTH,
  SET_EVENT
} from '../constants/actionTypes.js';

export function setCurrentMonth(date) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CURRENT_MONTH,
      currentMonth: date,
      currentDate: moment(date)
        .clone()
        .startOf('month')
    });
  };
}
export function setCurrentDate(date) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CURRENT_DATE,
      selectedDate: date
    });
  };
}

export function addReminder(event,month) {
  return (dispatch, getState) => {
    dispatch(reset('reminderForm'));
    let eventMap = Object.assign({},getState().calenderReducer.eventMap);
    if(!eventMap[getState().calenderReducer.currentMonth.getMonth()]){
     eventMap[getState().calenderReducer.currentMonth.getMonth()]=[];
    }
    eventMap[getState().calenderReducer.currentMonth.getMonth()].push(event);
    dispatch({
      type: SET_EVENT,
      eventMap: eventMap
    });
  };
}
