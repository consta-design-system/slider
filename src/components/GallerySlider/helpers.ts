import {
  DefaultGallerySliderItem,
  GallerySlidePropIndicatorsType,
  GallerySliderPropGetItemDescription,
  GallerySliderPropGetItemKey,
  GallerySliderPropGetItemLabel,
  GallerySliderProps,
} from './types';

export const defaultGetItemKey: GallerySliderPropGetItemKey<
  DefaultGallerySliderItem
> = (item) => item.id;
export const defaultGetItemLabel: GallerySliderPropGetItemLabel<
  DefaultGallerySliderItem
> = (item) => item.label;
export const defaultGetItemDescription: GallerySliderPropGetItemDescription<
  DefaultGallerySliderItem
> = (item) => item.description;

export function withDefaultGetters<
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(props: GallerySliderProps<INDICATORS, ITEM>) {
  return {
    ...props,
    getItemKey: props.getItemKey || defaultGetItemKey,
  };
}

export function separateProps<
  INDICATORS extends GallerySlidePropIndicatorsType,
  ITEM = DefaultGallerySliderItem,
>(props: GallerySliderProps<INDICATORS, ITEM>) {
  const {
    startIndex,
    items,
    gutter,
    slideBy,
    speed,
    autoHeight,
    autoWidth,
    fixedWidth,
    edgePadding,
    center,
    controls,
    controlsText,
    nav,
    autoplay,
    autoplayHoverPause,
    autoplayResetOnVisibility,
    autoplayText,
    autoplayTimeout,
    touch,
    mouseDrag,
    arrowKeys,
    disable,
    container,
    mode,
    axis,
    controlsContainer,
    navPosition,
    navContainer,
    navAsThumbnails,
    autoplayDirection,
    autoplayButton,
    autoplayButtonOutput,
    animateIn,
    animateOut,
    animateDelay,
    nextButton,
    prevButton,
    loop,
    rewind,
    responsive,
    lazyload,
    lazyloadSelector,
    swipeAngle,
    preventActionWhenRunning,
    preventScrollOnTouch,
    nested,
    freezable,
    nonce,
    onInit,
    useLocalStorage,
    ...otherProps
  } = props;
  return {
    tinyProps: {
      startIndex,
      items,
      gutter,
      slideBy,
      speed,
      autoHeight,
      autoWidth,
      fixedWidth,
      edgePadding,
      center,
      controls,
      controlsText,
      nav,
      autoplay,
      autoplayHoverPause,
      autoplayResetOnVisibility,
      autoplayText,
      autoplayTimeout,
      touch,
      mouseDrag,
      arrowKeys,
      disable,
      container,
      mode,
      axis,
      controlsContainer,
      navPosition,
      navContainer,
      navAsThumbnails,
      autoplayDirection,
      autoplayButton,
      autoplayButtonOutput,
      animateIn,
      animateOut,
      animateDelay,
      nextButton,
      prevButton,
      loop,
      rewind,
      responsive,
      lazyload,
      lazyloadSelector,
      swipeAngle,
      preventActionWhenRunning,
      preventScrollOnTouch,
      nested,
      freezable,
      nonce,
      onInit,
      useLocalStorage,
    },
    componentProps: otherProps,
  };
}
