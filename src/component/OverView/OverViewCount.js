import React from 'react';
import CountUp from 'react-countup';

const OverViewCount = ({ text, start, end }) => {
  return (
    <div className="overview_count">
      <h1>{text}</h1>
      <CountUp start={start} end={end} duration={3} />
    </div>
  );
};

export default OverViewCount;
