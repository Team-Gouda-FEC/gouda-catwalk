import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import NavBar from './product-overview/NavBar.jsx';
import ProductOverviewGrid from './product-overview/GridContainer/ProductOverviewGrid.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import AddOutfitCard from './related-items-section/addOutfitCard.jsx';
import Carousel from './carousel/carousel.jsx';
import RatingAndReviews from './rating-review/ratingAndReviews.jsx';
import QAWidget from './qa/qaWidget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      allItems: [],
      currentItem: '',
    };
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get('/products')
      .then((response) => {
        this.setState({
          relatedItems: response.data,
          allItems: response.data,
          currentItem: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentItem(itemId) {
    this.setState({
      currentItem: itemId,
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
        <Typography variant="subtitle1" align="center">
          SITE-WIDE ANNOUCEMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT!
        </Typography>
        <ProductOverviewGrid
          handleUpdateCurrentItem={this.updateCurrentItem}
          allItems={this.state.allItems}
          currentItem={this.state.currentItem}
        />
        <Carousel show={4}>
        {this.state.relatedItems.map((elem, i) => {
          return (
            <div key={i}>
              <div style={{ padding: 8 }}>
                <RelatedProductCard key={i} product={elem} />
              </div>
            </div>
          )
        })}
        </Carousel>
        <Carousel show={4}>
        {this.state.relatedItems.map((elem, i) => {
          return (
            <div key={i}>
              <div style={{ padding: 8 }}>
                <AddOutfitCard key={i} product={elem} />
              </div>
            </div>
          )
        })}
        </Carousel>
        <RatingAndReviews />
        <QAWidget />
      </div>
    );
  }
}
