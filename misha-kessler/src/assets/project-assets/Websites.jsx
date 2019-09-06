const Websites = [
  {
    id: 12,
    featured: false,

    name: 'Misha Kessler',
    date: 'Sep 2019',
    meta: 'React',
    tagline: 'A portfolio site for Misha Kessler following his stint at General Assembly, built on React with multiple React libraries.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: 'https://imgur.com/lT6CSVq.png',
    url_to_demo: 'https://www.mishakessler.com',
    url_to_github: 'https://github.com/mishakessler/portfolio',
    url_to_casestudy: null,

    markdown: true,
    wordpress: false,
    html: true,
    css: true,
    php: false,
    javascript: true,
    jquery: false,
    nodejs: true,
    expressjs: false,
    reactjs: true,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: true,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 11,
    featured: true,

    name: 'Crisis International Enterprise',
    date: 'Aug 2019',
    meta: 'React on Rails',
    tagline: 'A full stack B2B resource directory and knowledge base for social service agencies and related fields that provides comprehensive, filterable, searchable resources and articles.',

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: 'https://imgur.com/HApw990.png',
    url_to_demo: 'https://crisis-international.surge.sh',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project4',
    url_to_casestudy: '/projects/crisis-international',

    markdown: true,
    wordpress: false,
    html: true,
    css: true,
    php: false,
    javascript: true,
    jquery: false,
    nodejs: true,
    expressjs: false,
    reactjs: true,
    mysql: false,
    postgresql: true,
    ruby: false,
    rails: true,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 10,
    featured: true,

    name: 'Crisis International',
    date: 'May 2019',
    meta: 'WordPress',
    tagline: 'A custom WordPress site for individuals in need of crisis intervention resources, featuring immersive, user-friendly design, meticulously designed data infrastructure, and a complete brand identity package.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Private Beta', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: 'https://imgur.com/ZtLFzFJ.png',
    url_to_demo: 'https://beta.crisisinternational.org',
    url_to_github: null,
    url_to_casestudy: '/projects/crisis-international',

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: false,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 9,
    featured: false,

    name: 'Cara Mia Redesign',
    date: '',
    meta: 'React',
    tagline: 'A collaborative project with UX designers to conceive and develop a redesigned web presence for a local NYC eatery.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://cara-mia-redesign.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/cara-mia-redesign',
    url_to_casestudy: null,

    markdown: false,
    wordpress: false,
    html: true,
    css: true,
    php: false,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: true,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: false,
    adobe: false,
    responsive: true,
    accessible: true,
  },
  {
    id: 8,
    featured: false,

    name: 'Barrel-Aged',
    date: 'Jul 2019',
    meta: 'React & Express',
    tagline: 'The final deliverable from a 4-person group-build, a full-stack forum and review site for whiskey lovers, utilizing React, Express, Bcrypt, JSON Web Token, and Git versioning.',

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: 'https://imgur.com/jDqHUbW.png',
    url_to_demo: 'http://www.barrel-aged.surge.sh',
    url_to_github: 'https://github.com/mishakessler/barrel-aged',
    url_to_casestudy: null,

    markdown: true,
    wordpress: false,
    html: true,
    css: true,
    php: false,
    javascript: true,
    jquery: false,
    nodejs: true,
    expressjs: true,
    reactjs: true,
    mysql: false,
    postgresql: true,
    ruby: false,
    rails: true,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 7,
    featured: false,

    name: 'Seven Summits for Suicide Prevention',
    date: 'Jul 2019',
    meta: "React, The DarkSky API, & The Fundraise.com API",
    tagline: '',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://7ssp.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project2/tree/master/seven-summits-for-suicide-prevention',
    url_to_casestudy: '',

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: false,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: false,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 6,
    featured: false,

    name: 'Mental Healthable',
    date: 'Jun 2019',
    meta: 'HTML, CSS, JS & The News API',
    tagline: '',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://mentalhealthable.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project1',
    url_to_casestudy: '',

    markdown: true,
    wordpress: false,
    html: true,
    css: true,
    php: false,
    javascript: true,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: false,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 5,
    featured: false,

    name: "Life's New Normal",
    date: 'Mar 2019',
    meta: 'WordPress',
    tagline: 'A client portfolio and blogging website featuring a complete redesign and rebrand of a long-running project.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Beta', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://lifesnewnormal.remedient.com/',
    url_to_github: null,
    url_to_casestudy: null,

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 4,
    featured: false,

    name: 'Remedient',
    date: 'Feb 2019',
    meta: 'WordPress',
    tagline: 'A marketing website for my design firm, Remedient LLC, utilizing best practices in tech marketing, branding, and user funneling.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://www.remedient.com/',
    url_to_github: null,
    url_to_casestudy: null,

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 3,
    featured: false,

    name: 'Live Through This',
    date: 'Sep 2018',
    meta: 'WordPress',
    tagline: 'A client project featuring suicide prevention portraiture with immersive design, consistent branding, and user engagement tactics.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://www.livethroughthis.org/',
    url_to_github: null,
    url_to_casestudy: null,

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 2,
    featured: false,

    name: 'Six Feet Over',
    date: 'May 2017',
    meta: 'WordPress',
    tagline: 'A comprehensive pro bono website and brand package developed for a Detroit-based suicide postvention charity, Six Feet Over.',

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://www.sixftover.org/',
    url_to_github: null,
    url_to_casestudy: null,

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 1,
    featured: false,

    name: 'Rmdy.io',
    date: 'Nov 2015',
    meta: 'WordPress',
    tagline: 'A full stack app concept using a recommender engine to match individuals seeking counseling to the best available counselor, lowering treatment dropout, increasing treatment success rates.',

    category: 'Concept', // Concept, Front End, Full Stack
    progress: 'R&D', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: '',
    url_to_demo: 'https://www.rmdy.io/',
    url_to_github: null,
    url_to_casestudy: null,

    markdown: false,
    wordpress: true,
    html: true,
    css: true,
    php: true,
    javascript: false,
    jquery: false,
    nodejs: false,
    expressjs: false,
    reactjs: false,
    mysql: false,
    postgresql: false,
    ruby: false,
    rails: false,
    auth: true,
    adobe: true,
    responsive: true,
    accessible: true,
  },
]

export default Websites