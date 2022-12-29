import './GallerySliderIndicator.css';

import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import {
  DefaultGallerySliderItem,
  GallerySlidePropIndicatorsType,
  GallerySliderIndicatorComponent,
  GallerySliderIndicatorProps,
} from '../types';

const cnGallerySliderIndicator = cn('GallerySliderIndicator');

const GallerySliderIndicatorRender = <
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(
  props: GallerySliderIndicatorProps<INDICATORS, ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    elements,
    navPosition = 'bottom',
    indicatorsType = 'dots',
    getItemIcon,
    getItemImage,
  } = props;

  const renderItem = (item: ITEM, index: number) => {
    if (indicatorsType === 'icon') {
      const Icon = getItemIcon?.(item);
      return Icon ? (
        <Icon className={cnGallerySliderIndicator('Icon')} size="xs" />
      ) : null;
    }
    if (indicatorsType === 'photo') {
      const src = getItemImage?.(item);
      return (
        <div className={cnGallerySliderIndicator('Image')}>
          <img alt="" src={src} />
        </div>
      );
    }
    if (indicatorsType === 'number') {
      return (
        <Text
          view="ghost"
          size="xs"
          className={cnGallerySliderIndicator('Text')}
        >
          {index + 1}
        </Text>
      );
    }
    return <div className={cnGallerySliderIndicator('Dot')} />;
  };

  return (
    <div
      ref={ref}
      className={cnGallerySliderIndicator({ navPosition, indicatorsType })}
    >
      {elements?.map((el, index) => (
        <React.Fragment key={cnGallerySliderIndicator(`Item-${index}`)}>
          {renderItem(el, index)}
        </React.Fragment>
      ))}
    </div>
  );
};

export const GallerySliderIndicator = forwardRef(
  GallerySliderIndicatorRender,
) as GallerySliderIndicatorComponent;
