import React from "react";
import PropTypes from "prop-types";

const Breakdown = ({ ratings }) => {
  const breakOut = ratings;
  const breakDown = Object.keys(breakOut);
  const generateBreakdown = breakDown.map((rating, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <div> {rating} Star </div>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <div> % of {rating} stars </div>
    </div>
  ));

  return <div>{generateBreakdown}</div>;
};

Breakdown.propTypes = {
  ratings: PropTypes.shape({
    5: PropTypes.number,
    4: PropTypes.number,
    3: PropTypes.number,
    2: PropTypes.number,
    1: PropTypes.number,
  }).isRequired,
};

export default Breakdown;
