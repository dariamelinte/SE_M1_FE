export enum Banners {
  mainpage = 'mainpage',
  web = 'web',
  algorithmics = 'algorithmics',
  marketing = 'marketing',
  gamedev = 'gamedev',
}

export type BannersType = keyof typeof Banners;
