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
import RelatedItemsCarousel from './related-items-section/relatedItemsCarousel.jsx';
import OutfitsCarousel from './related-items-section/outfitsCarousel.jsx';
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
    const currentOutfitsStyleId = [];
    for (let i = 0; i < this.state.yourOutfits.length; i += 1) {
      if (this.state.yourOutfits[i] !== productId) {
        currentOutfits.push(this.state.yourOutfits[i]);
        currentOutfitsStyleId.push(this.state.yourOutfitsStyleId[i]);
      }
    }

    this.setState({
      yourOutfits: [...currentOutfits],
      yourOutfitsStyleId: [...currentOutfitsStyleId],
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
            <RelatedItemsCarousel
              showNumCarouselItems={this.state.showNumCarouselItems}
              relatedItems={this.state.relatedItems}
              currentItem={this.state.currentItem}
              updateCurrentItem={this.updateCurrentItem}
              >
            </RelatedItemsCarousel>
            <Typography variant="h6" color="primary">
              {' '}
              [ YOUR OUTFITS ]{' '}
            </Typography>
            <OutfitsCarousel
              showNumCarouselItems={this.state.showNumCarouselItems}
              yourOutfits={this.state.yourOutfits}
              currentItemId={this.state.currentItemId}
              handleAddOutfitClick={this.handleAddOutfitClick}
              handleRemoveOutfitClick={this.handleRemoveOutfitClick}
              yourOutfitsStyleId={this.state.yourOutfitsStyleId}
              >
            </OutfitsCarousel>

            <QAWidget productObj={this.state.currentItem} />
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
