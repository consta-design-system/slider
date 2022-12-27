import { useBoolean, useSelect } from '@consta/stand';
import React, { useRef } from 'react';

import { Item, items } from '../__mocks__/mock.data';
import { GallerySlider } from '../GallerySlider';
import { GallerySliderControls } from '../GallerySliderControls';
import { GallerySliderIndicator } from '../GallerySliderIndicator';
import { GallerySliderItem } from '../GallerySliderItem';

const Variants = () => {
  const navPosition = useSelect('navPosition', ['left', 'bottom'], 'bottom');
  const countItems = useSelect('countItems', [1, 2, 3, 4], 1);
  const textPosition = useSelect(
    'textPosition',
    ['none', 'outside', 'inside'],
    'outside',
  );
  const textAlign = useSelect(
    'textAlign',
    ['left', 'center', 'right'],
    'center',
  );
  const isLoading = useBoolean('isLoading', false);
  const indicatorsType = useSelect(
    'indicatorsType',
    ['dots', 'number', 'icon', 'photo'],
    'dots',
  );
  const rewind = useBoolean('rewind', false);

  const getItemIcon = (item: Item) => item.icon;
  const getItemImage = (item: Item) => item.image;

  const navContainerRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <GallerySlider
      elements={items}
      key={`${textPosition}-${textAlign}`}
      renderItem={(item) => (
        <GallerySliderItem
          item={item}
          textAlign={textAlign}
          textPosition={textPosition}
        />
      )}
      navContainer={navContainerRef}
      items={countItems ?? 1}
      loop
      isLoading={isLoading}
      slideBy="page"
      speed={400}
      prevButton={prevRef}
      nextButton={nextRef}
      navAsThumbnails
      mouseDrag
      indicatorsType={indicatorsType}
      lazyload
      rewind={rewind}
      navPosition={navPosition}
    >
      <GallerySliderControls
        mode="extended"
        leftButtonRef={prevRef}
        rightButtonRef={nextRef}
      />
      <GallerySliderIndicator
        ref={navContainerRef}
        elements={items}
        navPosition={navPosition}
        getItemIcon={getItemIcon}
        getItemImage={getItemImage}
        indicatorsType={indicatorsType}
      />
    </GallerySlider>
  );
};

export default Variants;
