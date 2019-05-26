import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const MonthView = currentMonth => {
  const days = [];
  let startDate = moment().startOf('week');
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        <Moment format="dddd" add={{ days: i, hours: 12 }}>
          {startDate}
        </Moment>
      </div>
    );
  }
  return <div className="days row">{days}</div>;
};

export default MonthView;
