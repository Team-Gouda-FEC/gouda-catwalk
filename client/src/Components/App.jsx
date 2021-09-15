import React from 'react';
import axios from 'axios';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
import Stars from './rating-review/StarRating.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import Carousel from './carousel/carousel.jsx';
import RatingAndReviews from './rating-review/ratingAndReviews.jsx';
import QAWidget from './qa/qaWidget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('http://localhost:1337/products/', { params: { page: 2, count: 7}})
      .then((response) => {
        console.log(response);
        const arr = response.data;
        this.setState({
          relatedItems: [...arr],
        });
      }).catch((error) => {
        console.log(response.data.id, error);
      });
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
        <Stars rating={3.5} />
        <Carousel show={3}>
        {this.state.relatedItems.map((elem, i) => {
          return (
            <div key={i}>
              <div style={{ padding: 8 }}>
                <RelatedProductCard key={i} product={elem} />
              </div>
            </div>
          )
        })}
          {/* <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div> */}
        </Carousel>
        <RatingAndReviews />
        <QAWidget />
      </div>
    );
  }
}
