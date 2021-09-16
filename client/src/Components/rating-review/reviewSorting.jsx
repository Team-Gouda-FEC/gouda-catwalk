/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const ReviewSort = (props) => {
  const getSortType = () => {
    switch (props.sortType) {
      case 'relevent':
        return 'relevance';
      default:
        return 'none';
    }
  };

  return (
    <div>
      {props.count} reviews, sorted by <u>{getSortType()}</u>
    </div>
  );
};

export default ReviewSort;
