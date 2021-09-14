import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    // originalHeight: '50%',
    // originalWidth: '50%',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: false,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'left',
      useWindowKeyDown: true,
    };
  };


  _onImageClick (event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({[state]: event.target.value});
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}t.jpg`
      });
    }

    return images;
  }


  render() {
    return (
    <React.Fragment>
    {/* <Carousel
    items={this.images}
    onClick={this._onImageClick.bind(this)}
    onImageLoad={this._onImageLoad}
    onSlide={this._onSlide.bind(this)}
    onScreenChange={this._onScreenChange.bind(this)}
    infinite={this.state.infinite}
    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
    showThumbnails={this.state.showThumbnails}
    showIndex={this.state.showIndex}
    showNav={this.state.showNav}
    isRTL={this.state.isRTL}
    thumbnailPosition={this.state.thumbnailPosition}
    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
    additionalClass="app-image-gallery"
    useWindowKeyDown={this.state.useWindowKeyDown}
     /> */}
     </React.Fragment>
  )}
}