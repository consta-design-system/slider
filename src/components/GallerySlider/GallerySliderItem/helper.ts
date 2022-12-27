import {
  DefaultGallerySliderItem,
  GallerySliderItemProps,
  GallerySliderPropGetItemDescription,
  GallerySliderPropGetItemImage,
  GallerySliderPropGetItemLabel,
} from '../types';

export const defaultGetItemLabel: GallerySliderPropGetItemLabel<
  DefaultGallerySliderItem
> = (item) => item.label;
export const defaultGetItemDescription: GallerySliderPropGetItemDescription<
  DefaultGallerySliderItem
> = (item) => item.description;
export const defaultGetItemImage: GallerySliderPropGetItemImage<
  DefaultGallerySliderItem
> = (item) => item.image ?? '';

export function withDefaultGetters<ITEM>(props: GallerySliderItemProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemDescription: props.getItemDescription || defaultGetItemLabel,
    getItemImage: props.getItemImage || defaultGetItemImage,
  };
}
