import React from 'react';

const Breakdown = (props) => {

  console.log(props);

  const generateBreakdown = Object.keys(props.ratings).map((rating)=>
    <div>
      <div>
        {rating} Star
      </div>
      <div>
        % of {rating} stars
      </div>
    </div>
  );

  return(
    <div>
      {generateBreakdown}
    </div>
  )
}


export default Breakdown;