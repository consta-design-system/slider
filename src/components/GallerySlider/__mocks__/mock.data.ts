import { IconComponent } from '@consta/uikit/Icon';
import { IconBag } from '@consta/uikit/IconBag';
import { IconLightningBolt } from '@consta/uikit/IconLightningBolt';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';

export type Item = {
  id: number;
  label: string;
  description: string;
  image: string;
  icon: IconComponent;
};

export const items: Item[] = [
  {
    id: 1,
    label: 'Первый',
    description: 'Это первый слайд',
    image: 'https://4kwallpapers.com/images/walls/thumbs_2t/5894.jpg',
    icon: IconSun,
  },
  {
    id: 2,
    label: 'Второй',
    description: 'Это второй слайд',
    image:
      'https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjAzODh8fGVufDB8fHx8&w=1000&q=80',
    icon: IconMoon,
  },
  {
    id: 3,
    label: 'Третий',
    description: 'Это третий слайд',
    image:
      'https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-2880x1800-1455.jpg',
    icon: IconLightningBolt,
  },
  {
    id: 4,
    label: 'Четвертый',
    description: 'Это четвертый слайд',
    image:
      'https://www.gannett-cdn.com/presto/2019/09/24/USAT/ca65ec63-180e-4edd-b92e-38cd0af795a9-catalina.jpg?crop=1279%2C720%2Cx0%2Cy278&width=1200',
    icon: IconBag,
  },
];
