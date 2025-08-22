export interface StoryboardCard {
  id: string;
  mode: 'new' | 'existing';
  presetTags: string[];
  durationSec: number;
  thumbnailUrl: string;
  scenes: Array<{
    index: number;
    title: string;
    copy: string;
    thumbnailUrl: string;
    camera?: 'pan' | 'dolly' | 'zoom' | 'handheld' | null;
  }>;
  brandFitScore?: number;
}
