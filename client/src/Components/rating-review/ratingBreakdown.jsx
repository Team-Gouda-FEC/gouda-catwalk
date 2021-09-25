import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Breakdown = (props) => {
  const { filterBy } = props;
  const { ratings } = props;
  const { reviewCount } = props;
  const fillTotal = 180;
  const breakDown = [5, 4, 3, 2, 1];

  const getRatingBar = (amount, id) => {
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
          id={id}
          style={{
            position: 'relative',
            backgroundColor: 'lightgrey',
            width: `${fillTotal}px`,
            height: '.5em',
          }}
        />
        <div
          id="percentBar"
          style={{
            position: 'absolute',
            top: '0',
            backgroundColor: 'black',
            width: `${getFillAmount()}px`,
            height: '.5em',
          }}
        />
      </div>
    );
  };

  const handleClick = (event) => {
    let value = event.target.id;
    value = filterBy === value ? 0 : value;
    props.setFilterBy(value);
  };

  const generateBreakdown = breakDown.map((rating) => (
    <Grid
      container
      id={rating}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      key={rating.toString()}
      style={{ paddingBottom: '.1em', borderRadius: '5px' }}
      onClick={handleClick}
    >
      <div id={rating}>
        <Typography id={rating} variant="body1">
          {' '}
          {rating} Star{' '}
        </Typography>
      </div>
      {getRatingBar(ratings[rating], rating)}
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
