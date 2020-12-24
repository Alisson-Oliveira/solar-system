export interface PlanetParams {
  id: number,
  name: string,
  image: string,
  shortText: string,
  introduction: string,
  features: PlanetFeaturesParams,
};

interface PlanetFeaturesParams {
  radius: string,
  mass: string,
};

interface ColorsParams {
  first: string, 
  second: string,
};

export interface CategoriesParams {
  title: string,
  colors: ColorsParams,
};

interface DatasetParams {
  planets: Array<PlanetParams>,
  categories: Array<CategoriesParams>,
};

export const dataset: DatasetParams = {
  planets: [
    {
      id: 0,
      name: 'Sol',
      image: 'Sun',
      shortText: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar...',
      introduction: 'O Sol (do latim sol, solis) é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior que a da Terra, e um volume 1 300 000 vezes maior que o do nosso planeta. A distância da Terra ao Sol é cerca de 150 milhões de quilômetros ou 1 unidade astronômica (UA). Esta distância varia com o ano de um mínimo de 147,1 milhões de quilômetros (0,9833 UA) no perélio (ou periélio) a um máximo de 152,1 milhões de quilômetros (1,017 UA) no afélio, em torno de 4 de julho. A luz solar demora aproximadamente 8 minutos e 18 segundos para chegar à Terra. Energia do Sol na forma de luz solar é armazenada em glicose por organismos vivos através da fotossíntese, processo do qual, direta ou indiretamente, dependem todos os seres vivos que habitam nosso planeta. A energia solar também é responsável pelos fenômenos meteorológicos e o clima na Terra.',
      features: {
        radius: '696.340 km',
        mass: '1,989 * 10^30 kg',
      },
    },
    {
      id: 1,
      name: 'Mercúrio',
      image: 'Mercury',
      shortText: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres...',
      introduction: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein. A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.',
      features: {
        radius: '2.439,7 km',
        mass: '3,285 * 10^23 kg (0,055 M⊕)',
      },
    },
    {
      id: 2,
      name: 'Vênus',
      image: 'Venus',
      shortText: 'Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol...',
      introduction: `Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas. Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor.`,
      features: {
        radius: '6.051,8 km',
        mass: '4,867 × 10^24 kg (0,815 M⊕)',
      },
    },
    {
      id: 3,
      name: 'Terra',
      image: 'Earth',
      shortText: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar...',
      introduction: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.',
      features: {
        radius: '6.371 km',
        mass: '5,972 * 10^24 kg',
      },
    },
    {
      id: 4,
      name: 'Marte',
      image: 'Mars',
      shortText: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano...',
      introduction: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada. Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano. Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto. Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano.',
      features: {
        radius: '3.389,5 km',
        mass: '6,39 * 10^23 kg (0,107 M⊕)',
      },
    },
    {
      id: 5,
      name: 'Júpiter',
      image: 'Jupiter',
      shortText: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol...',
      introduction: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida Júpiter é composto principalmente de hidrogênio, sendo um quarto de sua massa composta de hélio, embora o hélio corresponda a apenas um décimo do número total de moléculas. O planeta também pode possuir um núcleo rochoso composto por elementos mais pesados, embora, como os outros planetas gigantes, não possua uma superfície sólida bem definida',
      features: {
        radius: '69.911 km',
        mass: '1,898 * 10^27 kg (317,8 M⊕)',
      },
    },
    {
      id: 6,
      name: 'Saturno',
      image: 'Saturn',
      shortText: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter...',
      introduction: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas. Possui um pequeno núcleo rochoso, circundado por uma espessa camada de hidrogênio metálico e hélio. A sua atmosfera, também composta principalmente de hidrogênio, apresenta faixas com fortes ventos, cuja energia provém tanto do calor recebido do Sol quanto da energia irradiada de seu centro. Entretanto, estas bandas possuem aspecto pouco proeminente, com coloração que varia do marrom ao amarelado, devido à espessa névoa que envolve o planeta, além das camadas de nuvens. Sazonalmente surgem grandes sistemas de tempestades, além de vórtices permanentes existentes nos polos.',
      features: {
        radius: '58.232 km',
        mass: '5,683 * 10^26 kg (95,16 M⊕)',
      },
    },
    {
      id: 7,
      name: 'Urânio',
      image: 'Uranus',
      shortText: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar...',
      introduction: 'Urano (Úrano em Portugal) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos (Saturno) e o avô de Zeus (Júpiter). Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita. William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.',
      features: {
        radius: '25.362 km',
        mass: '8,681 * 10^25 kg (14,54 M⊕)',
      },
    },
    {
      id: 8,
      name: 'Netuno',
      image: 'Neptune',
      shortText: 'Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão...',
      introduction: 'Netuno ou Neptuno (AO 1990: Netuno ou Neptuno) é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas. O planeta é formado por um pequeno núcleo rochoso ao redor do qual encontra-se uma camada formada possivelmente por água, amônia e metano sobre a qual situa-se sua turbulenta atmosfera, constituída predominantemente de hidrogênio e hélio. De fato, notáveis eventos climáticos ocorrem em Netuno, inclusive a formação de diversas camadas de nuvens, tempestades ciclônicas visíveis, como a já extinta Grande Mancha Escura, além dos ventos mais rápidos do Sistema Solar, que atingem mais de 2 000 km/h.',
      features: {
        radius: '224.622 km',
        mass: '1,024 * 10^26 kg (17,15 M⊕)',
      },
    },
    {
      id: 9,
      name: 'Plutão',
      image: 'Pluto',
      shortText: 'Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo...',
      introduction: 'Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper, uma região de corpos além da órbita de Netuno. Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.',
      features: {
        radius: '1.188,3 km',
        mass: '1.3 * 1022 Kg',
      },
    },
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
}
