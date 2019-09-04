import Default from '../graphics/featured-logo.png'
import Advisor from '../graphics/advocacy-advisor.png'
import Awardee from '../graphics/advocacy-award.png'
import Documentary from '../graphics/advocacy-documentary.png'
import Interviewee from '../graphics/advocacy-interview.png'
import Member from '../graphics/advocacy-member.png'
import News from '../graphics/advocacy-news.png'
import Author from '../graphics/advocacy-publication.png'
import Speaker from '../graphics/advocacy-speech.png'


// {
//   id: ,
//   featured: ,
//   date: '',
//   name: '',
//   meta: '',
//   tagline: '',
//   category: '', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
//   url_to_img: `${}`,
//   url_to_demo: '',
// },


const Advocacies = [
  {
    id: ,
    featured: false,
    date: 'May 2019',
    name: 'Why Behavioral Healthcare Must Be Accessible To Students In A Crisis',
    meta: 'CrisisNow',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://talk.crisisnow.com/2019/05/28/behavioral-healthcare-must-be-accessible-to-students/',
  },
  {
    id: ,
    featured: true,
    date: 'Apr 2019',
    name: 'Communities United For A Suicide Free New York: A Task Force Report',
    meta: "Governor Cuomo's NYS Suicide Prevention Task Force",
    tagline: '',
    category: 'Coauthor', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Author}`,
    url_to_demo: '',
  },
  {
    id: ,
    featured: false,
    date: 'Feb 2019',
    name: 'Suicide Prevention: Self-Care Tips, True Stories On How Survivors Cope',
    meta: 'USA Today',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://www.usatoday.com/in-depth/news/investigations/surviving-suicide/2018/11/28/suicide-prevention-tips-true-stories-how-survivors-cope/1112169002/',
  },
  {
    id: ,
    featured: true,
    date: 'Feb 2019',
    name: 'Clinical Practice Guidelines for the Treatment of Depressive Disorders',
    meta: 'The American Psychological Association',
    tagline: '',
    category: 'Coauthor', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Author}`,
    url_to_demo: '',
  },
  {
    id: ,
    featured: false,
    date: 'Apr 2019',
    name: 'Ambitious Goals, Meaningful Change: Legislative Advocacy in Suicide Prevention',
    meta: 'The American Association of Suicidology 52nd Annual Conference',
    tagline: '',
    category: 'Moderator', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://suicidology.org/conference',
  },
  {
    id: ,
    featured: false,
    date: 'Apr 2019',
    name: 'Beyond Crisis: An Exploration Into Post-Care & Postvention',
    meta: 'The American Association of Suicidology 52nd Annual Conference',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://suicidology.org/conference',
  },
  {
    id: ,
    featured: false,
    date: 'Nov 2018',
    name: 'Digging Deeper Into Stigma',
    meta: "Facebook's Inaugural #OpenUp Community Meeting",
    tagline: '',
    category: 'Panelist & Lead', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://newsroom.fb.com/',
  },
  {
    id: ,
    featured: ,
    date: '',
    name: '',
    meta: '',
    tagline: '',
    category: '', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${}`,
    url_to_demo: '',
  },
  {
    id: ,
    featured: ,
    date: '',
    name: '',
    meta: '',
    tagline: '',
    category: '', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${}`,
    url_to_demo: '',
  },
  {
    id: ,
    featured: false,
    date: 'Sep 2018',
    name: '"The S Word" Documentary Film Screening & Panel',
    meta: 'The New York State Suicide Prevention Conference',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://nyssuicidepreventionconference.org/program/',
  },
  {
    id: ,
    featured: false,
    date: 'May 2018',
    name: 'Embedding Peers in Crisis Intervention Services',
    meta: 'The 1st Annual International Urgent & Emergency Mental Healthcare Services Summit',
    tagline: '',
    category: 'Speaker', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://www.slideshare.net/davidwcovington/urgent-and-emergency-care-summit-2018-london-iimhl',
  },
  {
    id: ,
    featured: false,
    date: 'Apr 2018',
    name: 'Students, Suicide & Social Media',
    meta: 'The American Association of Suicidology 51st Annual Conference',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://suicidology.org/conference',
  },
  {
    id: ,
    featured: true,
    date: 'Jan 2018',
    name: 'Live On Stage with Logic, Khalid, and Alessia Cara',
    meta: 'The 60th Annual Grammy Awards',
    tagline: '',
    category: 'Subject', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Documentary}`,
    url_to_demo: 'https://www.youtube.com/watch?v=rNYduKIyEvA',
  },
  {
    id: ,
    featured: false,
    date: 'Dec 2017',
    name: 'The S Word Documentary',
    meta: 'Director Lisa Klein & Producer Doug Blush',
    tagline: '',
    category: 'Subject', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Documentary}`,
    url_to_demo: 'https://theswordmovie.com/',
  },
  {
    id: ,
    featured: false,
    date: 'May 2017',
    name: 'Transforming Behavioral Health Crisis Care Services with Legislative Action',
    meta: 'The 115th United States Congress',
    tagline: '',
    category: 'Congressional Witness', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://napolitano.house.gov/media/press-releases/napolitano-katko-hold-transforming-crisis-mental-health-care-briefing',
  },
  {
    id: ,
    featured: false,
    date: 'Apr 2016',
    name: 'Storytelling As A Tool For Suicide Prevention',
    meta: 'The American Association of Suicidology 49th Annual Conference',
    tagline: '',
    category: 'Moderator', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://suicidology.org/conference',
  },
  {
    id: ,
    featured: false,
    date: 'Sep 2015',
    name: 'Part 2: Suicide & Stigma: Moving Past Silence & Shame',
    meta: 'US News & World Report',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://health.usnews.com/health-news/patient-advice/articles/2015/09/09/suicide-and-stigma-moving-past-silence-and-shame',
  },
  {
    id: ,
    featured: false,
    date: 'Sep 2015',
    name: 'Part 1: Coming Out As A Suicide Survivor',
    meta: 'US News & World Report',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://health.usnews.com/health-news/patient-advice/articles/2015/09/10/coming-out-as-a-suicide-survivor',
  },
  {
    id: ,
    featured: false,
    date: 'Jul 2015',
    name: 'Why More White-Collar Workers Are At Risk For Suicide',
    meta: 'MarketWatch',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://www.marketwatch.com/story/why-more-white-collar-workers-are-at-risk-for-suicide-2015-07-01',
  },
  {
    id: ,
    featured: false,
    date: 'Jul 2015',
    name: 'The Common Good: Stonewall Kickball',
    meta: 'The Mental Health Channel',
    tagline: '',
    category: 'Subject', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Documentary}`,
    url_to_demo: 'http://mentalhealthchannel.tv/episode/stonewall-kickball',
  },
  {
    id: ,
    featured: false,
    date: 'Apr 2015',
    name: 'One Year Later: Suicide Attempt Survivors After Speaking Up',
    meta: 'The American Association of Suicidology 48th Annual Conference',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://suicidology.org/conference',
  },
  {
    id: ,
    featured: false,
    date: 'Mar 2015',
    name: 'Suicide Safe Smartphone App Launch',
    meta: 'The Substance Abuse and Mental Health Services Administration',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://www.youtube.com/watch?v=FLNbgOqVB70',
  },
  {
    id: ,
    featured: false,
    date: 'Feb 2015',
    name: 'Why the US Mental Healthcare System Needs More Places For People to Just Chill Out',
    meta: 'Mic.com',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://www.mic.com/articles/109946/our-mental-health-care-system-needs-more-places-for-people-to-chill-out',
  },
  {
    id: ,
    featured: false,
    date: 'Sep 2014',
    name: 'Everything We Knew About Suicide Is Wrong',
    meta: 'RI International',
    tagline: '',
    category: 'Subject', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://riinternational.com/blog/everything-we-knew-about-suicide-is-wrong/',
  },
  {
    id: ,
    featured: true,
    date: 'Apr 2014',
    name: 'New Voices of Suicide Attempt Survivors',
    meta: 'The American Association of Suicidology 47th Annual Conference',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://www.youtube.com/watch?v=oYMlJlkH2S0',
  },
  {
    id: 7,
    featured: false,
    date: 'Apr 2014',
    name: 'Misha Kessler',
    meta: 'Live Through This',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Interviewee}`,
    url_to_demo: 'https://www.livethroughthis.org/misha-kessler',
  },
  {
    id: 6,
    featured: true,
    date: 'Apr 2014',
    name: 'Mental Health on Campus: A Live-Streamed Town Hall Event',
    meta: 'The Clinton Foundation & Facebook',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://www.clintonfoundation.org/livestream-mental-health-and-wellness-campus-town-hall-without-walls',
  },
  {
    id: 6,
    featured: false,
    date: 'Apr 2014',
    name: 'Suicide attempt survivors go public in hopes of aiding those at risk.',
    meta: 'The Boston Globe',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${News}`,
    url_to_demo: 'https://www.bostonglobe.com/lifestyle/style/2014/04/28/suicide-attempt-survivors-speak-about-their-experiences-hoping-reach-those-risk/ffrjBg4qQPLHlvi9srqKBP/story.html',
  },
  {
    id: 5,
    featured: false,
    date: 'Dec 2013',
    name: 'Suffering In Silence: College Students & Suicide',
    meta: 'NPR WNYC Radio',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Interviewee}`,
    url_to_demo: 'https://www.wnyc.org/story/suffering-silence-college-kids-and-suicide/',
  },
  {
    id: ,
    featured: ,
    date: '',
    name: '',
    meta: '',
    tagline: '',
    category: '', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${}`,
    url_to_demo: '',
  },
  {
    id: 4,
    featured: false,
    date: 'Apr 2013',
    name: 'The Service Learning Research Excellence Award',
    meta: 'The GW Center for Civic Engagement and Public Service',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Awardee}`,
    url_to_demo: 'https://serve.gwu.edu/awards-and-recognition',
  },
  {
    id: 3,
    featured: false,
    date: 'Apr 2013',
    name: 'Service Gaps in Youth Suicide Prevention Programming',
    meta: 'The GW Service Learning Symposium',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://www.gwnashmancenter.org/symposium',
  },
  {
    id: 2,
    featured: false,
    date: 'Nov 2011',
    name: 'Metaphors in Pedagogical Theory & Practice',
    meta: 'The GW Disability Support Services Symposium',
    tagline: '',
    category: 'Panelist', // Author, Speaker, Panelist, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Speaker}`,
    url_to_demo: 'https://disabilitysupport.gwu.edu/',
  },
  {
    id: 1,
    featured: false,
    date: 'Sep 2010',
    name: 'Short Films on Mental Health: 1st Place Award',
    meta: 'Art With Impact',
    tagline: '',
    category: 'Awardee', // Author, Speaker, Panelist, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Awardee}`,
    url_to_demo: 'https://www.artwithimpact.org/films/',
  }
]

export default Advocacies