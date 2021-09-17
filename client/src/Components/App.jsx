import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
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
      currentItemId: '',
    };
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
  }

  componentDidMount() {
    this.getProduct();
    this.getAllProducts();
  }

  getProduct() {
    axios.get('http://localhost:1337/products/', { params: { page: 2, count: 7}})
      .then((response) => {
        this.setState({
          relatedItems: response.data,
        });
      })
      .catch((error) => {
        console.log(response.data.id, error);
      });
  }

  getAllProducts() {
    axios
      .get('http://localhost:1337/products/', {
        params: { page: 1, count: 12 },
      })
      .then((response) => {
        this.setState({
          allItems: response.data,
          currentItemId: response.data[0].id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentItem(itemId) {
    this.setState({
      currentItemId: itemId,
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
        <GridContainer
          handleUpdateCurrentItem={this.updateCurrentItem}
          allItems={this.state.allItems}
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
        <QAWidget />
        <RatingAndReviews productID={'38341'}/>
      </div>
    );
  }
}
