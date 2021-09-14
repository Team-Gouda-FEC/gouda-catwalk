import React from 'react';

class MoreReviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (event) => {
    console.log('more button clicked');
  }

  render () {
    return (
      <button onClick = {this.handleClick.bind(this)}>
        More Review
      </button>
    )
  }
}

export default MoreReviews;