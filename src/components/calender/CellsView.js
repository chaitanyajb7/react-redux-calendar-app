import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const CellsView = ({
  currentMonth,
  selectedDate,
  onDateClick,
  calenderMap
}) => {
  const monthStart = moment(currentMonth)
    .clone()
    .startOf('month');
  const monthEnd = moment(monthStart)
    .clone()
    .endOf('month');
  const startDate = moment(monthStart)
    .clone()
    .startOf('week');
  const endDate = moment(monthEnd)
    .clone()
    .endOf('week');

  const dateFormat = 'D';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = moment(day).format(dateFormat);
      const cloneDay = moment(day).format(dateFormat);
      days.push(
        <div
          className={`col cell ${
            !moment(day).isSame(monthStart, 'month')
              ? 'disabled'
              : moment(day).isSame(selectedDate, 'day')
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => onDateClick(moment().parse(cloneDay))}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = moment(day).add(1, 'day');
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default CellsView;
