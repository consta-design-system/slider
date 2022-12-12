import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Slider',
  id: 'slider',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Отдельные компоненты',
  image,
  description: 'Библиотека реализующая слайдер на основе tiny-slider.',
  repositoryUrl: 'https://github.com/consta-design-system/slider',
});
