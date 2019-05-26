import {
  SET_CURRENT_MONTH,
  SET_CURRENT_DATE,
  SET_EVENT
} from '../constants/actionTypes.js';

const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
  eventMap: {
    4: [
      {
        color: 'red',
        event: 'Interview',
        start: 11,
        end: 19
      },
      {
        color: 'yellow',
        event: 'Min',
        start: 12,
        end: 13
      },
      {
        color: 'green',
        event: 'Test',
        start: 16,
        end: 17
      }
    ]
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      return Object.assign({}, state, {
        currentMonth: action.currentMonth._d,
      });
    case SET_CURRENT_DATE:
      return Object.assign({}, state, {
        selectedDate: action.selectedDate
      });
    case SET_EVENT:
      return Object.assign({}, state, {
        eventMap: action.eventMap
    });
    default:
      return state;
  }
};
