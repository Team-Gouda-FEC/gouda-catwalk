import React from 'react';
// import axios from 'axios';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
// import Stars from './rating-review/StarRating.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import Carousel from './carousel/carousel.jsx';
import QAWidget from './qa/qaWidget.jsx';

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
      <div
        className="App"
        style={{
          maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
        }}
      >
        <NavBar />
        <h3> there is definitely some sort of announcement here! </h3>
        <GridContainer />
        This is our homepage now :D and Maria is the Goudest
        Is this tworking?
        {/* <Stars /> */}
        <Carousel show={4}>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
        </Carousel>
        <QAWidget />
      </div>
    );
  }
}
