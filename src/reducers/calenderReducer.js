import {
  SET_CURRENT_MONTH,
  SET_CURRENT_DATE
} from '../constants/actionTypes.js';

const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
  calenderMap: {
    may: [
      {
        colore: 'red',
        event: 'Interview',
        startDate: new Date(),
        endDate: new Date()
      },
      {
        colore: 'red',
        event: 'Interview',
        startDate: new Date(),
        endDate: new Date()
      }
    ]
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      return Object.assign({}, state, {
        currentMonth: action.currentMonth,
        selectedDate: action.currentDate
      });
    case SET_CURRENT_DATE:
      return Object.assign({}, state, {
        selectedDate: action.selectedDate
      });
    default:
      return state;
  }
};
