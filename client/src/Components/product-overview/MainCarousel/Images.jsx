/* eslint-disable no-plusplus */
import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
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

const PREFIX_URL =
  'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: false,
    };
    this.images = [
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
      },
    ].concat(this.getStaticImages());
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
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
        originalHeight: 400,
        originalWidth: 400,
        thumbnailHeight: 100,
        thumbnailWidth: 100,
      });
    }
    return images;
  }

  render() {
    return (
      <>
      {console.log('props on new Img Gallery Comp: ', this.props)}
        <ImageGallery
          items={this.images}
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
