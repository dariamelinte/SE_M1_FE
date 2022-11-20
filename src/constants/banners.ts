export enum Banners {
  mainpage = 'mainpage',
  web = 'web',
  algorithmics = 'algorithmics',
  ctf = 'ctf',
  gamedev = 'gamedev',
}

export type BannersType = keyof typeof Banners;
