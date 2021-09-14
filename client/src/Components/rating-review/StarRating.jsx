import React, { useState, useEffect } from 'react';
import Star from '@material-ui/icons/StarRounded';
import Outline from '@material-ui/icons/StarBorderRounded';
// import '../../../dist/starRating.css';

const Stars = (props) => {
  const [pxWidth, setPxWidth] = useState(0);
  useEffect(() => {
    let size = 0;
    // eslint-disable-next-line react/prop-types
    let num = props.rating; // start with the rating

    if (typeof num === 'number' && num < 5) {
      num *= 24; // convert rating into px size
      while (num >= 24) {
        size += 24; // increase size to meet the whole pixal width
        num -= 24;
      }
      // use the remaining size to get the next quater pixal
      if (num >= 18) {
        size += 15;
      } else if (num >= 12) {
        size += 12;
      } else if (num >= 6) {
        size += 9;
      }
    } else if (num >= 5) {
      size = 120;
    }

    setPxWidth(size);
  }, []);

  return (
    <div id="starRating">
      <div id="under">
        <Outline id="star" />
        <Outline id="star" />
        <Outline id="star" />
        <Outline id="star" />
        <Outline id="star" />
      </div>
      <div
        id="starSubContainer"
        style={{
          width: pxWidth,
        }}
      >
        <div
          id="over"
        >
          <Star id="star" />
          <Star id="star" />
          <Star id="star" />
          <Star id="star" />
          <Star id="star" />
        </div>
      </div>
    </div>
  );
};

export default Stars;
