export enum Sections {
  web = 'web',
  algorithmics = 'algorithmics',
  marketing = 'marketing',
  gamedev = 'gamedev',
}

export type SectionsType = keyof typeof Sections;
