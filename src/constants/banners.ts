export enum Banners {
  mainpage = 'mainpage',
  web = 'web',
  algorithmics = 'algorithmics',
  ctf = 'ctf',
  gamedev = 'gamedev',
  profil = 'profil',
}

export type BannersType = keyof typeof Banners;
