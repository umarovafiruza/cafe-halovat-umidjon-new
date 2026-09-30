import { Category, MenuItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: { uz: 'Barchasi', ru: 'Все' },
    icon: 'LayoutGrid'
  },
  {
    id: 'main',
    name: { uz: 'Asosiy Taomlar & Setlar', ru: 'Главные Блюда и Сеты' },
    icon: 'Utensils'
  },
  {
    id: 'fastfood',
    name: { uz: 'Somsalar & Yeguliklar', ru: 'Самса и Закуски' },
    icon: 'Sandwich'
  },
  {
    id: 'desserts',
    name: { uz: 'Shirinliklar & Desertlar', ru: 'Десерты и Сладости' },
    icon: 'Cake'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'halovat-shohona-lagan-6',
    categoryId: 'main',
    name: {
      uz: 'Shohona "Halovat" Assorti Lagan',
      ru: 'Царский Сет-Ассорти "Халоват"'
    },
    description: {
      uz: 'Katta davralar uchun shohona to\'plam: qovurilgan qovurg\'alar, suvli lyulya kaboblar, do\'lma, qiyma bilan to\'ldirilgan shirin qalampir, teftellar va bedana tuxumlari.',
      ru: 'Праздничный царский сет для большой компании: сочные ребрышки, люля-кебабы, долма, фаршированный перец, тефтели с рисом и перепелиные яйца.'
    },
    price: 750000,
    oldPrice: 820000,
    image: '/images/dishes/shohona-assorti-lagan.jpg',
    weightOrVolume: '1400g (3-4 kishilik)',
    prepTimeMinutes: 30,
    calories: 1850,
    tags: ['hit', 'recommended', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Qo\'y qovurg\'alari, mol go\'shtidan lyulya, tok bargli do\'lma, do\'lma qalampir, teftel, bedana tuxumi, pomidor',
      ru: 'Бараньи ребрышки, говяжий люля-кебаб, долма, фаршированный перец, тефтели, перепелиные яйца'
    }
  },
  {
    id: 'halovat-qozon-kabob-5',
    categoryId: 'main',
    name: {
      uz: 'Halovat Maxsus Qozon Kabob',
      ru: 'Фирменный Казан-Кабоб "Халоват"'
    },
    description: {
      uz: 'Qozonda erib pishgan mayin go\'sht, qovurilgan butun oltin kartoshkalar, shirin bulg\'or qalampiri, pomidor va maxsus bezatilgan binafsha piyoz bilan.',
      ru: 'Нежнейшее томленое мясо, обжаренный золотистый картофель, сочный болгарский перец, томаты и маринованный ялтинский лучок.'
    },
    price: 68000,
    oldPrice: 75000,
    image: '/images/dishes/qozon-kabob.jpg',
    weightOrVolume: '480g',
    prepTimeMinutes: 20,
    calories: 840,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Saralangan mol go\'shti, kartoshka, bulg\'or qalampiri, pomidor, zira, kashnich, qizil piyoz',
      ru: 'Отборная говядина, картофель, сладкий перец, томаты, зира, кориандр, красный лук'
    }
  },
  {
    id: 'halovat-bento-1',
    categoryId: 'main',
    name: {
      uz: 'Halovat Kompleks Tushlik Boksi',
      ru: 'Комплексный Обед Halovat Bento'
    },
    description: {
      uz: 'To\'yimli maxsus tushlik: mayin tok bargli do\'lma, qovurilgan tovuq soni, go\'shtli teftel, qovurilgan kartoshka, tuxum, yangi bodring, sous va issiq non.',
      ru: 'Фирменный сытный ланч-бокс: нежная долма в виноградных листьях, куриная ножка, мясная тефтелька, картофель, глазунья, свежие огурцы, соус и горячая лепёшка.'
    },
    price: 48000,
    oldPrice: 55000,
    image: '/images/dishes/halovat-bento-lunch.jpg',
    weightOrVolume: '450g',
    prepTimeMinutes: 15,
    calories: 680,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Tok bargli do\'lma, tovuq go\'shti, go\'shtli teftel, qovurilgan kartoshka, tuxum, bodring, maxsus qaymoqli sous, tandir non',
      ru: 'Долма, куриное филе/ножка, мясная тефтель, картофель, яйцо, огурцы, соус, тандырный хлеб'
    }
  },
  {
    id: 'halovat-set-2',
    categoryId: 'main',
    name: {
      uz: 'Halovat Lyulya Kebab & Manti Seti',
      ru: 'Сет Люля-Кебаб & Домашние Манты'
    },
    description: {
      uz: 'Ikkita to\'yimli boks: suvli lyulya kebab, kartoshka fri, marinadlangan piyoz, yangi sabzavotli salat hamda bug\'da pishgan mazali manti va qaymoqli sous.',
      ru: 'Двойной сытный набор: сочный люля-кебаб с картофелем фри, маринованным луком и салатом, а также нежные домашние манты на пару со сметанным соусом.'
    },
    price: 54000,
    oldPrice: 60000,
    image: '/images/dishes/manti-kebab-set.jpg',
    weightOrVolume: '500g',
    prepTimeMinutes: 15,
    calories: 790,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Mol go\'shtidan lyulya kebab, kartoshka fri, bug\'da pishgan manti (4 dona), yangi karam-pomidor-bodring salati, piyoz, suzma sousi',
      ru: 'Люля-кебаб из говядины, картофель фри, манты на пару (4 шт), свежий салат, лучок, сметанный соус'
    }
  },
  {
    id: 'halovat-limonli-dolma-7',
    categoryId: 'main',
    name: {
      uz: 'Nafis Tok Bargli Do\'lma (Limonli)',
      ru: 'Нежная Долма в Виноградных Листьях с Лимоном'
    },
    description: {
      uz: 'Mayin yangi uzum bargiga o\'ralgan saralangan go\'sht va guruchli qiyma, yangi limon bo\'laklari va xushbo\'y ziravorlar bilan dimlangan.',
      ru: 'Традиционная восточная долма из нежных виноградных листьев с сочной мясной начинкой и рисом. Подается со свежим лимоном.'
    },
    price: 45000,
    image: '/images/dishes/limonli-dolma.jpg',
    weightOrVolume: '320g',
    prepTimeMinutes: 15,
    calories: 460,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Uzum barglari, saralangan go\'sht qiymasi, maxsus guruch, limon, zaytun moyi, yangi ko\'katlar',
      ru: 'Виноградные листья, говяжий фарш, рис, лимон, оливковое масло, зелень'
    }
  },
  {
    id: 'halovat-suharikli-kotlet-8',
    categoryId: 'main',
    name: {
      uz: 'Qarsildoq Kiyevcha Suharikli Kotletlar',
      ru: 'Котлеты по-киевски в хрустящих сухариках'
    },
    description: {
      uz: 'Oltinrang qarsildoq non bo\'lakchalari bilan qoplangan, ichi sariyog\' va xushbo\'y ko\'katlar bilan to\'ldirilgan suvli tovuq kotletlari.',
      ru: 'Нежнейшие куриные котлеты в хрустящей панировке из золотистых сухариков с начинкой из сливочного масла и зелени.'
    },
    price: 42000,
    image: '/images/dishes/suharikli-kotlet.jpg',
    weightOrVolume: '340g',
    prepTimeMinutes: 15,
    calories: 590,
    tags: ['hit', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Tovuq filesi, sariyog\', xonaki suxari, cherry pomidor, yangi ko\'katlar',
      ru: 'Куриное филе, сливочное масло, домашние сухарики, черри, зелень'
    }
  },
  {
    id: 'halovat-somsa-3',
    categoryId: 'fastfood',
    name: {
      uz: 'Halovat Shoxli Qarsildoq Somsa (Kruassan Somsa)',
      ru: 'Фирменная Слоёная Самса-Круассан'
    },
    description: {
      uz: 'Ko\'p qavatli mayin va qarsildoq qatlama xamir, suvli mol go\'shti va piyoz qiyma, xushbo\'y ziravorlar hamda kunjut bilan tandirda pishirilgan.',
      ru: 'Воздушное хрустящее слоёное тесто в форме рогалика, сочная начинка из отборной говядины с луком и ароматными специями, посыпанная кунжутом.'
    },
    price: 14000,
    image: '/images/dishes/shoxli-somsa.jpg',
    weightOrVolume: '130g',
    prepTimeMinutes: 5,
    calories: 310,
    tags: ['hit', 'recommended', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Qatlama xamir, mayin mol go\'shti, piyoz, zira, murch, oq kunjut',
      ru: 'Слоёное тесто, говядина, лук, зира, черный перец, белый кунжут'
    }
  },
  {
    id: 'halovat-tandir-somsa-9',
    categoryId: 'fastfood',
    name: {
      uz: 'Halovat Tandir Qatlama Somsa (Sedana bilan)',
      ru: 'Слоёная Тандырная Самса с Седаной'
    },
    description: {
      uz: 'Qatlam-qatlam qarsildoq xamir, mayin mol go\'shti va piyoz, ustiga shifobaxsh sedana (qora sedana) sepilgan issiq tandir somsasi.',
      ru: 'Хрустящая многослойная самса из тандыра с сочной говядиной и луком, посыпанная ароматной седаной (черным тмином).'
    },
    price: 12000,
    image: '/images/dishes/tandir-somsa-sedana.jpg',
    weightOrVolume: '120g',
    prepTimeMinutes: 5,
    calories: 290,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Qatlama xamir, mayin mol go\'shti, piyoz, zira, sedana (qora sedana)',
      ru: 'Слоёное тесто, говядина, лук, зира, черный тмин (седана)'
    }
  },
  {
    id: 'halovat-chuchvara-4',
    categoryId: 'fastfood',
    name: {
      uz: 'Oltin Qarsildoq Qovurma Chuchvara',
      ru: 'Золотистая Хрустящая Жареная Чучвара'
    },
    description: {
      uz: 'Mayin xamir ichida xushbo\'y go\'shtli qiyma, tillarang qilib qovurilgan, qarsildoq va to\'yimli taom. Maxsus sarimsoqli sous bilan tortiladi.',
      ru: 'Традиционные мини-пельмешки с сочной мясной начинкой, обжаренные до золотистой хрустящей корочки. Подаются с фирменным соусом.'
    },
    price: 32000,
    image: '/images/dishes/qovurma-chuchvara.jpg',
    weightOrVolume: '280g',
    prepTimeMinutes: 10,
    calories: 520,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Uy xamiri, saralangan go\'sht qiymasi, piyoz, maxsus ziravorlar, qaymoqli suzma sousi',
      ru: 'Домашнее тесто, фарш из говядины, лук, специи, чесночно-сметанный соус'
    }
  },
  {
    id: 'halovat-shokoladli-trufel-10',
    categoryId: 'desserts',
    name: {
      uz: 'Halovat "Ejik" Shokoladli Deserti',
      ru: 'Шоколадный Десерт "Ёжик" Халоват'
    },
    description: {
      uz: 'Mayin shokoladli xamir, xushbo\'y krem va mayin shokoladli uvoqlar bilan qoplangan mazali Ejik deserti.',
      ru: 'Нежный шоколадный десерт в хрустящей шоколадной крошке с тающей начинкой.'
    },
    price: 8000,
    oldPrice: 10000,
    image: '/images/dishes/shokoladli-trufel.jpg',
    weightOrVolume: '1 dona (70g)',
    prepTimeMinutes: 5,
    calories: 160,
    tags: ['hit', 'recommended', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Belgiya shokoladi, qaymoq, kakao, biskvit uvoqlari, vanil',
      ru: 'Бельгийский шоколад, натуральные сливки, какао, бисквитная крошка, ваниль'
    }
  },
  {
    id: 'halovat-shokoladli-pechenye-11',
    categoryId: 'desserts',
    name: {
      uz: 'Halovat Shokoladli "Vulqon" Pechenyesi',
      ru: 'Шоколадное Печенье "Вулкан"'
    },
    description: {
      uz: 'Qarsildoq va mayin shokoladli xamir, ustida erib turgan quyuq shokoladli silliq krem.',
      ru: 'Хрустящее и нежное шоколадное печенье с начинкой из теплого тающего шоколадного крема.'
    },
    price: 5000,
    oldPrice: 7000,
    image: '/images/dishes/shokoladli-pechenye.jpg',
    weightOrVolume: '1 dona (50g)',
    prepTimeMinutes: 5,
    calories: 110,
    tags: ['hit', 'new', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Shokolad, sariyog\', un, shakar, kakao, vanilin',
      ru: 'Шоколад, сливочное масло, мука, сахар, какао, ваниль'
    }
  },
  {
    id: 'halovat-qulupnayli-shokoladli-keks-12',
    categoryId: 'desserts',
    name: {
      uz: 'Shokolad & Qulupnayli Shohona Keks',
      ru: 'Шоколадно-Клубничный Праздничный Кекс'
    },
    description: {
      uz: 'Yumshoq biskvitli keks, yong\'oqli shokolad siri hamda yangi shirin qulupnay mevalari bilan bezatilgan bayramona desert.',
      ru: 'Нежнейший пышный кекс в шоколадной глазури с дроблеными орешками и свежей спелой клубникой.'
    },
    price: 80000,
    oldPrice: 90000,
    image: '/images/dishes/qulupnayli-shokoladli-keks.jpg',
    weightOrVolume: '650g (Butun keks)',
    prepTimeMinutes: 10,
    calories: 1150,
    tags: ['hit', 'recommended', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Mayin biskvit xamiri, toza qulupnay mevalari, shokoladli glazur, maydalangan yong\'oq',
      ru: 'Бисквитное тесто, свежая клубника, шоколадная глазурь, орехи'
    }
  },
  {
    id: 'halovat-karamelli-beze-tort-13',
    categoryId: 'desserts',
    name: {
      uz: 'Karamelli Qatlama Beze Torti',
      ru: 'Слоёный Безе-Торт с Карамелью и Орехами'
    },
    description: {
      uz: 'Qarsildoq qatlama xamir, mayin beze sharchalari, quyuq qaymoqli karamel sousi, yong\'oq va pista qirindisi bilan bezatilgan shohona tort.',
      ru: 'Хрустящие слои, воздушное безе, нежнейший карамельный крем, посыпанный кокосовой стружкой, грецким орехом и фисташками.'
    },
    price: 300000,
    oldPrice: 340000,
    image: '/images/dishes/karamelli-beze-tort.jpg',
    weightOrVolume: 'Butun tort (1.8kg)',
    prepTimeMinutes: 10,
    calories: 1320,
    tags: ['hit', 'recommended', 'new'],
    isAvailable: true,
    ingredients: {
      uz: 'Qatlama xamir, tuxum oqi bezesi, qaynatilgan quyultirilgan sut, karamel sousi, yong\'oq, maydalangan pista',
      ru: 'Слоёное тесто, нежное безе, варёная сгущенка, карамельный соус, орехи, фисташки'
    }
  },
  {
    id: 'halovat-raffaello-malinali-tort-14',
    categoryId: 'desserts',
    name: {
      uz: 'Raffaello Malinali & Kokosli Biskvit Tort',
      ru: 'Торт "Раффаэлло" с Малиновой Прослойкой'
    },
    description: {
      uz: 'Katta oilaviy bayramlar uchun shohona to\'liq tort: mayin vanil biskviti, qaymoqli krem, malina va mo\'l kokos qirindisi.',
      ru: 'Праздничный целый торт для семейных торжеств с нежным бисквитом, малиной и кокосовой стружкой.'
    },
    price: 350000,
    oldPrice: 390000,
    image: '/images/dishes/raffaello-malinali-tort.jpg',
    weightOrVolume: 'Butun tort (2.0kg)',
    prepTimeMinutes: 10,
    calories: 1400,
    tags: ['hit', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Vanil biskviti, tabiiy qaymoqli krem, yangi malina sousi, qor kabi kokos qirindisi',
      ru: 'Ванильный бисквит, сливочный крем, малиновый джем, кокосовая стружка'
    }
  },
  {
    id: 'halovat-kokosli-raffaello-pirojniy-15',
    categoryId: 'desserts',
    name: {
      uz: 'Halovat Qaymoqli & Kokosli Raffaello Deserti',
      ru: 'Нежное Пирожное "Раффаэлло" в Кокосовой Стружке'
    },
    description: {
      uz: 'Ichi eruvchan nozik qaymoqli krem bilan to\'ldirilgan, usti xushbo\'y kokos qirindisi va pista bilan bezatilgan lazzatli pirojniy.',
      ru: 'Нежнейшие профитроли с тающей сливочно-кремовой начинкой в ароматной кокосовой стружке с дроблеными фисташками.'
    },
    price: 7000,
    oldPrice: 9000,
    image: '/images/dishes/kokosli-raffaello-pirojniy.jpg',
    weightOrVolume: '1 dona (60g)',
    prepTimeMinutes: 5,
    calories: 140,
    tags: ['hit', 'new', 'recommended'],
    isAvailable: true,
    ingredients: {
      uz: 'Mayin xamir, quyuq pishirilgan qaymoqli krem, kokos qirindisi, maydalangan pista',
      ru: 'Заварное тесто, сливочный крем пломбир, кокосовая стружка, фисташки'
    }
  }
];
