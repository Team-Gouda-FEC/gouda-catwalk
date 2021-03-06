import Rating from '@material-ui/lab/Rating';
import React, { useState, useEffect } from 'react';

const Stars = (props) => {
  const { rating } = props;
  return (
    <Rating
      name="read-only"
      precision={0.25}
      value={rating}
      readOnly
      style={{ color: '#f74885' }}
    />
  );
};

export default Stars;
// import React, { useState, useEffect } from 'react';
// import Star from '@material-ui/icons/StarRounded';
// import Outline from '@material-ui/icons/StarBorderRounded';
// import Grid from '@material-ui/core/Grid';
// // import '../../../dist/starRating.css';

// const Stars = (props) => {
//   const [pxWidth, setPxWidth] = useState(0);

//   useEffect(() => {
//     let size = 0;
//     // eslint-disable-next-line react/prop-types
//     let num = props.rating; // start with the rating

//     if (typeof num === 'number' && num < 5) {
//       num *= 24; // convert rating into px size
//       while (num >= 24) {
//         size += 24; // increase size to meet the whole pixal width
//         num -= 24;
//       }
//       // use the remaining size to get the next quater pixal
//       if (num >= 18) {
//         size += 15;
//       } else if (num >= 12) {
//         size += 12;
//       } else if (num >= 6) {
//         size += 9;
//       }
//     } else if (num >= 5) {
//       size = 120;
//     }

//     setPxWidth(size);
//   }, [props]);

//   return (
//     <div
//       id="starRating"
//       style={{
//         boxSizing: 'border-box',
//         width: '120px',
//         position: 'relative',
//       }}
//     >
//       <div
//         id="under"
//         style={{
//           boxSizing: 'border-box',
//           position: 'relative',
//           color: 'darkgrey',
//         }}
//       >
//         <Outline id="star 1" />
//         <Outline id="star 2" />
//         <Outline id="star 3" />
//         <Outline id="star 4" />
//         <Outline id="star 5" />
//       </div>
//       <div
//         id="starSubContainer"
//         style={{
//           boxSizing: 'border-box',
//           width: `${pxWidth}px`,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           height: 20,
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           id="over"
//           style={{
//             boxSizing: 'border-box',
//             overflow: 'hidden',
//             whiteSpace: 'nowrap',
//             color: 'lightcoral',
//           }}
//         >
//           <Star key="star 1" />
//           <Star key="star 2" />
//           <Star key="star 3" />
//           <Star key="star 4" />
//           <Star key="star 5" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stars;
