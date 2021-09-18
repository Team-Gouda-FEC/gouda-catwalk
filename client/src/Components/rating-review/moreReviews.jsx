import React from 'react';
import Button from '@material-ui/core/Button';

const MoreReviews = (props) => {
  const handleClick = (event) => {
    console.log(`more button clicked ${event.target}`);
  };

  return (
    <Button variant="outlined" color="primary" onClick={props.setReviewCount}>
      More Review
    </Button>
  );
};

export default MoreReviews;
