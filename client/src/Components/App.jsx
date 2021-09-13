import React from 'react';
import axios from 'axios';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
import Stars from './starRating/starRating.jsx';

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
        <NavBar />
        <h3> there is definitely some sort of announcement here! </h3>
        <GridContainer />
        This is our homepage now :D and Maria is the Goudest
        <Stars/>
      </div>
    );
  };
};

