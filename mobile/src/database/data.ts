export interface PlanetsParams {
  name: string,
};

interface ColorsParams {
  first: string, 
  second: string,
};

export interface CategoriesParams {
  title: string,
  colors: ColorsParams,
};

interface HomeDataParams {
  planets: Array<PlanetsParams>,
  categories: Array<CategoriesParams>,
};

export const HomeData: HomeDataParams = {
  planets: [
    { name: 'Sol' },
    { name: 'Mercúrio' },  
    { name: 'Vênus' },
    { name: 'Terra' },
    { name: 'Marte' },
    { name: 'Júpiter' },
    { name: 'Saturno' },
    { name: 'Urânio' },
    { name: 'Netuno' },
    { name: 'Plutão' },
  ],
  categories: [
    {
      title: 'Planetas',
      colors: {
        first: '#5935FF', 
        second: '#47408E',
      },
    },
    {
      title: 'Asteróides',
      colors: {
        first: '#FF6CD9', 
        second: '#FF2184',
      },
    },
    {
      title: 'Estrelas',
      colors: {
        first: '#01D4E4', 
        second: '#009DE0',
      },
    },
    {
      title: 'Galáxias',
      colors: {
        first: '#F9C270', 
        second: '#FFAA2B',
      },
    }
  ]
};
