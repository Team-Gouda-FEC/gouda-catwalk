import React from 'react';

const MoreReviews = () => {
  const handleClick = (event) => {
    console.log(`more button clicked ${event.target}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      More Review
    </button>
  );
};

export default MoreReviews;
