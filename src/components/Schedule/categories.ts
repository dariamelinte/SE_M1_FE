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
          'Pe data de 28 noiembrie încep înscrierile pentru Aria de Algoritmică!',
        information: '',
      },
      {
        id: 2,
        title: 'Perioada de înscriere',
        subtitle:
          'Perioada de înscriere pentru Aria de Algoritmică a fost prelungită până la data de 15 martie 2023!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 2̶0̶ ̶f̶e̶b̶r̶u̶a̶r̶i̶e̶ 15 martie 2023.',
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
      {
        id: 2,
        title: 'Perioada de înscriere',
        subtitle:
          'Perioada de înscriere pentru Aria de Web&Mobile a fost încheiată!',
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
      {
        id: 2,
        title: 'Perioada de înscriere',
        subtitle:
          'Perioada de înscriere pentru Aria de Game Development a fost încheiată!',
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
      {
        id: 2,
        title: 'Perioada de înscriere',
        subtitle:
          'Perioada de înscriere pentru Aria de Capture the Flag a fost prelungită până la data de 15 martie 2023!',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 28 noiembrie 2022 și se termină pe 2̶0̶ ̶f̶e̶b̶r̶u̶a̶r̶i̶e̶ 15 martie 2023.',
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
