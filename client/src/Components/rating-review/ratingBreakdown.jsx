import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Breakdown = (props) => {
  const { ratings } = props;
  const { reviewCount } = props;
  const fillTotal = 180;
  const breakDown = [5, 4, 3, 2, 1];

  const getRatingBar = (amount) => {
    const getFillAmount = () => {
      // get the percent by comparing the total and amount
      // use that percent from the fill total
      const percent = (amount * 100) / reviewCount;
      let fill = fillTotal * (percent / 100);
      fill = fill > fillTotal ? fillTotal : fill;
      return fill;
    };

    return (
      <div
        style={{
          paddingLeft: '1em',
          position: 'relative',
        }}
      >
        <div
          id="wholeBar"
          style={{
            position: 'relative',
            backgroundColor: 'lightgrey',
            width: `${fillTotal}px`,
            height: '10px',
            flexShrink: 1,
          }}
        />
        <div
          id="percentBar"
          style={{
            position: 'absolute',
            top: '0',
            backgroundColor: 'black',
            width: `${getFillAmount()}px`,
            height: '10px',
          }}
        />
      </div>
    );
  };

  const generateBreakdown = breakDown.map((rating) => (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      key={rating.toString()}
      style={{ paddingBottom: '.5em' }}
    >
      <div>{rating} Star</div>
      {getRatingBar(ratings[rating])}
    </Grid>
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
