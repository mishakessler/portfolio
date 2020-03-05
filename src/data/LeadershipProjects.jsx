// Assets
import Advisor from '../assets/graphics/advocacy-advisor.png'
// import Founder from '../assets/graphics/leadership-founder.png'

const Committees = [
  {
    id: 8,
    featured: false,
    date: 'Jan 2020',
    name: 'Chair of the Community Workgroup',
    meta: 'NYS Suicide Prevention Council',
    tagline: '',
    category: 'Committee Chair', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.omh.ny.gov/omhweb/suicide_prevention/',
  },
  {
    id: 7,
    featured: false,
    date: 'Sept 2019',
    name: 'Member of the Advisory Steering Committee',
    meta: 'The CDC-NYS Nonfatal Suicide-Related Outcomes Surveillance Grant',
    tagline: '',
    category: 'Committee Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://suicidepreventionlifeline.org/about/',
  },
  {
    id: 6,
    featured: false,
    date: 'Nov 2018',
    name: 'Member of the Consumer & Family Survivor Committee',
    meta: 'The National Suicide Prevention Lifeline',
    tagline: '',
    category: 'Committee Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://suicidepreventionlifeline.org/about/',
  },
  {
    id: 5,
    featured: false,
    date: 'Jun 2018',
    name: 'Member of the NYS Suicide Prevention Council',
    meta: 'NYS Office of Mental Health',
    tagline: '',
    category: 'Committee Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.omh.ny.gov/omhweb/suicide_prevention/',
  },
  {
    id: 4,
    featured: false,
    date: 'Nov 2017',
    name: 'Member of the NYS Suicide Prevention Task Force',
    meta: 'Commissioned by Governor Cuomo',
    tagline: '',
    category: 'Task Force Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.governor.ny.gov/news/governor-cuomo-announces-release-first-suicide-prevention-task-force-report',
  },
  {
    id: 3,
    featured: false,
    date: 'Jun 2017',
    name: 'Member of the Executive Board',
    meta: 'Six Feet Over',
    tagline: '',
    category: 'Board Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.sixftover.org',
  },
  {
    id: 2,
    featured: false,
    date: 'Jun 2013',
    name: 'Member of Clinical Practice Guideline Development Panel for Depressive Disorders',
    meta: 'The American Psychological Association',
    tagline: '',
    category: 'Committee Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.apa.org/depression-guideline/guideline.pdf',
  },
  {
    id: 1,
    featured: false,
    date: 'May 2012',
    name: 'Member of the Executive Board',
    meta: 'The Mental Health Association of Maryland',
    tagline: '',
    category: 'Board Member', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Advisor}`,
    url_to_demo: 'https://www.mhamd.org/',
  },
]

const Projects = [
  {
    id: 3,
    featured: true,
    // date: 'May 2012',
    name: 'MentalHealthable',
    meta: 'Mental Health Assistant',
    tagline: '',
    category: 'Founder, Designer, & Developer', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.facebook.com/mhainternational',
  },
  {
    id: 3,
    featured: true,
    // date: 'May 2012',
    name: 'Mental Health Advocates International',
    meta: 'Membership Group',
    tagline: '',
    category: 'Cofounder & Brand Designer', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.facebook.com/mhainternational',
  },
  {
    id: 2,
    featured: true,
    // date: 'May 2012',
    name: 'Seven Summits for Suicide Prevention',
    meta: 'Charity',
    tagline: '',
    category: 'Founder, Designer, & Developer', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.mhamd.org/',
  },
  {
    id: 1,
    featured: false,
    // date: 'May 2012',
    name: 'Rmdy.io',
    meta: 'Startup Concept',
    tagline: '',
    category: 'Founder, Designer, & Developer', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.rmdy.io',
  }
]

const Companies = [
  {
    id: 2,
    featured: false,
    // date: 'May 2012',
    name: 'Remedient LLC',
    meta: 'WordPress Development Firm',
    tagline: '',
    category: 'Sole Proprietor', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.remedient.com',
  },
  {
    id: 1,
    featured: false,
    // date: 'May 2012',
    name: 'Rmdy.io',
    meta: 'Benefit Corporation',
    tagline: '',
    category: 'President', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Founder}`,
    url_to_demo: 'https://www.rmdy.io',
  }
]

export {
  Committees,
  Projects,
  Companies
}