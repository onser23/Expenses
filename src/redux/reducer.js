const INITIAL_STATE = {
  allExpenses: [
    {
      id: 'e1',
      description: 'Konturr',
      amount: 2.5,
      date: new Date('2021-12-19'),
    },
    {
      id: 'e2',
      description: 'Geyim',
      amount: 40.6,
      date: new Date('2022-01-05'),
    },
    {
      id: 'e3',
      description: 'Mağaza',
      amount: 20.55,
      date: new Date('2021-12-01'),
    },
    {
      id: 'e4',
      description: 'Telefon',
      amount: 409.0,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e5',
      description: 'Kitab',
      amount: 6.5,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e6',
      description: 'Kitab',
      amount: 6.5,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e7',
      description: 'Kitab',
      amount: 6.5,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e8',
      description: 'Kitab',
      amount: 6.5,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e9',
      description: 'Kitab',
      amount: 6.1,
      date: new Date('2022-02-18'),
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ALLEXPENSES':
      return {...state, allExpenses: action.payload};

    default:
      return state;
  }
};
