import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DownArrow from '@material-ui/icons/ArrowDropDownTwoTone';

const TraitBreakout = (props) => {
  const { traits } = props;
  const { traitObj } = props;
  const fillTotal = 238;

  const getRatingBar = (rating) => {
    const getFillAmount = () => {
      // get the percent by comparing the total and amount
      // use that percent from the fill total
      const percent = (rating * 100) / 5;
      let fill = fillTotal * (percent / 100);
      fill = fill > fillTotal ? fillTotal : fill;
      return fill;
    };

    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          id="wholeBar"
          style={{
            flexShrink: 1,
            height: '.5em',
            position: 'relative',
            width: `${fillTotal}px`,
            backgroundColor: 'lightgrey',
            marginTop: '1em',
            borderRadius: '1px',
          }}
        />
        <div
          id="percentBar"
          style={{
            top: '0',
            width: '10px',
            position: 'absolute',
            marginLeft: `${getFillAmount()}px`,
            borderRadius: '1px',
          }}
        >
          <DownArrow />
        </div>
      </div>
    );
  };

  const generateBreakout = traits.map((trait) => (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      key={trait.toString()}
      justifyContent="flex-start"
      style={{
        paddingBottom: '.5em',
        // height: '50px',
      }}
    >
      <div style={{
        height:'1em',
      }}>
        <Typography variant="overline"> {trait}: </Typography>
      </div>
      {getRatingBar(traitObj[trait])}
    </Grid>
  ));

  return <div>{generateBreakout}</div>;
};

export default TraitBreakout;
