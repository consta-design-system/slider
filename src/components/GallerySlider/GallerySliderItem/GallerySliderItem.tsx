import './GallerySliderItem.css';

import { Text } from '@consta/uikit/Text';
import React, { useMemo } from 'react';

import { cn } from '##/utils/bem';

import { GallerySliderItemProps } from '../types';
import { withDefaultGetters } from './helper';

const cnGallerySliderItem = cn('GallerySliderItem');

export const GallerySliderItem = (props: GallerySliderItemProps) => {
  const {
    item,
    getItemDescription,
    getItemImage,
    getItemLabel,
    textPosition = 'none',
    textAlign = 'center',
    className,
    ...otherProps
  } = withDefaultGetters(props);
  const src = getItemImage?.(item);
  const label = getItemLabel?.(item);
  const description = getItemDescription?.(item);

  const content = useMemo(() => {
    if (label && description) return 'full';
    if (label || content) return 'part';
    return 'none';
  }, [label, description]);

  return (
    <div
      className={cnGallerySliderItem({ content, textPosition }, [className])}
      {...otherProps}
    >
      {src && (
        <div className={cnGallerySliderItem('ImageContainer')}>
          <img
            className={cnGallerySliderItem('Image')}
            src={src}
            alt={label ?? ''}
          />
        </div>
      )}
      {textPosition !== 'none' && !!(label || description) && (
        <div className={cnGallerySliderItem('TextBlock', { textPosition })}>
          {label && (
            <Text
              view="primary"
              weight="semibold"
              size="2xl"
              lineHeight="2xs"
              align={textAlign}
            >
              {label}
            </Text>
          )}
          {description && (
            <Text view="secondary" size="m" lineHeight="m" align={textAlign}>
              {description}
            </Text>
          )}
        </div>
      )}
    </div>
  );
};
