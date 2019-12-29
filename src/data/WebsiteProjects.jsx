// Assets
import BarrelAgedLanding from '../assets/projects/barrel-aged/landing.png'
import CaraMiaLanding from '../assets/projects/cara-mia/landing.png'
import CrisisInternationalLanding from '../assets/projects/crisis-international/landing.png'
import CIEnterpriseLanding from '../assets/projects/crisis-international-enterprise/landing.png'
import LiveThroughThisLanding from '../assets/projects/live-through-this/landing.png'
import MentalHealthableLanding from '../assets/projects/mental-healthable/landing.png'
import MishaKesslerLanding from '../assets/projects/misha-kessler/landing.png'
import RemedientLanding from '../assets/projects/remedient/landing.png'
import RmdyioLanding from '../assets/projects/rmdyio/landing.png'
import SevenSummitsLanding from '../assets/projects/seven-summits/landing.png'
import SixFeetOverLanding from '../assets/projects/six-feet-over/landing.png'


const Websites = [
  {
    id: 12,
    featured: false,
    case_study: true,

    name: 'Misha Kessler',
    date: 'Sep 2019',
    meta: 'React',
    tagline: 'A portfolio site for Misha Kessler following his stint at General Assembly, built on React with multiple React libraries.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_caption_1: null,
    cs_img_2: null,
    cs_caption_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${MishaKesslerLanding}`,
    url_to_demo: '/woah',
    url_to_github: 'https://github.com/mishakessler/portfolio',

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
    auth: false,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 11,
    featured: true,
    case_study: true,

    name: 'Crisis International Enterprise',
    date: 'Aug 2019',
    meta: 'React on Rails',
    tagline: 'A full stack directory and knowledge base for social service agencies that provides comprehensive, filterable, searchable resources and articles.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${CIEnterpriseLanding}`,
    url_to_demo: 'https://crisis-international.surge.sh',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project4',

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
    auth: false,
    adobe: true,
    responsive: true,
    accessible: true,
  },
  {
    id: 10,
    featured: true,
    case_study: true,

    name: 'Crisis International',
    date: 'May 2019',
    meta: 'WordPress',
    tagline: 'A proof of concept for individuals in crisis, featuring user-driven design, meticulously designed data infrastructure, and a brand identity package.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Private Beta', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${CrisisInternationalLanding}`,
    url_to_demo: 'https://beta.crisisinternational.org',
    url_to_github: null,

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
    case_study: true,

    name: 'Cara Mia Redesign',
    date: 'Aug 2019',
    meta: 'React',
    tagline: 'A collaborative project with UX designers to conceive and develop a redesigned web presence for a local NYC eatery.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${CaraMiaLanding}`,
    url_to_demo: 'https://cara-mia-redesign.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/cara-mia-redesign',

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
    case_study: true,

    name: 'Barrel-Aged',
    date: 'Jul 2019',
    meta: 'React & Express',
    tagline: 'A collaborative full-stack forum and review site for whiskey lovers, utilizing React, Express, Bcrypt, JSON Web Token, and Git versioning.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Full Stack', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${BarrelAgedLanding}`,
    url_to_demo: 'http://www.barrel-aged.surge.sh',
    url_to_github: 'https://github.com/mishakessler/barrel-aged',

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
    accessible: false,
  },
  {
    id: 7,
    featured: false,
    case_study: true,

    name: '7 Summits Suicide Prevention',
    date: 'Jul 2019',
    meta: 'React',
    tagline: 'Used DarkSkyAPI & Fundraise.com API on React to develop an interactive and educational dashboard for charity donors.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${SevenSummitsLanding}`,
    url_to_demo: 'https://7ssp.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project2/tree/master/seven-summits-for-suicide-prevention',

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
    case_study: true,

    name: 'Mental Healthable',
    date: 'Jun 2019',
    meta: 'HTML, CSS, & JS',
    tagline: 'Used NewsAPI on a vanilla HTML, CSS, and JS application to create a curated mental health news feed.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'MVP', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${MentalHealthableLanding}`,
    url_to_demo: 'https://mentalhealthable.surge.sh/',
    url_to_github: 'https://github.com/mishakessler/ga-sei-project1',

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
    case_study: true,

    name: "Life's New Normal",
    date: 'Mar 2019',
    meta: 'WordPress',
    tagline: 'A client portfolio and blogging website featuring a complete redesign and rebrand of a long-running project.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Beta', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${MishaKesslerLanding}`,
    url_to_demo: 'https://lifesnewnormal.remedient.com/',
    url_to_github: null,

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
    id: 4,
    featured: false,
    case_study: true,

    name: 'Remedient',
    date: 'Feb 2019',
    meta: 'WordPress',
    tagline: 'A marketing website for my design firm, Remedient LLC, utilizing best practices in tech marketing, branding, and user funneling.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${RemedientLanding}`,
    url_to_demo: 'https://www.remedient.com/',
    url_to_github: null,

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
    id: 3,
    featured: false,
    case_study: true,

    name: 'Live Through This',
    date: 'Sep 2018',
    meta: 'WordPress',
    tagline: 'A client project featuring suicide prevention portraiture with immersive design, consistent branding, and user engagement tactics.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${LiveThroughThisLanding}`,
    url_to_demo: 'https://www.livethroughthis.org/',
    url_to_github: null,

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
    id: 2,
    featured: false,
    case_study: true,

    name: 'Six Feet Over',
    date: 'May 2017',
    meta: 'WordPress',
    tagline: 'A comprehensive pro bono website and brand package developed for a Detroit-based suicide postvention charity, Six Feet Over.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Front End', // Concept, Front End, Full Stack
    progress: 'Live', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${SixFeetOverLanding}`,
    url_to_demo: 'https://www.sixftover.org/',
    url_to_github: null,

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
    id: 1,
    featured: false,
    case_study: true,

    name: 'Rmdy.io',
    date: 'Nov 2015',
    meta: 'WordPress',
    tagline: 'A full stack app concept for a recommender engine improving therapeutic alliances, lowering treatment dropout and increasing treatment success.',

    cs_intro: null,
    cs_description: null,
    cs_conclusion: null,
    cs_img_1: null,
    cs_img_2: null,

    category: 'Concept', // Concept, Front End, Full Stack
    progress: 'R&D', // R&D, MVP, Post-MVP, Private Beta, Live

    url_to_img: `${RmdyioLanding}`,
    url_to_demo: 'https://www.rmdy.io/',
    url_to_github: null,

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
]

export {
  Websites
}