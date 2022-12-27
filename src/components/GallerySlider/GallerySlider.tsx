import './GallerySlider.css';

import { useForkRef } from '@consta/uikit/useForkRef';
import React, { forwardRef, useRef } from 'react';

import { useSlider } from '##/hooks/useSlider';
import { cn } from '##/utils/bem';

import { GallerySliderLoader } from './GallerySliderLoader';
import { separateProps, withDefaultGetters } from './helpers';
import {
  DefaultGallerySliderItem,
  GallerySlidePropIndicatorsType,
  GallerySliderComponent,
  GallerySliderProps,
} from './types';

const cnGallerySlider = cn('GallerySlider');

const GallerySliderRender = <
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(
  props: GallerySliderProps<INDICATORS, ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    tinyProps: { container = containerRef, navPosition, ...tinyProps },
    componentProps,
  } = separateProps(withDefaultGetters(props));
  const {
    elements = [],
    className,
    children,
    indicatorsType,
    getItemKey,
    isLoading,
    renderItem,
    ...otherProps
  } = componentProps;

  useSlider({
    container,
    navPosition,
    elementsCount: elements.length,
    ...tinyProps,
  });

  return (
    <div
      ref={useForkRef([ref])}
      {...otherProps}
      className={cnGallerySlider({ navPosition }, [className])}
    >
      {isLoading && <GallerySliderLoader />}
      {children}
      <div className={cnGallerySlider('Slider')} ref={container}>
        {elements.map((item, index) => (
          <div
            className={cnGallerySlider('Item')}
            key={cnGallerySlider(`Item-${getItemKey?.(item) ?? index}`)}
          >
            {renderItem?.(item) ?? null}
          </div>
        ))}
      </div>
    </div>
  );
};

export const GallerySlider = forwardRef(
  GallerySliderRender,
) as GallerySliderComponent;

export * from './types';
