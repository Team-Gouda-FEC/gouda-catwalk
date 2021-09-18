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
        size += 13.75;
      } else if (num >= 12) {
        size += 12;
      } else if (num >= 6) {
        size += 11;
      }
    } else if (num >= 5) {
      size = 120;
    }

    setPxWidth(size);
  }, [props]);

  return (
    <div
      id="starRating"
      style={{
        width: '120',
        position: 'relative'
      }}
    >
      <div
        id="under"
        style={{
          position: 'relative',
          color: 'lightcoral'
        }}
      >
        <Outline id="star 1" />
        <Outline id="star 2" />
        <Outline id="star 3" />
        <Outline id="star 4" />
        <Outline id="star 5" />
      </div>
      <div
        id="starSubContainer"
        style={{
          width: pxWidth,
          position: 'absolute',
          top: 0,
          height: 20,
          overflow: 'hidden'
        }}
      >
        <div
          id="over"
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'lightcoral'
          }}
        >
          <Star id="star 1" />
          <Star id="star 2" />
          <Star id="star 3" />
          <Star id="star 4" />
          <Star id="star 5" />
        </div>
      </div>
    </div>
  );
};

export default Stars;
