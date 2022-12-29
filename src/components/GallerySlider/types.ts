import { IconComponent } from '@consta/uikit/Icon';
import React from 'react';

import { UseSliderProps } from '##/hooks/useSlider';
import {
  PropsWithHTMLAttributes,
  PropsWithHTMLAttributesAndRef,
} from '##/utils/types/PropsWithHTMLAttributes';

export type DefaultGallerySliderItem = {
  id: string | number;
  label?: string;
  description?: string;
  image?: string;
};

export type GallerySlidePropIndicatorsType =
  | 'dots'
  | 'number'
  | 'icon'
  | 'photo';

export type GallerySliderPropGetItemKey<ITEM> = (item: ITEM) => string | number;
export type GallerySliderPropGetItemLabel<ITEM> = (
  item: ITEM,
) => string | undefined;
export type GallerySliderPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type GallerySliderPropGetItemImage<ITEM> = (item: ITEM) => string;
export type GallerySliderPropGetItemIcon<ITEM> = (item: ITEM) => IconComponent;

export type GallerySliderProps<
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
> = PropsWithHTMLAttributesAndRef<
  {
    elements?: ITEM[];
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
    indicatorsType?: INDICATORS;
    getItemKey?: GallerySliderPropGetItemKey<ITEM>;
    renderItem?: (item: ITEM) => React.ReactElement | null;
  } & UseSliderProps &
    (INDICATORS extends 'photo'
      ? { getItemImage: (item: ITEM) => string }
      : {}) &
    (INDICATORS extends 'icon'
      ? { getItemIcon: (item: ITEM) => IconComponent }
      : {}) &
    (ITEM extends { id: DefaultGallerySliderItem['id'] }
      ? {}
      : { getItemKey: GallerySliderPropGetItemKey<ITEM> }),
  HTMLDivElement
>;

export type GallerySliderComponent = <
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(
  props: GallerySliderProps<INDICATORS, ITEM>,
) => React.ReactElement | null;

export type GallerySliderIndicatorProps<
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
> = PropsWithHTMLAttributesAndRef<
  {
    elements?: ITEM[];
    navPosition?: 'left' | 'bottom';
    indicatorsType?: INDICATORS;
    getItemImage?: (item: ITEM) => string;
    getItemIcon?: (item: ITEM) => IconComponent;
  } & (INDICATORS extends 'photo'
    ? { getItemImage: (item: ITEM) => string }
    : {}) &
    (INDICATORS extends 'icon'
      ? { getItemIcon: (item: ITEM) => IconComponent }
      : {}),
  HTMLDivElement
>;

export type GallerySliderIndicatorComponent = <
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(
  props: GallerySliderIndicatorProps<INDICATORS, ITEM>,
) => React.ReactElement | null;

export type GallerySliderItemProps<ITEM = DefaultGallerySliderItem> =
  PropsWithHTMLAttributes<
    {
      item: ITEM;
      getItemLabel?: GallerySliderPropGetItemLabel<ITEM>;
      getItemDescription?: GallerySliderPropGetItemDescription<ITEM>;
      getItemImage?: (item: ITEM) => string;
      textPosition?: 'inside' | 'outside' | 'none';
      textAlign?: 'left' | 'center' | 'right';
    },
    HTMLDivElement
  >;
