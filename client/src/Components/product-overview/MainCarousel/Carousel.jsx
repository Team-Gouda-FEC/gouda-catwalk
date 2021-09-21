import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import '../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Carousel(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState([]);

  function onImageClick(index) {
    setCurrentIndex(index);
  }

  function onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  function onSlide(index) {
    setCurrentIndex(index);
  }

  if (images.length !== 0) {
    return (
      <>
        <ImageGallery
          items={images}
          useBrowserFullscreen={false}
          showPlayButton={false}
          thumbnailPosition="left"
          slideOnThumbnailOver={false}
          ref={(i) => setCurrentIndex(i)}
          onClick={(i) => onImageClick(i)}
          onSlide={(i) => {
            onSlide(i);
          }}
        />
      </>
    );
  }
  return <CircularProgress />;
}
// currentItemStyles[currentIndex].photos.map((style) => {
//   console.log('styles in style selector map', style);
//   return (
//     <StyledBadge
//       key={style.name}
//       overlap="circular"
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       badgeContent={4}
//       variant="dot"
//     >
//       <Avatar
//         alt={style.name}
//         src={style.thumbnail_url}
//         sx={{ width: 56, height: 56 }}
//         className={classes.large}
//       />
//     </StyledBadge>
//   );
// })}
