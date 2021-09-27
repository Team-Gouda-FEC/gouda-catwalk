import React from 'react';
import Carousel from 'react-grid-carousel';
import AddOutfitCard from './addOutfitCard.jsx';
import OutfitProductCard from './outfitProductCard.jsx';

const OutfitsCarousel = (props) => {
  const { showNumCarouselItems, yourOutfits, currentItemId, handleAddOutfitClick, handleRemoveOutfitClick, yourOutfitsStyleId } = props;
    return (
      <Carousel cols={showNumCarouselItems} rows={1} gap={10}>
      <Carousel.Item>
        <div style={{ padding: 8 }}>
          <AddOutfitCard
            productId={currentItemId}
            handleAddOutfitClick={handleAddOutfitClick}
          />
        </div>
      </Carousel.Item>
      {yourOutfits.map((elem, i) => (
        <Carousel.Item key={i}>
          <div style={{ padding: 8 }}>
            <OutfitProductCard
              key={i}
              productId={elem}
              handleRemoveOutfitClick={handleRemoveOutfitClick}
              yourOutfitsStyleId={yourOutfitsStyleId[i]}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default OutfitsCarousel;