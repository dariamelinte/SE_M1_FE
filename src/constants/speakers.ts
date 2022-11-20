import fiicode_icon from '@/assets/images/asii-coder.png';

export type SpeakerType = {
  id: string;
  speakerName: string;
  websiteLink: string;
  icon: any;
  iconTitle: string;
  description: string;
};

const toBeAnnounced: SpeakerType = {
  id: '1',
  speakerName: 'Sponsorii vor fi anuntati in curand.',
  iconTitle: '',
  description: '',
  websiteLink: '',
  icon: fiicode_icon,
};

export const diamondSpeakers: SpeakerType[] = [toBeAnnounced];

export const platinumSpeakers: SpeakerType[] = [toBeAnnounced];

export const communitySpeakers: SpeakerType[] = [toBeAnnounced];

export const mediaSpeakers: SpeakerType[] = [toBeAnnounced];
