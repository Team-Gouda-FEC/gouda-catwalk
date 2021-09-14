import React from 'react';
// import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import Carousel from './carousel/carousel.jsx';
import QAWidget from './qa/qaWidget.jsx';
import RatingAndReviews from './rating-review/ratingAndReviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
    };
  }

  // getProducts() {
  //   axios.get('/products')
  // }

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
        <Typography
          variant="subtitle1"
          align="center"
        >
          SITE-WIDE ANNOUCEMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT!
        </Typography>
        <GridContainer />
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
        <RatingAndReviews />
        <QAWidget />
      </div>
    );
  }
}
