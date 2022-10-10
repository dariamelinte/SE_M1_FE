import amazon_icon from '@/assets/images/amazon.png';
import amplified_icon from '@/assets/images/amplified.png';
import atek_icon from '@/assets/images/atek.png';
import camline_icon from '@/assets/images/camline.jpeg';
import deloitte_icon from '@/assets/images/deloitte.png';
import frontendro_icon from '@/assets/images/frontendro.png';
import iasipermis_icon from '@/assets/images/iasipermis.jpg';
import levi9_icon from '@/assets/images/levi9.png';
import logdms_icon from '@/assets/images/logdms.png';
import ness_icon from '@/assets/images/ness.png';
import spectralbit_icon from '@/assets/images/spectralbit.png';
import vivafm_icon from '@/assets/images/vivafm.jpeg';

export type SpeakerType = {
  id: string;
  speakerName: string;
  websiteLink: string;
  icon: any;
  iconTitle: string;
  description: string;
};

export const diamondSpeakers: SpeakerType[] = [
  {
    id: '1',
    speakerName: 'Amazon',
    iconTitle: '',
    description: '',
    websiteLink: 'www.aboutamazon.com',
    icon: amazon_icon,
  },
  {
    id: '2',
    speakerName: 'Amplified Software',
    iconTitle: '',
    description: '',
    websiteLink: 'www.amplified.software/',
    icon: amplified_icon,
  },
  {
    id: '3',
    speakerName: 'Atek Software',
    iconTitle: '',
    description: '',
    websiteLink: 'www.atek.ro/',
    icon: atek_icon,
  },
  {
    id: '4',
    speakerName: 'Deloitte Digital',
    iconTitle: '',
    description: '',
    websiteLink: 'iasi.deloittedigital.ro/',
    icon: deloitte_icon,
  },
  {
    id: '5',
    speakerName: 'Levi9',
    iconTitle: '',
    description: '',
    websiteLink: 'www.levi9.com',
    icon: levi9_icon,
  },
  {
    id: '6',
    speakerName: 'Logarithmic Solutions',
    iconTitle: '',
    description: '',
    websiteLink: 'www.logarithmicsolutions.com/',
    icon: logdms_icon,
  },
  {
    id: '7',
    speakerName: 'Spectral-Bit',
    iconTitle: '',
    description: '',
    websiteLink: 'spectral-bit.com',
    icon: spectralbit_icon,
  },
];

export const platinumSpeakers: SpeakerType[] = [
  {
    id: '1',
    speakerName: 'camLine',
    iconTitle: '',
    description: '',
    websiteLink: 'www.camline.com',
    icon: camline_icon,
  },
  {
    id: '2',
    speakerName: 'Ness',
    iconTitle: '',
    description: '',
    websiteLink: 'www.ness.com',
    icon: ness_icon,
  },
];

export const communitySpeakers: SpeakerType[] = [
  {
    id: '1',
    speakerName: 'Frontend.ro',
    iconTitle: '',
    description: '',
    websiteLink: 'frontend.ro',
    icon: frontendro_icon,
  },
];

export const mediaSpeakers: SpeakerType[] = [
  {
    id: '1',
    speakerName: 'Iasi Permis',
    iconTitle: '',
    description: '',
    websiteLink: 'facebook.com/iasipermis',
    icon: iasipermis_icon,
  },
  {
    id: '2',
    speakerName: 'VIVA FM',
    iconTitle: '',
    description: '',
    websiteLink: 'facebook.com/vivafmiasi',
    icon: vivafm_icon,
  },
];
