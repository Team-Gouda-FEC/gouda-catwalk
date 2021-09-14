import React from 'react';

const AddReview = (props) => {
  const handleClick = (event) => {
    console.log(`eventTarget: ${event.target} props: ${props}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Add A Review
    </button>
  );
};

export default AddReview;
