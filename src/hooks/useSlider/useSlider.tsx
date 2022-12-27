import React, { useLayoutEffect, useState } from 'react';
import { TinySliderInstance, TinySliderSettings, tns } from 'tiny-slider';

export type UseSliderProps = Omit<
  TinySliderSettings,
  | 'container'
  | 'controlsContainer'
  | 'autoplayButton'
  | 'navContainer'
  | 'nextButton'
  | 'prevButton'
  | 'navPosition'
  | 'onInit'
> & {
  navPosition?: 'left' | 'bottom';
  container?: React.RefObject<HTMLDivElement>;
  controlsContainer?: React.RefObject<HTMLElement> | false;
  autoplayButton?: React.RefObject<HTMLElement> | false;
  navContainer?: React.RefObject<HTMLElement> | false;
  nextButton?: React.RefObject<HTMLElement> | false;
  prevButton?: React.RefObject<HTMLElement> | false;
  elementsCount?: number;
  onInit?: (instance: TinySliderInstance) => void | false;
};

export const useSlider = (props: UseSliderProps) => {
  const {
    startIndex = 1,
    items,
    gutter = 8,
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
    elementsCount = 0,
  } = props;

  const [slider, setSlider] = useState<ReturnType<typeof tns> | null>(null);

  useLayoutEffect(() => {
    elementsCount &&
      container?.current &&
      setSlider(
        tns({
          navPosition: navPosition === 'left' ? 'top' : navPosition,
          container: container?.current ?? undefined,
          controlsContainer:
            typeof controlsContainer !== 'boolean'
              ? controlsContainer?.current ?? false
              : controlsContainer,
          autoplayButton:
            typeof autoplayButton !== 'boolean'
              ? autoplayButton?.current ?? false
              : autoplayButton,
          navContainer:
            typeof navContainer !== 'boolean'
              ? navContainer?.current ?? false
              : navContainer,
          nextButton:
            typeof nextButton !== 'boolean'
              ? nextButton?.current ?? false
              : nextButton,
          prevButton:
            typeof prevButton !== 'boolean'
              ? prevButton?.current ?? false
              : prevButton,
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
          mode,
          axis,
          navAsThumbnails,
          autoplayDirection,
          autoplayButtonOutput,
          animateIn,
          animateOut,
          animateDelay,
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
          onInit: onInit as TinySliderSettings['onInit'],
          useLocalStorage,
        }),
      );
  }, [
    container?.current,
    elementsCount,
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
  ]);

  return slider;
};
