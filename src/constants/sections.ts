export enum Sections {
  web = 'web',
  algorithmics = 'algorithmics',
  ctf = 'ctf',
  gamedev = 'gamedev',
}

export type SectionsType = keyof typeof Sections;
