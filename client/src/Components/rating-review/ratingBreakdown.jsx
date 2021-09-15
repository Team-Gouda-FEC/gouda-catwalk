import React from 'react';

const Breakdown = (props) => {
  const breakOut = props.ratings;
  const breakDown = Object.keys(breakOut);
  const generateBreakdown = breakDown.map((rating) => (
    <div key={rating.id}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <div> {rating} Star </div>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <div> % of {rating} stars </div>
    </div>
  ));

  return (
    <div>
      {generateBreakdown}
    </div>
  );
};

export default Breakdown;
