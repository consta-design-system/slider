import './GallerySliderLoader.css';

import { Loader } from '@consta/uikit/Loader';
import React from 'react';

import { cn } from '##/utils/bem';

const cnGallerySliderLoader = cn('GallerySliderLoader');

export const GallerySliderLoader = () => {
  return (
    <div className={cnGallerySliderLoader()}>
      <Loader size="m" />
    </div>
  );
};
