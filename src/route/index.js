// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Vladyslav',
    lastname: 'Slavykovskyi',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ per month',
  address: 'Київ, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'vladyslav@mail.com',
      href: 'mailto:vladyslav@mail.com',
    },

    phone: {
      text: '+380732045302',
      href: 'tel:+380732045302 ',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vladyslav',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
            work on a new project I learn the domain and try to understand the idea of the project. Good team
            player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 6,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Game',
          isMain: true,
        },
        {
          name: 'Draw',
          isMain: false,
        },
        {
          name: 'Cooking',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / education',
    },

    header,

    main: {
      education: [
        {
          name: 'Mykolaiv Sea Lyceum',
          isEnd: true,
        },
        {
          name: 'KNUTD',
          isEnd: true,
        },
        {
          name: 'IT-Brains',
          isEnd: false,
        },
        {
          name: 'Full-Stack',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'FullStack',
          id: 56,
        },
        {
          name: 'Test Certifacates',
          id: 88,
        },
        {
          name: 'English Test',
          id: 9,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume / work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '03.02.2023',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'SteamApp',
              url: 'https://www.youtube.com/',
              about: `First Trustworthy Review Platform, Built With Blockchain Technology.
              Crypto World is a review platform that aims to curate and reward user
              feedback on products and services by leveraging blockchain technology.
              Crypto World encourages independent authors to write reviews and attach
              ratings to them. As posts are made, Crypto World aggregates, averages,
              and publicly displays corresponding scores and rankings to their platform`,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Oscar',
                },
                {
                  name: 'Grammy',
                },
              ],
              stackAmount: 5,
              awardAmount: 25,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
