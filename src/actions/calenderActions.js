import moment from 'moment';
import {
  SET_CURRENT_DATE,
  SET_CURRENT_MONTH
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
