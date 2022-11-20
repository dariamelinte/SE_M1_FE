export type InfoType = {
  id: number;
  title: string;
  subtitle: string;
  information: string;
};

export type CategoryType = {
  News: InfoType[];
  Orar: InfoType[];
};

export const categories: CategoryType[] = [
  // type 0
  {
    News: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Pe data de 28 noiembrie incep inscrierile pentru Aria de Algoritmica!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 20 februarie 2023.',
        information: '',
      },
      {
        id: 2,
        title: 'Prima Etapa',
        subtitle: 'Prima etapa va avea loc pe 25 martie 2023.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa Finala',
        subtitle: 'Etapa finala va avea loc in perioada 21-23 aprilie 2023.',
        information: '',
      },
    ],
  },
  // type 1
  {
    News: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Pe data de 28 noiembrie incep inscrierile pentru Aria de Web&Mobile!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 20 februarie 2023.',
        information: '',
      },
      {
        id: 2,
        title: 'Etapa de calificare',
        subtitle:
          'Etapa de calificare are loc între 21 februarie 2023 si 25 martie 2023.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa finală',
        subtitle:
          'Hackathonul etapei finale va avea loc in perioada de 21-23 aprilie 2023.',
        information: '',
      },
    ],
  },
  // type 2
  {
    News: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Pe data de 28 noiembrie incep inscrierile pentru Aria de Game Development!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 20 februarie 2023.',
        information: '',
      },
      {
        id: 2,
        title: 'Etapa de calificare',
        subtitle:
          'Etapa de calificare are loc între 21 februarie 2023 si 25 martie 2023.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa finală',
        subtitle:
          'Hackathonul etapei finale va avea loc in perioada de 21-23 aprilie 2023.',
        information: '',
      },
    ],
  },
  // type 4
  {
    News: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Pe data de 28 noiembrie incep inscrierile pentru Aria de Capture the Flag!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 20 februarie 2023.',
        information: '',
      },
      {
        id: 2,
        title: 'Prima Etapa',
        subtitle: 'Prima etapa va avea loc pe 25 martie 2023.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa Finala',
        subtitle: 'Etapa finala va avea loc in perioada 21-23 aprilie 2023.',
        information: '',
      },
    ],
  },
];
