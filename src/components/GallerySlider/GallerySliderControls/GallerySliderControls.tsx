import './GallerySliderControls.css';

import { Button } from '@consta/uikit/Button';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { IconExpand } from '@consta/uikit/IconExpand';
import React from 'react';

import { cn } from '##/utils/bem';

const cnGallerySliderControls = cn('GallerySliderControls');

type Props = {
  mode?: 'default' | 'extended';
  onFullClick?: React.MouseEventHandler;
  rightButtonRef?: React.Ref<HTMLButtonElement>;
  leftButtonRef?: React.Ref<HTMLButtonElement>;
};

export const GallerySliderControls = (props: Props) => {
  const {
    mode = 'default',
    onFullClick,
    rightButtonRef,
    leftButtonRef,
  } = props;
  return (
    <>
      {mode === 'extended' && (
        <Button
          className={cnGallerySliderControls('Full')}
          onlyIcon
          size="xs"
          view="clear"
          form="round"
          iconLeft={IconExpand}
          onClick={onFullClick}
        />
      )}
      <Button
        onlyIcon
        className={cnGallerySliderControls('Left')}
        size="xs"
        view="clear"
        form="round"
        iconLeft={IconArrowLeft}
        ref={leftButtonRef}
      />
      <Button
        onlyIcon
        size="xs"
        className={cnGallerySliderControls('Right')}
        view="clear"
        form="round"
        iconLeft={IconArrowRight}
        ref={rightButtonRef}
      />
    </>
  );
};
