export enum Speakers {
  black = 'black',
  orange = 'orange',
  green = 'green',
}

export type SpeakersType = keyof typeof Speakers;
