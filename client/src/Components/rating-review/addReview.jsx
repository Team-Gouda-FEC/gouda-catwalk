import React from 'react';
import Button from '@material-ui/core/Button';

const AddReview = (props) => {
  const handleClick = (event) => {
    console.log(`eventTarget: ${event.target} props: ${props}`);
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleClick}>
      Add A Review
    </Button>
  );
};

export default AddReview;
