export enum Sections {
  web = 'web',
  algorithmics = 'algorithmics',
  ctf = 'ctf',
  gamedev = 'gamedev',
}

export const SectionsIds = {
  algorithmics: 0,
  web: 1,
  gamedev: 2,
  ctf: 3,
};

export type SectionsType = keyof typeof Sections;
