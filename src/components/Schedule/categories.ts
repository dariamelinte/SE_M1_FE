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
        title: 'Au început înscrierile!',
        subtitle:
          'Au început înscrierile pentru proba Algoritmică. Înscrierile pentru aceasta arie se vor încheia pe data de 13 mai.',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 1 martie și se termină pe 13 mai.',
        information: '',
      },
      {
        id: 2,
        title: 'Proba 1',
        subtitle: 'Proba 1 va avea loc pe data de 14 mai.',
        information: '',
      },
      {
        id: 3,
        title: 'Proba 2',
        subtitle: 'Proba 2 va avea loc pe data de 15 mai.',
        information: '',
      },
    ],
  },
  // type 1
  {
    News: [
      {
        id: 1,
        title: 'Au început înscrierile!',
        subtitle:
          'Au început înscrierile pentru proba Web&Mobile. Înscrierile pentru aceasta arie se vor încheia pe data de 3 aprilie.',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 1 martie și se termină pe 3 aprilie.',
        information: '',
      },
      {
        id: 2,
        title: 'Etapa de calificare',
        subtitle: 'Etapa de calificare are loc între 1 martie si 15 mai.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa finală',
        subtitle: 'Hackathonul etapei finale va avea loc pe data de 28 mai.',
        information: '',
      },
    ],
  },
  // type 2
  {
    News: [
      {
        id: 1,
        title: 'Au început înscrierile!',
        subtitle:
          'Au început înscrierile pentru proba GameDev. Înscrierile pentru aceasta arie se vor încheia pe data de 3 aprilie.',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 1 martie și se termină pe 3 aprilie.',
        information: '',
      },
      {
        id: 2,
        title: 'Etapa de calificare',
        subtitle: 'Etapa de calificare are loc între 1 martie si 15 mai.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa finală',
        subtitle: 'Hackathonul etapei finale va avea loc pe data de 28 mai.',
        information: '',
      },
    ],
  },
  // type 4
  {
    News: [
      {
        id: 1,
        title: 'Au început înscrierile!',
        subtitle:
          'Au început înscrierile pentru proba Capture the Flag. Înscrierile pentru aceasta arie se vor încheia pe data de 3 aprilie.',
        information: '',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Perioada de înscriere',
        subtitle:
          'Înscrierile încep pe data de 1 martie și se termină pe 3 aprilie.',
        information: '',
      },
      {
        id: 2,
        title: 'Etapa de calificare',
        subtitle: 'Etapa de calificare are loc între 1 martie si 15 mai.',
        information: '',
      },
      {
        id: 3,
        title: 'Etapa finală',
        subtitle: 'Hackathonul etapei finale va avea loc pe data de 28 mai.',
        information: '',
      },
    ],
  },
  // type 5
  {
    News: [
      {
        id: 1,
        title: 'News 1 with one line of text',
        subtitle: 'Simple info with 1 line about news 1.',
        information:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'News 2 with one line of text',
        subtitle: 'Simple info with 1 line about news 2.',
        information:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
    Orar: [
      {
        id: 1,
        title: 'Day 1 : one line of text',
        subtitle: 'Simple info with 1 line about news 1.',
        information:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'Day 2 : one line of text',
        subtitle: 'Simple info with 1 line about news 2.',
        information:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];
