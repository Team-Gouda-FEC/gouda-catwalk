import React from 'react';
import Carousel from 'react-grid-carousel';
import RelatedProductCard from './relatedProductCard.jsx';
import AddOutfitCard from './addOutfitCard.jsx';
import OutfitProductCard from './outfitProductCard.jsx';

const RelatedItemsCarousel = (props) => {
  const { showNumCarouselItems, relatedItems, currentItem, updateCurrentItem, currentIndex } = props;
    return (
    <Carousel cols={showNumCarouselItems} rows={1} gap={10}>
      {relatedItems.map((elem, i) => (
        <Carousel.Item key={i}>
          <div style={{ padding: 8 }}>
            <RelatedProductCard
              key={i}
              productId={elem}
              currentItemInfo={currentItem}
              handleUpdateCurrentItem={updateCurrentItem}
              currentIndex={currentIndex}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default RelatedItemsCarousel;