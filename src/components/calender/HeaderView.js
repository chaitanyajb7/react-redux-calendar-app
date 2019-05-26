import React from 'react';
import Moment from 'react-moment';
import { Container } from 'semantic-ui-react';

export const HeaderView = ({ currentMonth, prevMonth, nextMonth }) => (
  <Container>
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>
          <Moment format="MMMM YYYY">{currentMonth}</Moment>
        </span>
      </div>
      <div className="col col-end" onClick={nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  </Container>
);

export default HeaderView;
