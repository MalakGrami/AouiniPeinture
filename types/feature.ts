
import { StaticImageData } from 'next/image';

export type Feature = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
};
