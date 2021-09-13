import React from 'react';
// import axios from 'axios';
import Stars from './starRating/starRating.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        This is our homepage now :D and Maria is the Goudest... aaaaaaaahhhhhhhhhhh!!!!!!
        <Stars />
      </div>
    );
  }
}
