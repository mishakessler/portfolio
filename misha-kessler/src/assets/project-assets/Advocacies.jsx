import Default from '../graphics/featured-logo.png'
import Advisor from '../graphics/advocacy-advisor.png'
import Awardee from '../graphics/advocacy-award.png'
import Documentary from '../graphics/advocacy-documentary.png'
import Interviewee from '../graphics/advocacy-interview.png'
import Member from '../graphics/advocacy-member.png'
import Contributor from '../graphics/advocacy-news.png'
import Author from '../graphics/advocacy-publication.png'
import Speaker from '../graphics/advocacy-speech.png'



const Advocacies = [
  {
    id: 1,
    featured: false,
    date: 'Dec 2013',
    name: 'Suffering In Silence: College Students & Suicide',
    meta: 'NPR WNYC Radio',
    tagline: '',
    category: 'Interviewee', // Author, Speaker, Interviewee, Committee Member, Associate Member, Advisor, Awardee
    url_to_img: `${Interviewee}`,
    url_to_demo: 'https://www.wnycstudios.org/story/the-takeaway-2013-12-20',
  }
]

export default Advocacies