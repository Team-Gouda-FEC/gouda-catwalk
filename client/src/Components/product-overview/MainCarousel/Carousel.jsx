/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
import React from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import '../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: false,
    };
    this.onScreenChange = this.onScreenChange.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onSlide = this.onSlide.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(event) {
    console.debug(
      'clicked on image',
      event.target,
      'at index',
      this.imageGallery.getCurrentIndex()
    );
  }

  onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  onPause(index) {
    console.debug('paused on index', index);
  }

  onSlide(index) {
    console.debug('slid to index', index);
  }

  getStaticImages() {
    const images = [];
    for (let i = 0; i < this.props.currentStyles.results.length; i++) {
      const style = this.props.currentStyles.results[i];
      images.push({
        original: style.photos[0].url,
        thumbnail: style.photos[0].thumbnail_url,
        originalHeight: 500,
        originalWidth: 500,
      });
    }
    return images;
  }

  render() {
    if (this.props.currentStyles.length === 0) {
      return <CircularProgress />;
    }
    return (
      <>
        <ImageGallery
          items={this.getStaticImages()}
          ref={(i) => (this.imageGallery = i)}
          onClick={() => this.onImageClick}
          onImageLoad={this.onImageLoad}
          useBrowserFullscreen={false}
          onSlide={this.onSlide}
          onScreenChange={this.onScreenChange}
          showPlayButton={false}
          thumbnailPosition="left"
          slideOnThumbnailOver={false}
          additionalClass="app-image-gallery"
          onErrorImageURL="https://via.placeholder.com/300x300"
        />
      </>
    );
  }
}
