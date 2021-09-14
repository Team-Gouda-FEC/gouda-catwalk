import React from 'react';

class AddReview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (event) => {
    console.log('sort button clicked');
  }

  render () {
    return (
      <button onClick = {this.handleClick.bind(this)}>
        Add A Review
      </button>
    )
  }
}

export default AddReview;