import { SlideshowConfig, SlideshowMetadata } from './types';
import { riCtcWebinar2026Config } from '@/slideshows/ri-ctc-webinar-2026/config';

// Register all slideshows here
export const slideshows: SlideshowConfig[] = [
  riCtcWebinar2026Config,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
