import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 'hello'
    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        This is our homepage now :D and Maria is the Goudest
      </div>
    );
  };
};

