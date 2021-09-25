/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Marquee from 'react-fast-marquee';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from './product-overview/NavBar.jsx';
import ProductOverviewGrid from './product-overview/GridContainer/ProductOverviewGrid.jsx';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import AddOutfitCard from './related-items-section/addOutfitCard.jsx';
import OutfitProductCard from './related-items-section/outfitProductCard.jsx';
import PlaceHolder1 from './related-items-section/placeHolder1.jsx';
import Carousel from './carousel/carousel.jsx';
import RatingAndReviews from './rating-review/ratingAndReviews.jsx';
import QAWidget from './qa/qaWidget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNumCarouselItems: 4,
      relatedItems: [],
      yourOutfits: [],
      yourOutfitsStyleId: [],
      currentItemId: '',
      currentItem: '',
      currentIndex: 0,
      productRating: 0,
      productInfo: '',
      currentStylesObj: {},
    };
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
    this.handleAddOutfitClick = this.handleAddOutfitClick.bind(this);
    this.handleRemoveOutfitClick = this.handleRemoveOutfitClick.bind(this);
    this.handleProductRatingChange = this.handleProductRatingChange.bind(this);
    this.updateCurrentIndex = this.updateCurrentIndex.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  handleAddOutfitClick(productId) {
    const currentOutfits = [];
    for (let i = 0; i < this.state.yourOutfits.length; i += 1) {
      currentOutfits.push(this.state.yourOutfits[i]);
    }
    if (!this.state.yourOutfits.includes(productId)) {
      this.setState({
        yourOutfits: [productId, ...currentOutfits],
        yourOutfitsStyleId: [
          this.state.currentIndex,
          ...this.state.yourOutfitsStyleId,
        ],
      });
    }
  }

  handleProductRatingChange(num) {
    this.setState({ productRating: num });
  }

  handleRemoveOutfitClick(productId) {
    const currentOutfits = [];
    for (let i = 0; i < this.state.yourOutfits.length; i += 1) {
      if (this.state.yourOutfits[i] !== productId) {
        currentOutfits.push(this.state.yourOutfits[i]);
      }
    }
    this.setState({
      yourOutfits: [...currentOutfits],
    });
  }

  getAllProducts() {
    axios
      .get('/products/')
      .then((response) => {
        this.setState(
          {
            currentItemId: response.data[0].id,
            currentItem: response.data[0],
          },
          () => {
            this.axiosAll();
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  axiosAll() {
    axios
      .get('/relatedproducts/', {
        params: { product_id: this.state.currentItemId },
      })
      .then((response) => {
        this.setState({
          relatedItems: response.data,
        });
        return axios.get('/getProductInfo/', {
          params: { product_id: this.state.currentItemId },
        });
      })
      .then((response) => {
        this.setState({
          productInfo: response.data,
        });
        return axios.get('/getImage/', {
          params: { product_id: this.state.currentItemId },
        });
      })
      .then((response) => {
        this.setState({
          currentStylesObj: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  }

  // getRelated() {
  //   axios
  //     .get('/relatedproducts/', {
  //       params: { product_id: this.state.currentItemId },
  //     })
  //     .then((response) => {
  //       this.setState({
  //         relatedItems: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  updateCurrentItem(itemId, itemObj) {
    this.setState({
      currentItemId: itemId,
      currentItem: itemObj,
      currentIndex: 0,
    });
    this.axiosAll();
  }

  updateCurrentIndex(index) {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    if (this.state.currentItem !== '') {
      return (
        <>
          <NavBar />
          <div>
            <br />
            <Marquee speed={15}>
              <Typography variant="h6" color="secondary">
                SITE-WIDE ANNOUCEMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW
                PRODUCT HIGHLIGHT!
              </Typography>
            </Marquee>
            <br />
            <ProductOverviewGrid
              updateCurrentIndex={this.updateCurrentIndex}
              currentItem={this.state.currentItem}
              currentItemId={this.state.currentItemId}
              productRating={this.state.productRating}
              currentItemInfo={this.state.productInfo}
              currentStylesObj={this.state.currentStylesObj}
            />
            <Typography variant="h6" color="primary">
              {' '}
              [ RELATED PRODUCTS ]{' '}
            </Typography>
            <Carousel show={this.state.showNumCarouselItems}>
              {this.state.relatedItems.map((elem, i) => (
                <div key={i}>
                  <div style={{ padding: 8 }}>
                    <RelatedProductCard
                      key={i}
                      productId={elem}
                      currentItemInfo={this.state.currentItem}
                      handleUpdateCurrentItem={this.updateCurrentItem}
                      currentIndex={this.state.currentIndex}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
            <Typography variant="h6" color="primary">
              {' '}
              [ YOUR OUTFITS ]{' '}
            </Typography>
            <Carousel show={this.state.showNumCarouselItems}>
              <div>
                <div style={{ padding: 8 }}>
                  <AddOutfitCard
                    productId={this.state.currentItemId}
                    handleAddOutfitClick={this.handleAddOutfitClick}
                  />
                </div>
              </div>
              {this.state.yourOutfits.map((elem, i) => (
                <div key={i}>
                  <div style={{ padding: 8 }}>
                    <OutfitProductCard
                      key={i}
                      productId={elem}
                      handleRemoveOutfitClick={this.handleRemoveOutfitClick}
                      yourOutfitsStyleId={this.state.yourOutfitsStyleId[i]}
                    />
                  </div>
                </div>
              ))}
              <PlaceHolder1 />
              <PlaceHolder1 />
              <PlaceHolder1 />
            </Carousel>
            <QAWidget productId={38326} />
            <section id="ratings">
              <RatingAndReviews
                id="reviews"
                productId={this.state.currentItemId}
                handleProductRatingChange={this.handleProductRatingChange}
              />
            </section>
          </div>
        </>
      );
    }
    return <CircularProgress />;
  }
}
