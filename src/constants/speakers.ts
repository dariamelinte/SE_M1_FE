import amazon_icon from '@/assets/images/amazon.png';
import amber_icon from '@/assets/images/amber.png';
import fiicode_icon from '@/assets/images/asii-coder.png';
import bit_icon from '@/assets/images/bitdefender.png';
import bytex_icon from '@/assets/images/bytex.png';
import iulius_icon from '@/assets/images/iuliusmall.png';
import profidata_icon from '@/assets/images/profidata.png';
import spectralbit_icon from '@/assets/images/spectralbit.png';
import ziarulDeAsii_icon from '@/assets/images/ziaruldeasii.png';

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

const amazon: SpeakerType = {
  id: '2',
  speakerName: 'Amazon',
  iconTitle: '',
  description: '',
  websiteLink: 'http://romania.amazon.com/#!/',
  icon: amazon_icon,
};

const spectralbit: SpeakerType = {
  id: '3',
  speakerName: 'Spectral-Bit',
  iconTitle: '',
  description: '',
  websiteLink: 'https://spectral-bit.com',
  icon: spectralbit_icon,
};

const bytex: SpeakerType = {
  id: '4',
  speakerName: 'Bytex',
  iconTitle: '',
  description: '',
  websiteLink: 'https://bytex.net',
  icon: bytex_icon,
};

const profidata: SpeakerType = {
  id: '5',
  speakerName: 'Profidata',
  iconTitle: '',
  description: '',
  websiteLink: 'https://www.profidatagroup.com',
  icon: profidata_icon,
};

const amber: SpeakerType = {
  id: '6',
  speakerName: 'Amber',
  iconTitle: '',
  description: '',
  websiteLink: 'https://amberstudio.com',
  icon: amber_icon,
};

const iulius: SpeakerType = {
  id: '7',
  speakerName: 'Iulius Mall',
  iconTitle: '',
  description: '',
  websiteLink: 'https://iasi.iuliusmall.com',
  icon: iulius_icon,
};

const bitdefender: SpeakerType = {
  id: '8',
  speakerName: 'Bitdefender',
  iconTitle: '',
  description: '',
  websiteLink: 'https://www.bitdefender.ro',
  icon: bit_icon,
};

const ziarulDeAsii: SpeakerType = {
  id: '9',
  speakerName: 'Ziarul de Asii',
  iconTitle: '',
  description: '',
  websiteLink: 'https://ziar.asii.ro',
  icon: ziarulDeAsii_icon,
};
export const diamondSpeakers: SpeakerType[] = [amazon, spectralbit];

export const platinumSpeakers: SpeakerType[] = [toBeAnnounced];

export const goldSpeakers: SpeakerType[] = [bytex, profidata];

export const communitySpeakers: SpeakerType[] = [amber, iulius];

export const mediaSpeakers: SpeakerType[] = [ziarulDeAsii];

export const ctfSpeakers: SpeakerType[] = [bitdefender];
