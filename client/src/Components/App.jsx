/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from './product-overview/NavBar.jsx';
import ProductOverviewGrid from './product-overview/GridContainer/ProductOverviewGrid.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import AddOutfitCard from './related-items-section/addOutfitCard.jsx';
import OutfitProductCard from './related-items-section/outfitProductCard.jsx';
import Carousel from './carousel/carousel.jsx';
import RatingAndReviews from './rating-review/ratingAndReviews.jsx';
import QAWidget from './qa/qaWidget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      yourOutfits: [],
      allItems: [],
      currentItemId: '',
      currentItem: '',
      currentStyles: [],
      currentItemInfo: [],
    };
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
    this.handleAddOutfitClick = this.handleAddOutfitClick.bind(this);
    this.handleRemoveOutfitClick = this.handleRemoveOutfitClick.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
    this.getRelatedItems();
  }

  handleAddOutfitClick(productId) {
    const currentOutfits = [];
    for (let i = 0; i < this.state.yourOutfits.length; i++) {
      currentOutfits.push(this.state.yourOutfits[i]);
    }
    if (!this.state.yourOutfits.includes(productId)) {
      console.log('add');
      this.setState({
        yourOutfits: [...currentOutfits],
      });
    }
  }

  handleRemoveOutfitClick(productId) {
    const currentOutfits = [];
    for (let i = 0; i < this.state.yourOutfits.length; i++) {
      if (this.state.yourOutfits[i] !== productId) {
        currentOutfits.push(this.state.yourOutfits[i]);
      }
    }
    this.setState({
      yourOutfits: [...currentOutfits, productId],
    });
  }

  getRelatedItems() {
    axios
      .get('/relatedproducts/', {
        params: { product_id: 38325 },
      })
      .then((response) => {
        this.setState({
          relatedItems: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllProducts() {
    axios
      .get('/products/')
      .then((response) => {
        this.setState({
          allItems: response.data,
          currentItemId: response.data[0].id,
          currentItem: response.data[0],
        });
      })
      .then(() => {
        axios
          .get('/getImage/', {
            params: { product_id: this.state.currentItemId },
          })
          .then((response) => {
            this.setState({
              currentStyles: response.data,
            });
          })
          .catch((err) => {
            console.log('*** get styles in app is not working! ***', err);
          });
      })
      .then(() => {
        axios
          .get('http://localhost:1337/getProductInfo/', {
            params: { product_id: this.state.currentItemId },
          })
          .then((response) => {
            this.setState({
              currentItemInfo: response.data,
            });
          })
          .catch((error) => {
            console.log('*** get info in app is not working! ***', error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentItem(itemId, itemObj) {
    this.setState({
      currentItemId: itemId,
      currentItem: itemObj,
    });
  }

  render() {
    return (
      <div
        className="App"
        style={{
          maxWidth: 1600,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        <NavBar />
        <Typography variant="subtitle1" align="center">
          SITE-WIDE ANNOUCEMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW PRODUCT
          HIGHLIGHT!
        </Typography>
        <ProductOverviewGrid
          handleUpdateCurrentItem={this.updateCurrentItem}
          allItems={this.state.allItems}
          currentItem={this.state.currentItem}
          currentItemId={this.state.currentItemId}
          currentStyles={this.state.currentStyles}
          currentItemInfo={this.state.currentItemInfo}
        />
        <Carousel show={3}>
          {this.state.relatedItems.map((elem, i) => (
            <div key={i}>
              <div style={{ padding: 8 }}>
                <RelatedProductCard key={i} productId={elem} />
              </div>
            </div>
          ))}
        </Carousel>
        <Carousel show={3}>
          <div>
            <div style={{ padding: 8 }}>
              <AddOutfitCard
                productId={this.state.currentItemId}
                onClick={this.handleAddOutfitClick}
              />
            </div>
          </div>
          {this.state.yourOutfits.map((elem, i) => (
            <div key={i}>
              <div style={{ padding: 8 }}>
                <OutfitProductCard
                  key={i}
                  productId={elem}
                  onClick={this.handleRemoveOutfitClick}
                />
              </div>
            </div>
          ))}
        </Carousel>
        <QAWidget productId={this.state.currentItemId} />
        <RatingAndReviews productId={this.state.currentItemId} />
      </div>
    );
  }
}
