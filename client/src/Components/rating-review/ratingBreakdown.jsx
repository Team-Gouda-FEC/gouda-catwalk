import React from "react";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import Bar from './ratingBar.jsx';

const Breakdown = ({ ratings }) => {
  const breakOut = ratings;
  const breakDown = Object.keys(breakOut);
  const generateBreakdown = breakDown.map((rating, index) => (
    <div key={index}>
      <div>
        {rating} Star
      </div>
      <Container
        maxWidth="sm"
        style={{backgroundColor: 'blue'}}
      >

      </Container>
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
