/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import Typography from '@material-ui/core/Typography';

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: this.props.currentItem,
      products: this.props.allItems,
      currentItemId: this.props.currentItemId,
    };
  }

  componentDidMount() {
    this.getStyles();
  }

  getStyles() {
    axios
      .get('/getThumbnail', {
        params: { product_id: this.state.currentItemId },
      })
      .then((response) => {
        console.log('RESPONSE DATA FROM GET THUMBNAILS', response);
        this.setState({
          products: response.data,
        });
      })
      .catch((err) => {
        console.log('*** this is not working! ***', err);
      });
  }

  render() {
    // return <ImageGallery items={this.state.products} />;
    return <Typography>{this.state.currentItem.name}</Typography>;
  }
}
