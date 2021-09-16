import React from 'react';

const Breakdown = (props) => {
  // eslint-disable-next-line react/prop-types
  const { ratings } = props;
  const breakDown = Object.keys(ratings);
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
