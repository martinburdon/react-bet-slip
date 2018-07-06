import React from 'react';

export default ({ active, addToSlip, className, event, name, odds }) => (
  <div onClick={addToSlip} className={className}>
    <p className="name">{name}</p>
    <p className="event">{event}</p>
    <p className="odds">{odds.numerator}/{odds.denominator}</p>
  </div>
);
